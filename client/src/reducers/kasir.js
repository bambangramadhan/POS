import {ADD_KASIR, ADD_KASIR_SUCCESS, LOAD_KASIR_FAILURE, LOAD_KASIR_SUCCESS, DELETE_DATA_KASIR} from '../constants/ActionTypes'

export default function kasir(state = [], action){
  switch (action.type) {
    case ADD_KASIR:
    return [
      {
        id: action.id,
        nama: action.nama,
        no_nota: action.no_nota,
        tgl_transaksi: action.tgl_transaksi,
        kode_barang: action.kode_barang,
        nama_barang: action.nama_barang,
        harga_satuan: action.harga_satuan,
        jumlah_jual: action.jumlah_jual,
        harga_akhir: action.harga_akhir,
        total_transaksi: action.total_transaksi
      },
      ...state
    ]

    case ADD_KASIR_SUCCESS:
    // let customer = state
    // let idObject = customer.map(function(x){
    //   return x.id
    // }).indexOf(parseInt(action.customer.id))
    // if (idObject > -1) {
    //   return state
    // }else {
    //   return [action.customer, ...state]
    // }
    return state

    case DELETE_DATA_KASIR:
    return state.filter(data => data._id !== action.id)

    case LOAD_KASIR_SUCCESS:
    return action.kasir

    case LOAD_KASIR_FAILURE:
    return state

    default:
    return state
  }
}
