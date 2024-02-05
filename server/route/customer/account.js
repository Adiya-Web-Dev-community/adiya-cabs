require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const User = require("../../model/customer/account");

//send email with OTP
function sendOtpMail(email, OTP) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "User created successfully",
    text: `
                Welcome to the MERU,
                Thank you for choosing us!
                Your OTP is ${OTP}
                `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return { error: error };
    } else {
      console.log("Email sent: " + info.response);
      return resp.json({ success: true, message: info.response });
    }
  });
}

// search user, send email and otp
router.post("/send-otp", async (req, resp) => {
  console.log(req.body);
  //   * generate otp number
  const min = 100000;
  const max = 999999;
  const generatedOTP = Math.floor(Math.random() * (max - min + 1)) + min;

  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const setNewOtp = await User.updateOne(
        { email: req.body.email },
        {
          $set: { otp: generatedOTP },
        }
      );
      sendOtpMail(req.body.email, generatedOTP);
      return resp.json({
        success: true,
        msg: "Otp sent successfully",
        setNewOtp,
      });
    }
    const newUser = await User.create({ ...req.body, otp: generatedOTP });
    sendOtpMail(req.body.email, generatedOTP);
    resp.send(newUser);
  } catch (err) {
    resp.json({ msg: err.message });
  }
});

// verify otp
router.post("/verify-otp", async (req, resp) => {
  console.log(req.body.otp);
  try {
    const findUser = await User.findOne({ email: req.body.email });
    if (findUser) {
      if (req.body.otp === findUser.otp) {
        const token = jwt.sign(
          { _id: findUser._id },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "1d",
          }
        );
        resp.json({
          status: true,
          msg: "OTP verification successful",
          token: token,
          findUser
        });
      } else {
        resp.json({ status: false, msg: "Invalid OTP. Please enter again" });
      }
    } else {
      resp.json({ msg: "User not found" });
    }
  } catch (err) {
    resp.send(err.emssage);
  }
});

module.exports = router;
