'use strict';
var React = require('react');
var RouterMixin = require('flux-router-component').RouterMixin;
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var FluxibleMixin = require('fluxible').Mixin;
var Tab = require("./tab-bar-tab.jsx");

var TabBar = React.createClass({
    mixins: [RouterMixin, FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {

        //render content
        return (
            <nav className="bar bar-tab">
                <Tab active={this.props.activeRoute.config.page === 'home'} routeName="home" iconClass="icon-home" label="Home"/>
                <Tab active={this.props.activeRoute.config.page === 'profile'} routeName="profile" iconClass="icon-person" label="Profile"/>
                <Tab active={this.props.activeRoute.config.page === 'favorites'} routeName="favorites" iconClass="icon-star-filled" label="Favorites"/>
                <Tab active={this.props.activeRoute.config.page === 'search'} routeName="search" iconClass="icon-search" label="Search"/>
                <Tab active={this.props.activeRoute.config.page === 'settings'} routeName="settings" iconClass="icon-gear" label="Settings"/>
            </nav>
        );
    }
});

module.exports = TabBar;
