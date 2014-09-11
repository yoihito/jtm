(function( window, $ ) {

    var app = window.app;

    app.utils.masonry = function( selector_list, selector_item, selector_img ) {

        var
            $list = $( selector_list ),
            $listImgs = $list.find( selector_img || 'img' ),
            imgcount = 0,
            imgcount_max = $listImgs.size();

        // $list
        //     .masonry({
        //         itemSelector: selector_item,
        //         transitionDuration: '.1s'
        //         // Switch off animation:
        //         // isLayoutInstant: true
        //     })

        $listImgs
            .on( 'load', function() {
                imgcount++;

                if (imgcount == imgcount_max) {
                    $list.masonry({
                        itemSelector: selector_item,
                        transitionDuration: '.1s'
                    });
                }
            });
    };

})( window, jQuery );
