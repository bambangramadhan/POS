import * as types from '../constants/ActionTypes'
import request from 'superagent'

const SERVER_URL = 'http://localhost:3001/api/'

export function addDataSupplier(id, nama, no_telp, email, alamat, kode_pos, kota, negara){
  return {type: types.ADD_SUPPLIER, id, nama, no_telp, email, alamat, kode_pos, kota, negara}
}

function addSupplierFailure(){
  return {type: types.ADD_SUPPLIER_FAILURE}
}

function addSupplierSuccess(supplier) {
  return {type: types.ADD_SUPPLIER_SUCCESS, supplier}
}

export function addSupplier(nama, no_telp, email, alamat, kode_pos, kota, negara) {
  let id = Date.now()
  return dispatch => {
    dispatch(addDataSupplier(id, nama, no_telp, email, alamat, kode_pos, kota, negara))
    return request
    .post(`${SERVER_URL}supplier`)
    .type('form')
    .send({id: id})
    .send({nama: nama})
    .send({no_telp: no_telp})
    .send({email: email})
    .send({alamat: alamat})
    .send({kode_pos: kode_pos})
    .send({kota: kota})
    .send({negara: negara})
    .end((err, res) => {
      if(err) {
        console.error(err);
        dispatch(addSupplierFailure())
      }else {
        console.log(res.body);
        dispatch(addSupplierSuccess(res.body))
      }
    })
  }
}

function loadSupplierFailure(){
  return {type: types.LOAD_SUPPLIER_FAILURE}
}

function loadSupplierSuccess(supplier){
  return {type: types.LOAD_SUPPLIER_SUCCESS, supplier}
}

export function loadSupplier(){
  return dispatch => {
    return request
    .get(`${SERVER_URL}supplier`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        console.error(err)
        dispatch(loadSupplierFailure())
      }else{
        dispatch(loadSupplierSuccess(res.body))
      }
    })
  }
}

export function deleteDataSupplier(id){
  return {type: types.DELETE_DATA_SUPPLIER, id}
}

export function deleteSupplier(id){
  return dispatch => {
    dispatch(deleteDataSupplier(id))
    return request
    .delete(`${SERVER_URL}supplier/` + id)
    .type('form')
    .end((err) => {
      if(err){
        console.error(err)
      }
    })
  }
}
