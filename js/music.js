;(function($) {

	var $videoPiano = $(".ws-menu_music-dropdown").parent().find('.ws-video');
    	$wVideoPiano = $(".ws-menu__video").width();

    $videoPiano.height( Math.round($wVideoPiano / 1.6) );

})(jQuery);

