$(document).ready(function() {
	
	//for wow animation
	new WOW().init();


	// For Slick Slider
	$('.slick-slider').slick({
		slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	  speed: 800,
	});

	// For Slick Client logos Slider
	$('.slick-one-slider').slick({
		slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  touchMove: false,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  // speed: 800,
	});

	//For location image changes
	$('[data-tabs]').on('click', function(){
		var value1 = $(this).attr('data-tabs');
		$('.tabs-img').removeClass('active');
		$('.tabs-img[data-image='+value1+']').addClass('active');
	})

});

//For Sticky header Animation
$(window).bind('scroll', function () {
    var navHeight = $(window).height() - 100;
    if ($(window).scrollTop() >= 100) {
        $('.navbar-default').addClass('on');
    } else {
        $('.navbar-default').removeClass('on');
    }
});