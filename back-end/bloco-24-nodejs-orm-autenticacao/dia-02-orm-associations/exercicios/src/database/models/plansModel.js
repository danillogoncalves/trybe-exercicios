const plansModel = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  }, {
    tableName: 'plans',
    timestamps: false,
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, { foreignKey: 'planId', as: 'patient' });
  };

  return Plan;
};

module.exports = plansModel;