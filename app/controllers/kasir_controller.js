const db = require('../models');
const Kasir = db.Kasir;

// Create a new Kasir
exports.create = (req, res) => {
  const kasir = {
    KodeKasir: req.body.KodeKasir,
    Nama: req.body.Nama,
    HP: req.body.HP,
  };

  // Validasi input
  if (!req.body.KodeKasir || !req.body.Nama || !req.body.HP) {
    res.status(400).send({
      message: 'All fields are required!',
    });
    return;
  }

  Kasir.create(kasir)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating Kasir.',
      });
    });
};

// Retrieve all Kasir
exports.findAll = (req, res) => {
  Kasir.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Kasir.',
      });
    });
};

// Retrieve a single Kasir by id
exports.findOne = (req, res) => {
  const KodeKasir = req.params.KodeKasir;

  Kasir.findByPk(KodeKasir)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Kasir with id=${KodeKasir}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Kasir with id=' + KodeKasir,
      });
    });
};
