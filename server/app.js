const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// customer routes
app.use(require("./route/customer/account"));
app.use(require("./route/customer/booking"));
app.use(require("./route/customer/cities"));
app.use(require("./route/customer/profile"));

// driver routes
app.use(require("./route/rider/account"));
app.use(require("./route/rider/booking"));

// Admin routes
app.use(require("./route/admin/account"));


// io.on('connection', function(socket){

// 	console.log('Connected');

// 	socket.on('msg_from_client', function(from,msg){
// 		console.log('Message is '+from, msg);
// 	})
// 	socket.on('disconnect', function(msg){
// 		console.log('Disconnected');
// 	})
// // });
// io.on('connection',(socket) =>{

//   console.log('User Connected');

//   socket.on('disconnect', ()=>{
//     console.log('User Disconnected')
//   })
// })

app.get("/", async (req, resp) => {
  resp.send("Welcome to MERU CABS");
});

module.exports = app;
