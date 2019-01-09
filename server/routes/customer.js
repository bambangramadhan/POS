var express = require('express');
var router = express.Router();
var Customer = require('../models/customer');
var moment = require('moment')

// Addcustomer
router.post('/', (req, res) =>{
  let customer = new Customer ({
    id: req.body.id,
    nama: req.body.nama,
    no_telp: req.body.no_telp,
    email: req.body.email,
    tgl_lahir: req.body.tgl_lahir,
    jenis_kelamin: req.body.jenis_kelamin,
    berlangganan: req.body.berlangganan,
    alamat: req.body.alamat
  })
  customer.save().then(data => {
    res.json({
      status: 'SUCCESS',
      data:{
        _id: data._id,
        id: data.id,
        nama: data.nama,
        no_telp: data.no_telp,
        email: data.email,
        tgl_lahir: moment(data.tgl_lahir).format("DD-MM-YYYY"),
        jenis_kelamin: data.jenis_kelamin,
        berlangganan: moment(data.berlangganan).format("DD-MM-YYYY"),
        alamat: data.alamat
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
        tgl_lahir: null,
        jenis_kelamin: null,
        berlangganan: null,
        alamat: null
      }
    })
  })
})

// Read customer
router.get('/', function(req, res) {
  Customer.find()
  .then(datadate => {
    let data = [];
    datadate.forEach(item => {
      data.push({
        _id: item._id,
        id: item.id,
        nama: item.nama,
        no_telp: item.no_telp,
        email: item.email,
        tgl_lahir: moment(item.tgl_lahir).format("DD-MM-YYYY"),
        jenis_kelamin: item.jenis_kelamin,
        berlangganan: moment(item.berlangganan).format("DD-MM-YYYY"),
        alamat: item.alamat
      })
    })
    res.json(data)
  }).catch(err => {
    res.json({error: true, message: err.message})
  })
})

// Edit
router.put('/:id', function(req, res) {
  let id = req.params.id;
  Customer.findByIdAndUpdate(id, {
    id: req.body.id,
    nama: req.body.nama,
    no_telp: req.body.no_telp,
    berlangganan: req.body.berlangganan,
    alamat: req.body.alamat
  }, {new: true})
  .then(data => {
    if(!data){
      res.json({error: true, message: `note with id : ${id} not found`})
    }else {
      res.json({
        success: true,
        message: 'data has been updated',
        data: {
          _id: data._id,
          id: data.id,
          nama: data.nama,
          no_telp: data.no_telp,
          berlangganan: moment(data.berlangganan).format("DD-MM-YYYY"),
          alamat: data.alamat
        }
      })
    }
  }).catch(err => {
    res.json({error: true, message: err.message})
  })
})

// Delete
router.delete('/:id', function(req, res, next) {
  let id = req.params.id;
  Customer.findByIdAndRemove(id).then(data => {
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
          tgl_lahir: moment(data.tgl_lahir).format("DD-MM-YYYY"),
          jenis_kelamin: data.jenis_kelamin,
          berlangganan: moment(data.berlangganan).format("DD-MM-YYYY"),
          alamat: data.alamat
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
          tgl_lahir: null,
          jenis_kelamin: null,
          berlangganan: null,
          alamat: null
        }
      })
    }
  }).catch(err => {
    res.json({
      success: false,
      message: "deleting data has been failed id: ",
      data:{
        _id: null,
        id: null,
        nama: null,
        no_telp: null,
        email: null,
        tgl_lahir: null,
        jenis_kelamin: null,
        berlangganan: null,
        alamat: null
      }
    })
  })
})

router.get('/:id', function(req, res) {
  Customer.findOne({
    id: req.params.id
  })
  .then(data => {
    if(!data){
      res.json({error: true, message: `customer with id : ${id} not found`})
    }else {
      res.json({
        status: 'SUCCESS',
        data:{
          _id: data._id,
          id: data.id,
          nama: data.nama,
          no_telp: data.no_telp,
          email: data.email,
          tgl_lahir: moment(data.tgl_lahir).format("DD-MM-YYYY"),
          jenis_kelamin: data.jenis_kelamin,
          berlangganan: moment(data.berlangganan).format("DD-MM-YYYY"),
          alamat: data.alamat
        }
      })
    }
  }).catch(err => {
    res.json({error: true, message: err.message})
  })
})



module.exports = router;
