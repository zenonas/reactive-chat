import ChatMessageActionCreators from '../actions/chat_message_action_creators';
import React from 'react';

const ENTER_KEY_CODE = 13;

class MessageComposer extends React.Component {

  getInitialState() {
    return {text: ''};
  }

  render() {
    return (
      <textarea
        className="message-composer"
        name="message"
        value={this.state.text}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
      />
    );
  }

  _onChange(event, value) {
    this.setState({text: event.target.value});
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      var text = this.state.text.trim();
      if (text) {
        ChatMessageActionCreators.createMessage(text);
      }
      this.setState({text: ''});
    }
  }
}
