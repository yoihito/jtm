(function( window, $ ) {

    var app = window.app;

    var
        store = [],
        contrlName = 'tests';

    app.ControllerCreate( contrlName, {
        constructor: function() {
            var that = this;

            $(function() {
                $( document )
                    .on( 'tap', '.js-test-answ', function( e ) {
                        that.newAnswer.call( this, e, that );
                    })
                    .on( 'tap', '.js-test-setRating', function( e ) {
                        that.setRating.call( this, e, that );
                    });
            });
        },

        newAnswer: function( e, contrl ) {
            e.preventDefault();

            var
                $this = $( this ),
                type = _.parseInt( $this.attr( 'rel' ) );

            store.push( type );

            contrl.nextSlide( $this, $this.closest( '.slide' ).index() );
        },

        nextSlide: function( $slideAnsw, currentIndex ) {
            var
                $slides = $slideAnsw.closest( '.list-test' ).find( '.slide' ),
                $currentSlide = $slides.eq( currentIndex );

            if ( $currentSlide.next().is( '.slide' ) ) {
                $currentSlide.addClass( 'slide_hid' );
                $currentSlide.next().removeClass( 'slide_hid' );

            } else {
                this.finish( $slideAnsw.closest( '.test' ) );
            }
        },

        finish: function( $test ) {
            var testId = _.parseInt( $test.data( 'id' ) );

            app.Model.Test.save( { store: store, testId: testId }, function() {
                window.location.href = app.utils.route_get( contrlName, 'saveAfter', { id: testId } );
            });
        },

        setRating: function( e, contrl ) {
            e.preventDefault();

            var
                $this = $( this ),
                $links = $this.parent().children(),
                testid = _.parseInt( $this.attr( 'data-testid' ) ),
                value = $this.index() + 1;

            // @TODO: Need to check if rating already setted to `value`
            app.Model.Test.setRating( { value: value, testId: testid }, function() {
                // @TODO: Need to optimize next code
                var $parent = $this.parent();
                $parent.addClass( '_setted' );
                setTimeout(function() {
                    $parent.removeClass( '_setted' );
                }, 200);
                $links.removeClass( '_active' );
                _.times( value, function( n ) {
                    $links[ n ].classList.add( '_active' );
                });
            });
        }
    });

})( window, jQuery );
