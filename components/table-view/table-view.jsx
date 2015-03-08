'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var FluxibleMixin = require('fluxible').Mixin;
var TableViewCell = require('./table-view-cell');
var TableViewDivider = require('./table-view-divider');

var TableView = React.createClass({
    mixins: [FluxibleMixin],
    getInitialState: function() {
        return {};
    },
    render: function() {

        var items = this.props.cells.map(function( c, idx ) {
            if ( c.type === 'divider' ) {
                return <TableViewDivider key={idx} text={c.text} navigate={c.navigate} badge={c.badge} />
            } else {
                return <TableViewCell key={idx} text={c.text} navigate={c.navigate} badge={c.badge} routeName={c.routeName}/>
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
