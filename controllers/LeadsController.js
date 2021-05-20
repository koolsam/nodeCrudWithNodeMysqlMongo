const leadModel = require('../models/leadmsql');
const leadMongoModel = require('../models/leadmon');

module.exports = {
    getAllLeads : async (req, res) => {
        try {
            const allLeads = await leadModel.fetchAll();
            res.status(200).json(allLeads);
        } catch (err) {
            res.send(err);
        } 
    },

    getLeadById : async (req, res) => {
        try {
            const lead = await leadModel.fetchById(req.params.id);
            res.status(200).json(lead);
        } catch (err) {
            res.send(err);
        } 
    },

    addNewLead : async (req, res) => {
        try {
            console.log(req.body.name);
            const lead = await leadModel.addLead(req.body.name, req.body.lead_mobile);
            const leadMng = await(leadMongoModel.createData(req.body));
            res.status(200).json(lead);
        } catch (err) {
            res.send(err);
        } 
    },
}