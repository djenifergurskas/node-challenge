import { customers } from '../mocks/CustomerMock.js'
import express from "express"
import customerValidator from '../domain/user/services/CustomerValidator.js';
import { validationResult } from 'express-validator';
import CustomerModel from '../domain/user/services/ModelUsers.js';

const router = express.Router();

router.get("/user", (req, res) => {
  res.json(customers);
});

router.post("/create_user", customerValidator, (req, res,) => {
  const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() })
        }
        const listCustomer = new CustomerModel(req.body);
        customers.push(listCustomer);
        res.status(201).json({ status: "success", customer_created: listCustomer });
        
})

export default router