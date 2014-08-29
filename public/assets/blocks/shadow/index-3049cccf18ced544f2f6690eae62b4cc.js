(function(window, $) {

    var
        app = window.app,
        className_hid = 'shadow_hid';

    function Shadow() {
        this.$block = $('.shadow');
    }

    Shadow.prototype = {};

    Shadow.prototype.show = function() {
        this.$block.removeClass(className_hid);
    };

    Shadow.prototype.hide = function() {
        this.$block.addClass(className_hid);
    };

    app.data.ModShadow = Shadow;

})(window, jQuery);
