require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 5000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
//mongodb connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log("OOPS! database connection failed", err);
  });
  io.on('connection', (socket) => {
    console.log('a user connected');
  });
//server connection
app.listen(port, () => {
  console.log("Server is running on port:", port);
});
