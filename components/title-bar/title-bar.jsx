'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
//actions
var navigateAction = require('flux-router-component').navigateAction;

var FluxibleMixin = require('fluxible').Mixin;
var TitleBarTitle = require('./title-bar-title');
var TitleBarButton = require('./title-bar-button');

var TitleBar = React.createClass({
    mixins: [FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    backClick: function() {
        this.context.executeAction(navigateAction, {url: this.props.goBack});
    },
    render: function() {

        var titleBarStyle = {
            backgroundColor: this.props.backgroundColor,
            color: this.props.color
        };

        var leftItem = this.props.goBack ? <TitleBarButton position="left" action={this.backClick} text="Back"/> : "";
        var rightItem = "";
        //render content
        return (
            <header className="bar bar-nav" style={titleBarStyle}>
                  {leftItem}
                   {rightItem}
                <TitleBarTitle  text={this.props.activeRoute.config.label} />
            </header>
        );
    }
});

module.exports = TitleBar;
