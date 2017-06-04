/*
*  依赖jQuery
*  可以设置多层。html中的排列次序越往后，z-index值越大
*  可以用一个数组设置每一层跟随鼠标移动的偏移程度，偏移程度由1~5的整数表示，值越大，移动偏移量越大,必填
*  可以用一个数组设置每一层的移动方向，数据类型为布尔值，true表示和鼠标位移同向，false则表示逆向，必填
*  图片建议用背景图
*/

function parallax(){
	this.options = {
		offsetdegree:'',
		derection:''
	}	
};

parallax.prototype = {

	ini: function(config){

		var opts = $.extend(this.options,config);

		var w = $("#parallaxContainer").width()/2;
		var h = $("#parallaxContainer").height()/2;

		// parallaxContainer相对于页面的坐标
		var pos = $("#parallaxContainer").offset();
		var X = pos.left;
		var Y = pos.top;

		// 获取“层”的top和left偏移量
		var top = parseInt($('#parallaxContainer>div').first().css('top'));
		var left = parseInt($('#parallaxContainer>div').first().css('left'));

		$("#parallaxContainer").mousemove(function(event){

			// 获取鼠标相对于parallaxContainer的坐标
			var x = event.pageX - X;
			var y = event.pageY - Y;

			// 设置每一层的偏移量
			var i = 0;
			$(this).children().each(function(){
				if(opts.derection[i]){
					// 获得该层水平及垂直方向的偏移量
					var offsetX = 0.04 * (x - w) * opts.offsetdegree[i];
					var offsetY = 0.04 * (y - h) * opts.offsetdegree[i];					
					// 设置层的偏移
					$(this).css({"top":top+offsetY+"px","left":left+offsetX+"px"});
				}else{
					// 获得该层水平及垂直方向的偏移量
					var offsetX = 0.04 * (x - w) * opts.offsetdegree[i];
					var offsetY = 0.04 * (y - h) * opts.offsetdegree[i];					
					// 设置层的偏移
					$(this).css({"top":top-offsetY+"px","left":left-offsetX+"px"});
				}
				i++;
			});
		});

		

	} // function ini() end
} // prototype end