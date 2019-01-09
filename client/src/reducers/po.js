import {ADD_PO, ADD_PO_SUCCESS, LOAD_PO_FAILURE, LOAD_PO_SUCCESS} from '../constants/ActionTypes'

export default function po(state = [], action){
  switch (action.type) {
    case ADD_PO:
    return [
      {
        id: action.id,
        penyuplai: action.penyuplai,
        catatan: action.no_telp,
        item: action.item,
        stok: action.stok,
        order: action.order,
        harga: action.harga,
        total: action.total
      },
      ...state
    ]

    case ADD_PO_SUCCESS:
    // let po = state
    // let idObject = po.map(function(x){
    //   return x.id
    // }).indexOf(parseInt(action.po.id))
    // if (idObject > -1) {
    //   return state
    // }else {
    //   return [action.po, ...state]
    // }
    return state

    case LOAD_PO_SUCCESS:
    return action.po

    case LOAD_PO_FAILURE:
    return state

    default:
    return state
  }
}
