(function( window, $ ) {

    var app = window.app;

    app.ModelCreate( 'Test', {
        constructor: function() {},

        save: function( data, callback ) {
            var url = app.utils.route_get( 'tests', 'save', { id: data.testId } );

            app.utils.ajax( url, {
                data: {
                    slides: data.store,
                },
                success: callback
            });
        },

        setRating: function( data, callback ) {
            var url = app.utils.route_get( 'tests', 'setRating', { id: data.testId } );

            app.utils.ajax( url, {
                data: {
                    value: data.value
                },
                success: callback
            });
        }
    });

})( window, jQuery );
