import {combineReducers} from 'redux'
import customer from './customer'
import kategori from './kategoriProduk'
import data from './dataProduk'
import po from './po'
import kasir from './kasir'
import supplier from './supplier'

const rootReducer = combineReducers({
  customer: customer,
  data: data,
  kategori: kategori,
  kasir: kasir,
  po: po,
  supplier: supplier
})

export default rootReducer
