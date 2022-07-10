const patientsModel = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    fullname: DataTypes.STRING,
    planId: {
      types: DataTypes.INTEGER,
      field: 'plan_id',
    },
  }, {
    tableName: 'patients',
    underscored: true,
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, { foreignKey: 'planId', as: 'plan' });
  };
};

module.exports = patientsModel;