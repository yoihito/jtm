(function( window, $ ) {

    var app = window.app;

    app.blocks = {};

    var functions = app.fns = {};

    functions.textarea = function() {
        $( '.textarea_autosize' ).autosize();
    };

    functions.reinit = function() {
        functions.textarea();
    };

    $(function() {

        $( document )
            .on( 'change', '.js-trigger-showpassword', function() {
                $( this.getAttribute( 'data-target' ) ).prop( 'type', this.checked ? 'text' : 'password' );
            })
            .on( 'tap', '.js-choose-img', function( e ) {
                e.preventDefault();

                $( this.getAttribute( 'data-target' ) ).trigger( 'click' );
            })

            .on( 'tap', '.js-toggle', function( e ) {
                e.preventDefault();

                $( this.getAttribute( 'data-target' ) ).toggleClass( '_hid' );
            })

        $( '.js-trigger-showpassword' ).each(function() {
            $( this.getAttribute( 'data-target' ) ).prop( 'type', this.checked ? 'text' : 'password' );
        });

        functions.reinit();

    });

})( window, jQuery );
