$(document).ready(function(){

    if( ($( window ).width()) >= 1200){

        var h = $(window).height();

        $(window).scroll(function(){
            if ( ($(this).scrollTop()+h) >= $("#decor__before-consultation").offset().top) {

                var consultation = $(".ws-consultation__text");
                TweenLite.to(consultation,3, {top:"0", left:"0", ease:Strong.easeOut});
            }

            if ( ($(this).scrollTop()+h) >= $("#decor__before-decoration").offset().top) {

                var decor1 = $(".ws-decor__item_1"),
                    decor2 = $(".ws-decor__item_2"),
                    decor3 = $(".ws-decor__item_3"),
                    decor4 = $(".ws-decor__item_4"),
                    decor5 = $(".ws-decor__item_5"),
                    decor6 = $(".ws-decor__item_6"),
                    decor7 = $(".ws-decor__item_7"),
                    decor8 = $(".ws-decor__item_8"),
                    decor9 = $(".ws-decor__item_9");
                TweenMax.staggerTo(
                    [decor1, decor2, decor3, decor6, decor5, decor4, decor7, decor8, decor9],
                    1, {scale:1, opacity:1}, 0.3);
            }

            if ( ($(this).scrollTop()+h) >= $("#decor__before-information").offset().top) {

                var information = $(".ws-information__text");
                TweenLite.to(information,3, {top:"0", left:"0", ease:Strong.easeOut});
            }

            if ( ($(this).scrollTop()+h) >= $("#decor__before-services").offset().top) {

                var service = $(".ws-service__item");
                TweenLite.to(service,3, {top:"0", ease:Strong.easeOut});
            }

        });

    }

});
