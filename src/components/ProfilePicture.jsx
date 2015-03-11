var ProfilePicture = React.createClass({
  render: function () {
    return (
      <img src={'assets/' + this.props.username + '.jpg'}/>
    );
  }
});