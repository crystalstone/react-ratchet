'use strict';
var React = require('react');
var RouterMixin = require('flux-router-component').RouterMixin;
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var FluxibleMixin = require('fluxible').Mixin;
var TableView = require("./table-view/table-view");

var Settings = React.createClass({
    mixins: [RouterMixin, FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {

        var cells = [
            {text: "Airplane Mode", navigate: 'right'},
            {text: "Bluetooth", navigate: 'right'},
            {text: "Wi-Fi", navigate: 'right'},
            {text: "Cellular", navigate: 'right'}
        ];

        //render content
        return (
            <div>
                <TableView cells={cells} />
            </div>
        );
    }
});

module.exports = Settings;
