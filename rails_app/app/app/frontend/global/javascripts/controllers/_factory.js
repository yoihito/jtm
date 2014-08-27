(function( window ) {

    window.Controllers = {};

    window.Controller = {

        create: function( name, object ) {
            var controller = object.constructor;

            _( object ).forEach(function( value, key ) {
                if ( key !== 'constructor' ) {
                    controller.prototype[ key ] = value;
                }
            });

            window.Controllers[ name ] = new controller();
        }

    };

})( window );
