(function( window, $ ) {

    var app = window.app;

    $(function() {

        app.utils.masonry( '.tests', '.test', '.bg-test > img' );

        var
            posY, posX, ifSupportPos,

            $shadow = $( '.tests-shadow' ),

            closePassing = function( scrolltop ) {
                app.test_passing = false;
                app.test_store = [];

                $shadow.addClass( '_hid' );
                $( '.testgo-circle, .testgo-circle_full' ).removeClass( '_animated' ).addClass( '_hid' );
                $( '.testgo' )
                    .addClass( '_hid' ).removeClass('_animated').removeClass('_showed')
                    .find( '.body-content-testgo' ).html( '' );
                $( '.t_html' ).removeClass( '_overhide' );
                $( document ).off( '.testgo' );

                if ( scrolltop ) {
                    $( window ).scrollTop( scrolltop + 5 );
                }
            },
            openPassing = function( tid, e ) {
                var
                    $test = $( '#test_' + tid ),
                    $btn = $test.find( '.go-test' );

                app.test_passing = true;
                app.test_store = [];

                $( document ).on( 'keydown.testgo', function( e ) {
                    if ( e.keyCode === app.utils.keyCode.esc ) {
                        stopPassing();
                    }
                });

                app.utils.ajax( 'test_start', { id: tid }, {
                    success: function( data ) {
                        $( '.t_html' ).addClass( '_overhide' );
                        var $circle = $( '.testgo-circle, .testgo-circle_full' );
                        var $testgo = $( '.testgo' );
                        $circle.removeClass( '_hid' );
                        $testgo.removeClass( '_hid' );

                        var $window = $( window );
                        var $windowWidth = $window.width();
                        var $windowHeight = $window.height();

                        var ptop = $btn.offset().top - $window.scrollTop();
                        var pleft = $btn.offset().left;
                        var pright = $windowWidth - pleft - $btn.outerWidth();
                        var pbottom = $windowHeight - ptop - $btn.outerHeight();

                        // alert( $windowWidth );

                        // alert( e.originalEvent.parentEvent.pageY )

                        var t = (posY || $btn.offset().top) - $window.scrollTop();
                        var l = (posX || $btn.offset().left);
                        var r = $windowWidth - l;
                        var b = $windowHeight - t;
                        var R = Math.max( Math.sqrt(t*t + l*l), Math.sqrt(t*t + r*r), Math.sqrt(r*r + b*b), Math.sqrt(l*l + b*b) ) + 100;

                        // alert(t);
                        // alert(l);
                        // alert(R);

                        // $testgo.css( {
                        //     top: ptop,
                        //     right: pright,
                        //     bottom: pbottom,
                        //     left: pleft
                        // });
                        $circle.css({
                            width: ifSupportPos ? 20 : 100,
                            height: ifSupportPos ? 20 : 100,
                            marginTop: 0,
                            marginLeft: 0,
                            top: ifSupportPos ? t - 10 : t - 50 + $btn.outerHeight()/2,
                            left: ifSupportPos ? l - 10 : l - 50 + $btn.outerWidth()/2
                        });

                        setTimeout(function() {
                            // $testgo.addClass( '_animated' );
                            $circle.addClass( '_animated' );

                            setTimeout(function() {
                                // $testgo.css({ top: 0, right: 0, bottom: 0, left: 0 });
                                $circle.css({ width: 2*R, marginLeft: -R, marginTop: -R, height: 2*R });
                            }, 0);

                        }, 0);

                            $testgo.addClass( '_showed' );
                        // $circle.on('transitionend', function() {
                        // });

                        $testgo
                            .find( '.body-content-testgo' ).html( data )
                            .find( '.list-testgo' ).on( 'savedPassing', function( e ) {
                                var $b;

                                e.preventDefault();

                                if ( $btn.hasClass( '_free' ) ) {
                                    $btn.addClass( '_hid' ).next().removeClass( '_hid' );
                                    $b = $btn.parent().find( 'b' );

                                    $b.text( parseInt( $b.text() ) + 1 );
                                }
                                stopPassing();
                            });
                    },

                    error: function() {
                        stopPassing();
                    }
                });
            },

            getFinalCard = function( tid ) {
                app.utils.ajax( 'test_result', {id: tid}, {
                    success: function( data ) {
                        $( '.t_html' ).addClass( '_overhide' );
                        var $circle = $( '.testgo-circle, .testgo-circle_full' );
                        var $testgo = $( '.testgo' );
                        $circle.removeClass( '_hid' );
                        $testgo.removeClass( '_hid' );

                        $testgo
                            .find( '.body-content-testgo' ).html( data )
                            .find( '.list-testgo' ).on( 'savedPassing', function( e ) {
                                var $b;

                                e.preventDefault();

                                if ( $btn.hasClass( '_free' ) ) {
                                    $btn.addClass( '_hid' ).next().removeClass( '_hid' );
                                    $b = $btn.parent().find( 'b' );

                                    $b.text( parseInt( $b.text() ) + 1 );
                                }
                                // stopPassing();
                            });
                    }
                });
            },

            stopPassing = function() {
                History.back();
            },
            startPassing = function( tid ) {
                History.pushState({type: 'stop', test: {id: tid}, scrolltop: $( window ).scrollTop()}, 'tests', document.URL );
                History.pushState({type: 'open', test: {id: tid}}, 'tests', app.utils.route_url( 'test_start', { id: tid } ) );
            },
            openResult = function( tid ) {
                // History.pushState({type: 'stop', test: {id: tid}, scrolltop: $( window ).scrollTop()}, 'tests', document.URL );
                // History.pushState({type: 'open', test: {id: tid}}, 'tests', app.utils.route_url( 'test_start', { id: tid } ) );
                getFinalCard( tid );
            };

        History.Adapter.bind( window, 'statechange', function() {
            var state = History.getState();

            if ( state.title === 'tests' ) {
                if ( $( '.test' ).size() ) {
                    if ( state.data.type === 'stop' ) {
                        closePassing( state.data.scrolltop );
                    } else if ( state.data.type === 'open' ) {
                        openPassing( state.data.test.id );
                    }
                } else {
                    window.location.href = '/';
                }
            }
        });

        $( document )
            .on( 'tap', '.tests-shadow, .js-test-stop', function( e ) {
                e.preventDefault();

                stopPassing();
            })
            .on( 'tap', '.js-test-start', function( e ) {
                e.preventDefault();

                var
                    $btn = $( this ),
                    tid = $btn.attr( 'rel' );

                ifSupportPos = !!e.originalEvent.parentEvent.pageY;
                posY = e.originalEvent.parentEvent.pageY;
                posX = e.originalEvent.parentEvent.pageX;

                startPassing( tid );
            })
            .on( 'tap', '.js-test-result', function( e ) {
                e.preventDefault();

                var
                    $btn = $( this ),
                    tid = parseInt( $btn.attr( 'rel' ) );

                openResult( tid );
            })

    });

})( window, jQuery );
