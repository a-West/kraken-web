import HomeController from './home.controller';
export default {
    name: 'homeComponent',
    config: {
        template: require('./home.component.html'),
        controller: ['kraken', HomeController]
    }
}