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
		
		
		setTimeout(function photoRemote() {
			$photo.removeClass('js-second');
		}, 4500);
	
	//* Photo on click
		$photo.on('click', function() {
			if ($(this).hasClass('js-first')){
			// Can I leave this blank?
			}
			else {
				$(this).addClass('js-first');
			}
			
			setTimeout(function photoRemote() {
				$photo.removeClass('js-first');
			}, 670);
		});
		//* END of: Photo on click
	
	$('.c-main__social').mouseover(function() {
		$('.h-first').removeClass('h-first');
		$('.h-last').removeClass('h-last');
	})
	
	//@@include('global/_global.js')
	//@@include('components/_components.js')
	
});
