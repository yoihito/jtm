(function( window, $ ) {

    var app = window.app;

    app.utils.route_parse = function( name, obj ) {
        var
            route = app.routes[ name ],
            isDefaultMethod = ( typeof route === 'string' ),
            out = ( isDefaultMethod ) ? route : route[ 0 ];

        _( obj ).forEach(function( value, key ) {
            var regexp = new RegExp( ':' + key + '(\\/?)', 'g' );

            out = out.replace( regexp, value + '$1' );
        });

        return [ out, ( isDefaultMethod ) ? app.routes[ 'method' ] : route[ 1 ] ];
    };

})( window, jQuery );
