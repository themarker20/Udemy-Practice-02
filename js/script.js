(function ($){

	var typed = new Typed('span.txt-rotate', {
		strings: ["I'm a Web Designer.", "I'm a Video Editor.", "I'm a Content Creator."],
		typeSpeed: 100,
		backSpeed: 100,
		fadeOut: false,
		smartBackspace: true,
		loop: true
	});

})(jQuery);

// Work Scetion (popup & add class)
$(document).ready(function() {

		$('.projects-wrapper').isotope({
			filter: '*',
			layoutMode: 'masonry'
		});

		$('.list-filter a').click(function() {
			var selector = $(this).attr('data-filter');
			$('list-filter a').removeClass('.active');
			$(this).addClass('active');
			$('.projects-wrapper').isotope({
				filter: selector
			});
			return false;
		});

		$('.popup-image').magnificPopup({
			type: 'image',
			closeOnContentclick: true,
			gallery: {
				enabled: true,
				navigateByImgClick: true
			}
		});

});

// Testimonials
$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: true,
        nav: false,
        margin: 50,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 }
        }
    });
});