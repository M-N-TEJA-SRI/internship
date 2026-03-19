import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
  userId: String,
  products: Array,
  total: Number,
  status: String,
  paymentMethod: String
})

export default mongoose.model("Order", orderSchema)
