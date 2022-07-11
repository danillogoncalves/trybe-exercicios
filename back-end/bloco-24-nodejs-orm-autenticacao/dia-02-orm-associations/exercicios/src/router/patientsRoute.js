const { Router } = require('express');
const patientsController = require('../controllers/patientsController');

const router = Router();

router.get('/plan', patientsController.findAllPatientsPlan);
router.get('/surgery', patientsController.findAllPatientsSurgery);

module.exports = router;