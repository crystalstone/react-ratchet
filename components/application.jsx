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
    Settings = require('./settings/settings'),
    TabBar = require('./tab-bar/tab-bar'),
    TitleBar = require('./title-bar/title-bar');

var Application = React.createClass({
    mixins: [RouterMixin, FluxibleMixin],
    statics: {
        storeListeners: [ApplicationStore]
    },
    componentDidMount: function() {
        FastClick.attach(document.body);
    },
    getInitialState: function() {
        return this.getStore(ApplicationStore).getState();
    },
    onChange: function() {
        this.setState(this.getInitialState());
    },
    matchRoute: function( name ) {
        return this.state.currentPageName === name || this.state.currentParentPage && this.state.currentParentPage.indexOf(name) === 0;
    },
    render: function() {
        var output = '';

        if ( this.matchRoute('home') ) {
            output = <Home  currentRoute={this.state.route}/>;
        }
        if ( this.matchRoute('favorites') ) {
            output = <Favorites currentRoute={this.state.route}/>;
        }
        if ( this.matchRoute('settings') ) {
            output = <Settings currentRoute={this.state.route}/>;
        }
        if ( this.matchRoute('profile') ) {
            output = <Profile currentRoute={this.state.route}/>;
        }
        if ( this.matchRoute('search') ) {
            output = <Search currentRoute={this.state.route}/>;
        }

        var cx = React.addons.classSet;
        var classes = {};
        var classSet = cx(classes);

        return (
            <div className={classSet}>
                <div>
                    <TitleBar activeRoute={this.state.route} backgroundColor="rgb(235, 140, 0)" color="#fff"/>
                    <div className="content title-bar tab-bar">
                        {output}
                    </div>
                    <TabBar activeRoute={this.state.route}/>
                </div>
            </div>
        );

    }
});

module.exports = Application;
