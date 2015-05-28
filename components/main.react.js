var React = require('react');
var RouteHandler = require('react-router').RouteHandler;


var main = React.createClass({

    render: function() {
        return (
            <div>
                <ul>
                    <li><a href="/bangkok">Bangkok</a></li>
                    <li><a href="/paris">Paris</a></li>
                    <li><a href="/tokyo">Tokyo</a></li>
                    <li><a href="/newyork">New York</a></li>
                </ul>
                <h1> Hello React </h1>
                <RouteHandler />
            </div>
        );
    }

});

module.exports = main;
