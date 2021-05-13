$(document).ready(function(){
		$('.slider').slick({
			prevArrow: '<button type="button" class="slick-prev"><span class="icon-caretLeft"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="icon-caretRight"></span></button>',
			speed: 1200,
			dots: true,
			fade: true,
  			cssEase: 'linear',
			  responsive: [
				{
				  breakpoint: 681,
				  settings: {
					  arrows: false,
				  }
				}
			]  
		})
})
