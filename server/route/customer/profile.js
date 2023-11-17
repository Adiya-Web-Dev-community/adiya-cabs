require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../model/customer/account");
const accountMiddleware = require("../../middleware/account");

// Get Profile
router.get("/profile", accountMiddleware, async (req, resp) => {
    try {
        console.log("hi i am pass1 ");
        const profileData = await User.findOne({
            _id: req.accountId,
        });
        if (!profileData) {
            resp.send("Unable to find");
        }
        resp.json({
            success: true,
            msg: "Profile Data",
            data: profileData,
        });
    } catch (err) {
        resp.json({
            success: false,
            msg: err.message,
        });
    }
});

// Update Profile
router.put("/profile", accountMiddleware, async (req, resp) => {
    const passengerId = req.accountId;
    try {
        const profile = await User.findOne({
            _id: req.accountId,
        });
        console.log(profile);
        profile.email = req.body.email;
        profile.name = req.body.name;
        profile.emergencyContactNumber = req.body.emergencyContactNumber;
        profile.trackingNumber = req.body.trackingNumber;

        await profile.save();
        resp.json({
            success: true,
            msg: "Profile updated successfully",
            data: profile,
        });
    } catch (err) {
        resp.json({
            success: false,
            msg: err.message,
        });
    }
});
module.exports = router;
