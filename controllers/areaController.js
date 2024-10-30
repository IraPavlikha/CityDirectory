const Area = require('../models/Area');

exports.createArea = async (req, res) => {
    try {
        const area = new Area(req.body);
        await area.save();
        res.status(201).json(area);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAreas = async (req, res) => {
    try {
        const areas = await Area.find();
        res.status(200).json(areas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getArea = async (req, res) => {
    try {
        const area = await Area.findById(req.params.id);
        if (!area) return res.status(404).json({ error: 'Area not found' });
        res.status(200).json(area);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateArea = async (req, res) => {
    try {
        const area = await Area.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!area) return res.status(404).json({ error: 'Area not found' });
        res.status(200).json(area);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteArea = async (req, res) => {
    try {
        const area = await Area.findByIdAndDelete(req.params.id);
        if (!area) return res.status(404).json({ error: 'Area not found' });
        res.status(200).json({ message: 'Area deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
