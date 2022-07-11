const patientsModel = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    fullname: DataTypes.STRING,
    planId: {
      type: DataTypes.INTEGER,
      field: 'plan_id',
    },
  }, {
    tableName: 'patients',
    underscored: true,
    timestamps: false,
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, { foreignKey: 'planId', as: 'plan' });
  };

  return Patient;
};

module.exports = patientsModel;