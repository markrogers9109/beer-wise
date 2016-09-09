angular.module('beerWise')
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('beer-one', {
                url: '/beer-one',
                templateUrl: 'views/beer-one.html'
            })
            .state('beer-two', {
                url: '/beer-two',
                templateUrl: 'views/beer-two.html'
            })
            .state('beer-three', {
                url: '/beer-three',
                templateUrl: 'views/beer-three.html'
            });
