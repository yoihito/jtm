(function( window, $ ) {

    var app = window.app;

    app.utils.route_parse = function( str, obj ) {
        var
            isDefaultType = _( str ).isString(),
            out = ( isDefaultType ) ? str : str[ 0 ];

        _( obj ).forEach(function( value, key ) {
            var regexp = new RegExp( ':' + key + '(\\/?)', 'g' );

            out = out.replace( regexp, value + '$1' );
        });

        return ( isDefaultType ) ? out : [ out, str[ 1 ] ];
    };

    app.utils.route_get = function() {
        var route = app.routes, obj;

        _( arguments ).forEach(function( value, index ) {
            if ( _( value ).isString() ) {
                route = route[ value ];

            } else {
                obj = value;
            }
        });

        return obj ? app.utils.route_parse( route, obj ) : route;
    };

})( window, jQuery );
