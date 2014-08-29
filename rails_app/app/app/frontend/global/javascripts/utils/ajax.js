(function( window, $ ) {

    var app = window.app;

    var csrf_param, csrf_token;

    $(function() {
        csrf_param = $( 'meta[name=csrf-param]' ).attr( 'content' );
        csrf_token = $( 'meta[name=csrf-token]' ).attr( 'content' );
    });

    app.utils.ajax = function( type, url, data ) {
        var isDefaultType;

        if ( !data ) {
            data = url;
            url = type;
            type = null;
        }

        isDefaultType = _( url ).isString();

        data[ 'data' ][ csrf_param ] = csrf_token;

        data[ 'url' ] = ( isDefaultType ) ? url : url[ 0 ];
        data[ 'type' ] = ( isDefaultType ) ? ( type || app.routes.default_type ) : url[ 1 ];

        $.ajax( data );
    };

})( window, jQuery );
