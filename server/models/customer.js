const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = mongoose.Schema({
  id: String,
  nama: String,
  no_telp: String,
  email: String,
  tgl_lahir: Date,
  jenis_kelamin: String,
  berlangganan: Date,
  alamat: String
})

module.exports = mongoose.model('Customer', customerSchema)
