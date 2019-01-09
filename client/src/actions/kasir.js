import * as types from '../constants/ActionTypes'
import request from 'superagent'

const SERVER_URL = 'http://localhost:3001/api/kasir'

export function addDataKasir(id, nama, no_nota, tgl_transaksi, kode_barang, nama_barang, harga_satuan, jumlah_jual, harga_akhir, total_transaksi){
  return {type: types.ADD_KASIR, id, nama, no_nota, tgl_transaksi, kode_barang, nama_barang, harga_satuan, jumlah_jual, harga_akhir, total_transaksi}
}

function addKasirFailure(){
  return {type: types.ADD_KASIR_FAILURE}
}

function addKasirSuccess(kasir) {
  return {type: types.ADD_KASIR_SUCCESS, kasir}
}

export function addKasir(id, nama, no_nota, tgl_transaksi, kode_barang, nama_barang, harga_satuan, jumlah_jual, harga_akhir, total_transaksi) {
  return dispatch => {
    dispatch(addDataKasir(id, nama, no_nota, tgl_transaksi, kode_barang, nama_barang, harga_satuan, jumlah_jual, harga_akhir, total_transaksi))
    return request
    .post(`${SERVER_URL}`)
    .type('form')
    .send({id: id})
    .send({nama: nama})
    .send({no_nota: no_nota})
    .send({tgl_transaksi: tgl_transaksi})
    .send({kode_barang: kode_barang})
    .send({nama_barang: nama_barang})
    .send({harga_satuan: harga_satuan})
    .send({jumlah_jual: jumlah_jual})
    .send({harga_akhir: harga_akhir})
    .send({total_transaksi: total_transaksi})
    .end((err, res) => {
      if(err) {
        console.error(err);
        dispatch(addKasirFailure())
      }else {
        console.log(res.body);
        dispatch(addKasirSuccess(res.body))
      }
    })
  }
}

function loadKasirFailure(){
  return {type: types.LOAD_KASIR_FAILURE}
}

function loadKasirSuccess(kasir){
  return {type: types.LOAD_KASIR_SUCCESS, kasir}
}

export function loadKasir(){
  return dispatch => {
    return request
    .get(`${SERVER_URL}`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        console.error(err)
        dispatch(loadKasirFailure())
      }else{
        dispatch(loadKasirSuccess(res.body))
      }
    })
  }
}

export function deleteDataKasir(id){
  return {type: types.DELETE_DATA_KASIR, id}
}

export function deleteKasir(id){
  return dispatch => {
    dispatch(deleteDataKasir(id))
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
