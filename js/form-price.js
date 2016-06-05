;(function($) {

	var price = $(".ws-form__price-val");

    function setPrice(sumAdd, item) {
    	var sum = +price.html();

    	if( item.prop('checked') ){
        	sum += sumAdd;
		} else {
			sum -= sumAdd;
		}
		price.html(sum);
    }

	$('.price-decor').click(function(e){
		var sumAdd = 350;
		setPrice(sumAdd, $(this));
    });

    $('.price-florist').click(function(e){
		var sumAdd = 250;
        setPrice(sumAdd, $(this));
    });

    $('.price-car').click(function(e){
		var sumAdd = 40;
        setPrice(sumAdd, $(this));
    });

    $('.price-photo').click(function(e){
		var sumAdd = 200;
        setPrice(sumAdd, $(this));
    });

    $('.price-music').click(function(e){
		var sumAdd = 250;
        setPrice(sumAdd, $(this));
    });

    $('.price-cake').click(function(e){
		var sumAdd = 100;
        setPrice(sumAdd, $(this));
    });


})(jQuery);
