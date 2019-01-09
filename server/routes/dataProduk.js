var express = require('express');
var router = express.Router();
var Produk = require('../models/dataProduk');

// Addproduk
router.post('/', (req, res) =>{
  let produk = new Produk ({
    kode: req.body.kode,
    nama: req.body.nama,
    harga_beli: req.body.harga_beli,
    harga_jual: req.body.harga_jual,
    stok: req.body.stok,
    kategori: req.body.kategori
  })
  produk.save().then(data => {
    res.json({
      status: 'SUCCESS',
      data:{
        _id: data._id,
        kode: data.kode,
        nama: data.nama,
        harga_beli: data.harga_beli,
        harga_jual: data.harga_jual,
        stok: data.stok,
        kategori: data.kategori
      }
    })
  }).catch(err => {
    res.json({
      data:{
        _id: null,
        id: null,
        nama: null,
        harga_beli: null,
        harga_jual: null,
        stok: null,
        kategori: null
      }
    })
  })
})

// Read produk
router.get('/', (req, res) => {
  Produk.find().then(data => {
    res.json(data);
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
  Produk.findByIdAndUpdate(id, {
    kode: req.body.kode,
    nama: req.body.nama,
    harga_beli: req.body.harga_beli,
    harga_jual: req.body.harga_jual,
    stok: req.body.stok,
    kategori: req.body.kategori
  }, {new: true}).then(data => {
    if(!data){
      res.json({
        success: false,
        message: `updating data has been failed id : ${id} not found`,
        data: {
          _id: null,
          id: null,
          nama: null,
          harga_beli: null,
          harga_jual: null,
          stok: null,
          kategori: null
        }
      })
    }else{
      res.json({
        success: true,
        message: "data has been updated",
        data: {
          _id: data._id,
          kode: data.kode,
          nama: data.nama,
          harga_beli: data.harga_beli,
          harga_jual: data.harga_jual,
          stok: data.stok,
          kategori: data.kategori
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
        harga_beli: null,
        harga_jual: null,
        stok: null,
        kategori: null
      }
    })
  })
})

// Delete
router.delete('/:id', function(req, res, next) {
  let id = req.params.id;
  Produk.findByIdAndRemove(id).then(data => {
    if(data){
      res.json({
        success: true,
        message: "data has been deleted",
        data:{
          _id: data._id,
          kode: data.kode,
          nama: data.nama,
          harga_beli: data.harga_beli,
          harga_jual: data.harga_jual,
          stok: data.stok,
          kategori: data.kategori
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
          harga_beli: null,
          harga_jual: null,
          stok: null,
          kategori: null
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
        harga_beli: null,
        harga_jual: null,
        stok: null,
        kategori: null
      }
    })
  })
})


module.exports = router;
