angular.module('beerWise')

.controller('beerAnimationTwo', function() {
  var vm = this;

      jQuery('.pour')
      .delay(0)
          .animate({
              height: '30em'
          }, 1500)
          .delay(100)
          .slideUp(2500);
      jQuery('#liquid2') // I Said Fill 'Er Up!
        .delay(2000)
          .animate({
              backgroundColor: 'red',
              border: '10px solid #edaf32',
              top: '8em',
              bottom: '22em',
              height: '30em'
          }, 3600);

      jQuery('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
          .delay(4000)
          .animate({
              bottom: '39em',
              opacity: '1'
          }, 2300);  //Pour Me Another Drink, Bartender!
});
