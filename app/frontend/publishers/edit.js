(function( window, $ ) {

    var app = window.app;

    $(function() {

        $( document )
            .on( 'change', '.js-publisher-new-avatar', function() {
                app.utils.file.getBase64( FileReader, this.files[ 0 ], function( result ) {
                    $( '.js-publisher-form-avatar' ).attr( 'src', result );
                });
            })

    });

})( window, jQuery );
