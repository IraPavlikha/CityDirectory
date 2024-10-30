const mongoose = require('mongoose');

const streetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' }
});

module.exports = mongoose.model('Street', streetSchema);
