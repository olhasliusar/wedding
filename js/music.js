;(function($) {

	$(".ws-menu__video-piano").on("click", function(){
	    setTimeout(calcVideoHeight, 0.01);
	});

	function calcVideoHeight(){
    	var $videoPiano = $(".ws-video_piano"),
	    	$wVideoPiano = $videoPiano.width();

	    return $videoPiano.height( Math.round($wVideoPiano / 1.7) );
	}

})(jQuery);

