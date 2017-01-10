import HomeComponent from './home.component';

let HomeModule = angular.module('homeModule', [])
    .component(HomeComponent.name, HomeComponent.config);

export default HomeModule;