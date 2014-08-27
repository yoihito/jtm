(function( window ) {

    window.Models = {};

    window.Model = {

        create: function( name, object ) {
            var model = object.constructor;

            _( object ).forEach(function( value, key ) {
                if ( key !== 'constructor' ) {
                    model.prototype[ key ] = value;
                }
            });

            window.Models[ name ] = new model();
        }

    };

})( window );
