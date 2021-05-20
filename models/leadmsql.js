const db = require('../helper/mysqlHelper');

module.exports = class Leads {
    constructor(lead_id,name,lead_mobile) {
        //this.lead_id = lead_id;
        this.name = name;
        this.lead_mobile = lead_mobile;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM gibpl_leads limit 10')
    }

    static fetchById(id) {
        return db.execute('SELECT * FROM gibpl_leads WHERE lead_id =' + id);
    }

    static addLead(name, lead_mobile) {
        return db.execute('INSERT INTO gibpl_leads (name, lead_mobile) VALUES (?,?)', [name, lead_mobile]);
    }

}