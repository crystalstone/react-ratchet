'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var FluxibleMixin = require('fluxible').Mixin;

var Home = React.createClass({
    mixins: [FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {


        //render content
        return (
            <div className="inner-content">
                <h1>Profile</h1>
            </div>
        );
    }
});

module.exports = Home;
