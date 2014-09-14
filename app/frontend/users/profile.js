(function( window, $ ) {

    var app = window.app;

    var $parent, $lists,
        reuse = function() {
            $lists.each(function( n, item ) {
                list( $( item ) );
            });
        },
        list = function( $list ) {
            var
                $items = $list.find( '.full-list-cont-user > div' ),
                $pattern = $items.eq( 0 ),

                item_width = $pattern.outerWidth() + parseInt( $pattern.css( 'marginRight' ) ) + parseInt( $pattern.css( 'marginLeft' ) ),
                count_visible = Math.floor( $parent.width() / item_width ),
                list_width = count_visible * item_width,

                delta_width = -50;
                delta_height = 60;
                maxWidth = Math.min( list_width, item_width * $items.length ) + delta_width,
                maxHeight = delta_height;

            var
                height = 0,
                $elem = $pattern,
                n = 0;

            while ( $elem.length && n < count_visible ) {
                var elem_height = $elem.outerHeight();

                maxHeight += elem_height;

                height = elem_height;

                $elem = $elem.next();
                n++;
            }

            height += delta_height;

            $list.css( { maxWidth: maxWidth, maxHeight: maxHeight, height: height } )
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

    });

})( window, jQuery );
