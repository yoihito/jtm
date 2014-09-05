(function( window, $ ) {

    var app = window.app;

    $(function() {

        $( document )
            .on( 'change', '.js-changeInptType', function( e ) {
                e.preventDefault();

                var $this = $( this );

                $( $this.attr( 'rel' ) ).prop( 'type', ($this.is( ':checked' )) ? 'text' : 'password' );
            });

        $( '.js-changeInptType' ).each(function() {
            var $this = $( this );
            $( $this.attr( 'rel' ) ).prop( 'type', ($this.is( ':checked' )) ? 'text' : 'password' );
        });

    });

})( window, jQuery );
