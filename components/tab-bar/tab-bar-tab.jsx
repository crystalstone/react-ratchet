'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var FluxibleMixin = require('fluxible').Mixin;

var Tab = React.createClass({
    mixins: [FluxibleMixin],
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
            'active': this.props.activeRoute.config.page.indexOf(this.props.routeName) === 0
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
