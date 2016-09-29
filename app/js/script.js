var $ = jQuery,
    wheelPosition = 0,
    wheelRotation = 0,
    imagePosition = 0;

$(document).ready(function() {

    $('#Top').click(function() {
        if (wheelPosition === 0) {
            logoRotation(90);
        } else if (wheelPosition == 180) {
            logoRotation(-90);
        } 
    });

    $('#Right').click(function() {
        if (wheelPosition == 90) {
            logoRotation(-90);
        } else if (wheelPosition === 270) {
            logoRotation(90);
        } else return;
    });

    $('#Bottom').click(function() {
        if (wheelPosition === 0) {
            logoRotation(-90);
        } else if (wheelPosition == 180) {
            logoRotation(90);
        } else return;
    });

    $('#Left').click(function() {
        if (wheelPosition == 90) {
            logoRotation(90);
        } else if (wheelPosition == 270) {
            logoRotation(-90);
        } else return;
    });

    function logoRotation(direction) {
        wheelRotation += direction;
        imagePosition -= direction;

        if (wheelPosition === 0 && direction == 90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 90;
        } else if (wheelPosition === 0 && direction == -90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 270;
        } else if (wheelPosition === 90 && direction == 90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 180;
        } else if (wheelPosition === 90 && direction == -90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 0;
        } else if (wheelPosition === 180 && direction == 90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 270;
        } else if (wheelPosition === 180 && direction == -90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 90;
        } else if (wheelPosition === 270 && direction == 90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 0;
        } else if (wheelPosition === 270 && direction == -90) {
            $('.beer--logos').css('transform', 'rotate(' + imagePosition + 'deg)');
            $('#Nav').css('transform', 'rotate(' + wheelRotation + 'deg)');
            wheelPosition = 180;
        }
    }


});
