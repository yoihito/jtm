(function( window, $ ) {

    var app = window.app;

    $(function() {

        $( document )
            .on( 'change', '.js-user-avatar', function() {
                var that = this;

                app.utils.file.getBase64( FileReader, that.files[ 0 ], function( result ) {
                    app.utils.ajax( 'user_avatar', { id: parseInt( that.getAttribute( 'data-uid' ) ) }, {
                        data: {
                            user: { avatar: result }
                        },
                        success: function() {
                            console.log( 'asd' );
                        }
                    } );
                });
            })

    });

})( window, jQuery );
