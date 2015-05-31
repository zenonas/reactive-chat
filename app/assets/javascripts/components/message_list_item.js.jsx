import React from 'react';

const ReactPropTypes = React.PropTypes;

class MessageListItem extends React.Component {

  propTypes: {
    message: ReactPropTypes.object
  }

  render() {
    var message = this.props.message;
    return (
      <li className="message-list-item">
        <h5 className="message-author-name">{message.author}</h5>
        <div className="message-time">
          {message.created_at.toLocaleTimeString()}
        </div>
        <div className="message-text">{message.text}</div>
      </li>
    );
  }
  
}
export default MessageListItem;
