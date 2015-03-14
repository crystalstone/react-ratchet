'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
//actions
var navigateAction = require('flux-router-component').navigateAction;

var FluxibleMixin = require('fluxible').Mixin;
var TitleBarTitle = require('./title-bar-title');
var TitleBarButton = require('./title-bar-button');
var AnimateMixin = require('react-animate');

var TitleBar = React.createClass({
    mixins: [FluxibleMixin, AnimateMixin],
    getInitialState: function() {
        return {};
    },
    backClick: function() {
        this.animate(
            'remove-title', // animation name
            { opacity: 0 }, // initial style
            { opacity: 1 }, // final style
            1000, // animation duration (in ms)
            { easing: 'linear',
                onComplete:this.context.executeAction(navigateAction, {url: this.props.goBack})} // other options
        );
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
                <TitleBarTitle  text={this.props.activeRoute.config.label} position="center" style={this.getAnimatedStyle('remove-title')}/>
            </header>
        );
    }
});

module.exports = TitleBar;
