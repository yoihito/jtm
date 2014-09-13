(function( window, $ ) {

    var app = window.app;

    $(function() {

        var isProcessing = false,
            like_action = function( route, id, success ) {
                return app.utils.ajax( 'publisher_' + route, { id: parseInt( id ) }, {
                    success: function() {
                        success();
                    }
                });
            },
            like_action_dislike = function( id, $block ) {
                return like_action( 'dislike', id, function() {
                    isProcessing = 'act';

                    var $num = $block.find( 'b' );

                    $block
                        .find( 'a' ).addClass( '_hid' ).end()
                        .find( '.js-publisher-like' ).removeClass( '_hid' );
                    $num.text( parseInt( $num.text() ) - 1 );
                });
            },
            like_action_like = function( id, $block ) {
                return like_action( 'like', id, function() {
                    var $num = $block.find( 'b' );

                    $block
                        .find( 'a' ).addClass( '_hid' ).end()
                        .find( '.js-publisher-dislike' ).removeClass( '_hid' );
                    $num.text( parseInt( $num.text() ) + 1 );
                });
            },
            getBlock = function( btn ) {
                return $( btn ).closest( '.follow-publisher' );
            };

        $( document )
            .on( 'mouseover', '.js-publisher-liked', function() {
                getBlock( $( this ).addClass( '_hid' ) ).find( '.js-publisher-dislike' ).removeClass( '_hid' );
            })
            .on( 'mouseout', '.js-publisher-dislike', function() {
                if ( isProcessing != 'act' ) {
                    getBlock( $( this ).addClass( '_hid' ) ).find( '.js-publisher-liked' ).removeClass( '_hid' );
                } else {
                    isProcessing = '';
                }
            })
            .on( 'tap', '.js-publisher-dislike, .js-publisher-liked', function( e ) {
                e.preventDefault();

                like_action_dislike( this.getAttribute( 'rel' ), getBlock( this ) );
            })
            .on( 'tap', '.js-publisher-like', function( e ) {
                e.preventDefault();

                like_action_like( this.getAttribute( 'rel' ), getBlock( this ) );
            });
    });

})( window, jQuery );
