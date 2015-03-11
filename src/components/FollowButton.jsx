var FollowButton = React.createClass({

  handleClick() {
    this.setState({text: 'Unfollow'});
  },

  render() {
    return (
      <p onClick={this.handleClick} className={this.state ? 'unfollow' : 'follow'}>
        {this.state && this.state.text || 'Follow ' + this.props.username}
      </p>
    );
  }
});