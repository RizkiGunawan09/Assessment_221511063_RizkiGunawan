const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Nota = sequelize.define('nota', {
    KodeNota: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    TglNota: {
      type: DataTypes.DATEONLY,
    },
    JamNota: {
      type: DataTypes.TIME,
    },
    JumlahBelanja: {
      type: DataTypes.STRING,
    },
    Diskon: {
      type: DataTypes.FLOAT,
    },
    Total: {
      type: DataTypes.INTEGER,
    },
  });

  return Nota;
};
