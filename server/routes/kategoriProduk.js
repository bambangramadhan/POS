var express = require('express');
var router = express.Router();
var Kategori = require('../models/kategoriProduk');

// Addkategori
router.post('/', (req, res) =>{
  let kategori = new Kategori ({
    id: req.body.id,
    nama: req.body.nama,
    stok: req.body.stok
  })
  kategori.save().then(data => {
    res.json({
      status: 'SUCCESS',
      data:{
        _id: data._id,
        id: data.id,
        nama: data.nama,
        stok: data.stok
      }
    })
  }).catch(err => {
    res.json({
      data:{
        _id: null,
        id: null,
        nama: null,
        stok: null
      }
    })
  })
})

// Read kategori
router.get('/', (req, res) => {
  Kategori.find().then(data => {
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
  Kategori.findByIdAndUpdate(id, {
    nama: req.body.nama,
    stok: req.body.stok
  }, {new: true}).then(data => {
    if(!data){
      res.json({
        success: false,
        message: `updating data has been failed id : ${id} not found`,
        data: {
          _id: null,
          id: null,
          nama: null,
          stok: null
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
          stok: data.stok
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
        stok: null
      }
    })
  })
})

// Delete
router.delete('/:id', function(req, res, next) {
  let id = req.params.id;
  Kategori.findByIdAndRemove(id).then(data => {
    if(data){
      res.json({
        success: true,
        message: "data has been deleted",
        data:{
          _id: data._id,
          id: data.id,
          nama: data.nama,
          stok: data.stok
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
          stok: null
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
        stok: null
      }
    })
  })
})

// // Browse
// router.post('/search', (req, res)=>{
//   let keysearch = {};
//   if (req.body.name){
//     keysearch.name = {$regex: req.body.name, $options: "$i"}
//   }
//   if (req.body.id){
//     keysearch.id = req.body.id
//   }
//
//   Kategori.find(keysearch).then(data1 =>{
//     res.json(data1);
//   }).catch(err =>{
//     res.json({
//       error: true,
//       message: err.message
//     })
//   })
// })
//
// // find
// router.get('/:id', function(req, res, next){
//   let id = req.params.id;
//   Kategori.findById(id).then(data => {
//     if(data){
//       res.json({
//         success: true,
//         message: "data found",
//         data:{
//           _id: data._id,
//           id: data.id,
//           nama: data.nama,
//           stok: data.stok
//         }
//       })
//     }else{
//       res.json({
//         success: false,
//         message: `data with id: ${id} not found`,
//         data:{
//           _id: null,
//           id: null,
//           nama: null,
//           stok: null
//         }
//       })
//     }
//   }).catch(err =>{
//     res.json({
//       success: false,
//       message: "data not found",
//       data:{
//         _id: null,
//         id: null,
//         nama: null,
//         stok: null
//       }
//     })
//   })
// })



module.exports = router;
