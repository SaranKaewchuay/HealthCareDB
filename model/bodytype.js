const db = require('../database/db');

module.exports = class BodyType {

    constructor(id, typeTitle, typeName) {
        this.id = id;
        this.typeTitle = typeTitle;
        this.typeName = typeName;
    }

    static findAll() {
        return db.execute("SELECT * FROM BodyType");
    }

    save() {
        if (this.id) {
            return db.execute(
                'update BodyType set typeTitle=?, typeName=? where id = ?',
                [this.typeTitle, this.typeName, this.id]
            );
        } else {
            return db.execute(
                'insert into BodyType(typeTitle, typeName) values(?,?)',
                [this.typeTitle, this.typeName]
            );
        }
    }
    //'select * from products where p_id = ?',
    static findById(id) {
        return db.execute(
            'select * from BodyType where id = ?',
            [id]
        );
    }

    static delById(id) {
        return db.execute(
            'delete from BodyType where id = ?',
            [id]
        );
    }
}