(function( window, $ ) {

    var app = window.app;

    $(function() {

        $( document )
            .on( 'change', '.js-publisher-avatar', function( e ) {
                var that = this;

                app.utils.file.getBase64( FileReader, that.files[ 0 ], function( result ) {
                    app.utils.ajax( 'publisher_avatar', { id: parseInt( that.getAttribute( 'data-pid' ) ) }, {
                        data: {
                            publisher: { avatar: result }
                        },
                        success: function() {
                            $( '.img-info-publisher' ).attr( 'src', result );
                        }
                    } );
                });
            });

    });

})( window, jQuery );
