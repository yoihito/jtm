(function( window, $ ) {

    var app = window.app;

    $(function() {

        $( document )
            .on( 'change', '.js-edittest-picture', function() {

                var $preview = $( this ).parent().find( '.js-edittest-picture-preview' );

                app.utils.file.getBase64( FileReader, this.files[ 0 ], function( base64 ) {
                    $preview.attr( 'src', base64 );
                });

            })
            .on( 'tap', '.js-edittest-choose', function( e ) {
                e.preventDefault();

                this.parentNode.querySelector( '.js-edittest-picture' ).click();
            })
            .on( 'tap', '.addDescr-line-edittest', function( e ) {
                e.preventDefault();

                this.classList.add( '_hid' );
                $( this.parentNode.querySelector( '.textarea_autosize' ) )
                    .removeClass( '_hid' )
                    .autosize()
                    .trigger( 'autosize.resize' )
                    .focus();
            })
            .on( 'tap', '.js-edittest-newSlide', function( e ) {
                e.preventDefault();

                var
                    $items = $( '.line_slide-edittest' ),
                    $last = $items.last(),
                    $tpl = $last.clone(),
                    index = $items.length,

                    fixName = function( elem ) {
                        elem.attr( 'name', elem.attr( 'name' ).replace( /\[\d+\]/, '[' + index + ']' ) );
                    };

                var $tpl_descr = $tpl.find( 'textarea' );
                var $tpl_text = $tpl.find( 'input[type=text]' );
                var $tpl_file = $tpl.find( 'input[type=file]' );

                fixName( $tpl_descr );
                fixName( $tpl_text );
                fixName( $tpl_file );

                $tpl_text.val( '' );
                $tpl_descr.removeAttr( 'style' ).addClass( '_hid' );
                $tpl.find( '.label-edittest' ).text( index + 1 );
                $tpl.find( '.addDescr-line-edittest' ).removeClass( '_hid' );
                $tpl.find( 'img' ).attr( 'src', '' );

                $tpl.insertAfter( $last );

                $tpl_text.focus();

                if ( index + 1 === 10 ) {
                    $( '.js-edittest-newSlide' ).addClass( '_hid' );
                }
            })
            .on( 'tap', '.js-edittest-delete', function( e ) {
                e.preventDefault();

                var
                    that = this,
                    tid = parseInt( that.getAttribute( 'data-tid' ) ),
                    pid = parseInt( that.getAttribute( 'data-pid' ) );

                app.utils.ajax( 'test_destroy', { tid: tid, pid: pid }, {
                    success: function() {
                        window.location.href = app.utils.route_url( 'publisher', { id: parseInt( that.getAttribute( 'data-pid' ) ) } );
                    }
                });
            })

    });

})( window, jQuery );
