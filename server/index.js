const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const productRoute = require("./routes/product");
const stripeRoute = require("./routes/stripe");

require("dotenv").config();
const connection = require('./db');
const express = require('express');
const app = express();

const { API_PORT } = process.env;

//connection to database
connection();

app.use(express.json({extend: true}))
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

const port = API_PORT || 3001;
app.listen(port, ()=> console.log(`Server running at ${port}`))