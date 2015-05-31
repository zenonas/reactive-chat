import alt from '../alt';

class ChatServerActions {
  constructor() {
    this.generateActions('receiveCreatedMessage', 'receiveAll')
  }
}

export default alt.createActions(ChatServerActions)
