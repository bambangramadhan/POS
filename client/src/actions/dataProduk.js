import * as types from '../constants/ActionTypes'
import request from 'superagent'

const SERVER_URL = 'http://localhost:3001/api/data-produk'

export function addDataProduk(kode, nama, kategori, harga_beli, harga_jual, stok){
  return {type: types.ADD_DATA_PRODUK, kode, nama, kategori, harga_beli, harga_jual, stok}
}

function addProdukFailure(){
  return {type: types.ADD_DATA_PRODUK_FAILURE}
}

function addProdukSuccess(produk) {
  return {type: types.ADD_DATA_PRODUK_SUCCESS, produk}
}

export function addProduk(kode, nama, kategori, harga_beli, harga_jual, stok) {
  return dispatch => {
    dispatch(addDataProduk(kode, nama, kategori, harga_beli, harga_jual, stok))
    return request
    .post(`${SERVER_URL}`)
    .type('form')
    .send({kode: kode})
    .send({nama: nama})
    .send({harga_beli: harga_beli})
    .send({harga_jual: harga_jual})
    .send({stok: stok})
    .send({kategori: kategori})
    .end((err, res) => {
      if(err) {
        console.error(err);
        dispatch(addProdukFailure())
      }else {
        console.log(res.body);
        dispatch(addProdukSuccess(res.body))
      }
    })
  }
}

function loadProdukFailure(){
  return {type: types.LOAD_DATA_PRODUK_FAILURE}
}

function loadProdukSuccess(produk){
  return {type: types.LOAD_DATA_PRODUK_SUCCESS, produk}
}

export function loadProduk(){
  return dispatch => {
    return request
    .get(`${SERVER_URL}`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        console.error(err)
        dispatch(loadProdukFailure())
      }else{
        dispatch(loadProdukSuccess(res.body))
      }
    })
  }
}

export function editDataProduk(id, kode, nama, kategori, harga_beli, harga_jual, stok){
  return {type: types.EDIT_DATA_PRODUK, id, kode, nama, kategori, harga_beli, harga_jual, stok}
}

export function editProduk(id, kode, nama, kategori, harga_beli, harga_jual, stok){
  return dispatch => {
    dispatch(editDataProduk(id, kode, nama, kategori, harga_beli, harga_jual, stok))
    return request
    .put(`${SERVER_URL}/` + id )
    .type('form')
    .send({kode: kode})
    .send({nama: nama})
    .send({harga_beli: harga_beli})
    .send({harga_jual: harga_jual})
    .send({stok: stok})
    .send({kategori: kategori})
    .end((err) => {
      if(err){
        console.error(err)
      }
    })
  }
}

export function deleteDataProduk(id){
  return {type: types.DELETE_DATA_PRODUK, id}
}

export function deleteProduk(id){
  return dispatch => {
    dispatch(deleteDataProduk(id))
    return request
    .delete(`${SERVER_URL}/` + id)
    .type('form')
    .end((err) => {
      if(err){
        console.error(err)
      }
    })
  }
}
