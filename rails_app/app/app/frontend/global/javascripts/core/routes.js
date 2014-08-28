(function( window, $ ) {

    var app = window.app;

    app.routes = {

        test: {
            save: '/tests/pass/save/:id',
            saveAfter: '/tests/result/:id'
        },

        default_type: 'post',
    };

})( window, jQuery );
