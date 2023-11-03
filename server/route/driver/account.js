require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Rider = require("../../model/driver/account");
const jwt = require("jsonwebtoken");

// Rider Singup
router.post("/rider-singup", async (req, resp) => {
    const {
        name,
        email,
        contact,
        password,
        locality,
        city,
        state,
        pincode,
        profileImgUrl,
    } = req.body;
    try {
        const findRider = await Rider.findOne({ email, contact });
        if (findRider) {
            resp.json({
                success: false,
                msg: "Rider already exists",
            });
        }
        if (!findRider) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const createRider = Rider.create({
                name,
                email,
                contact,
                password: hashedPassword,
                locality,
                city,
                state,
                pincode,
                profileImgUrl,
            });
            resp.json({
                success: true,
                msg: "Rider Created",
                data: createRider,
            });
        }
    } catch (err) {
        resp.json({
            success: false,
            msg: err.message,
        });
    }
});

// Rider Login
router.post("/rider-login", async (req, resp) => {
    const { email, password } = req.body;
    try {
        const rider = await Rider.findOne({ email });
        if (!rider) {
            return resp.json({
                success: false,
                msg: "Rider not found",
            });
        }
        const validPassword = await bcrypt.compare(password, rider.password);
        if (!validPassword) {
            return resp.json({
                success: false,
                msg: "Incorrect Credentials",
            });
        }
        const token = jwt.sign(
            { riderId: rider._id },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1d",
            }
        );
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

module.exports = router;
