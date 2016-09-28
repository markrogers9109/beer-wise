angular.module('beerWise')

.controller('beerAnimationFour', function() {
  var vm = this;

      jQuery('.pour')
      .delay(0)
          .animate({
              height: '22em'
          }, 1500)
          .delay(100)
          .slideUp(2500);
      jQuery('#liquid4') // I Said Fill 'Er Up!
        .delay(2500)
          .animate({
              backgroundColor: '#777',
              border: '10px solid #edaf32',
              top: '14em',
              bottom: '22em',
              height: '22em'
          }, 3600);

      jQuery('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
          .delay(4300)
          .animate({
              bottom: '34em',
              opacity: '1'
          }, 2300);  //Pour Me Another Drink, Bartender!
});
