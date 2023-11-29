const db = require('.././models');
const Tenan = db.Tenan;

function initialTenan() {
  Tenan.create({
    KodeTenan: 'TK22151106301',
    NamaTenan: 'Rizkimaret',
    HP: '08221511063375',
  });
  Tenan.create({
    KodeTenan: 'TK22151106302',
    NamaTenan: 'Rizkimart',
    HP: '08221511063735',
  });
}
module.exports = initialTenan;
