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

                var $content = tpl.find( '.content-form-test' );
                var $content_inpt = $content.find( '.inpt-form-test' );
                $content_inpt.attr( 'data-rel', '.js-edittest_' + k );
                $content_inpt.attr( 'id', $content_inpt.attr( 'id' ).replace( '_0_', '_' + count + '_' ) );
                $content_inpt.attr( 'name', $content_inpt.attr( 'name' ).replace( '[0]', '[' + count + ']' ) );
                $content.find( '.choose-form-test' ).attr( 'data-file-rel', k+1 );
                var $content_file = $content.find( '.js-edittest-trigger_change' );
                $content_file.attr( 'data-file-rel', k+1 ).attr( 'data-rel', ".js-edittest_" + (k+2) );
                $content_file.attr( 'id', $content_file.attr( 'id' ).replace( '_0_', '_' + count + '_' ) );
                $content_file.attr( 'name', $content_file.attr( 'name' ).replace( '[0]', '[' + count + ']' ) );
                var $content_descr = $content.find( '.textarea-form-test' );
                $content_descr.attr( 'id', $content_descr.attr( 'id' ).replace( '_0_', '_' + count + '_' ) );
                $content_descr.attr( 'name', $content_descr.attr( 'name' ).replace( '[0]', '[' + count + ']' ) );

                var $preview = tpl.find( '.preview_cover-form-test' );
                $preview.find( 'img' ).attr( 'class', 'js-edittest_' + (k+2) );
                $preview.find( '.title-preview_cover-form-test' ).attr( 'class', 'title-preview_cover-form-test js-edittest_' + k );

                link.attr( 'data-count', count + 1 );

                $this.remove();
                $parent.append( tpl );

                if ( count != 10) {
                    $parent.append( link );
                }
            })

            .on( 'tap', '.js-test-delete', function( e ) {
                e.preventDefault();

                var that = this;

                app.utils.ajax( 'test_destroy', { id: parseInt( that.getAttribute( 'data-tid' ) ) }, {
                    success: function() {
                        window.location.href = app.utils.route_url( 'publisher', { id: parseInt( that.getAttribute( 'data-pid' ) ) } );
                    }
                });
            })

        app.utils.file.connectTrigger( '.js-edittest-choose', '.js-edittest-choose_img' );

    });

})( window, jQuery );
