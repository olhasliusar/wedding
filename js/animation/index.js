$(document).ready(function(){

    if( ($( window ).width()) >= 1200){

        var h = $(window).height();

        $(window).scroll(function(){
            if ( ($(this).scrollTop()+h) >= $("#index__before-welcome").offset().top) {

                var welcome1 = $("#index__welcome-item_1"),
                	welcome2 = $("#index__welcome-item_2"),
                	welcome3 = $("#index__welcome-item_3"),
                	welcome4 = $("#index__welcome-item_4"),
                	welcome5 = $("#index__welcome-item_5");
                TweenMax.staggerTo([welcome3, welcome1, welcome4, welcome2, welcome5], 1,  {scale:1, opacity:1}, 0.2);
            }

            if ( ($(this).scrollTop()+h) >= $("#index__before-cake-picture").offset().top) {

                var cake1 = $("#index__cake-picture_1"),
                	cake2 = $("#index__cake-picture_2"),
                	cake3 = $("#index__cake-picture_3"),
                	cake4 = $("#index__cake-picture_4");
                TweenLite.to(cake1,3, {left:"0", ease:Quint.easeOut});
                TweenLite.to(cake2,3, {left:"0", ease:Quint.easeOut});
                TweenLite.to(cake3,3, {right:"0", ease:Quint.easeOut});
                TweenLite.to(cake4,3, {right:"0", ease:Quint.easeOut});
            }

            if ( ($(this).scrollTop()+h) >= $("#index__before-testimonials").offset().top) {

                var testimonials1 = $("#index__testimonials_1"),
                	testimonials2 = $("#index__testimonials_2"),
                	testimonials3 = $("#index__testimonials_3");
                TweenMax.staggerTo([testimonials1, testimonials2, testimonials3], 1,  {scale:1, opacity:1}, 0.4);
            }

            if ( ($(this).scrollTop()+h) >= $("#index__before-advantage1").offset().top) {

                var advantage1 = $("#index__advantage_1"),
                	advantage2 = $("#index__advantage_2");
                TweenLite.to(advantage1,2, {top:"0", ease:Strong.easeOut});
                TweenLite.to(advantage2,2, {top:"0", ease:Strong.easeOut});
            }
            if ( ($(this).scrollTop()+h) >= $("#index__before-advantage2").offset().top) {

                var advantage3 = $("#index__advantage_3"),
                	advantage4 = $("#index__advantage_4");
                TweenLite.to(advantage3,2, {top:"0", ease:Strong.easeOut});
                TweenLite.to(advantage4,2, {top:"0", ease:Strong.easeOut});
            }

        });

    }

});
