const mongoose = require('mongoose');

const cityTypeSchema = new mongoose.Schema({
    typeName: { type: String, required: true }
});

module.exports = mongoose.model('CityType', cityTypeSchema);
