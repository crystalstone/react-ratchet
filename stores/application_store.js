'use strict';
var createStore = require('fluxible/utils/createStore');
var routesConfig = require('../routes/react_routes');

var ApplicationStore = createStore({
    storeName: 'ApplicationStore',
    handlers: {
        'CHANGE_ROUTE_SUCCESS': 'handleNavigate'
    },
    initialize: function( dispatcher ) {
        this.lastPageName = null;
        this.currentPageName = null;
        this.currentPage = null;
        this.currentRoute = null;
        this.pages = routesConfig;
    },

    handleNavigate: function( route ) {
        var pageName = route.config.page;
        var page = this.pages[pageName];
        this.lastPageName = this.currentPageName;
        if ( pageName === this.getCurrentPageName() ) {
            return;
        }
        this.currentPageName = pageName;
        this.currentPage = page;
        this.currentRoute = route;
        this.emitChange();
    },
    getCurrentPageName: function() {
        return this.currentPageName;
    },
    getState: function() {
        return {
            currentPageName: this.currentPageName,
            currentPage: this.currentPage,
            pages: this.pages,
            route: this.currentRoute,
            lastPageName: this.lastPageName
        };
    },
    dehydrate: function() {
        return this.getState();
    },
    rehydrate: function( state ) {
        this.currentPageName = state.currentPageName;
        this.currentPage = state.currentPage;
        this.pages = state.pages;
        this.currentRoute = state.route;
        this.lastPageName = state.lastPageName;

    }
});

module.exports = ApplicationStore;
