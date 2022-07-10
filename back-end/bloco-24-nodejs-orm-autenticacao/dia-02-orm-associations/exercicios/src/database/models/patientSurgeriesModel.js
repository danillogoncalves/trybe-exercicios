const patientSurgeriesModel = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define('PatientSurgery', {
    patientId: {
      types: DataTypes.INTEGER,
      field: 'patient_id',
    },
    surgeryId: {
      types: DataTypes.INTEGER,
      field: 'surgery_id',
    },
  }, {
    tableName: 'patient_surgeries',
    underscored: true,
  });

  PatientSurgery.associate = (models) => {
    models.Patient.belongToMany(models.Surgery, {
      through: PatientSurgery,
      foreignKey: 'patientId',
      otherKey: 'id',
      as: 'singery',
    });
    models.Surgery.belongToMany(models.Patient, {
      through: PatientSurgery,
      foreignKey: 'surgeryId',
      otherKey: 'id',
      as: 'patient',
    });
  };
};

module.exports = patientSurgeriesModel;