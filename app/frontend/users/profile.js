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
                list_width = Math.floor( $parent.width() / item_width ) * item_width,

                maxWidth = Math.min( list_width, item_width * $items.length ) - 50;

            $list.css( { maxWidth: maxWidth } )
        };

    $(function() {

        $parent = $( '.user' );
        $lists = $( '.list-cont-user' );

        reuse();

        var timer_resize;

        $( window ).on( 'resize', function() {
            clearTimeout( timer_resize );

            timer_resize = setTimeout(function() {
                reuse();
            }, 100);
        });

    });

})( window, jQuery );
