const express = require('express');
const router = express.Router();
const streetController = require('../controllers/streetController');

// Створити вулицю
router.post('/', streetController.createStreet);

// Отримати всі вулиці
router.get('/', streetController.getStreets);

// Отримати вулицю за ID
router.get('/:id', streetController.getStreetById);

// Оновити вулицю
router.put('/:id', streetController.updateStreet);

// Видалити вулицю
router.delete('/:id', streetController.deleteStreet);

module.exports = router;
