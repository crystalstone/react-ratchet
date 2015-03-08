'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var FluxibleMixin = require('fluxible').Mixin;
var Tab = require("./tab-bar-tab.jsx");

var TabBar = React.createClass({
    mixins: [FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {

        //render content
        return (
            <nav className="bar bar-tab">
                <Tab activeRoute={this.props.activeRoute} routeName="home" iconClass="icon-home" label="Home"/>
                <Tab activeRoute={this.props.activeRoute} routeName="profile" iconClass="icon-person" label="Profile"/>
                <Tab activeRoute={this.props.activeRoute} routeName="favorites" iconClass="icon-star-filled" label="Favorites"/>
                <Tab activeRoute={this.props.activeRoute} routeName="search" iconClass="icon-search" label="Search"/>
                <Tab activeRoute={this.props.activeRoute} routeName="settings" iconClass="icon-gear" label="Settings"/>
            </nav>
        );
    }
});

module.exports = TabBar;
