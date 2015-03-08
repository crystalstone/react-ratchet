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
            'pull-left': this.props.position === 'left',
            'pull-right': this.props.position === 'right'
        };
        var classSet = cx(classes);

        //render content
        return (
            <button className={classSet}>
                 {this.props.text}
            </button>
        );
    }
});

module.exports = TitleBarButton;
