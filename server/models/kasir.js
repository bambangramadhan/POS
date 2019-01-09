const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kasirSchema = mongoose.Schema({
  id: String,
  nama: String,
  no_nota: String,
  tgl_transaksi: Date,
  kode_barang: String,
  nama_barang: String,
  harga_satuan: Number,
  jumlah_jual: Number,
  harga_akhir: Number,
  total_transaksi: Number,
  bayar: Number,
  kembalian: Number
})

module.exports = mongoose.model('Kasir', kasirSchema)
