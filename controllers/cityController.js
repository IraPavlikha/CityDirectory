const City = require('../models/City');

// Створити місто
exports.createCity = async (req, res) => {
    try {
        const city = new City(req.body);
        await city.save();
        res.status(201).json(city);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Отримати всі міста
exports.getCities = async (req, res) => {
    try {
        const cities = await City.find();
        res.json(cities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Отримати місто за ID
exports.getCityById = async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        if (!city) return res.status(404).json({ error: 'City not found' });
        res.json(city);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Оновити місто
exports.updateCity = async (req, res) => {
    try {
        const city = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!city) return res.status(404).json({ error: 'City not found' });
        res.json(city);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Видалити місто
exports.deleteCity = async (req, res) => {
    try {
        const city = await City.findByIdAndDelete(req.params.id);
        if (!city) return res.status(404).json({ error: 'City not found' });
        res.json({ message: 'City deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
