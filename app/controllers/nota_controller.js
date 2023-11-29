const db = require('../models');
const Nota = db.Nota;

// Create a new Nota
exports.create = (req, res) => {
  const nota = {
    KodeNota: req.body.KodeNota,
    KodeTenan: req.body.KodeTenan,
    KodeKasir: req.body.KodeKasir,
    TglNota: req.body.TglNota,
    JamNota: req.body.JamNota,
    JumlahBelanja: req.body.JumlahBelanja,
    Diskon: req.body.Diskon,
    Total: req.body.Total,
  };

  // Validasi input
  if (!req.body.KodeNota || !req.body.KodeTenan || !req.body.KodeKasir || !req.body.TglNota || !req.body.JamNota || !req.body.JumlahBelanja || req.body.Diskon === undefined || req.body.Total === undefined) {
    res.status(400).send({
      message: 'All fields are required!',
    });
    return;
  }

  Nota.create(nota)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating Nota.',
      });
    });
};

// Retrieve all Nota
exports.findAll = (req, res) => {
  Nota.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Nota.',
      });
    });
};

// Retrieve a single Nota by id
exports.findOne = (req, res) => {
  const KodeNota = req.params.KodeNota;

  Nota.findByPk(KodeNota)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Nota with id=${KodeNota}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Nota with id=' + KodeNota,
      });
    });
};
