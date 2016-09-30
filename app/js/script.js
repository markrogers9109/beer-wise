var $ = jQuery;


$(document).ready(function() {
    var wheelPosition = 45,
        wheelRotation = 45,
        imagePosition = -45;

    $('#Top').click(function() {
        if (wheelPosition === 45) {
            logoRotation(90);
        } else if (wheelPosition === 225) {
            logoRotation(-90);
        }
        else return;
    });

    $('#Right').click(function() {
        if (wheelPosition == 135) {
            logoRotation(-90);
        } else if (wheelPosition === 315) {
            logoRotation(90);
        } else return;
    });

    $('#Bottom').click(function() {
        if (wheelPosition === 45) {
            logoRotation(-90);
        } else if (wheelPosition === 225) {
            logoRotation(90);
        } else return;
    });

    $('#Left').click(function() {
        if (wheelPosition === 135) {
            logoRotation(90);
        } else if (wheelPosition === 315) {
            logoRotation(-90);
        } else return;
    });

    function logoRotation(direction) {
        wheelRotation += direction;
        imagePosition -= direction;

        if (wheelPosition === 45 && direction == 90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 135;
        } else if (wheelPosition === 45 && direction == -90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 315;
        } else if (wheelPosition === 135 && direction == 90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 225;
        } else if (wheelPosition === 135 && direction == -90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 45;
        } else if (wheelPosition === 225 && direction == 90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 315;
        } else if (wheelPosition === 225 && direction == -90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 135;
        } else if (wheelPosition === 315 && direction == 90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 45;
        } else if (wheelPosition === 315 && direction == -90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 225;
        }
    }


});
