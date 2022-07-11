const patientSurgeriesModel = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define('PatientSurgery', {
    patientId: {
      type: DataTypes.INTEGER,
      field: 'patient_id',
    },
    surgeryId: {
      type: DataTypes.INTEGER,
      field: 'surgery_id',
    },
  }, {
    tableName: 'patient_surgeries',
    underscored: true,
    timestamps: false,
  });

  PatientSurgery.associate = (models) => {
    console.log(typeof models.Patient);
    models.Patient.belongsToMany(models.Surgery, {
      through: PatientSurgery,
      foreignKey: 'patientId',
      otherKey: 'surgeryId',
      as: 'surgery',
    });
    models.Surgery.belongsToMany(models.Patient, {
      through: PatientSurgery,
      foreignKey: 'surgeryId',
      otherKey: 'patientId',
      as: 'patient',
    });
  };

  return PatientSurgery;
};

module.exports = patientSurgeriesModel;