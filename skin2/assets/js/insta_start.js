jQuery(document).ready(function() {	
	setTimeout(function(){
		var instafeed_now = jQuery('#instagramWidgetManual iframe').html();

		/* 인스타그램이 없다면 실행 */
		if ( instafeed_now != false )  {
			jQuery('.main_insta_box').html('<img src="/images/insta_bg.jpg" style="width:100%;margin-top:20px;">');
		}
	}, 500);
});

