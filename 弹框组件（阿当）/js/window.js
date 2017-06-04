define(["jquery"], function ($) {

	function window () {
		this.controller = {
			title:'提示',
			content:'您确定要进行此操作吗',
			width:400,
			height:240
		};
		this.handlers = {};
	};

	window.prototype = {
		alert: function (config) {
			var Controller = $.extend(this.controller, config);
		  this.popUpBox = $("<div class='popUpBoxBase'>"+
				"<div class='popUpBox'>"+
					"<div class='titleofbox'>" + Controller.title + "</div>"+
					"<div class='bodyofbox'>"+
					    "<div class='contentwrap'>"+
						    "<p class='contentofbox'>" + Controller.content + "</p>"+
						"</div>"+
					"</div>"+
					"<div class='footerofbox'>"+
						"<input type='button' class='confirm' value='确认'>"+
						"<input type='button' class='cancel' value='取消'>"+
					"</div>"+
				"</div>"+
			"</div>");

			this.render(Controller);
		},

		syncUI: function (Controller) {
			// 调整相关尺寸
			$('.bodyofbox').css('height', Controller.height - 100);
			// 设置宽和高
			$('.popUpBox').css({
				width: Controller.width + 'px',
				height: Controller.height + 'px'
			})
		},

		render: function (Controller) {
			this.popUpBox.appendTo("body").fadeIn();
			this.syncUI(Controller);
		},

		on: function (type, handler) {
			if (typeof this.handlers[type] == "undefined") {
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
		},

		fire: function (type, data) {
			if (this.handlers[type] instanceof Array) {
				var handlers = this.handlers[type];
				for (var i = 0; i < handlers.length; i++) {
					handlers[i](data);
				}
			}
		}
	}

	return {
		window: window
	}
})