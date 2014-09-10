(function( window, $ ) {

    var app = window.app;

    $(function() {

        app.utils.masonry( '.publishers', '.item-publishers' );

        $( document )
            .on( 'tap', '.js-publisher-like', function( e ) {
                e.preventDefault();

                var $this = $( this );

                app.utils.ajax( 'publisher_like', { id: this.getAttribute( 'rel' ) }, {
                    success: function() {
                        var $b = $this.addClass( '_hid' ).next().removeClass( '_hid' ).parent().find( 'b' );
                        $b.text( parseInt( $b.text() ) + 1 );
                    }
                });
            })
            .on( 'tap', '.js-publisher-liked', function( e ) {
                e.preventDefault();

                app.utils.ajax( 'publisher_dislike', { id: this.getAttribute( 'rel' ) }, {
                    success: function() {
                        var $b = $this.addClass( '_hid' ).prev().removeClass( '_hid' ).parent().find( 'b' );
                        $b.text( parseInt( $b.text() ) - 1 );
                    }
                });
            })

    });

})( window, jQuery );
