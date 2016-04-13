$(document).ready(function(){

    if( ($( window ).width()) >= 1200){

        var h = $(window).height();

        $(window).scroll(function(){
            if ( ($(this).scrollTop()+h) >= $("#cakes__before-pricing").offset().top) {

                var pricing = $(".cake-pricing__table");
                TweenLite.to(pricing,3, {top:"0", ease:Strong.easeOut});
            }

            // if ( ($(this).scrollTop()+h) >= $("#cakes__before-gallery").offset().top) {

            //     var cake1 = $("#cakes__gallery_1"),
            //         cake2 = $("#cakes__gallery_2"),
            //         cake3 = $("#cakes__gallery_3"),
            //         cake4 = $("#cakes__gallery_4"),
            //         cake5 = $("#cakes__gallery_5"),
            //         cake6 = $("#cakes__gallery_6");
            //     TweenLite.to(cake1,3, {left:"0", ease:Quint.easeOut});
            //     TweenLite.to(cake2,3, {left:"0", ease:Quint.easeOut});
            //     TweenLite.to(cake3,3, {left:"0", ease:Quint.easeOut});
            //     TweenLite.to(cake4,3, {right:"0", ease:Quint.easeOut});
            //     TweenLite.to(cake5,3, {right:"0", ease:Quint.easeOut});
            //     TweenLite.to(cake6,3, {right:"0", ease:Quint.easeOut});
            // }

        });

    }

});
