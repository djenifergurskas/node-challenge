import { customers } from '../mocks/CustomerMock.js'
import express from "express"

const router = express.Router();

router.get("/", (req, res) => {
  res.json(customers);
});

router.post("/", (req, res) => {
  res.json(customers);
});

router.put("/", (req, res) => {
  res.json(customers);
});

router.patch("/", (req, res) => {
  res.json(customers);
});

router.delete("/", (req, res) => {
  res.json(customers);
});

export default router