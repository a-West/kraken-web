import AppController from './app.controller';
export default{
    name: 'appComponent',
    config: {
        template: require('./app.component.html'),
        controller: [AppController]
    }
}
