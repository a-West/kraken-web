export default function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');


    $stateProvider
        .state('app', {
            abstract: true,
            template: '<app-component></app-component>'
        })
        .state('app.home', {
            url: '/',
            template: '<home-component></home-component>',
        })
      
      }