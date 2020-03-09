( function( $) {
	$( document ).ready( function() {
      	if($('.logos-slider').length>0) {
      		$('.logos-slider').owlCarousel({
				dots:false,
				lazyLoad: true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:5
					},
					1200:{
						items:7
					}
				},
				autoplay:true,
				autoplayHoverPause:true,
				autoplayTimeout:5000
			});
		}
		
		$('.mobile-nav-toggle').click(function(){
			$('.main-nav').toggleClass('active');
		});
		
		$("a[href^='#']").click(function(e) {
			e.preventDefault();
			var heightHeader = $('#header').outerHeight();
			var position = $($(this).attr("href")).offset().top;

			$("body, html").animate({
				scrollTop: position - heightHeader
			}, 1000 );
		});
	});
	$(window).on('load', function(){
		AOS.init();
		AOS.refresh();
	});
	// Header scroll class
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
		$('#header').addClass('header-scrolled');
		} else {
		$('#header').removeClass('header-scrolled');
		}
		AOS.refresh();
	});
})(jQuery);

