(function( window, $ ) {

    var app = window.app;

    app.utils.ajax = function( type, url, data ) {
        if ( !data ) {
            data = url;
            url = type;
            type = 'post';
        }

        data[ 'url' ] = url;
        data[ 'type' ] = type;

        $.ajax( data );
    };

})( window, jQuery );
