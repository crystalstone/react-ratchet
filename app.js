/**
 * The app JS defines our React application, registers any stores and does other configuration
 */

var React = require('react');
var FluxibleApp = require('fluxible');
var routrPlugin = require('fluxible-plugin-routr');

var app = new FluxibleApp({
    appComponent: React.createFactory(require('./components/application.jsx'))
});

//configure react routes using the fluxible router
app.plug(routrPlugin({
    routes: require('./routes/react_routes')
}));

//register our application store
app.registerStore(require('./stores/application_store'));
app.registerStore(require('./stores/page_store'));

//return
module.exports = app;
