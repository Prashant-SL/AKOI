const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema(
    {
        images: [{ type: String, required: true }],
        name: { type: String, required: true },
        price: { type: String, required: true },
    },
    {
        versionKey: false, // removed __v
        timestamps: true, // createdAt, updatedAt
    }
);

module.exports = mongoose.model('cartData', cartSchema);
