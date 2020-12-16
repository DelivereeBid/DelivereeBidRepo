const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const router = require("./router");
const err = require("./middlewares/errHandler");
const upload = require("./middlewares/upload");
const http = require("http").createServer(app);
// const io = require('socket.io')(http)
const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(err);

let rooms = [];
let isDuplicated = false;
let isSameUser = false;
let indexArr = 0;
let users = [];

const botName = "DeliverieeBid Bot";

/* istanbul ignore next */
io.on("connection", (socket) => {
  // socket.emit("your id", socket.id);

  //ALTERNATIVE 2 ==start==
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);
    console.log(user.room, "rooomz");
    socket.join(user.room);

    // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to DeliverieeBid!"));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);
    // messagesAlt2.push(formatMessage(user.username, msg))
    io.to(user.room).emit("message", formatMessage(user.username, msg));
    // io.to(user.room).emit('message', messagesAlt2);
  });

  //ALTERNATIVE 2 ==end==
});

http.listen(port, () => console.log(`server running: http://localhost:${port}`))

module.exports = app;
