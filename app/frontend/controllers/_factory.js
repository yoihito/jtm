(function( window, $ ) {

    var app = window.app;

    app.Controller = {};

    app.ControllerCreate = function( name, object ) {
        var Class = object.constructor;

        _( object ).forEach(function( value, key ) {
            if ( key !== 'constructor' ) {
                Class.prototype[ key ] = value;
            }
        });

        app.Controller[ name ] = new Class();
    };

})( window, jQuery );
