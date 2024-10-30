const Street = require('../models/Street');

// Створити вулицю
exports.createStreet = async (req, res) => {
    try {
        const street = new Street(req.body);
        await street.save();
        res.status(201).json(street);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Отримати всі вулиці
exports.getStreets = async (req, res) => {
    try {
        const streets = await Street.find();
        res.json(streets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Отримати вулицю за ID
exports.getStreetById = async (req, res) => {
    try {
        const street = await Street.findById(req.params.id);
        if (!street) return res.status(404).json({ error: 'Street not found' });
        res.json(street);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Оновити вулицю
exports.updateStreet = async (req, res) => {
    try {
        const street = await Street.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!street) return res.status(404).json({ error: 'Street not found' });
        res.json(street);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Видалити вулицю
exports.deleteStreet = async (req, res) => {
    try {
        const street = await Street.findByIdAndDelete(req.params.id);
        if (!street) return res.status(404).json({ error: 'Street not found' });
        res.json({ message: 'Street deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
