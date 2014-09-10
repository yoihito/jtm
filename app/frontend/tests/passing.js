(function( window, $ ) {

    var app = window.app;

    $(function() {

        var
            store = [],
            isProccess = true,
            savePassing = function( $list ) {

                app.utils.ajax( 'test_save', { id: $list.attr( 'data-testid' ) }, {
                    data: { slides: store },
                    success: function() {
                        $list.trigger( 'stopPassing' );
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

                if ( isProccess ) {
                    store.push( answ );

                    if ( $item.next().size() ) {
                        $item.removeClass( '_active' ).next().addClass( '_active' );
                    } else {
                        isProccess = false;
                        savePassing( $list );
                    }
                }

            })

    });

})( window, jQuery );
