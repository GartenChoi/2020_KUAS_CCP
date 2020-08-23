jQuery(document).ready(function() {
	/* 상단메뉴 고정.   */
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 1) {
			jQuery(".header_fixed").addClass("fixed");
		} else {
			jQuery(".header_fixed").removeClass("fixed");
		}
	});

	/* 전체 게시판 적립금아이콘 수정   */
	jQuery('#mileage_icon a').html("적립금주기");
});
