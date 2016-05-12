;(function($){
	var circles=$("#circles"),
		homepage_module=$("#homepage_module");
	circles.click(function(){
		if (homepage_module.height() == '120') {
			homepage_module.height('240');
			circles.children('span').removeClass('fa-chevron-down').addClass('fa-chevron-up');
		}else{
			homepage_module.height('120');
			circles.children('span').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		};
	})
})(jQuery)