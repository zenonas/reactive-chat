class Chatmessage2Utils {
  static getCreatedMessageData(text) {
    var timestamp = Date.now()
    return {
      id: 'm_' + timestamp,
      threadID: 'foo',
      authorName: 'Bill', 
      date: new Date(timestamp),
      text: text,
      isRead: true
    }
  }
}

export default Chatmessage2Utils
