(function( window, $ ) {

    var app = window.app;

    var $parent, $lists,
        reuse = function( $new_parent, $new_list ) {
            ($new_list || $lists).each(function( n, item ) {
                list( ($new_parent || $parent), $( item ) );
            });
        },
        list = function( $parent, $list ) {
            console.log( $list );

            var
                $items = $list.find( '.full-list-cont-user > div' ),
                $pattern = $items.eq( 0 ),

                item_width = $pattern.outerWidth() + parseInt( $pattern.css( 'marginRight' ) ) + parseInt( $pattern.css( 'marginLeft' ) ),
                count_visible = Math.floor( ($parent.innerWidth() + 50) / item_width ),
                list_width = count_visible * item_width,

                delta_width = -50;
                delta_height = 60;
                maxWidth = Math.min( list_width, item_width * $items.length ) + delta_width,
                maxHeight = 145;

            var
                height = [],
                $elem = $pattern,
                n = 0;

            while ( $elem.length && n <= count_visible -1 ) {
                var elem_height = $elem.outerHeight();

                height.push( elem_height );

                $elem = $elem.next();
                n++;
            }

            $elem = $pattern;
            n = 0;

            while ( $elem.length && n < 3 ) {
                maxHeight += $elem.outerHeight();

                $elem = $elem.next();
                n++;
            }

            height = Math.max.apply( null, height );
            height += delta_height;

            $list.css( { maxWidth: maxWidth, maxHeight: maxHeight, height: height } )

            var selector_elem = $list.attr( 'data-target-count' );

            if ( selector_elem ) {
                $( selector_elem ).text( count_visible || 1 );
            }

        };

    $(function() {

        $parent = $( '.user' );
        $lists = $( '.list-cont-user' );

        var
            $imgs = $( '.bg-test > img, .img-item-publishers' ),
            imgs_count = $imgs.length,
            counter = 0;

        $imgs.on( 'load', function() {
            counter++;

            if ( counter == imgs_count ) {
                reuse();
            }
        });

        var timer_resize;

        $( window ).on( 'resize', function() {
            clearTimeout( timer_resize );

            timer_resize = setTimeout(function() {
                reuse();
            }, 100);
        });

        app.blocks.users = {
            reuse: reuse
        };

    });

})( window, jQuery );
