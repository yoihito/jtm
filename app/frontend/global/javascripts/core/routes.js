(function( window, $ ) {

    var app = window.app;

    app.routes = {

        tests: {
            show: '/tests/:id/result/',
            save: '/tests/:id/save/',
            saveAfter: '/tests/:id/result/',
            upvote: '/tests/:id/ratings/', //post
            downvote: '/tests/:id/ratings/' //delete
        },

        default_type: 'post',
    };

})( window, jQuery );
