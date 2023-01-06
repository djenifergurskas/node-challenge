import express from "express"
import router from "./routes/RoutesCustomer.js"
import customerValidator from "./domain/user/valid/CustomerValidator.js"
import CustomerModel from '../src/domain/user/valid/ModelUsers.js'
import { validationResult } from "express-validator"
import { customers } from "./mocks/CustomerMock.js"

const app = express()

app.use(express.json())
app.use(router)

app.get("/users", (req, res) => {
  res.json(customers);
});

app.post("/create_user", customerValidator, (req, res,) => {
  const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() })
        }
        var listCustomer = new CustomerModel(req.body);
        customers.push(listCustomer);
        res.status(200).json({ status: "success", customer_created: listCustomer });
        
})

app.put("/update", (req, res) => {
  res.json(customers)
});

app.delete("/delete", (req, res) => {
  res.json(customers)
});

app.listen(3000, () => {
  console.log("Server is running on port 3000")
});
