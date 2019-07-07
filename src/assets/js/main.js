/**
 * Section: jQuery
 */

$(function() {
	
	$photo = $('.c-main__photo');
	
	setTimeout(function() {
		$photo.addClass('js-first')
	},2500);
	
	$photo.on('click', function() {
		$(this).removeClass('js-first').addClass('js-second');
		setTimeout(function() {
			$photo.addClass('hidden')
		},1170)
	})
	
	//@@include('global/_global.js')
	//@@include('components/_components.js')
	
});
