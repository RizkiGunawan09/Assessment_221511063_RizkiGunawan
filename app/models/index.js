const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Barang = require('./barang_migration.js')(sequelize, Sequelize);
db.Kasir = require('./kasir_migration.js')(sequelize, Sequelize);
db.Tenan = require('./tenan_migration.js')(sequelize, Sequelize);
db.Nota = require('./nota_migration.js')(sequelize, Sequelize);
db.BarangNota = require('./barang_nota_migration.js')(sequelize, Sequelize);

// Relasi antara Nota dan BarangNota
db.Nota.hasMany(db.BarangNota, {
  foreignKey: 'KodeNota',
});
db.BarangNota.belongsTo(db.Nota, {
  foreignKey: 'KodeNota',
});

// Relasi antara Nota dan Tenan
db.Tenan.hasMany(db.Nota, {
  foreignKey: 'KodeTenan',
});
db.Nota.belongsTo(db.Tenan, {
  foreignKey: 'KodeTenan',
});

// Relasi antara Nota dan Kasir
db.Kasir.hasMany(db.Nota, {
  foreignKey: 'KodeKasir',
});
db.Nota.belongsTo(db.Kasir, {
  foreignKey: 'KodeKasir',
});

// Relasi antara BarangNota dan Barang
db.Barang.hasMany(db.BarangNota, {
  foreignKey: 'KodeBarang',
});
db.BarangNota.belongsTo(db.Barang, {
  foreignKey: 'KodeBarang',
});

module.exports = db;
