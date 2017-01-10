import angular from 'angular';
import KrakenService from './kraken.service';


let ServicesModule = angular.module('servicesModule', ['ngResource'])
.service('kraken', [KrakenService])
export default ServicesModule;