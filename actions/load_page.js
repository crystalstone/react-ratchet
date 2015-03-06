'use strict';
var debug = require('debug')('react-ratchet:loadPageAction');

module.exports = function (context, payload, done) {
    debug('dispatching LOAD_PAGE', payload);
    context.dispatch('LOAD_PAGE', payload);
    done();
};