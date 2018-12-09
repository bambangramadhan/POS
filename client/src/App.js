import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Test from './components/Test'
import CustomerList from './components/Customers/CustomerList'
import Produk from './components/Produk/Produk'
import DaftarInvoice from './components/Invoice/DaftarInvoice'
import Kasir from './components/Kasir/Kasir'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Test} />
        <Route path='/customer' component={CustomerList}/>
        <Route path='/produk' component={Produk}/>
        <Route path='/invoice' component={DaftarInvoice}/>
        <Route path='/kasir' component={Kasir}/>
      </Switch>
    )
  }
}



export default App;
