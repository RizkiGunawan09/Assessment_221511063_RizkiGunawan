const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const Barang = sequelize.define('barang', {
    KodeBarang: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    NamaBarang: {
      type: DataTypes.TEXT,
    },
    Satuan: {
      type: DataTypes.STRING,
    },
    HargaSatuan: {
      type: DataTypes.INTEGER,
    },
    Stok: {
      type: DataTypes.INTEGER,
    },
  });
  return Barang;
};
