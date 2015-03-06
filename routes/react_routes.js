var debug = require('debug')('react-ratchet:routes');

module.exports = {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        label: 'Home'
    },
    settings: {
        path: '/settings',
        method: 'get',
        page: 'settings',
        label: 'Settings'
    },
    favorites: {
        path: '/favorites',
        method: 'get',
        page: 'favorites',
        label: 'Favorites'
    },
    profile: {
        path: '/profile',
        method: 'get',
        page: 'profile',
        label: 'Profile'
    },
    search: {
        path: '/search',
        method: 'get',
        page: 'search',
        label: 'Search'
    },
    dynamicpage: {
        path: '/page/:id',
        method: 'get',
        page: 'page',
        action: function( context, payload, done ) {
            context.dispatch('LOAD_PAGE', {id: payload.params.id});
            done();
        }
    }
};
