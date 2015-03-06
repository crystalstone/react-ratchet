'use strict';
var React = require('react');
var RouterMixin = require('flux-router-component').RouterMixin;
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var FluxibleMixin = require('fluxible').Mixin;
var TableViewCell = require('./table-view-cell');
var TableViewDivider = require('./table-view-divider');

var TableView = React.createClass({
    mixins: [RouterMixin, FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {

        var items = this.props.cells.map(function( c, idx ) {
            if ( c.type === 'divider' ) {
                return <TableViewDivider key={idx} text={c.text} navigate={c.navigate} badge={c.badge}/>
            } else {
                return <TableViewCell key={idx} text={c.text} navigate={c.navigate} badge={c.badge}/>
            }
        });

        //render content
        return (
            <ul className="table-view">
                {items}
            </ul>
        );
    }
});

module.exports = TableView;
