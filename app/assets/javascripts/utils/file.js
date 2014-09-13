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

    app.utils.file.connectTrigger = function( selector_hand, selector_target ) {
        $( document )
            .on( 'tap', selector_hand, function( e ) {

                e.preventDefault();

                var id = this.getAttribute( 'data-file-rel' );

                $( selector_target + '[data-file-rel=' + id + ']' ).trigger( 'click' );
            });
    };

})( window, jQuery );
