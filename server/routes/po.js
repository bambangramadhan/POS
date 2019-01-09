var express = require('express');
var router = express.Router();
var P0 = require('../models/po');

// Addpo
router.post('/', (req, res) =>{
  let po = new P0 ({
    id: req.body.id,
    penyuplai: req.body.penyuplai,
    catatan: req.body.catatan,
    item: req.body.item,
    stok: req.body.stok,
    harga: req.body.harga,
    total: req.body.total
  })
  po.save().then(data => {
    res.json({
      status: 'SUCCESS',
      data:{
        _id: data._id,
        id: data.id,
        penyuplai: data.penyuplai,
        catatan: data.catatan,
        item: data.item,
        stok: data.stok,
        harga: data.harga,
        total: data.total
      }
    })
  }).catch(err => {
    res.json({
      data:{
        _id: null,
        id: null,
        penyuplai: null,
        catatan: null,
        item: null,
        stok: null,
        harga: null,
        total: null
      }
    })
  })
})

// Read po
router.get('/', (req, res) => {
  P0.find().then(data => {
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
  P0.findByIdAndUpdate(id, {
    id: req.body.id,
    penyuplai: req.body.penyuplai,
    catatan: req.body.catatan,
    item: req.body.item,
    stok: req.body.stok,
    harga: req.body.harga,
    total: req.body.total
  }, {new: true}).then(data => {
    if(!data){
      res.json({
        success: false,
        message: `updating data has been failed id : ${id} not found`,
        data: {
          _id: null,
          id: null,
          penyuplai: null,
          catatan: null,
          item: null,
          stok: null,
          harga: null,
          total: null
        }
      })
    }else{
      res.json({
        success: true,
        message: "data has been updated",
        data: {
          _id: data._id,
          id: data.id,
          penyuplai: data.penyuplai,
          catatan: data.catatan,
          item: data.item,
          stok: data.stok,
          harga: data.harga,
          total: data.total
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
        penyuplai: null,
        catatan: null,
        item: null,
        stok: null,
        harga: null,
        total: null
      }
    })
  })
})

// Delete
router.delete('/:id', function(req, res, next) {
  let id = req.params.id;
  P0.findByIdAndRemove(id).then(data => {
    if(data){
      res.json({
        success: true,
        message: "data has been deleted",
        data:{
          _id: data._id,
          id: data.id,
          penyuplai: data.penyuplai,
          catatan: data.catatan,
          item: data.item,
          stok: data.stok,
          harga: data.harga,
          total: data.total
        }
      })
    }else{
      res.json({
        success: false,
        message: `daleting data has been failed id: ${id}`,
        data:{
          _id: null,
          id: null,
          penyuplai: null,
          catatan: null,
          item: null,
          stok: null,
          harga: null,
          total: null
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
        penyuplai: null,
        catatan: null,
        item: null,
        stok: null,
        harga: null,
        total: null
      }
    })
  })
})


module.exports = router;
