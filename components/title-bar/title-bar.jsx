'use strict';
var React = require('react');
var RouterMixin = require('flux-router-component').RouterMixin;
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var FluxibleMixin = require('fluxible').Mixin;
var TitleBarTitle = require('./title-bar-title.jsx');

var TitleBar = React.createClass({
    mixins: [RouterMixin, FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {

        //render content
        return (
            <header className="bar bar-nav">
                <TitleBarTitle text={this.props.activeRoute.config.label} />
            </header>
        );
    }
});

module.exports = TitleBar;
