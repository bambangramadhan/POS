var express = require('express');
var router = express.Router();
var Kasir = require('../models/kasir');
var moment = require('moment')

// Addkasir
router.post('/', (req, res) =>{
  let kasir = new Kasir ({
    id: req.body.id,
    nama: req.body.nama,
    no_nota: req.body.no_nota,
    tgl_transaksi: req.body.tgl_transaksi,
    kode_barang: req.body.kode_barang,
    nama_barang: req.body.nama_barang,
    harga_satuan: req.body.harga_satuan,
    jumlah_jual: req.body.jumlah_jual,
    harga_akhir: req.body.harga_akhir,
    total_transaksi: req.body.total_transaksi,
    bayar: req.body.bayar,
    kembalian: req.body.kembalian
  })
  kasir.save().then(data => {
    res.json({
      status: 'SUCCESS',
      data:{
        _id: data._id,
        id: data.id,
        nama: data.nama,
        no_nota: data.no_nota,
        tgl_transaksi: moment(data.tgl_transaksi).format("DD-MM-YYYY"),
        kode_barang: data.kode_barang,
        nama_barang: data.nama_barang,
        harga_satuan: data.harga_satuan,
        jumlah_jual: data.jumlah_jual,
        harga_akhir: data.harga_akhir,
        total_transaksi: data.total_transaksi,
        bayar: data.bayar,
        kembalian: data.kembalian
      }
    })
  }).catch(err => {
    res.json({
      data:{
        _id: null,
        id: null,
        nama: null,
        no_nota: null,
        tgl_transaksi: null,
        kode_barang: null,
        nama_barang: null,
        harga_satuan: null,
        jumlah_jual: null,
        harga_akhir: null,
        total_transaksi: null,
        bayar: null,
        kembalian: null
      }
    })
  })
})

// Read kasir
router.get('/', (req, res) => {
  Kasir.find().then(datadate => {
    let data = [];
    datadate.forEach(item => {
      data.push({
        _id: item._id,
        id: item.id,
        nama: item.nama,
        no_nota: item.no_nota,
        tgl_transaksi: moment(item.tgl_transaksi).format("DD-MM-YYYY"),
        kode_barang: item.kode_barang,
        nama_barang: item.nama_barang,
        harga_satuan: item.harga_satuan,
        jumlah_jual: item.jumlah_jual,
        harga_akhir: item.harga_akhir,
        total_transaksi: item.total_transaksi,
        bayar: item.bayar,
        kembalian: item.kembalian
      })
    })
    res.json(data)
  }).catch(err => {
    res.json({
      error : true,
      message: `something wrong ${err.message}`
    })
  })
})

// Edit
router.put('/:id', function(req, res, next) {
  let id = req.params.id;
  Kasir.findByIdAndUpdate(id, {
    id: req.body.id,
    nama: req.body.nama,
    no_nota: req.body.no_nota,
    tgl_transaksi: req.body.tgl_transaksi,
    kode_barang: req.body.kode_barang,
    nama_barang: req.body.nama_barang,
    harga_satuan: req.body.harga_satuan,
    jumlah_jual: req.body.jumlah_jual,
    harga_akhir: req.body.harga_akhir,
    total_transaksi: req.body.total_transaksi,
    bayar: req.body.bayar,
    kembalian: req.body.kembalian
  }, {new: true}).then(data => {
    if(!data){
      res.json({
        success: false,
        message: `updating data has been failed id : ${id} not found`,
        data: {
          _id: null,
          id: null,
          nama: null,
          no_nota: null,
          tgl_transaksi: null,
          kode_barang: null,
          nama_barang: null,
          harga_satuan: null,
          jumlah_jual: null,
          harga_akhir: null,
          total_transaksi: null,
          bayar: null,
          kembalian: null
        }
      })
    }else{
      res.json({
        success: true,
        message: "data has been updated",
        data: {
          _id: data._id,
          id: data.id,
          nama: data.nama,
          no_nota: data.no_nota,
          tgl_transaksi: moment(data.tgl_transaksi).format("DD-MM-YYYY"),
          kode_barang: data.kode_barang,
          nama_barang: data.nama_barang,
          harga_satuan: data.harga_satuan,
          jumlah_jual: data.jumlah_jual,
          harga_akhir: data.harga_akhir,
          total_transaksi: data.total_transaksi,
          bayar: data.bayar,
          kembalian: data.kembalian
        }
      })
    }
  }).catch(err => {
    res.json({
      success: false,
      message: "updating data has been failed",
      data: {
        _id: null,
        id: null,
        nama: null,
        no_nota: null,
        tgl_transaksi: null,
        kode_barang: null,
        nama_barang: null,
        harga_satuan: null,
        jumlah_jual: null,
        harga_akhir: null,
        total_transaksi: null,
        bayar: null,
        kembalian: null
      }
    })
  })
})

// Delete
router.delete('/:id', function(req, res, next) {
  let id = req.params.id;
  Kasir.findByIdAndRemove(id).then(data => {
    if(data){
      res.json({
        success: true,
        message: "data has been deleted",
        data:{
          _id: data._id,
          id: data.id,
          nama: data.nama,
          no_nota: data.no_nota,
          tgl_transaksi: moment(data.tgl_transaksi).format("DD-MM-YYYY"),
          kode_barang: data.kode_barang,
          nama_barang: data.nama_barang,
          harga_satuan: data.harga_satuan,
          jumlah_jual: data.jumlah_jual,
          harga_akhir: data.harga_akhir,
          total_transaksi: data.total_transaksi,
          bayar: data.bayar,
          kembalian: data.kembalian
        }
      })
    }else{
      res.json({
        success: false,
        message: `daleting data has been failed id: ${id}`,
        data:{
          _id: null,
          id: null,
          nama: null,
          no_nota: null,
          tgl_transaksi: null,
          kode_barang: null,
          nama_barang: null,
          harga_satuan: null,
          jumlah_jual: null,
          harga_akhir: null,
          total_transaksi: null,
          bayar: null,
          kembalian: null
        }
      })
    }
  }).catch(err => {
    res.json({
      success: false,
      message: "daleting data has been failed id: ",
      data:{
        _id: null,
        id: null,
        nama: null,
        no_nota: null,
        tgl_transaksi: null,
        kode_barang: null,
        nama_barang: null,
        harga_satuan: null,
        jumlah_jual: null,
        harga_akhir: null,
        total_transaksi: null,
        bayar: null,
        kembalian: null
      }
    })
  })
})


module.exports = router;
