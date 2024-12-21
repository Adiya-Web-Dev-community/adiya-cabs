const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const carRoutes = require("./route/carRoutes");
const bikeRoutes = require("./route/bikeRoutes");
const cycleRoutes = require("./route/cycleRoutes");
const taxiRoutes = require("./route/taxiRoutes");


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
app.use(require("./route/customer/enquiry"));
app.use(require("./route/customer/partner"));
app.use(require("./route/customer/cars"));

// // driver routes
app.use(require("./route/rider/account"));
app.use(require("./route/rider/booking"));

// // Admin routes
app.use(require("./route/admin/account"));
app.use(require("./route/admin/dailyOffers"))
app.use(require("./route/admin/bankOffers"))
app.use(require("./route/admin/monthlyOffers"))
app.use(require("./route/admin/car"))
app.use(require('./route/admin/rental-bookings'))



// Use the routes
app.use("/api/cars", carRoutes);
app.use("/api/bikes", bikeRoutes);
app.use("/api/cycles", cycleRoutes);
app.use("/api/taxis", taxiRoutes);


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
