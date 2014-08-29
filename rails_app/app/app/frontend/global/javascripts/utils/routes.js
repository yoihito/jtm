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

})( window, jQuery );
