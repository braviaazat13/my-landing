/**
 * Section: jQuery
 */


$(function() {
	
	$(window).on('load', function () {
		var $preloader = $('#page-preloader'),
			$spinner   = $preloader.find('.spinner');
		setTimeout(function() {
			$spinner.fadeOut();
			$preloader.delay(800).fadeOut('slow');
		},1800)
	});
	
		$photo = $('.c-main__photo');
		
		$photo.addClass('js-first');
		
		setTimeout(function() {
			$photo.addClass('js-second');
		}, 2500);
		
		$photo.on('click', function() {
			$(this).removeClass('js-second').addClass('js-third');
			setTimeout(function() {
				$photo.addClass('hidden');
			}, 1170);
		});
	
	//@@include('global/_global.js')
	//@@include('components/_components.js')
	
});
