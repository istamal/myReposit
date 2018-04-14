$(function() {

	$('.carousel-present').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		dots: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000
	});

	$('.carousel-content').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		dots: false,
		items: 2,
		autoWidth: false
	});

});
