(function( window, $ ) {

    var app = window.app;

    app.utils.route_parse = function( str, obj ) {
        var out = str;

        _( obj ).forEach(function( value, key ) {
            var regexp = new RegExp( ':' + key + '(\\/?)', 'g' );

            out = out.replace( regexp, value + '$1' );
        });

        return out;
    };

})( window, jQuery );
