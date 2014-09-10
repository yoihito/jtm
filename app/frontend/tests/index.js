(function( window, $ ) {

    var app = window.app;

    $(function() {

        app.utils.masonry( '.tests', '.test' );

        var
            $shadow = $( '.tests-shadow' ),
            stopPassing = function() {
                $shadow.addClass( '_hid' );
                $( '.testgo' ).addClass( '_hid' ).find( '.body-content-testgo' ).html( '' );
                $( '.t_html' ).removeClass( '_overhide' );
            };

        $( document )
            .on( 'tap', '.tests-shadow, .bg-testgo, .js-test-stop', function( e ) {
                e.preventDefault();

                stopPassing();
            })
            .on( 'tap', '.js-test-start', function( e ) {
                e.preventDefault();

                $shadow.toggleClass( '_hid' );

                var testId = this.getAttribute( 'rel' );

                app.utils.ajax( 'test_start', { id: testId }, {
                    success: function( data ) {
                        $( '.t_html' ).addClass( '_overhide' );
                        $( '.testgo' ).removeClass( '_hid' )
                            .find( '.body-content-testgo' ).html( data )
                                .find( '.list-testgo' ).on( 'stopPassing', function( e ) {
                                    e.preventDefault();

                                    stopPassing();
                                });

                        // console.log( data );
                    },

                    error: function() {

                    }
                });

            })

    });

})( window, jQuery );
