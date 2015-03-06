/**
 * A standard logger middleware for koa
 * @param app
 */
module.exports = function ( app ) {
    app.use ( function *( next ) {
        var start = new Date;
        yield next;
        var ms = new Date - start;
        console.log ( '%s %s - %s, %s', this.method, this.url, ms, this.response.status );
    } );
};