(function( window, $ ) {

    var app = window.app;

    app.routes = {
        test_start: ['/tests/:id/pass', 'get'],
        test_save: '/tests/:id/save',

        publisher_like: '/publishers/:id/likes',
        publisher_dislike: ['/publishers/:id/likes', 'delete'],
        publisher_avatar: ['/publishers/:id/update/avatar', 'put'],

        user_avatar: ['/users/:id/update/avatar', 'put'],

        method: 'post'
    };

})( window, jQuery );
