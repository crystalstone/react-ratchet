'use strict';
var React = require('react');
var RouterMixin = require('flux-router-component').RouterMixin;
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var FluxibleMixin = require('fluxible').Mixin;

var Tab = React.createClass({
    mixins: [RouterMixin, FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {

        var cx = React.addons.classSet;
        var iconClasses = {
            'icon': true
        };
        iconClasses[this.props.iconClass] = true;

        var tabClasses = {
            'tab-item': true,
            'active':this.props.active
        };

        //render content
        return (
            <NavLink className={cx(tabClasses)} routeName={this.props.routeName}>
                <span className={cx(iconClasses)}></span>
                <span className="tab-label">{this.props.label}</span>
            </NavLink>

        );
    }
});

module.exports = Tab;
