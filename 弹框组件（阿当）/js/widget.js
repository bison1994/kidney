define(['jquery'], function ($) {
	function widget () {
		this.popbox = null;
	}

	widget.prototype = {
		on: function () {

		},
		fire: function () {

		},

		render: function () {

		},
		destroy: function () {
			this.beforeDestroy;
		},

		renderUI: function () {},
		bindUI: function () {},
		syncUI: function () {},
		beforeDestroy: function () {}
	}

	return {
		widget: widget
	}
})