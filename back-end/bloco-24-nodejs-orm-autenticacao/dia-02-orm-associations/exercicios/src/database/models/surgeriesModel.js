const surgeriesModel = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    specialty: DataTypes.INTEGER,
    doctor: DataTypes.STRING,
  }, {
    tableName: 'surgeries',
  });

  return Surgery;
};

module.exports = surgeriesModel;