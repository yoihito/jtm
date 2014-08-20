(function($) {

	var
		className_hid = 'signup_hid';

	function Mod() {
		this.$block = $('.signup');

		this.addEventListeners();

		this.Shadow = window.root.Shadow;
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
	};

	window.Module_Signupblock = Mod;

})(jQuery);
