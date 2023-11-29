const barang = require('../controllers/barang_controller');
const kasir = require('../controllers/kasir_controller');
const tenan = require('../controllers/tenan_controller');
const nota = require('../controllers/nota_controller');
const barangNota = require('../controllers/barang_nota_controller');

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
  });

  /* 
    ========================================
    Routes Barang
    ========================================
  */

  app.post('/api/barang/create', barang.create);

  app.get('/api/barang', barang.findAll);

  app.get('/api/barang/:KodeBarang', barang.findOne);

  app.put('/api/barang/update/:KodeBarang', barang.update);

  app.delete('/api/barang/delete/:KodeBarang', barang.delete);

  /* 
    ========================================
    Routes Kasir
    ========================================
  */

  app.post('/api/kasir/create', kasir.create);

  app.get('/api/kasir', kasir.findAll);

  app.get('/api/kasir/:KodeKasir', kasir.findOne);

  /* 
    ========================================
    Routes Tenan
    ========================================
  */

  app.post('/api/tenan/create', tenan.create);

  app.get('/api/tenan', tenan.findAll);

  app.get('/api/tenan/:KodeTenan', tenan.findOne);

  /* 
    ========================================
    Routes Nota
    ========================================
  */

  app.post('/api/nota/create', nota.create);

  app.get('/api/nota', nota.findAll);

  app.get('/api/nota/:KodeNota', nota.findOne);

  /* 
    ========================================
    Routes Barang Nota
    ========================================
  */

  app.post('/api/barangNota/create', barangNota.create);

  app.get('/api/barangNota', barangNota.findAll);

  app.get('/api/barangNota/:KodeNota/:KodeBarang', barangNota.findOne);
};
