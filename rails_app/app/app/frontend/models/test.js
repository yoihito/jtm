(function( window, $ ) {

    var app = window.app;

    app.ModelCreate( 'Test', {
        constructor: function() {},

        save: function( data, callback ) {
            app.utils.ajax( app.routes.test.save, {
                data: {
                    slides: data.store,
                    id: data.testId
                },
                success: callback
            });
        }
    });

})( window, jQuery );
