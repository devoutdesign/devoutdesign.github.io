
var mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))? true : false;

$(document).ready(function(){

	// Smooth scrolling
	$('.navbar-nav a, .go-to-arrow a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	// Scroll to top
	// Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	
	// Click event to scroll to top
	$('.scrollup').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	// When section is inview, add class to trigger animations
	if(!mobile) {
		$('.inview-trigger').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
			if (isInView) {
				$(this).addClass('inview');
			} 
		});
	} else {
		$('.inview-trigger').addClass('inview');
	}
});