(function( window, $ ) {

    var app = window.app;

    app.utils.file = {};

    app.utils.file.getBase64 = function( FileReader, file, callback ) {
        var fr = new FileReader();

        fr.onloadend = function() {
            return callback( fr.result );
        };

        return fr.readAsDataURL( file );
    };

})( window, jQuery );
