var React = require('react');
var Tanzaku = React.createClass({
  getInitalState: function() {
    return {data: []}
  },
  componentDidMount: function() {
    // xhr
  },
  render: function() {
    this.props.url = 'http://cyberjapandata.gsi.go.jp/xyz/' +
      this.props.name + '/mokuroku.csv.gz';
    return (
      <tr><td>{this.props.name}</td><td>{this.props.url}</td></tr>
    );
  }
});
var View = React.createClass({
  render: function() {
    return (
      <div>
        <h1>地理院タイル目録の目録</h1>
        <table>
        <tr><th>id</th><th>URL</th></tr>
        <Tanzaku name="std"/>
        <Tanzaku name="pale"/>
        <Tanzaku name="english"/>
        <Tanzaku name="ort"/>
        </table>
      </div>
    );
  }
});
module.exports = View
