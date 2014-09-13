(function( window, $ ) {

    var app = window.app;

    $(function() {

        $( document )
            .on( 'tap', '.js-menu-trigger', function( e ) {
                e.preventDefault();

                var $blocks = $( this.getAttribute( 'data-rel' ) );

                $( '.sidemenu' ).toggleClass( '_opened' );
                $blocks.toggleClass( '_hid' );
            });

    });

})( window, jQuery );
