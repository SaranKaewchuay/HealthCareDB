const express = require('express');
const router = express.Router();
const diseaseController = require('../controller/disease');

// path
router.post('/add-disease', diseaseController.addDisease);

router.get('/disease', diseaseController.getAllDisease);

router.get('/getDiseaseById/:id', diseaseController.getDiseaseById);


module.exports = router;