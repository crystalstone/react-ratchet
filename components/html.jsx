'use strict';
var React = require('react');
var FluxibleMixin = require('fluxible').Mixin;

var Application = React.createClass({
    mixins: [FluxibleMixin],
    render: function() {
        //render content
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <title>{this.props.title}</title>
                    <link rel="shortcut icon" href="/dist/assets/images/favicon.ico" type="image/x-icon"></link>
                    <link rel="icon" href="/dist/assets/images/favicon.ico" type="image/x-icon"></link>
                    <link rel="stylesheet" href="/dist/assets/stylesheets/ratchet.css"> </link>
                    <link rel="stylesheet" href="/dist/assets/stylesheets/theme-ios.css"> </link>
                    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/dist/assets/images/apple-touch-icon-57x57.png"></link>
                    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/dist/assets/images/apple-touch-icon-114x114.png"></link>
                    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/dist/assets/images/apple-touch-icon-72x72.png"></link>
                    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/dist/assets/images/apple-touch-icon-144x144.png"></link>
                    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/dist/assets/images/apple-touch-icon-60x60.png"></link>
                    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/dist/assets/images/apple-touch-icon-120x120.png"></link>
                    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/dist/assets/images/apple-touch-icon-76x76.png"></link>
                    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/dist/assets/images/apple-touch-icon-152x152.png"></link>
                    <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                    <meta name="apple-mobile-web-app-status-bar-style" content="black"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"></meta>
                    <script type='application/javascript' src='/dist/js/fastclick.js'></script>
                </head>
                <body>
                    <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
                </body>
                <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
                <script src="/dist/js/client.js" defer></script>
            </html>
        );
    }
});

module.exports = Application;
