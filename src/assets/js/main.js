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
		},2000);
	//* End of Preloader
	
		$photo = $('.c-main__photo');
		
		//$photo.addClass('js-first');
		
		setTimeout(function() {
			$photo.addClass('js-second');
		});
		
		setTimeout(function photoRemote() {
			$photo.removeClass('js-second');
		}, 4500);
		
		$photo.on('click', function() {
			$(this).addClass('js-first');
			setTimeout(function photoRemote() {
				$photo.removeClass('js-first');
			}, 1500);
		});
	
	$('.c-main__social').mouseover(function() {
		$('.h-first').removeClass('h-first');
		$('.h-last').removeClass('h-last');
	})
	
	//@@include('global/_global.js')
	//@@include('components/_components.js')
	
});
