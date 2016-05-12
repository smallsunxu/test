;(function($){
	var circles=$("#circles"),
		apply_bot=$("#apply_bot");
		apply_extend=$("#apply_extend")
	circles.click(function(){
		if (apply_bot.height() == '732') {
			apply_bot.height('1075');
			circles.children('span').removeClass('fa-chevron-down').addClass('fa-chevron-up');
			apply_extend.show();
		}else{
			apply_bot.height('732');
			circles.children('span').removeClass('fa-chevron-up').addClass('fa-chevron-down');
			apply_extend.hide();
		};
	})
})(jQuery)