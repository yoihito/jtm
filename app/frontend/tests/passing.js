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

                var tid = parseInt( $list.attr( 'data-testid' ) );

                app.utils.ajax( 'test_result', { id: tid }, {
                    success: function( data ) {
                        $content.html( data );
                        app.fns.reinit();

                        if ( app.blocks && app.blocks.users && app.blocks.users.reuse ) {
                            app.blocks.users.reuse( $( '.user' ), $( '.list-cont-user' ) );
                        }

                        History.pushState({type: 'results', test: {id: tid}}, 'Result', app.utils.route_url( 'test_result', { id: tid } ) );
                    }
                });
            };

        $( document )
            .on( 'tap.test_answer', '.js-testgo-answ', function( e ) {
                e.preventDefault();

                $( window ).scrollTop( 0 );

                var
                    $this = $( this ),
                    answ = $this.attr( 'rel' ),
                    $item = $this.closest( '.item-testgo' ),
                    $list = $item.parent();

                if ( app.test_passing ) {
                    app.test_store.push( answ );

                    var prct = ( ( $item.index() + 1 ) / ( $item.siblings().length + 1 ) ) * 100;
                    $( '.js-testgo-way' ).css({ width: prct+'%' })

                    if ( $item.next().size() ) {
                        $item.removeClass( '_active' ).next().addClass( '_active' );
                    } else {
                        app.test_passing = false;
                        // savePassing( $list );
                    }
                }

            })

    });

})( window, jQuery );
