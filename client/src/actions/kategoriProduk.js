import * as types from '../constants/ActionTypes'
import request from 'superagent'

const SERVER_URL = 'http://localhost:3001/api/kategori-produk'

export function addKategoriProduk(id, nama, stok){
  return {type: types.ADD_KATEGORI_PRODUK, id, nama, stok}
}

function addProdukFailure(){
  return {type: types.ADD_KATEGORI_PRODUK_FAILURE}
}

function addProdukSuccess(produk) {
  return {type: types.ADD_KATEGORI_PRODUK_SUCCESS, produk}
}

export function addProduk(nama, stok) {
  let id = Date.now()
  return dispatch => {
    dispatch(addKategoriProduk(id, nama, stok))
    return request
    .post(`${SERVER_URL}`)
    .type('form')
    .send({id: id})
    .send({nama: nama})
    .send({stok: stok})
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
  return {type: types.LOAD_KATEGORI_PRODUK_FAILURE}
}

function loadProdukSuccess(produk){
  return {type: types.LOAD_KATEGORI_PRODUK_SUCCESS, produk}
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

export function editDataProduk(id, nama, stok){
  return {type: types.EDIT_KATEGORI_PRODUK, id, nama, stok}
}

export function editProduk(id, nama, stok){
  return dispatch => {
    dispatch(editDataProduk(id, nama, stok))
    return request
    .put(`${SERVER_URL}/` + id )
    .type('form')
    .send({nama: nama})
    .send({stok: stok})
    .end((err) => {
      if(err){
        console.error(err)
      }
    })
  }
}

export function deleteDataProduk(id){
  return {type: types.DELETE_KATEGORI_PRODUK, id}
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
