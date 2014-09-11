(function( window, $ ) {

    var app = window.app;

    $(function() {

        $( document )
            .on( 'change', '.js-trigger-showpassword', function() {
                $( this.getAttribute( 'data-target' ) ).prop( 'type', this.checked ? 'text' : 'password' );
            });

        $( '.js-trigger-showpassword' ).each(function() {
            $( this.getAttribute( 'data-target' ) ).prop( 'type', this.checked ? 'text' : 'password' );
        });

    });

})( window, jQuery );
