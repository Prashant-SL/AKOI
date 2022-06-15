const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema(
    {
        id: { type: String, required: false },
        images: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model('cartData', cartSchema);
