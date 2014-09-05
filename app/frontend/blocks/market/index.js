(function( window, $ ) {

    var app = window.app;

    $(function() {

        var
            $market = $( '.market' ),
            $marketImgs = $market.find( 'img' ),
            imgcount = 0,
            imgcount_max = $marketImgs.size();

        $market
            .masonry({
                itemSelector: '.item-market',
                isLayoutInstant: true
            })

        $marketImgs
            .on( 'load', function() {
                imgcount++;

                if (imgcount == imgcount_max) {
                    $market.masonry();
                }
            });

        // var $market = document.querySelector( '.market' );

        // var msnry = new Masonry( $market, );

    });

})( window, jQuery );
