angular.module('beerWise')

.controller('beerAnimationOne', function() {
  var vm = this;

      jQuery('.pour')
      .delay(0)
          .animate({
              height: '30em'
          }, 1500)
          .delay(100)
          .slideUp(2500);
      jQuery('#liquid') // I Said Fill 'Er Up!
        .delay(2000)
          .animate({
              backgroundColor: '#edaf32',
              border: '10px solid #edaf32',
              top: '8em',
              bottom: '22em',
              height: '30em'
          }, 3600);


          if($(window).innerHeight() > 700){
            jQuery('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
              .delay(3750)
                .animate({
                bottom: '46em',
                opacity: '1'
            }, 1900);  //Pour Me Another Drink, Bartender!
          }
          else {
            jQuery('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
              .delay(4350)
                .animate({
                bottom: '39em',
                opacity: '1'
            }, 1500);  //Pour Me Another Drink, Bartender!
          }

      jQuery('body').css('backgroundColor', 'tomato');
});
