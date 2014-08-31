(function( window, $ ) {

    var app = window.app;

    app.ModelCreate( 'Test', {
        constructor: function() {},

        save: function( data, callback ) {
            var url = app.utils.route_parse( app.routes.test.save, { id: data.testId } );

            app.utils.ajax( url, {
                data: {
                    slides: data.store,
                },
                success: callback
            });
        }
    });

})( window, jQuery );
