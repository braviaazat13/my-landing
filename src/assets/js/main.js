/**
 * Section: jQuery
 */


$(function() {
	//* Preloader
		var $preloader = $('#page-preloader'),
			$spinner   = $preloader.find('.spinner');
		setTimeout(function() {
			$spinner.fadeOut();
			$preloader.delay(800).fadeOut('slow');
		},1800);
	//* End of Preloader
	
		$photo = $('.c-main__photo');
		
		$photo.addClass('js-first');
		
		setTimeout(function() {
			$photo.addClass('js-second');
		});
		
		$photo.on('click', function() {
			$(this).removeClass('js-second').addClass('js-third');
			setTimeout(function() {
				$photo.addClass('hidden');
			}, 1170);
		});
	
	$('.c-main__social').mouseover(function() {
		$('.h-first').removeClass('h-first');
		$('.h-last').removeClass('h-last');
	})
	
	//@@include('global/_global.js')
	//@@include('components/_components.js')
	
});
