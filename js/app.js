$(document).foundation();

// $(window).scroll(function() {
// 	var st = $(this).scrollTop();

// 	$(".ws-parallax__text-wrapper").css({
// 		"transform" : "translate(0%, " + st / 2 + "%"
// 	})

// 	console.log(st);
// });

$(window).scroll(function() {
	var st = $(this).scrollTop();

	$(".ws-parallax__img").css({
		"transform" : "translateY(0%, " + st / 20 + "%"
	})

	console.log(st);
});
