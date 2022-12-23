const BodyType = require('../model/bodytype');

exports.getAllBodyType = (req, res, next) => {
    BodyType.findAll().then(bodytype => {
        res.status(200).json({
            "message": "success",
            "data": bodytype[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.addBodyType = (req, res, next) => {
    const typeTitle = req.body.typeTitle;
    const typeName = req.body.typeName;

    const bodytype = new BodyType(null, typeTitle, typeName);
    bodytype.save().then(() => {
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

exports.getBodyTypeById = (req, res, next) => {
    const id = req.params.id;
    BodyType.findById(id).then((bodytype) => {
        res.status(200).json({
            "message": "success",
            "data": bodytype[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}