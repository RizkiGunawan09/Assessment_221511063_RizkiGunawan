const db = require('../models');
const Tenan = db.Tenan;

// Create a new Tenan
exports.create = (req, res) => {
  const tenan = {
    KodeTenan: req.body.KodeTenan,
    NamaTenan: req.body.NamaTenan,
    HP: req.body.HP,
  };

  // Validasi input
  if (!req.body.KodeTenan || !req.body.NamaTenan || !req.body.HP) {
    res.status(400).send({
      message: 'All fields are required!',
    });
    return;
  }

  Tenan.create(tenan)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating Tenan.',
      });
    });
};

// Retrieve all Tenan
exports.findAll = (req, res) => {
  Tenan.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Tenan.',
      });
    });
};

// Retrieve a single Tenan by id
exports.findOne = (req, res) => {
  const KodeTenan = req.params.KodeTenan;

  Tenan.findByPk(KodeTenan)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tenan with id=${KodeTenan}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Tenan with id=' + KodeTenan,
      });
    });
};
