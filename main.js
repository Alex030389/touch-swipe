'use strict';
// $('.list__text').css({'left': '-160px'});


$('.list__btn._red').on('click',function() {
	$(this).closest('.list__item').fadeOut(100);
})

$(".list__text").swipe({
  swipe:function(event, direction, distance, duration, fingerCount){
		// $(this).text("You swiped " + direction + " for " + distance + "px" );

		
		if(direction == 'left' && distance > 80) {
			$('.list__text').animate({'left': '0px'}, 200);
			$(this).animate({'left': '-160px'}, 300);
		}

		if(direction == 'right') {
			$(this).animate({'left': '0px'}, 300);
		}
  },
  nav:10
});