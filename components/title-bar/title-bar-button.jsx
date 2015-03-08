'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var FluxibleMixin = require('fluxible').Mixin;

var TitleBarButton = React.createClass({
    mixins: [FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {

        var cx = React.addons.classSet;
        var classes = {
            'btn': true,
            'btn-nav': true,
            'btn-link': true,
            'pull-left': this.props.position === 'left',
            'pull-right': this.props.position === 'right'
        };

        //render content
        return (
            <button className={cx(classes)} onClick={this.props.action}>
                <span className="icon icon-left-nav"></span>
                 {this.props.text}
            </button>
        );
    }
});

module.exports = TitleBarButton;
