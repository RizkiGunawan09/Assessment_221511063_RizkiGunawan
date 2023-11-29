const db = require('../models');
const Barang = db.Barang;

// Create a new Barang
exports.create = (req, res) => {
  const barang = {
    KodeBarang: req.body.KodeBarang,
    NamaBarang: req.body.NamaBarang,
    Satuan: req.body.Satuan,
    HargaSatuan: req.body.HargaSatuan,
    Stok: req.body.Stok,
  };

  // Validasi input
  if (!req.body.KodeBarang || !req.body.NamaBarang || !req.body.Satuan || !req.body.HargaSatuan || req.body.Stok === undefined) {
    res.status(400).send({
      message: 'All fields are required!',
    });
    return;
  }

  Barang.create(barang)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating Barang.',
      });
    });
};

// Retrieve all Barang from the database
exports.findAll = (req, res) => {
  Barang.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Barang.',
      });
    });
};

// Find a single Barang with an id
exports.findOne = (req, res) => {
  const KodeBarang = req.params.KodeBarang;

  Barang.findByPk(KodeBarang)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Barang with id=${KodeBarang}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Barang with id=' + KodeBarang,
      });
    });
};

// Update a Barang by the id in the request
exports.update = (req, res) => {
  const KodeBarang = req.params.KodeBarang;
  const { NamaBarang, Satuan, HargaSatuan, Stok } = req.body;

  Barang.update({ NamaBarang, Satuan, HargaSatuan, Stok }, { where: { KodeBarang: KodeBarang } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Barang was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Barang with id=${KodeBarang}. Maybe Barang was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Barang with id=' + id,
      });
    });
};

// Delete a Barang with the specified id in the request
exports.delete = (req, res) => {
  const KodeBarang = req.params.KodeBarang;

  Barang.destroy({
    where: { KodeBarang: KodeBarang },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Barang was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Barang with id=${KodeBarang}. Maybe Barang was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Barang with id=' + KodeBarang,
      });
    });
};
