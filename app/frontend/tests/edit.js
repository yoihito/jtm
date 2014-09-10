(function( window, $ ) {

    var app = window.app;

    var
        className = 'edittest',

        sel = function( name ) {
            return '.js-' + className + '-' + name;
        },

        trigger_type = function( e ) {
            var $elem = $( this.getAttribute( 'data-rel' ) );

            $elem.text( this.value );
        },
        trigger_change = function( e ) {
            var $elem = $( this.getAttribute( 'data-rel' ) );

            app.utils.file.getBase64( FileReader, this.files[ 0 ], function( src ) {
                $elem.attr( 'src', src );
            });
        };

    $(function() {

        $( document )
            .on( 'keyup', '.js-edittest-trigger_type', trigger_type)
            .on( 'change', '.js-edittest-trigger_change', trigger_change)

            .on( 'tap', sel( 'addAnotherSlide' ), function( e ) {
                e.preventDefault();

                var
                    $this = $( this ),
                    $parent = $( '.slides-form-test' ),
                    count = parseInt( this.getAttribute( 'data-count' ) ),
                    k = count * 3 + 4,
                    tpl = $( '.slide-form-test._hid' ).clone(),
                    link = $this.clone();

                tpl.removeClass( '_hid' );

                tpl.find( '.content-form-test' )
                    .find( '.inpt-form-test' ).attr( 'data-rel', '.js-edittest_' + k ).end()
                    .find( '.choose-form-test' ).attr( 'data-file-rel', k+1 ).end()
                    .find( '.js-edittest-trigger_change' ).attr( 'data-file-rel', k+1 ).attr( 'data-rel', ".js-edittest_" + (k+2) ).end()

                tpl.find( '.preview_cover-form-test' )
                    .find( 'img' ).attr( 'class', 'js-edittest_' + (k+2) ).end()
                    .find( '.title-preview_cover-form-test' ).attr( 'class', 'title-preview_cover-form-test js-edittest_' + k );

                link.attr( 'data-count', count + 1 );

                $this.remove();
                $parent.append( tpl );

                if ( count != 10) {
                    $parent.append( link );
                }
            })

        app.utils.file.connectTrigger( '.js-edittest-choose', '.js-edittest-choose_img' );

    });

})( window, jQuery );
