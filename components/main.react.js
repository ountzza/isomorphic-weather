var React = require('react');
var {RouteHandler, Link} = require('react-router');


var main = React.createClass({

    render: function() {
        return (
            <div>
                <ul>
                    <li><Link to="/bangkok">Bangkok</Link></li>
                    <li><Link to="/paris">Paris</Link></li>
                    <li><Link to="/tokyo">Tokyo</Link></li>
                    <li><Link to="/newyork">New York</Link></li>
                </ul>
                <h1> Hello React </h1>
                <RouteHandler />
            </div>
        );
    }

});

module.exports = main;
