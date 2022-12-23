const Symptom = require('../model/symptom');

exports.getAllSymptom = (req, res, next) => {
    Symptom.findAll().then(symptom => {
        res.status(200).json({
            "message": "success",
            "data": symptom[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.addSymptom = (req, res, next) => {
    const symptomName = req.body.symptomName;
    const discription = req.body.discription;
    const imageUr = req.body.imageUr;
    const BodyType_id = req.body.BodyType_id;

    const bodytype = new Symptom(null, symptomName, discription, imageUr, BodyType_id);
    Symptom.save().then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch((error) => {
        res.status(200).json({
            "message": error,
            "result": false
        });
    });
}

exports.getSymptomById = (req, res, next) => {
    const id = req.params.id;
    Symptom.findById(id).then((symptom) => {
        res.status(200).json({
            "message": "success",
            "data": symptom[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.getSymptomByType = (req, res, next) => {
    const BodyType_id = req.params.id;
    Symptom.findByIdBodyType(BodyType_id).then((symptom) => {
        res.status(200).json({
            "message": "success",
            "data": symptom[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.getSymptomByTypeNotImg = (req, res, next) => {
    const BodyType_id = req.params.id;
    Symptom.findByIdBodyTypeNotImg(BodyType_id).then((symptom) => {
        res.status(200).json({
            "message": "success",
            "data": symptom[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.getSymptomByImg = (req, res, next) => {
    Symptom.findBySymptomImg().then((symptom) => {
        res.status(200).json({
            "message": "success",
            "data": symptom[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.getDisease = (req, res, next) => {
    const id = req.params.id;
    Symptom.findByDisease(id).then((symptom) => {
        res.status(200).json({
            "message": "success",
            "data": symptom[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}