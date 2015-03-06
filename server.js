/**
 * The server.js file is the main entry point for the application. The has the koa configuration
 */

require('node-jsx').install({extension: '.jsx'});
var koa = require('koa'),
    React = require('react'),
    serve = require('koa-static'),
    mount = require('koa-mount'),
    thunkify = require('thunkify-wrap'),
    stateHelper = require("./state/stateHelper"),
    navigateAction = require('flux-router-component').navigateAction;

var argv = require('minimist')(process.argv.slice(2));
console.log(argv);
//create our app
var server = koa();

//mount our static middleware
server.use(mount('/dist', serve(__dirname + '/dist', {defer: true})));

//register middleware
require('./middleware/logger')(server);

//index component
var HtmlComponent = React.createFactory(require('./components/html.jsx'));

//create our react-fluxible application
var app = require("./app");

server.use(mount("/", function *( next ) {

    //ignore api and static routes
    if ( this.path.startsWith("/dist") ) {
        return yield next;
    }

    var _this = this;

    // Per request/session
    var context = app.createContext();
    var actionContext = context.getActionContext();
    var executeAction = thunkify(actionContext.executeAction);

    // Execute navigation action
    try {
        yield executeAction(navigateAction, {url: _this.path});
    } catch ( err ) {
        if ( err.status === 404 ) {
            this.throw(404);
        }

        this.throw(500, 'Error happened.');
    }

    var AppComponent = app.getAppComponent();

    React.withContext(context.getComponentContext(), function() {

        var html = React.renderToStaticMarkup(HtmlComponent({
            title: "react-ratchet",
            state: stateHelper.shareState(app, context),
            markup: React.renderToString(AppComponent({
                context: context.getComponentContext()
            }))
        }));
        //set the body
        _this.body = html;

    });

    yield next;

}));

//start the server
var port = process.env.PORT || 3000;
server.listen(port);