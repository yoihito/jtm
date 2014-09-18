(function( window, $ ) {

    var app = window.app;

    app.routes = {
        test_start: ['/tests/:id/pass', 'get'],
        test_save: '/tests/:id/save',
        test_destroy: ['/publishers/:pid/tests/:tid', 'delete'],

        test_result: ['/tests/:id/result', 'get' ],
        test_comments_new: '/tests/:id/comments',

        test_like: '/tests/:id/ratings',
        test_dislike: ['/tests/:id/ratings', 'delete'],

        publisher: '/publishers/:id',
        publisher_like: '/publishers/:id/likes',
        publisher_dislike: ['/publishers/:id/likes', 'delete'],
        publisher_avatar: ['/publishers/:id/update/avatar', 'put'],

        user_avatar: ['/users/:id/update/avatar', 'put'],
        user_signup: ['/users/sign_up', 'get'],

        method: 'post'
    };

})( window, jQuery );
