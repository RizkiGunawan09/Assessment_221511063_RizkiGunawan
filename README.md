# SLP-BackEnd

## 🤨 Apa itu SLP?
Sistem pengelolaan surat sakit/izin mahasiswa adalah aplikasi yang mengelola persuratan ketidakhadiran mahasiswa selama mengikuti perkuliahan dikarenakan mahasiswa sakit atau ada urusan mendadak, sehingga sulit untuk ditinggalkan. Aplikasi menerima data persuratan ketidakhadiran kuliah dari mahasiswa, kemudian mahasiswa mengajukan ketidakhadiran. Wali Kelas menerima notifikasi ketidakhadiran, kemudian memproses perizinan dengan memberikan persetujuan atau penolakan berdasarkan surat yang diajukan. Jika disetujui, sistem memberikan pemberitahuan kepada pihak terkait.

## 💻 Clone Repository
### Clone Repository
```bash
git clone https://github.com/mahesyasn18/SLP-BackEnd.git
```
```bash
cd SLP-BackEnd
```

### Install Dependence
```bash
npm install
```


### set Database on .env file
```bash
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "yourpassword",
    DB: "yourdatabase",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    }
};
```


### Running Server
```bash
node server.js
```

## 📥 Push Repository
```bash
git add .
```
```bash
git commit -m "FEAT : Description"
```
Commit Information : 
- ADD (Copy and Paste File)
- INST (Install the package or technology needed)
- MAKE (Create migration files, seeders, controllers, models, and more)
- FEAT (Adding new features)
- FIX (Fixing bugs)
- DEL (Delete folder, file, or code)

```bash
git push -u origin branch-name
```
