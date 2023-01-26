// DOM queries
const chatList = document.querySelector(".chat-list");

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", "shaun");

// get chats and render
chatroom.getChat((data) => {
  chatUI.render(data);
});
