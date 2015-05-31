import React from 'react';
import MessageComposer from './message_composer';
import MessageListItem from './message_list_item';
import MessageStore from '../stores/message_store';
import ListenerMixin from 'alt/mixins/ListenerMixin';

class ChatWindow extends React.Component {
  mixins: [ListenerMixin]

  componentDidMount() {
    this._scrollToBottom();
    this.listenTo(MessageStore, this._onChange);
  }

  _getMessageListItem(message) {
    return (
      <MessageListItem
        key={message.id}
        message={message}
      />
    );
  }

  getInitialState() {
    return MessageStore.getAllForCurrentChannel();
  }

  render() {
    var messageListItems = this.state.messages.map(this._getMessageListItem);
    return (
      <div className="message-section">
        <ul className="message-list" ref="messageList">
          {messageListItems}
        </ul>
        <MessageComposer />
      </div>
    );
  }

  componentDidUpdate() {
    this._scrollToBottom();
  }

  _scrollToBottom() {
    var ul = this.refs.messageList.getDOMNode();
    ul.scrollTop = ul.scrollHeight;
  }

  _onChange() {
    this.setState(MessageStore.getAllForCurrentChannel());
  }
}

export default ChatWindow;
