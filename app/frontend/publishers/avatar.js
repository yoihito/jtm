(function( window, $ ) {

    var app = window.app;

    $(function() {

        $( document )
            .on( 'change', '.js-publisher-avatar', function( e ) {
                var
                    that = this,
                    $loader = $( '.loader-avatar' ),
                    $loader_hand = $loader.find( 'b' );

                app.utils.file.getBase64( FileReader, that.files[ 0 ], function( result ) {
                    app.utils.ajax( 'publisher_avatar', { id: parseInt( that.getAttribute( 'data-pid' ) ) }, {
                        data: {
                            publisher: { avatar: result }
                        },
                        xhr: function() {
                            var xhr = new window.XMLHttpRequest();

                            //Upload progress
                            xhr.upload.addEventListener( "progress", function(evt){
                                if ( evt.lengthComputable ) {
                                    var
                                        done = evt.position || evt.loaded,
                                        total = evt.totalSize || evt.total,
                                        percent = Math.floor( done / total * 1000 ) / 10;

                                    $loader_hand.css({ width: percent + "%" });
                                } else {
                                    console.warn();
                                }
                            }, false);

                            //Download progress
                            xhr.addEventListener( "progress", function(evt){
                                if ( evt.lengthComputable ) {
                                    var percentComplete = evt.loaded / evt.total;
                                    //Do something with download progress

                                    // console.log( 'download' );
                                } else {
                                    console.warn();
                                }
                            }, false);

                            return xhr;
                        },

                        beforeSend: function() {
                            $loader.css({ opacity: 1 });
                        },
                        success: function() {
                            $( '.img-info-publisher' ).attr( 'src', result );
                            $loader.css({ opacity: 0 });
                        }
                    } );
                });
            });

    });

})( window, jQuery );
