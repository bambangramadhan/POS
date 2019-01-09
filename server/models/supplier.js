const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = mongoose.Schema({
  id: String,
  nama: String,
  no_telp: String,
  email: String,
  alamat: String,
  kode_pos: String,
  kota: String,
  negara: String
})

module.exports = mongoose.model('Supplier', supplierSchema)
