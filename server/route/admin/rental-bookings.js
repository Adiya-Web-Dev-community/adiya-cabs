const router = require('express').Router()
const RentalBooking=require('../../model/') 

router.get("/get-rental-bookings", async(req, resp)=>{
resp.send('hi')
})

module.exports = router