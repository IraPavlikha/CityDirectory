const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    area: { type: mongoose.Schema.Types.ObjectId, ref: 'Area' },
    cityTypes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CityType' }]
});

module.exports = mongoose.model('City', citySchema);
