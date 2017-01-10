import HeaderController from './header.controller';
export default {
  name: 'headerComponent',
      config: {
        template: require('./header.component.html'),
        controller: ['$mdSidenav', '$rootScope', '$state', HeaderController]
    }
};