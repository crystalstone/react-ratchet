'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var FluxibleMixin = require('fluxible').Mixin;
var TitleBarTitle = require('./title-bar-title.jsx');

var TitleBar = React.createClass({
    mixins: [FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {

        var titleBarStyle = {
            backgroundColor: this.props.backgroundColor,
            color: this.props.color
        };
        //render content
        return (
            <header className="bar bar-nav" style={titleBarStyle}>
                <TitleBarTitle  text={this.props.activeRoute.config.label} />
            </header>
        );
    }
});

module.exports = TitleBar;
