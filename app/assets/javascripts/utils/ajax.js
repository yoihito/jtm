(function( window, $ ) {

    var app = window.app;

    var csrf_param, csrf_token;

    $(function() {
        csrf_param = $( 'meta[name=csrf-param]' ).attr( 'content' );
        csrf_token = $( 'meta[name=csrf-token]' ).attr( 'content' );
    });

    app.utils.ajax_plain = function( url, data ) {
        data.url = url;

        return $.ajax( data );
    };

    app.utils.ajax = function( route, route_obj, data ) {
        var customMethod,
            routeParsed = app.utils.route_parse( route, route_obj ),
            method = routeParsed[ 1 ],
            url = routeParsed[ 0 ];

        // if ( method !== 'post' && method !== 'get' ) {
        //     data[ 'method' ] = method;
        //     method = 'post';
        // }

        if ( !data[ 'data' ] ) {
            data[ 'data' ] = {};
        }

        if ( method !== 'get' ) {
            data[ 'data' ][ csrf_param ] = csrf_token;
        }

        data[ 'type' ] = method;

        return app.utils.ajax_plain( url, data );
    };

})( window, jQuery );
