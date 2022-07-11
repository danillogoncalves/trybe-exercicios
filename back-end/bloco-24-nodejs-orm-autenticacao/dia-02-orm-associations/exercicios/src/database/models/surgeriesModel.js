const surgeriesModel = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    specialty: DataTypes.INTEGER,
    doctor: DataTypes.STRING,
  }, {
    tableName: 'surgeries',
    timestamps: false,
  });

  return Surgery;
};

module.exports = surgeriesModel;