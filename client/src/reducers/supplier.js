import {ADD_SUPPLIER, ADD_SUPPLIER_SUCCESS, LOAD_SUPPLIER_FAILURE, LOAD_SUPPLIER_SUCCESS, DELETE_DATA_SUPPLIER} from '../constants/ActionTypes'

export default function supplier(state = [], action){
  switch (action.type) {
    case ADD_SUPPLIER:
    return [
      {
        id: action.id,
        nama: action.nama,
        no_telp: action.no_telp,
        email: action.email,
        alamat: action.alamat,
        kode_pos: action.kode_pos,
        kota: action.kota,
        negara: action.negara
      },
      ...state
    ]

    case ADD_SUPPLIER_SUCCESS:
    // let supplier = state
    // let idObject = supplier.map(function(x){
    //   return x.id
    // }).indexOf(parseInt(action.supplier.id))
    // if (idObject > -1) {
    //   return state
    // }else {
    //   return [action.supplier, ...state]
    // }
    return state

    case DELETE_DATA_SUPPLIER:
    return state.filter(data => data._id !== action.id)

    case LOAD_SUPPLIER_SUCCESS:
    return action.supplier

    case LOAD_SUPPLIER_FAILURE:
    return state

    default:
    return state
  }
}
