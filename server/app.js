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
<<<<<<< HEAD
app.use(require("./route/driver/account"));
app.use(require("./route/admin/account"));


=======
>>>>>>> af9d28132d146bb8f3a05f5d8ab113e9f502fd51

// driver routes
app.use(require("./route/driver/account"));

app.get("/", async (req, resp) => {
  resp.send("Welcome to MERU CABS");
});

module.exports = app;
