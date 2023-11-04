require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Rider = require("../../model/rider/account");
const jwt = require("jsonwebtoken");
const accountMiddleware = require("../../middleware/account");

// Rider Singup
router.post("/rider-signup", async (req, resp) => {
  try {
    const { email, contact, password } = req.body;
    const findRider = await Rider.findOne({
      $or: [{ email }, { contact }],
    });
    if (findRider) {
      return resp.json({
        success: false,
        msg: "Account already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const maxRider = await Rider.findOne({}, {}, { sort: { serialNo: -1 } });
    const nextRiderId = maxRider ? maxRider.serialNo + 1 : 1;
    const year = new Date().getFullYear().toString().slice(-2);
    const riderId = `MERU${year}${nextRiderId + 1000}`;
    const newRider = new Rider({
      ...req.body,
      password: hashedPassword,
      serialNo: nextRiderId,
      riderId,
    });
    await newRider.save();
    resp.json({
      success: true,
      riderId: riderId,
      msg: "Account Created wait for Account Verification",
      data: newRider,
    });
  } catch (err) {
    resp.json({
      success: false,
      msg: err.message,
    });
  }
});

// Rider Login
router.post("/rider-login", async (req, resp) => {
  const { riderId, password } = req.body;
  try {
    // const findRider = await Rider.findOne({
    //     $or: [{ email: userId }, { contact: userId },{riderId : userId}],
    // });
    const findRider = await Rider.findOne({ riderId });

    if (!findRider) {
      return resp.json({
        success: false,
        msg: "Account not found, Check Credentials",
      });
    }
    if (findRider.adminVerification == false) {
      return resp.json({
        success: false,
        msg: "Sorry for delay, Your account is under verification. We will get back to you",
      });
    }
    const validPassword = await bcrypt.compare(password, findRider.password);
    if (!validPassword) {
      return resp.json({
        success: false,
        msg: "Incorrect Credentials",
      });
    }
    const token = jwt.sign({ _id: findRider._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    resp.json({
      success: true,
      msg: "Login successful",
      token: token,
    });
  } catch (err) {
    resp.json({
      success: false,
      msg: err.message,
    });
  }
});

//Get profile information
router.get("/rider-profile", accountMiddleware, async (req, resp) => {
  try {
    const rider = await Rider.findOne({ _id: req.accountId });
    if (!rider) {
      return resp.json({
        success: false,
        msg: "Rider not found",
      });
    }
    resp.json({
      success: true,
      msg: "Rider Details ",
      data: rider,
    });
  } catch (err) {
    resp.json({
      success: false,
      msg: err.message,
    });
  }
});

// rider-update-profile
router.put("/rider-update-profile", accountMiddleware, async (req, resp) => {
  try {
    const { name, contact, locality, city, state, pincode, profileImgUrl } =
      req.body;
    const riderId = req.accountId;
    const rider = await Rider.findById(riderId);
    if (!rider) {
      return resp.json({
        success: false,
        msg: "Rider not found",
      });
    }
    rider.name = name;
    rider.contact = contact;
    rider.locality = locality;
    rider.city = city;
    rider.state = state;
    rider.pincode = pincode;
    rider.profileImgUrl = profileImgUrl;
    const updatedRider = await rider.save();
    resp.json({
      success: true,
      msg: "Rider Details updated successfully",
      data: updatedRider,
    });
  } catch (err) {
    resp.json({
      success: false,
      msg: err.message,
    });
  }
});
module.exports = router;
