'use strict';
var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var debug = require('debug')('koaMongoReact:Application');
var FluxibleMixin = require('fluxible').Mixin;

//stores
var ApplicationStore = require('../stores/application_store');
var RouterMixin = require('flux-router-component').RouterMixin;

//actions
var navigateAction = require('flux-router-component').navigateAction;

//components
var Page = require('./page'),
    Home = require('./home'),
    Favorites = require('./favorites'),
    Profile = require('./profile'),
    Search = require('./search'),
    Settings = require('./settings'),
    TabBar = require('./tab-bar/tab-bar'),
    TitleBar = require('./title-bar/title-bar');

var Application = React.createClass({
    mixins: [RouterMixin, FluxibleMixin],
    statics: {
        storeListeners: [ApplicationStore]
    },
    getInitialState: function() {
        return this.getStore(ApplicationStore).getState();
    },
    onChange: function() {
        this.setState(this.getInitialState());
    },
    render: function() {

        var output = '';
        //choose the right page based on the route
        switch ( this.state.currentPageName ) {
            case 'home':
                debug("RENDERING " + this.state.currentPageName);
                output = <Home currentPage={this.state.currentPageName}/>;
                break;
            case 'favorites':
                debug("RENDERING " + this.state.currentPageName);
                output = <Favorites currentPage={this.state.currentPageName}/>;
                break;
            case 'settings':
                debug("RENDERING " + this.state.currentPageName);
                output = <Settings currentPage={this.state.currentPageName}/>;
                break;
            case 'profile':
                debug("RENDERING " + this.state.currentPageName);
                output = <Profile currentPage={this.state.currentPageName}/>;
                break;
            case 'search':
                debug("RENDERING " + this.state.currentPageName);
                output = <Search currentPage={this.state.currentPageName}/>;
                break;
            case 'page':
                debug("RENDERING page");
                output = <Page/>;
                break;
        }

        var cx = React.addons.classSet;
        var classes = {};
        var classSet = cx(classes);

        console.log(this.state);

        return (
            <div className={classSet}>
                <div>
                    <TitleBar activeRoute={this.state.route} backgroundColor="rgb(235, 140, 0)" color="#fff"/>
                    <div className="content-padded title-bar tab-bar">
                                  {output}
                    </div>
                    <TabBar activeRoute={this.state.route}/>
                </div>
            </div>
        );

    }
});

module.exports = Application;
