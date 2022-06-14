const express = require('express');
const router = express.Router();

const Products = require('../models/products.model.js');

router.get('', async (req, res) => {
    try {
        const products = await Products.find().lean().exec();
        return res.send(products);
    } catch (eroor) {
        return res.status(500).send(products);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Products.findById(req.params.id).lean().exec();
        return res.send(product);
    } catch (eroor) {
        return res.status(500).send(eroor.message);
    }
});

module.exports = router;
