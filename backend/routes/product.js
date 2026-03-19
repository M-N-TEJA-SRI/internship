import express from "express"
import Product from "../models/Product.js"
import axios from "axios"

const router = express.Router()

router.get("/", async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

router.post("/recommend", async (req, res) => {
  const { history } = req.body
  const products = await Product.find({ category: { $in: history } })
  res.json(products)
})

router.post("/image-search", async (req, res) => {
  const response = await axios.post("http://localhost:8000/search", req.body)
  res.json(response.data)
})

export default router
