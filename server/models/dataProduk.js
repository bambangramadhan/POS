const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produkSchema = mongoose.Schema({
  kode: String,
  nama: String,
  harga_beli: String,
  harga_jual: String,
  stok: Number,
  kategori: String
})

module.exports = mongoose.model('Produk', produkSchema)
