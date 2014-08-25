(function($) {

    var
        className_hid = 'menu_hid';

    function Menu() {
        this.$block = $('.menu');

        this.addEventListeners();

        this.Shadow = window.root.Shadow;
    }

    Menu.prototype = {};

    Menu.prototype.show = function() {
        this.$block.removeClass(className_hid);
        this.Shadow.show();
        $('html').addClass('_overhid');
    };

    Menu.prototype.hide = function() {
        this.$block.addClass(className_hid);
        this.Shadow.hide();
        $('html').removeClass('_overhid');
    };

    Menu.prototype.addEventListeners = function() {
        var Menu = this;

        $(document)
            .on('tap.menu', '.js-menu-trigger', function(e) {
                e.preventDefault();

                Menu.show();

                Menu.Shadow.$block.on('tap.menu', function(e) {
                    e.preventDefault();

                    Menu.hide();
                });
            })
    };

    window.Module_Menu = Menu;

})(jQuery);
