const db = require('../models');
const BarangNota = db.BarangNota;

// Create a new BarangNota
exports.create = (req, res) => {
  const barangNota = {
    KodeNota: req.body.KodeNota,
    KodeBarang: req.body.KodeBarang,
    JumlahBarang: req.body.JumlahBarang,
    HargaSatuan: req.body.HargaSatuan,
    Jumlah: req.body.Jumlah,
  };

  // Validasi input
  if (!req.body.KodeNota || !req.body.KodeBarang || !req.body.JumlahBarang || !req.body.HargaSatuan || !req.body.Jumlah) {
    res.status(400).send({
      message: 'All fields are required!',
    });
    return;
  }

  BarangNota.create(barangNota)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating BarangNota.',
      });
    });
};

// Retrieve all BarangNota
exports.findAll = (req, res) => {
  BarangNota.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving BarangNota.',
      });
    });
};

// Retrieve a single BarangNota by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  BarangNota.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find BarangNota with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving BarangNota with id=' + id,
      });
    });
};
