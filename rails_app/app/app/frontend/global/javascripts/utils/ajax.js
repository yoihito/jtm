(function( window, $ ) {

    var app = window.app;

    app.utils.ajax = function( type, url, data ) {
        var csrf_param, csrf_token;

        if ( !data ) {
            data = url;
            url = type;
            type = 'post';
        }

        csrf_param = $( 'meta[name=csrf-param]' ).attr( 'content' );
        csrf_token = $( 'meta[name=csrf-token]' ).attr( 'content' );
        data[ 'data' ][ csrf_param ] = csrf_token;

        data[ 'url' ] = url;
        data[ 'type' ] = type;

        $.ajax( data );
    };

})( window, jQuery );
