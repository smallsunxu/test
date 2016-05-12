;(function($){
	var circles=$("#circles"),
		rc_mysql=$("#rc_mysql");
		right_center=$("#right_center");
	circles.click(function(){
		if (rc_mysql.height() == '250') {
			rc_mysql.height('500');
			right_center.height('570')
			circles.children('span').removeClass('fa-chevron-down').addClass('fa-chevron-up');
		}else{
			rc_mysql.height('250');
			right_center.height('348')
			circles.children('span').removeClass('fa-chevron-up').addClass('fa-chevron-down');
		};
	})
})(jQuery)