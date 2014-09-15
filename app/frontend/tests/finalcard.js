(function( window, $ ) {

    var app = window.app;

    var
        action_submitComment = function( $target, testid, comment ) {
            app.utils.ajax( 'test_comments_new', { id: testid }, {
                data: {
                    comment: comment
                },
                success: function( data ) {
                    $target.append( data )
                }
            });
        };

    $(function(){
        $( document )
            .on( 'submit', '.js-finalcard-comments', function( e ) {
                e.preventDefault();

                var
                    $form = $( this ),
                    $target = $( this.getAttribute( 'data-target' ) ),
                    comment = {
                        content: $form.find( 'textarea' ).val()
                    };

                action_submitComment( $target, this.getAttribute( 'data-tid' ), comment );
            });
    });

})( window, jQuery );
