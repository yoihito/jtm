(function( window, $ ) {

    var app = window.app;

    app.routes = {

        tests: {
            save: '/tests/save/:id',
            saveAfter: '/tests/result/:id'
        },

        default_type: 'post',
    };

})( window, jQuery );
