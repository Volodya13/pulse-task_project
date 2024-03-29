$(document).ready(function(){
	// burger-menu
	function togglerBurgerMenu(item) {
		$(item).on('click', function() {
			$(this).toggleClass('burger-menu_active').siblings()
			.closest('div.container').find('.header').toggleClass('header_active');
			
		})
		
	}
	togglerBurgerMenu('.burger-menu')

	// slick-slider
	$('.carousel__inner').slick({
		speed: 1200,
		// adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../images/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../images/right.svg"></button>',
		responsive: [    {
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true
			},
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
			}
    }]
});
	// tabs
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});


	function toggleSlide(item) {	
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		})
	};
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
});
