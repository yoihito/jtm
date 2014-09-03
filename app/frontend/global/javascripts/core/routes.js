(function( window, $ ) {

    var app = window.app;

    app.routes = {

        tests: {
            show: '/tests/pass/:id',
            save: '/tests/save/:id',
            saveAfter: '/tests/result/:id',
            setRating: '/tests/set_rating/:id'
        },

        default_type: 'post',
    };

})( window, jQuery );
