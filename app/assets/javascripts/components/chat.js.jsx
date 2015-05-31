import React from 'react';

class Chat extends React.Component {
  render() {
    return (
        <div>
          <h2>{this.props.channel.name}</h2>
          <h4>{this.props.channel.description}</h4>
        </div>
    );
  }
}

export default Chat;
