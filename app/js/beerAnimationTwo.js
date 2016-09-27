angular.module('beerWise')

.controller('beerAnimationTwo', function($animate){

    $animate.run('.beerAnimationTwo', function() {
        console.log('working');
        return {
            animate: function(element, done) {
                console.log('working');

                jQuery('.pourBeerTwo') //Pour Me Another Drink, Bartender!
                .delay(0)
                    .animate({
                        height: '22em'
                    }, 1500)
                    .delay(100)
                    .slideUp(2500);
                    console.log('working');
                jQuery('#liquidBeerTwo') // I Said Fill 'Er Up!
                    .delay(400)
                    .animate({
                        'background-color': '#edaf32',
                        border: '10px solid #edaf32',
                        top: '-36em',
                        bottom: '36em',
                        height: '22em'
                    }, 3600);
                jQuery('.beer-foamTwo') // Keep that Foam Rollin' Toward the Top! Yahooo!
                    .delay(3200)
                    .animate({
                        bottom: '33em',
                        opacity: '1'
                    }, 2300);
            }
        }
    });
});
