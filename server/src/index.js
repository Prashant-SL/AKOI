require('dotenv').config();
const express = require('express');
const connect = require('./configs/db');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

// const userController = require('./controllers/user.controller');
var cartController = require('./controllers/cart.controller.js');
var productController = require('./controllers/products.controller.js');

// app.use('/users', userController);
app.use('/cart', cartController);
app.use('/products', productController);

const PORT = process.env.PORT || 2345;

app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`listening on port ${PORT}`);
    } catch (err) {
        console.log(err.message);
    }
});
