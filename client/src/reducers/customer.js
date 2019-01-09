import {ADD_CUSTOMER, ADD_CUSTOMER_SUCCESS, LOAD_CUSTOMER_FAILURE, LOAD_CUSTOMER_SUCCESS, EDIT_DATA_CUSTOMER, DELETE_DATA_CUSTOMER, GET_CUSTOMER_BY_ID} from '../constants/ActionTypes'

export default function customer(state = [], action){
  switch (action.type) {
    case ADD_CUSTOMER:
    return [
      {
        id: action.id,
        nama: action.nama,
        no_telp: action.no_telp,
        email: action.email,
        tgl_lahir: action.tgl_lahir,
        berlangganan: action.berlangganan,
        jenis_kelamin: action.jenis_kelamin,
        alamat: action.alamat
      },
      ...state
    ]

    case ADD_CUSTOMER_SUCCESS:
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

    case EDIT_DATA_CUSTOMER:
    return state.map(data => data._id === action._id ? Object.assign({}, data, {nama: action.nama, no_telp: action.no_telp, email: action.email, tgl_lahir: action.tgl_lahir, jenis_kelamin: action.jenis_kelamin, alamat: action.alamat}) : data)
    //sebenarnya walaupun tidak sesuai si kondisi ternarinya tapi tetap bakalan tereksekusi soalnya actions nya sudah tereksekusi di http oleh tombol onclick walaupun harus direfresh dulu kareana pemisalannya tidak benar jadi kondisi saat ditekan pun akan sama seperti sebelum dipencet, saat di refresh maka akan teredit/terhapus

    case DELETE_DATA_CUSTOMER:
    return state.filter(data => data._id !== action.id)

    case LOAD_CUSTOMER_SUCCESS:
    return action.customer

    case LOAD_CUSTOMER_FAILURE:
    return state

    case GET_CUSTOMER_BY_ID:
    return state.filter(data => data.id !== action.id)

    default:
    return state
  }
}
