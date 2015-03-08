'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var FluxibleMixin = require('fluxible').Mixin;
var AnimateMixin = require('react-animate');

var TableView = require("./../table-view/table-view");
var Bluetooth = require('./settings_bluetooth');
var Settings = React.createClass({
    mixins: [FluxibleMixin, AnimateMixin],
    getInitialState: function() {
        return {};
    },
    componentWillReceiveProps:function(){

    },
    render: function() {

        var output;
        switch ( this.props.currentRoute.config.page ) {
            case 'settings':
                var cells = [
                    {text: "Airplane Mode", navigate: 'right'},
                    {text: "Bluetooth", navigate: 'right', routeName: "settings_bluetooth"},
                    {text: "Wi-Fi", navigate: 'right'},
                    {text: "Cellular", navigate: 'right'}
                ];
                output = <TableView currentRoute={this.props.currentRoute} cells={cells} />;
                break;
            case 'settings_bluetooth':
                output = <Bluetooth currentRoute={this.props.currentRoute}  />;
                break;
        }
        //render content
        return (
            <div>
                {output}
            </div>
        );
    }
});

module.exports = Settings;
