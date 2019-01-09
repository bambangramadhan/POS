import * as types from '../constants/ActionTypes'
import request from 'superagent'

const SERVER_URL = 'http://localhost:3001/api/customer'

export function addDataCustomer(id, nama, no_telp, email, tgl_lahir, jenis_kelamin, berlangganan, alamat){
  return {type: types.ADD_CUSTOMER, id, nama, no_telp, email, tgl_lahir, jenis_kelamin, berlangganan, alamat}
}

function addCustomerFailure(){
  return {type: types.ADD_CUSTOMER_FAILURE}
}

function addCustomerSuccess(customer){
  return {type: types.ADD_CUSTOMER_SUCCESS, customer}
}

export function addCustomer(nama, no_telp, email, tgl_lahir, jenis_kelamin, berlangganan, alamat) {
  let id = Date.now()
  return dispatch => {
    dispatch(addDataCustomer(id, nama, no_telp, email, tgl_lahir, jenis_kelamin, berlangganan, alamat))
    return request
    .post(`${SERVER_URL}`)
    .type('form')
    .send({id: id})
    .send({nama: nama})
    .send({no_telp: no_telp})
    .send({email: email})
    .send({tgl_lahir: tgl_lahir})
    .send({jenis_kelamin: jenis_kelamin})
    .send({berlangganan: berlangganan})
    .send({alamat: alamat})
    .end((err, res) => {
      if(err){
        console.error(err);
        dispatch(addCustomerFailure())
      }else {
        console.log(res.body);
        dispatch(addCustomerSuccess(res.body))
      }
    })
  }
}

function loadCustomerFailure(){
  return {type: types.LOAD_CUSTOMER_FAILURE}
}

function loadCustomerSuccess(customer){
  return {type: types.LOAD_CUSTOMER_SUCCESS, customer}
}

export function loadCustomer() {
  return dispatch => {
    return request
    .get(`${SERVER_URL}`)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        console.error(err);
        dispatch(loadCustomerFailure())
      }else {
        dispatch(loadCustomerSuccess(res.body))
      }
    })
  }
}

export function editDataCustomer(_id, id, nama, no_telp, berlangganan, alamat){
  return {type: types.EDIT_DATA_CUSTOMER, _id, id, nama, no_telp, berlangganan, alamat}
}

export function editCustomer(_id, id, nama, no_telp, berlangganan, alamat){
  return dispatch => {
    dispatch(editDataCustomer(_id, id, nama, no_telp, berlangganan, alamat))
    return request
    .put(`${SERVER_URL}/` + _id )
    .type('form')
    .send({id: id})
    .send({nama: nama})
    .send({no_telp: no_telp})
    .send({berlangganan: berlangganan})
    .send({alamat: alamat})
    .end((err) => {
      if(err){
        console.error(err)
      }
    })
  }
}

export function deleteDataCustomer(id){
  return {type: types.DELETE_DATA_CUSTOMER, id}
}

export function deleteCustomer(id){
  return dispatch => {
    dispatch(deleteDataCustomer(id))
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

export function getCustomerById(id) {
  return {type: types.GET_CUSTOMER_BY_ID, id}
}

export function loadCustomerById(id) {
  return dispatch => {
    dispatch(getCustomerById(id))
    return request
    .get(`${SERVER_URL}/` + id)
    .set('Accept', 'application/json')
    .end((err, res) => {
      if(err){
        console.error(err)
      }
    })
  }
}
