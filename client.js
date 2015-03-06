/**
 * The client JS file that brings in React and bootstraps the app into the page from the server state.
 */

var React = require('react');
var debug = require('debug');
var bootstrapDebug = debug('react-ratchet');
var app = require('./app');
var dehydratedState = window.App; // Sent from the server

window.React = React; // For chrome dev tool support
debug.enable('*');

bootstrapDebug('rehydrating app');
app.rehydrate(dehydratedState.Context, function( err, context ) {
    if ( err ) {
        throw err;
    }
    window.context = context;
    var mountNode = document.getElementById('app');

    bootstrapDebug('React Rendering');
    React.withContext(context.getComponentContext(), function() {
        React.render(app.getAppComponent()({
            context: context.getComponentContext()
        }), mountNode, function() {
            bootstrapDebug('React Rendered');
        });
    });

});
