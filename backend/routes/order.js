import express from "express"
import Razorpay from "razorpay"

const router = express.Router()

const razorpay = new Razorpay({
  key_id: process.env.KEY,
  key_secret: process.env.SECRET
})

router.post("/create-order", async (req,res)=>{
  const order = await razorpay.orders.create({
    amount: req.body.amount,
    currency: "INR"
  })
  res.json(order)
})

export default router
