'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var FluxibleMixin = require('fluxible').Mixin;

var TitleBarTitle = React.createClass({
    mixins: [FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {

        //render content
        return (
            <h1 className="title">{this.props.text}</h1>
        );
    }
});

module.exports = TitleBarTitle;
