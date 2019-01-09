var express = require('express');
var router = express.Router();
var Supplier = require('../models/supplier');

// Addsupplier
router.post('/', (req, res) =>{
  let supplier = new Supplier ({
    id: req.body.id,
    nama: req.body.nama,
    no_telp: req.body.no_telp,
    email: req.body.email,
    alamat: req.body.alamat,
    kode_pos: req.body.kode_pos,
    kota: req.body.kota,
    negara: req.body.negara
  })
  supplier.save().then(data => {
    res.json({
      status: 'SUCCESS',
      data:{
        _id: data._id,
        id: data.id,
        nama: data.nama,
        no_telp: data.no_telp,
        email: data.email,
        alamat: data.alamat,
        kode_pos: data.kode_pos,
        kota: data.kota,
        negara: data.negara
      }
    })
  }).catch(err => {
    res.json({
      data:{
        _id: null,
        id: null,
        nama: null,
        no_telp: null,
        email: null,
        alamat: null,
        kode_pos: null,
        kota: null,
        negara: null
      }
    })
  })
})

// Read supplier
router.get('/', (req, res) => {
  Supplier.find().then(data => {
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
  Supplier.findByIdAndUpdate(id, {
    id: req.body.id,
    nama: req.body.nama,
    no_telp: req.body.no_telp,
    email: req.body.email,
    alamat: req.body.alamat,
    kode_pos: req.body.kode_pos,
    kota: req.body.kota,
    negara: req.body.negara
  }, {new: true}).then(data => {
    if(!data){
      res.json({
        success: false,
        message: `updating data has been failed id : ${id} not found`,
        data: {
          _id: null,
          id: null,
          nama: null,
          no_telp: null,
          email: null,
          alamat: null,
          kode_pos: null,
          kota: null,
          negara: null
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
          no_telp: data.no_telp,
          email: data.email,
          alamat: data.alamat,
          kode_pos: data.kode_pos,
          kota: data.kota,
          negara: data.negara
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
        no_telp: null,
        email: null,
        alamat: null,
        kode_pos: null,
        kota: null,
        negara: null
      }
    })
  })
})

// Delete
router.delete('/:id', function(req, res, next) {
  let id = req.params.id;
  Supplier.findByIdAndRemove(id).then(data => {
    if(data){
      res.json({
        success: true,
        message: "data has been deleted",
        data:{
          _id: data._id,
          id: data.id,
          nama: data.nama,
          no_telp: data.no_telp,
          email: data.email,
          alamat: data.alamat,
          kode_pos: data.kode_pos,
          kota: data.kota,
          negara: data.negara
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
          no_telp: null,
          email: null,
          alamat: null,
          kode_pos: null,
          kota: null,
          negara: null
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
        no_telp: null,
        email: null,
        alamat: null,
        kode_pos: null,
        kota: null,
        negara: null
      }
    })
  })
})


module.exports = router;
