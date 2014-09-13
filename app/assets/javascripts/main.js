(function( window, $ ) {

    var app = window.app;

    $(function() {

        $( document )
            .on( 'change', '.js-trigger-showpassword', function() {
                $( this.getAttribute( 'data-target' ) ).prop( 'type', this.checked ? 'text' : 'password' );
            })
            .on( 'tap', '.js-choose-img', function( e ) {
                e.preventDefault();

                $( this.getAttribute( 'data-target' ) ).trigger( 'click' );
            })

        $( '.js-trigger-showpassword' ).each(function() {
            $( this.getAttribute( 'data-target' ) ).prop( 'type', this.checked ? 'text' : 'password' );
        });

    });

})( window, jQuery );
