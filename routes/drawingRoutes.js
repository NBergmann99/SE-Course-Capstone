const express = require('express')
const router = express.Router();
const drawingController = require('../controllers/drawingController');


//drawing routes
router.get('/drawings/', drawingController.drawing_index)
router.post('/drawings/', drawingController.drawing_create_post)
router.get('/drawings/create', drawingController.drawing_create_get)
router.get('/drawings/:id', drawingController.drawing_details)
router.delete('/drawings/:id', drawingController.drawing_delete)

module.exports = router;