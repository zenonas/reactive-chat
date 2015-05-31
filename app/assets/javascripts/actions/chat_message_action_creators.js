import alt from '../alt';
import ChatAPIUtils from '../utils/chat_api_utils';
import ChatMessageDataUtils from '../utils/chat_message_data_utils';

class ChatMessageActions {
  createMessage(text) {
    this.dispatch(text)

    var message = ChatMessageDataUtils.getCreatedMessageData(text)
    ChatAPIUtils.createMessage(message)
  }
}
export default alt.createActions(ChatMessageActions)
