(function( window, $ ) {

    var app = window.app;

    app.routes = {
        test_start: ['/tests/:id/pass', 'get'],
        test_save: '/tests/:id/save',
        test_result: ['/tests/:id/result', 'get' ],

        submit_comment: '/tests/:id/comments',

        publisher_like: '/publishers/:id/likes',
        publisher_dislike: ['/publishers/:id/likes', 'delete'],

        user_avatar: ['/users/:id/update/avatar', 'put'],

        method: 'post'
    };

})( window, jQuery );
