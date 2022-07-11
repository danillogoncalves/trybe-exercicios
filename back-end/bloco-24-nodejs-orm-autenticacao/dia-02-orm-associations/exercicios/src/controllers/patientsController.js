const patientsService = require('../services/patientsService');

const patientsController = {
  findAllPatientsPlan: async (_req, res) => {
    const result = await patientsService.findAllPatientsPlan();
    res.status(200).json(result);
  },
  findAllPatientsSurgery: async (_req, res) => {
    const result = await patientsService.findAllPatientsSurgery();
    res.status(200).json(result);
  },
};

module.exports = patientsController;