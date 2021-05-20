
const express = require('express');
const router = express.Router();

const leadController = require('../controllers/LeadsController');
//const Alien = require('../models/leadmon');

router.get("/", leadController.getAllLeads);

router.get("/:id", leadController.getLeadById);

router.post('/', leadController.addNewLead);

/*router.get("/", async(req, res) => {
  try {
    const aliens = await Alien.find()
     res.json(aliens);
  } catch (err) {
      res.send('error ' + err);
  }
});*/

/*router.post('/', async (req, res) => {
    const alien = new Alien()

        alien.name = req.body.name;
        alien.tech = req.body.tech;
        alien.sub = req.body.sub;

    try {
        const a1 = await alien.save()
         res.json(a1);
      } catch (err) {
          res.send('error ' + err);
      }
});
*/

module.exports = router;
