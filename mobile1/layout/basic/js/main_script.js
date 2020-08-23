jQuery(document).ready(function() {
    /* 메인이미지가 1장 이상일때 실행   */
	jQuery(".swiper1 .swiper-wrapper").each(function(){
		var swiperslidelength = jQuery('.swiper-slide',this).length; 

		if ( swiperslidelength > 1 ) {
			var swiper1 = new Swiper('.swiper1', {
				spaceBetween: 0,
				slidesPerView: 1,
				loop:true,
				pagination: {
					el: '.swiper-pagination1',
					clickable: true,
				},
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
			});
		}
	});

	/*  메인 추천상품 배너 */
    var swiper2 = new Swiper('.main-swipe-roll', {
        slidesPerView: 'auto',
		autoHeight: true, //enable auto height		
        spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
        pagination: {
			el: '.pagination-main-roll',
			type: 'progressbar',
      },
    });
});

