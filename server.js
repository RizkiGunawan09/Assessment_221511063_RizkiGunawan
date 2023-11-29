const express = require('express');
const cors = require('cors');

const app = express();

// For React
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// For DB
const db = require('./app/models');
const seeders = require('./app/seeders');

// Uncomment the following line if you want to force sync in development
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Db');
  seeders.initialBarang();
  seeders.initialKasir();
  seeders.initialTenan();
  seeders.initialNota();
  seeders.initialBarangNota();
});

// Comment out the following line if you want to sync in development
// db.sequelize.sync();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Restoran Pujasera App!' });
});

require('./app/routes/routes')(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
