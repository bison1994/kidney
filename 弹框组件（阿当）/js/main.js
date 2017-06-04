require(["jquery", "window"], function ($, w) {
	$('.clickme').click(function () {
		var win = new w.window();
		win.alert({
			title:'删除订单',
			content:'您确认删除此订单吗？',
			width:380,
			callback:true
		});	
		// 用on方法添加其它函数
		// 新增的函数会在点击确定按钮时被触发
		// win.on("alert",function(){
		// 	alert("新添加的回调函数");
		// });
		// win.on("alert",function(){
		// 	alert("又新添加了回调函数");
		// });
	});
})