(function(window, $) {

    var root = {};

    $(function() {

        root.Shadow = new Module_Shadow();
        root.Menu = new Module_Menu();
        root.Signupblock = new Module_Signupblock();

    });

    window.root = root;

})(window, jQuery);
