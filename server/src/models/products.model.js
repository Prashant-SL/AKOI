const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema(
    {
        id: { type: String, required: true },
        images: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model('products', productsSchema);
