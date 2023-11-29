const db = require('.././models');
const Kasir = db.Kasir;

function initialKasir() {
  Kasir.create({
    KodeKasir: 'KS22151106301',
    Nama: 'Ani Rizki Gunawan',
    HP: '08221511063375',
  });
  Kasir.create({
    KodeKasir: 'KS22151106302',
    Nama: 'Budi Rizki Gunawan',
    HP: '08221511063735',
  });
}

module.exports = initialKasir;
