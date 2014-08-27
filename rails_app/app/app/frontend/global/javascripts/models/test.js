(function( window, $ ) {

    Model.create( 'Test', {
        constructor: function() {},

        save: function( data, callback ) {
            $.ajax({
                url: routes.test.save,
                type: 'post',
                data: {
                    slides: data.store,
                    id: data.testId
                },
                success: callback
            });
        }
    });

})( window, jQuery );
