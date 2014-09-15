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
            });
    });

})( window, jQuery );
