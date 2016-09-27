angular.module('beerWise')
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('beer-one', {
                url: '/beer-one',
                templateUrl: 'views/beer-one.html',
                animation: 'beerAnimationOne'
            })
            .state('beer-two', {
                url: '/beer-two',
                templateUrl: 'views/beer-two.html',
                controller: 'beerAnimationTwo'
            })
            .state('beer-three', {
                url: '/beer-three',
                templateUrl: 'views/beer-three.html',
                animation: 'beerAnimationThree'
            })
            .state('beer-four', {
                url: '/beer-four',
                templateUrl: 'views/beer-four.html',
                animation: 'beerAnimationFour'
            })
          })
