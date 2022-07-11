const { Patient, Plan, Surgery } = require('../database/models');

const patientsService = {
  findAllPatientsPlan: async () => {
    const result = await Patient.findAll({
      include: { model: Plan, as: 'plan' },
    });

    return result;
  },
  findAllPatientsSurgery: async () => {
    const result = await Patient.findAll({
      include: { model: Surgery, as: 'surgery', through: { attributes: [] } },
    });

    return result;
  },
};

module.exports = patientsService;