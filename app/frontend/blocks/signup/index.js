(function($) {

    var
        className_hid = 'signup_hid';

    function Mod() {
        this.$block = $('.signup');

        this.addEventListeners();

        this.Shadow = new window.app.data.ModShadow();

        if ( $('#inpt_checkbox-signup').is(':checked') ) {
            $('.inpt_paswd-signup').prop('type', 'text');
        }
    }

    Mod.prototype = {};

    Mod.prototype.show = function() {
        this.$block.removeClass(className_hid);
        this.Shadow.show();
        // $('html').addClass('_overhid');
    };

    Mod.prototype.hide = function() {
        this.$block.addClass(className_hid);
        this.Shadow.hide();
        // $('html').removeClass('_overhid');
    };

    Mod.prototype.addEventListeners = function() {
        var Mod = this;

        $(document)
            .on('tap.signup', '.js-signup-show', function(e) {
                e.preventDefault();

                Mod.show();

                Mod.Shadow.$block.on('tap.signup', function(e) {
                    e.preventDefault();

                    Mod.hide();
                });
            })
            .on('tap.signup', '.js-signup-hide', function(e) {
                e.preventDefault();

                Mod.hide();
            })
            .on('change', '#inpt_checkbox-signup', function(e) {
                var type = $(this).is(':checked') ? 'text' : 'password';

                $('.inpt_paswd-signup').prop('type', type);
            })
    };

    $(function() {
        new Mod();
    });

})(jQuery);
