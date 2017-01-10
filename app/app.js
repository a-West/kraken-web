import angular from 'angular';
import 'angular-animate';
import 'angular-aria';

import '../public/app.css';

// use custom version until ngMaterial supports spinners in IE9
import 'angular-material';
import 'angular-ui-router';
import ngResource from 'angular-resource';

import Config from './config/config';
import routes from './routes';

import HeaderComponent from './components/header/header.component';
import AppComponent from './app.component';
import './components/home/home.module';
import './services/services.module';

//testing
let app = angular
    .module('app', [
        'ngMaterial'
        , 'ngResource'
        , 'ui.router'
        , 'servicesModule'
        , 'homeModule'])
    .component(AppComponent.name, AppComponent.config)
        .component(HeaderComponent.name, HeaderComponent.config)
    
    .constant('config', new Config())
    .config(['$mdThemingProvider', ($mdThemingProvider) => {
        $mdThemingProvider.theme('default')
            .primaryPalette('green') // I like green, but just me
            .dark();
    }])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', routes])

export default app;