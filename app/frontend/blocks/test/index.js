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
            })
            .on( 'tap', '.js-newtest-addSlide', function( e ) {
                e.preventDefault();

                var
                    $this = $( this ),
                    $parent = $this.parent(),
                    tpl = $parent.children().eq( 0 ).clone(),
                    addLink = $this.clone(),
                    index = _.parseInt( addLink.attr( 'rel' ) );

                addLink.attr( 'rel', index + 1 );

                tpl.removeClass( '_hid' );
                tpl.find( '.num-slide-newtest' ).html( index + '.' );
                tpl.find( '.js-newtest-addPic' ).attr( 'rel', index );
                var $slidePic = tpl.find( '.js-newtest-slidePic' );
                $slidePic.attr( 'class', $slidePic.attr( 'class' ).replace( '_0', '_' + index ) );
                $slidePic.attr( 'id', $slidePic.attr( 'id' ).replace( '_0', '_' + index ) );
                $slidePic.attr( 'name', $slidePic.attr( 'name' ).replace( '[0]', '[' + index + ']' ) );
                $slidePic.attr( 'rel', index );
                var $question = tpl.find( '.inpt_slide-form-newtest' );
                $question.attr( 'id', $question.attr( 'id' ).replace( '_0', '_' + index ) );
                $question.attr( 'name', $question.attr( 'name' ).replace( '[0]', '[' + index + ']' ) );
                var $img = tpl.find( '.img-slide-newtest' );
                $img.attr( 'class', $img.attr( 'class' ).replace( '_0', '_' + index ) );


                $this.remove();
                $parent.append( tpl );
                $parent.append( addLink );
            })

    });

})( window, jQuery );
