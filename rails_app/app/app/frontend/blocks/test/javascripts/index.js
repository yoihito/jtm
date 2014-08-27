(function( window, $ ) {

    var store = [];

    var TestController = {

        constructor: function() {
            this.startApp();
        },

        startApp: function() {
            var that = this;

            $(function() {
                $(document)
                    .on( 'tap', '.js-test-answ', function(e) {
                        that.newAnswer.call(this, e, that);
                    });
            });
        },

        newAnswer: function(e, that) {
            e.preventDefault();

            var
                $this = $(this),
                type = _.parseInt($this.attr('rel'));

            store.push(type);

            that.nextSlide($this, $this.closest('.slide').index());
        },

        nextSlide: function($slideAnsw, currentIndex) {
            var
                $slides = $slideAnsw.closest('.list-test').find('.slide'),
                $currentSlide = $slides.eq(currentIndex);

            if ($currentSlide.next().is('.slide')) {
                $currentSlide.addClass('slide_hid');
                $currentSlide.next().removeClass('slide_hid');
            } else {
                this.finish( $slideAnsw.closest('.test') );
            }
        },

        finish: function( $test ) {
            var testId = _.parseInt( $test.data('id') );

            window.Models.Test.save( { store: store, testId: testId }, function() {
                window.location.href = utils.routeParse( routes.test.saveAfter, { id: testId } );
            });
        }

    };

    window.Controller.create( 'Test', TestController );

})( window, jQuery );
