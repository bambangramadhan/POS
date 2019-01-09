const mongoose = require('mongoose');

const kategoriSchema = new mongoose.Schema({
  id: Number,
  nama: String,
  stok: Number
})

module.exports = mongoose.model('Kategori', kategoriSchema);
