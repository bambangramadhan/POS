import {ADD_DATA_PRODUK, ADD_DATA_PRODUK_SUCCESS, LOAD_DATA_PRODUK_FAILURE, LOAD_DATA_PRODUK_SUCCESS, EDIT_DATA_PRODUK, DELETE_DATA_PRODUK} from '../constants/ActionTypes'

export default function data(state = [], action){
  switch (action.type) {
    case ADD_DATA_PRODUK:
    return [
      {
        kode: action.kode,
        nama: action.nama,
        harga_beli: action.harga_beli,
        harga_jual: action.harga_jual,
        stok: action.stok,
        kategori: action.kategori
      },
      ...state
    ]

    case ADD_DATA_PRODUK_SUCCESS:
    // let produk = state
    // let idObject = produk.map(function(x){
    //   return x.id
    // }).indexOf(parseInt(action.produk.id))
    // if (idObject > -1) {
    //   return state
    // }else {
    //   return [action.produk, ...state]
    // }
    return state

    case EDIT_DATA_PRODUK:
    return state.map(data => data._id === action.id ? Object.assign({}, data, {kode: action.kode, nama: action.nama, harga_beli: action.harga_beli, harga_jual: action.harga_jual, stok: action.stok, kategori: action.kategori}) : data)

    case DELETE_DATA_PRODUK:
    return state.filter(data => data._id !== action.id)

    case LOAD_DATA_PRODUK_SUCCESS:
    return action.produk

    case LOAD_DATA_PRODUK_FAILURE:
    return state

    default:
    return state
  }
}
