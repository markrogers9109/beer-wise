angular.module('beerWise')
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/beer-wise');

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================

            .state('beer-wise', {
                url: '/beer-wise',
                templateUrl: 'views/beer-wise.html',
                controller: 'beerAnimationFour'
            })
            .state('beer-one', {
                url: '/beer-one',
                templateUrl: 'views/beer-one.html',
                controller: 'beerAnimationOne'
            })
            .state('beer-two', {
                url: '/beer-two',
                templateUrl: 'views/beer-two.html',
                controller: 'beerAnimationTwo'
            })
            .state('beer-three', {
                url: '/beer-three',
                templateUrl: 'views/beer-three.html',
                controller: 'beerAnimationThree'
            })
            // .state('beer-four', {
            //     url: '/beer-four',
            //     templateUrl: 'views/beer-four.html',
            //     controller: 'beerAnimationFour'
            // })
          })
