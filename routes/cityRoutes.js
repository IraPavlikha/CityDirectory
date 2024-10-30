const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

// Створити місто
router.post('/', cityController.createCity);

// Отримати всі міста
router.get('/', cityController.getCities);

// Отримати місто за ID
router.get('/:id', cityController.getCityById);

// Оновити місто
router.put('/:id', cityController.updateCity);

// Видалити місто
router.delete('/:id', cityController.deleteCity);

module.exports = router;
