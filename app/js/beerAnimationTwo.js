angular.module('beerWise')

.controller('beerAnimationTwo', function() {
  var vm = this;

      jQuery('.pour')
      .delay(0)
          .animate({
              height: '22em'
          }, 1500)
          .delay(100)
          .slideUp(2500);
      jQuery('#liquid2') // I Said Fill 'Er Up!
        .delay(2000)
          .animate({
              backgroundColor: '#F89F00',
              border: '10px solid #F89F00',
              top: '14em',
              bottom: '22em',
              height: '22em'
          }, 3600);

      jQuery('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
          .delay(3500)
          .animate({
              bottom: '41em',
              opacity: '1'
          }, 2300);  //Pour Me Another Drink, Bartender!

      jQuery('body').css('backgroundColor', 'rgba(255, 255, 255, .5)');
});
