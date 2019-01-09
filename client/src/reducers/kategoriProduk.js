import {ADD_KATEGORI_PRODUK, ADD_KATEGORI_PRODUK_SUCCESS, LOAD_KATEGORI_PRODUK_FAILURE, LOAD_KATEGORI_PRODUK_SUCCESS, EDIT_KATEGORI_PRODUK, DELETE_KATEGORI_PRODUK} from '../constants/ActionTypes'

export default function kategori(state = [], action){
  switch (action.type) {
    case ADD_KATEGORI_PRODUK:
    return [
      {
        id: action.id,
        nama: action.nama,
        stok: action.stok
      },
      ...state
    ]

    case ADD_KATEGORI_PRODUK_SUCCESS:
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

    case EDIT_KATEGORI_PRODUK:
    return state.map(data => data._id === action.id ? Object.assign({}, data, {nama: action.nama, stok: action.stok}) : data)

    case DELETE_KATEGORI_PRODUK:
    return state.filter(data => data._id !== action.id)

    case LOAD_KATEGORI_PRODUK_SUCCESS:
    return action.produk

    case LOAD_KATEGORI_PRODUK_FAILURE:
    return state

    default:
    return state
  }
}
