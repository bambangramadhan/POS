const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poSchema = mongoose.Schema({
  id: Number,
  penyuplai: String,
  catatan: String,
  item: String,
  stok: Number,
  order: String,
  harga: String,
  total: String
})

module.exports = mongoose.model('PO', poSchema)
