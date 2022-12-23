const Disease = require('../model/disease');

exports.getAllDisease = (req, res, next) => {
    Disease.findAll().then(disease => {
        res.status(200).json({
            "message": "success",
            "data": disease[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.addDisease = (req, res, next) => {
    const diseaseName = req.body.diseaseName;
    const symptom = req.body.symptom;
    const cause = req.body.cause;
    const treatment = req.body.treatment;
    const selfCare = req.body.selfCare;

    const disease = new Disease(null, diseaseName, symptom, cause, treatment, selfCare);
    Disease.save().then(() => {
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

exports.getDiseaseById = (req, res, next) => {
    const id = req.params.id;
    Disease.findById(id).then((disease) => {
        res.status(200).json({
            "message": "success",
            "data": disease[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}