(function( window, $ ) {

    var app = window.app;

    app.utils.ajax = function( type, url, data ) {
        var csrf_param, csrf_token, isDefaultType;

        if ( !data ) {
            data = url;
            url = type;
        }

        isDefaultType = _( url ).isString();

        console.log( url );
        console.log( isDefaultType );

        csrf_param = $( 'meta[name=csrf-param]' ).attr( 'content' );
        csrf_token = $( 'meta[name=csrf-token]' ).attr( 'content' );
        data[ 'data' ][ csrf_param ] = csrf_token;

        data[ 'url' ] = ( isDefaultType ) ? url : url[ 0 ];
        data[ 'type' ] = ( isDefaultType ) ? app.routes.default_type : url[ 1 ];

        $.ajax( data );
    };

})( window, jQuery );
