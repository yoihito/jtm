(function( window ) {

    window.core = {};

    window.utils = {

        routeParse = function( str, obj ) {
            var out = str;

            _( obj ).forEach(function( value, key ) {
                var regexp = new RegExp(':(' + key + ')\\/', 'g');

                out = out.replace(regexp, value + '/');
            });

            return out;
        };

    };

})( window );
