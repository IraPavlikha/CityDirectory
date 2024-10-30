const express = require('express');
const areaController = require('../controllers/areaController');
const router = express.Router();

router.post('/', areaController.createArea);
router.get('/', areaController.getAreas);
router.get('/:id', areaController.getArea);
router.put('/:id', areaController.updateArea);
router.delete('/:id', areaController.deleteArea);

module.exports = router;
