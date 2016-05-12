;(function($){
	var circles=$("#circles"),
		homepage_addtop=$("#homepage_addtop");
	circles.click(function(){
		if (homepage_addtop.height() == '98') {
			homepage_addtop.height('240');
			circles.children('span').removeClass('fa-chevron-down').addClass('fa-chevron-up');
		}else{
			homepage_addtop.height('98');
			circles.children('span').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		};
	})
})(jQuery)