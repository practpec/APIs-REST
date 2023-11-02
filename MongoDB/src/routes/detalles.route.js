const express = require('express');
const router = express.Router('router');
const detallesController = require('../controllers/detalles.controller')

router.get('/', detallesController.index);
router.get('/:id', detallesController.getById);
router.post('/', detallesController.create);
router.delete('/:id', detallesController.deleteFisico);
router.put('/:id',detallesController.deleteLogico);
router.patch('/:id', detallesController.updateParcial);

module.exports = router;
