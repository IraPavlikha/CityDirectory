const CityType = require('../models/CityType');

// Створити тип населеного пункту
exports.createCityType = async (req, res) => {
    try {
        const cityType = new CityType(req.body);
        await cityType.save();
        res.status(201).json(cityType);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Отримати всі типи населених пунктів
exports.getCityTypes = async (req, res) => {
    try {
        const cityTypes = await CityType.find();
        res.json(cityTypes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Отримати тип населеного пункту за ID
exports.getCityTypeById = async (req, res) => {
    try {
        const cityType = await CityType.findById(req.params.id);
        if (!cityType) return res.status(404).json({ error: 'City type not found' });
        res.json(cityType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Оновити тип населеного пункту
exports.updateCityType = async (req, res) => {
    try {
        const cityType = await CityType.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cityType) return res.status(404).json({ error: 'City type not found' });
        res.json(cityType);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Видалити тип населеного пункту
exports.deleteCityType = async (req, res) => {
    try {
        const cityType = await CityType.findByIdAndDelete(req.params.id);
        if (!cityType) return res.status(404).json({ error: 'City type not found' });
        res.json({ message: 'City type deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
