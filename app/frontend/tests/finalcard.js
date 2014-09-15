(function( window, $ ) {

    var app = window.app;

    $(function(){
        var
            submitComment = function( $comment_list, testid, comment ) {
                app.utils.ajax( 'submit_comment', { id: testid }, {
                    data: { comment : comment },
                    success: function( data ) {
                        $comment_list.html( data )
                    }
                });
            };

        $( document )
            .on( 'tap', '.js-finalcard-submit-comment', function( e ) {
                e.preventDefault();

                var
                    $this = $(this),
                    $parent = $this.parent(),
                    comment = { 'content' : $parent.find( '.js-finalcard-content' ).val() };

                submitComment( $parent.parent().find( '.comments-list-finalcard' ), $this.attr( 'data-testid' ), comment );
            });
    });

})( window, jQuery );
