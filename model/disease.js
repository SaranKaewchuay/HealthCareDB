const db = require('../database/db');

module.exports = class Disease {

    constructor(id, diseaseName, symptom, cause, treatment, selfCare) {
        this.id = id;
        this.diseaseName = diseaseName;
        this.symptom = symptom;
        this.cause = cause;
        this.treatment = treatment;
        this.selfCare = selfCare;
    }

    static findAll() {
        return db.execute("SELECT * FROM Disease");
    }

    save() {
        if (this.id) {
            return db.execute(
                'update Disease set diseaseName=?, symptom=?,  cause=?, treatment=?, selfCare=? where id = ?',
                [this.diseaseName, this.symptom, this.cause, this.treatment, this.selfCare, this.id]
            );
        } else {
            return db.execute(
                'insert into Disease(diseaseName, symptom,  cause, treatment, selfCare) values(?,?,?,?,?)',
                [this.diseaseName, this.symptom, this.cause, this.treatment, this.selfCare]
            );
        }
    }
    //'select * from products where p_id = ?',
    static findById(id) {
        return db.execute(
            'select * from Disease where id = ?',
            [id]
        );
    }

    // static findByIdDisease(BodyType_id) {
    //     return db.execute(
    //         'select * from Symptom INNER join BodyType on Symptom.BodyType_id = BodyType.id where BodyType_id = ?',
    //         [BodyType_id]
    //     )
    // }

    static delById(id) {
        return db.execute(
            'delete from Disease where id = ?',
            [id]
        );
    }
}