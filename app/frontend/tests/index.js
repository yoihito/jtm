(function( window, $ ) {

    var app = window.app;

    $(function() {

        app.utils.masonry( '.tests', '.test', '.bg-test > img' );

        var
            $shadow = $( '.tests-shadow' ),
            stopPassing = function() {
                app.test_passing = false;

                History.back();

                $shadow.addClass( '_hid' );
                $( '.testgo-circle, .testgo-circle_full' ).removeClass( '_animated' ).addClass( '_hid' );
                $( '.testgo' )
                    .addClass( '_hid' ).removeClass('_animated').removeClass('_showed')
                    .find( '.body-content-testgo' ).html( '' );
                $( '.t_html' ).removeClass( '_overhide' );
                $( document ).off( '.testgo' );
            },
            startPassing = function($this, testId, e) {
                app.test_passing = true;
                app.test_store = [];

                $( document ).on( 'keydown.testgo', function( e ) {
                    if ( e.keyCode === app.utils.keyCode.esc ) {
                        stopPassing();
                    }
                });

                app.utils.ajax( 'test_start', { id: testId }, {
                    success: function( data ) {
                        $( '.t_html' ).addClass( '_overhide' );
                        var $circle = $( '.testgo-circle, .testgo-circle_full' );
                        var $testgo = $( '.testgo' );
                        $circle.removeClass( '_hid' );
                        $testgo.removeClass( '_hid' );

                        var $window = $( window );
                        var $windowWidth = $window.width();
                        var $windowHeight = $window.height();

                        var ptop = $this.offset().top - $window.scrollTop();
                        var pleft = $this.offset().left;
                        var pright = $windowWidth - pleft - $this.outerWidth();
                        var pbottom = $windowHeight - ptop - $this.outerHeight();

                        // alert( $windowWidth );

                        // alert( e.originalEvent.parentEvent.pageY )

                        var ifSupportPos = !!e.originalEvent.parentEvent.pageY;
                        var t = (e.originalEvent.parentEvent.pageY || $this.offset().top) - $window.scrollTop();
                        var l = (e.originalEvent.parentEvent.pageX || $this.offset().left);
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
                            top: ifSupportPos ? t - 10 : t - 50 + $this.outerHeight()/2,
                            left: ifSupportPos ? l - 10 : l - 50 + $this.outerWidth()/2
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

                                if ( $this.hasClass( '_free' ) ) {
                                    $this.addClass( '_hid' ).next().removeClass( '_hid' );
                                    $b = $this.parent().find( 'b' );

                                    $b.text( parseInt( $b.text() ) + 1 );
                                }
                                stopPassing();
                            });
                    },

                    error: function() {
                        stopPassing();
                    }
                });
            };

        $( document )
            .on( 'tap', '.tests-shadow, .js-test-stop', function( e ) {
                e.preventDefault();

                stopPassing();
            })
            .on( 'tap', '.js-test-start', function( e ) {
                e.preventDefault();

                var
                    $this = $( this ),
                    testId = $this.attr( 'rel' );

                History.pushState({type: 'open'}, 'tests', '/tests/' + testId + '/pass');

                startPassing( $this, testId, e );
            })

    });

})( window, jQuery );
