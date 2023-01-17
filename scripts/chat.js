// adding new chat documents

// setting up a real-time listener to get new chats

// updating the username

// updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.Chats = db.collection("Chats");
  }

  async addChat(message) {
    // format a chat Object
    const now = new Date();
    const chat = {
      message: message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    // save the chat document
    const response = await this.Chats.add(chat);
    return response;
  }

  getChat(callback) {
    this.Chats.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          // update the UI
          callback(change.doc.data());
        }
      });
    });
  }
}

const chatroom = new Chatroom("gaming", "shaun");
// console.log(chatroom);
chatroom.getChat((data) => {
  console.log(data);
});
