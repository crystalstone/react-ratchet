'use strict';
var React = require('react');
var RouterMixin = require('flux-router-component').RouterMixin;
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var FluxibleMixin = require('fluxible').Mixin;

var Settings = React.createClass({
    mixins: [RouterMixin, FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {


        //render content
        return (
            <div>
                <h1>Settings</h1>
            </div>
        );
    }
});

module.exports = Settings;
