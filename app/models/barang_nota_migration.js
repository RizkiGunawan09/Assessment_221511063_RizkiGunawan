const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const BarangNota = sequelize.define('barangNota', {
    JumlahBarang: {
      type: DataTypes.INTEGER,
    },
    HargaSatuan: {
      type: DataTypes.INTEGER,
    },
    Jumlah: {
      type: DataTypes.INTEGER,
    },
  });

  return BarangNota;
};
