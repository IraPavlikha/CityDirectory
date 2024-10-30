const express = require('express');
const router = express.Router();
const cityTypeController = require('../controllers/cityTypeController');

// Створити тип населеного пункту
router.post('/', cityTypeController.createCityType);

// Отримати всі типи населених пунктів
router.get('/', cityTypeController.getCityTypes);

// Отримати тип населеного пункту за ID
router.get('/:id', cityTypeController.getCityTypeById);

// Оновити тип населеного пункту
router.put('/:id', cityTypeController.updateCityType);

// Видалити тип населеного пункту
router.delete('/:id', cityTypeController.deleteCityType);

module.exports = router;
