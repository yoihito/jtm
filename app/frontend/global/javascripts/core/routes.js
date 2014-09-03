(function( window, $ ) {

    var app = window.app;

    app.routes = {

        tests: {
            save: '/tests/save/:id',
            saveAfter: '/tests/result/:id',
            upvote: '/tests/upvote/:id',
            downvote: '/tests/downvote/:id'
        },

        default_type: 'post',
    };

})( window, jQuery );
