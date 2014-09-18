(function( window, $ ) {

    var app = window.app;

    var
        action_submitComment = function( testid, comment, callback ) {
            app.utils.ajax( 'test_comments_new', { id: testid }, {
                data: {
                    comment: comment
                },
                success: callback
            });
        };

    $(function(){
        // app.utils.masonry( '.tests-finalcard', '.test', '.bg-test > img', {
        //     isFitWidth: true
        // });

        $( document )
            .on( 'submit', '.js-finalcard-comments', function( e ) {
                e.preventDefault();

                var
                    $form = $( this ),
                    $target = $( this.getAttribute( 'data-target' ) ),
                    $textarea = $form.find( 'textarea' ),
                    comment = {
                        content: $textarea.val()
                    };

                action_submitComment( this.getAttribute( 'data-tid' ), comment, function( data ) {
                    $target.append( data );
                    $textarea.val( '' ).trigger( 'autosize.resize' );
                });
            })
            .on( 'tap', '.likes-finalcard a', function( e ) {
                e.preventDefault();

                var
                    $that = $( this ),
                    route = $that.attr( 'href' ) == '#like' ? 'test_like' : 'test_dislike',
                    tid = parseInt( $that.attr( 'rel' ) );

                $that.removeClass( '_unact' ).siblings( 'a' ).addClass( '_unact' );

                app.utils.ajax( route, {id: tid}, {
                    success: function() {}
                });
            })
            .on( 'tap', '.showDescr-item-testgo', function( e ) {
                e.preventDefault();

                var
                    $that = $( this ),
                    $parent = $that.parent();

                $parent.toggleClass( '_opened' );
            })
            // .on( 'focus', '.share-finalcard', function( e ) {
            //     e.preventDefault();

            //     $(this).select();
            // })
    });

})( window, jQuery );
