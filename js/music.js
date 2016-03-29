;(function($) {

	$(".ws-menu__video-piano").on("click", function(){
	    var $videoPiano = $(".ws-video_piano"),
	    	$wVideoPiano = $videoPiano.width();

	    return $videoPiano.height( Math.round($wVideoPiano / 1.7) );
	});

})(jQuery);

