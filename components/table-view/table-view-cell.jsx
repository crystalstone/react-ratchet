'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var cx = React.addons.classSet;
var FluxibleMixin = require('fluxible').Mixin;

var TableViewCell = React.createClass({
    mixins: [FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {

        var badge = this.props.badge
            ? <span className="badge">{this.props.badge}</span>
            : "";

        var classes = {
            'navigate-left': this.props.navigate === 'left',
            'navigate-right': this.props.navigate === 'right'
        };
        //render content
        return (
            <li className="table-view-cell">
                <NavLink className={cx(classes)} routeName={this.props.routeName}>{this.props.text}</NavLink>
            </li>
        );
    }
});

module.exports = TableViewCell;
