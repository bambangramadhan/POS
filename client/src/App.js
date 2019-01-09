import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Customers from './components/Customers/Customers'
import Produk from './components/Produk/Produk'
import KategoriBar from './components/Produk/KategoriBar'
import Invoice from './components/Invoice/Invoice'
import Kasir from './components/Kasir/Kasir'
import PO from './components/PO/PO'
import PO2 from './components/PO/PO2'
import Reports from './components/Reports/Reports'
import LaporanTransaksi from './components/Reports/LaporanTransaksi'
import Supplier from './components/Supplier/Supplier'
import Dashboard from './components/Dashboard/Dashboard'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/pelanggan' component={Customers}/>
        <Route path='/data-produk' component={Produk}/>
        <Route path='/kategori-produk' component={KategoriBar}/>
        <Route path='/faktur' component={Invoice}/>
        <Route path='/kasir' component={Kasir}/>
        <Route path='/buat-orderan' component={PO}/>
        <Route path='/data-pembelian' component={PO2}/>
        <Route path='/laporan-penjualan' component={Reports}/>
        <Route path='/laporan-transaksi' component={LaporanTransaksi}/>
        <Route path='/penyuplai' component={Supplier}/>
        <Route path='/dashboard' component={Dashboard}/>
      </Switch>
    )
  }
}



export default App;
