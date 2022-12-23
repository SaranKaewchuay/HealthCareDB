const express = require('express');
const router = express.Router();
const symptomController = require('../controller/symtom');

// path
router.post('/add-symtom', symptomController.addSymptom);

router.get('/symptom', symptomController.getAllSymptom);

router.get('/getSymptomById/:id', symptomController.getSymptomById);

router.get('/getSymptomByType/:id', symptomController.getSymptomByType);

router.get('/getSymptomByTypeNotImg/:id', symptomController.getSymptomByTypeNotImg);

router.get('/getSymptomByImg', symptomController.getSymptomByImg);

router.get('/getSymptomByDisease/:id', symptomController.getDisease);

module.exports = router;