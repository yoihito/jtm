(function( window, $ ) {

    var app = window.app;

    $(function() {

        $( document )
            .on( 'tap', '.js-newtest-chooseCover', function( e ) {
                e.preventDefault();

                $( '.js-newtest-cover' ).trigger( 'click' );
            })
            .on( 'change', '.js-newtest-cover', function( e ) {
                var file = this.files[ 0 ];

                // @TODO: Clearing input file
                // this.replaceWith( this.val( '' ).clone( true ) );

                $( '.js-newtest-nameCover' ).text( file.name );
            })
            .on( 'tap', '.js-newtest-addPic', function( e ) {
                e.preventDefault();

                var slideIndex = this.getAttribute( 'rel' );

                console.log( '.js-newtest-slidePic_' + slideIndex );

                $( '.js-newtest-slidePic_' + slideIndex ).trigger( 'click' );
            })

    });

})( window, jQuery );
