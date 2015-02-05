var React = require('react');
var Tanzaku = React.createClass({
  render: function() {
    var url = 'http://cyberjapandata.gsi.go.jp/xyz/' +
      this.props.name + '/mokuroku.csv.gz';
    return (
      <tr><td>{this.props.name}</td><td>{url}</td></tr>
    );
  }
});
var View = React.createClass({
  render: function() {
    return (
      <div>
        <h1>地理院タイル目録の目録</h1>
        <table border="1">
        <tr><th>id</th><th>URL</th></tr>
        <Tanzaku name="std"/>
        </table>
      </div>
    );
  }
});
module.exports = View
