'use strict';
$('.list__btn._red').on('click',function() {
	$(this).closest('.list__item').fadeOut(200);
})

touchSwipe();

$(window).resize(function() {
	touchSwipe();	
})

function touchSwipe() {
	if($(window).width() < 576) {

		$(".list__text").swipe({
			swipeLeft:function() {
				$('.list__text').not(this).removeClass('_open');
				$(this).addClass('_open');		
			},
			swipeRight:function() {
				$(this).removeClass('_open');
			},
			threshold: 50,
		});
	} else {
		$('.list__text').each(function(indx, element) {
			$('.list__text').eq(indx).swipe('destroy');
		});
	}
}
