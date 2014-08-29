(function( window, $ ) {

    var app = window.app;

    app.Model = {};

    app.ModelCreate = function( name, object ) {
        var Class = object.constructor;

        _( object ).forEach(function( value, key ) {
            if ( key !== 'constructor' ) {
                Class.prototype[ key ] = value;
            }
        });

        app.Model[ name ] = new Class();
    };

})( window, jQuery );
