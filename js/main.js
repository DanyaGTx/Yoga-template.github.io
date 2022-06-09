$(document).ready(function(){
	$('.about__popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});	
	
	$('.classes__section__slider').slick({
		infinite: false,
		lazyLoad: 'ondemand',
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="prev-arrow"><img src="../img/prev-arrow.svg" alt=""></button>', 
        nextArrow: '<button type="button" class="next-arrow"><img src="../img/next-arrow.svg" alt=""></button>',
		responsive: [
			{
			  breakpoint: 1291,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: false,
				arrows: false,
			  }
			},
			{
			  breakpoint: 851,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: false,
				
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				/*dots:true,
				focusOnSelect: true*/
			  }
			}
		  ]
	
	  });

	  $('.trial__section__gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
	 

	$('.menu__btn').on('click',function(){
        $('.header__menu-list').toggleClass('menu__list--active');
    });
});
