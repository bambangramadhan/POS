import * as types from '../constants/ActionTypes'
import request from 'superagent'

const SERVER_URL = 'http://localhost:3001/api/po'

export function addDataPO(id, penyuplai, catatan, item, stok, order, harga, total){
  return {type: types.ADD_PO, id, penyuplai, catatan, item, stok, order, harga, total}
}

function addPOFailure(){
  return {type: types.ADD_PO_FAILURE}
}

function addPOSuccess(po) {
  return {type: types.ADD_PO_SUCCESS, po}
}

export function addPO(penyuplai, catatan, item, stok, order, harga, total) {
  let id = Date.now();
  return dispatch => {
    dispatch(addDataPO(id, penyuplai, catatan, item, stok, order, harga, total))
    return request
    .post(`${SERVER_URL}`)
    .type('form')
    .send({id: id})
    .send({penyuplai: penyuplai})
    .send({catatan: catatan})
    .send({item: item})
    .send({stok: stok})
    .send({order: order})
    .send({harga: harga})
    .send({total: total})
    .end((err, res) => {
      if(err) {
        console.error(err);
        dispatch(addPOFailure())
      }else {
        console.log(res.body);
        dispatch(addPOSuccess(res.body))
      }
    })
  }
}

function loadPOFailure(){
  return {type: types.LOAD_PO_FAILURE}
}

function loadPOSuccess(po){
  return {type: types.LOAD_PO_SUCCESS, po}
}

export function loadPO(){
  return dispatch => {
    return request
    .get(`${SERVER_URL}`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        console.error(err)
        dispatch(loadPOFailure())
      }else{
        dispatch(loadPOSuccess(res.body))
      }
    })
  }
}
