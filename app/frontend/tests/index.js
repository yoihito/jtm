(function( window, $ ) {

    var app = window.app;

    $(function() {

        app.utils.masonry( '.tests', '.test' );

        var
            $shadow = $( '.tests-shadow' );

        $( document )
            .on( 'tap', '.tests-shadow', function( e ) {
                e.preventDefault();

                $shadow.addClass( '_hid' );
            })
            .on( 'tap', '.js-test-start', function( e ) {
                e.preventDefault();

                $shadow.toggleClass( '_hid' );

                var testId = this.getAttribute( 'rel' );

                app.utils.ajax( 'test_start', { id: testId }, {
                    success: function() {
                        console.log( 'asd' );
                    }
                });

            });

    });

})( window, jQuery );
