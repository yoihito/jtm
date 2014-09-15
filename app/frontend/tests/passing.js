(function( window, $ ) {

    var app = window.app;

    $(function() {

        var
            savePassing = function( $list ) {

                app.utils.ajax( 'test_save', { id: $list.attr( 'data-testid' ) }, {
                    data: { slides: app.test_store },
                    success: function() {
                        loadFinalCard( $list );
                    }
                });

            },
            loadFinalCard = function( $list ) {
                var $content = $list.parent();

                app.utils.ajax( 'test_result', { id: $list.attr( 'data-testid' ) }, {
                    success: function( data ) {
                        $content.html( data );
                        app.fns.reinit();
                    }
                });
            };

        $( document )
            .on( 'tap', '.js-testgo-answ', function( e ) {
                e.preventDefault();

                var
                    $this = $( this ),
                    answ = $this.attr( 'rel' ),
                    $item = $this.closest( '.item-testgo' ),
                    $list = $item.parent();

                if ( app.test_passing ) {
                    app.test_store.push( answ );

                    if ( $item.next().size() ) {
                        $item.removeClass( '_active' ).next().addClass( '_active' );
                    } else {
                        savePassing( $list );
                    }
                }

            })

    });

})( window, jQuery );
