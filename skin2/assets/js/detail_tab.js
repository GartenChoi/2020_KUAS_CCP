jQuery(document).ready(function() {
	/* 상세페이지 상품정보 고정.   */
	jQuery('#infoArea_fixed').scrollToFixed({
		marginTop: 70,
		limit: function() {
			return jQuery('.viewline').offset().top - jQuery('#infoArea_fixed').outerHeight() - 70
		}
	});

	/* 상세페이지에 추가이미지가 있을경우에만 스와이프 실행.   */
	jQuery(".imgArea .swiper6 .swiper-wrapper").each(function(){
		var swiperslidelength = jQuery('.swiper-slide',this).length; 

		if ( swiperslidelength > 1 ) {
			setTimeout(function(){			
				/*  상세썸네일 세로값 고정 */
				jQuery(".imgArea .slide_box").show();

				/*  상세썸네일 추가이미지 롤링 */
				var swiper6 = new Swiper('.swiper6', {
					spaceBetween: 1,
					direction: 'vertical',
					slidesPerView: 'auto',
					navigation: {
						nextEl: '.swiper-button-next6',
						prevEl: '.swiper-button-prev6',
					},
				});
			}, 300);
		}
	});

	/* 상세페이지 아코디언에 내용이 없다면 해당영역 숨김.   */
	jQuery( "#accordion  ul > li" ).each(function( index ) {
		var none_text = jQuery('.section_wrap', this).text(); 

		if ( none_text != "" )  {
			jQuery(this).show();
		}
	});

	/* 상세페이지 쇼핑정보 아코디언.   */
	jQuery("#accordion ul > li > a").bind("click", function(e){
		if(jQuery(this).parent().has(".section_wrap")) {
			e.preventDefault();
			var he_size = jQuery(this).parents().find('.section_wrap').height();
			var fixed_top_size = jQuery("#infoArea_fixed").css("top").replace('px', ''); 
		}

		if(!jQuery(this).hasClass("open")) {
			jQuery("#accordion li .section_wrap").slideUp(350);
			jQuery("#accordion li a").removeClass("open");
			jQuery(this).next(".section_wrap").slideDown(350);
			jQuery(this).addClass("open");
			if(fixed_top_size > 71) { //쇼핑정보 클릭시 영역 넘어가지 않도록 위치 변경.   */
				jQuery("#infoArea_fixed").css("top", fixed_top_size - (he_size+50));
			}
		} else if(jQuery(this).hasClass("open")) {
			jQuery(this).removeClass("open");
			jQuery(this).next(".section_wrap").slideUp(350);
		}
	});
});



