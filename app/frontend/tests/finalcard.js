(function( window, $ ) {
    var app = window.app;

    $(function(){
        var
            submitComment = function($comment_list,testid, comment) {
                app.utils.ajax('submit_comment', {id: testid}, {
                    data: { comment : comment },
                    success: function(data) {
                        // console.log( $comment_list )
                        $comment_list.html(data)
                    }
                });
            }
        $( document )
        .on( 'tap', '.js-finalcard-submit-comment', function( e ) {
            var $this = $(this)
            e.preventDefault();
            var comment = { 'content' : $this.parent().find('.js-finalcard-content').val() }
            submitComment($this.parent().parent().find('.comments-list-finalcard'),$this.attr('data-testid'), comment);



        })
    });

})( window, jQuery );
