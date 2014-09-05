(function( window, $ ) {

    var app = window.app;

    $(function() {

        $( document )
            .on( 'tap', '.js-newtest-chooseCover', function( e ) {
                e.preventDefault();

                $( '.js-newtest-cover' ).trigger( 'click' );
            })
            .on( 'change', '.js-newtest-cover', function( e ) {
                var
                    $form = $( this ).closest( 'form' ),
                    file = this.files[ 0 ];

                // @TODO: Clearing input file
                // this.replaceWith( this.val( '' ).clone( true ) );

                app.utils.file.getBase64( FileReader, file, function( data ) {
                    $form.find( '.js-newtest-srcCover' ).attr( 'src', data );
                });
            })
            .on( 'tap', '.js-newtest-addPic', function( e ) {
                e.preventDefault();

                $( '.js-newtest-slidePic_' + this.getAttribute( 'rel' ) ).trigger( 'click' );
            })
            .on( 'change', '.js-newtest-slidePic', function( e ) {
                var index = this.getAttribute( 'rel' );

                app.utils.file.getBase64( FileReader, this.files[ 0 ], function( data ) {
                    $( '.js-newtest-slideImg_' + index ).attr( 'src', data );
                });
            });

    });

})( window, jQuery );
