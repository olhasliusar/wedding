
function showOrHideCar() {
    var $car = document.getElementById('checkCar');
    $height = parseFloat( $(".section-car").css("height") );

    if($car.checked == true){
        $(".section-car").addClass('section-car_show');
        $(".ws-after-checkbox_car").css('margin-top', $height);
        $(".label-car").css('border-color', "#fff");
    } else{
        $(".section-car").removeClass('section-car_show');
        $(".ws-after-checkbox_car").css('margin-top', '0');
        $(".label-car").css('border-color', "#e6e6e6");
    }
}

function showOrHidePhoto() {
    var $photo = document.getElementById('checkPhoto');
    $height = parseFloat( $(".section-photo").css("height") );

    if($photo.checked == true){
        $(".section-photo").addClass('section-photo_show');
        $(".ws-after-checkbox_photo").css('margin-top', $height);
        $(".label-photo").css('border-color', "#fff");
    } else{
        $(".section-photo").removeClass('section-photo_show');
        $(".ws-after-checkbox_photo").css('margin-top', '0');
        $(".label-photo").css('border-color', "#e6e6e6");
    }
}


