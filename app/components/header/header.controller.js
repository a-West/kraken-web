export default class HeaderController {
    constructor($mdSidenav, $rootScope, $state, ) {
        'ngInject';
        this.$mdSidenav = $mdSidenav;
        this.$state = $state; 
    }
    //TODO: display cart icon even when not logged in
    $onInit() {
    
    }

    loginClick() {
    }


    toggleSideNav() {
        this.$mdSidenav('left').toggle();
    }

    cartClicked() {
    }
}