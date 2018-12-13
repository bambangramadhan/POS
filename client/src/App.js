import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Test from './components/Test'
import Customers from './components/Customers/Customers'
import Produk from './components/Produk/Produk'
import Invoice from './components/Invoice/Invoice'
import Kasir from './components/Kasir/Kasir'
import PO2 from './components/PO/PO2'
import Reports from './components/Reports/Reports'
import Supplier from './components/Supplier/Supplier'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Test} />
        <Route path='/customers' component={Customers}/>
        <Route path='/produk' component={Produk}/>
        <Route path='/invoice' component={Invoice}/>
        <Route path='/kasir' component={Kasir}/>
        <Route path='/po' component={PO2}/>
        <Route path='/reports' component={Reports}/>
        <Route path='/supplier' component={Supplier}/>
      </Switch>
    )
  }
}



export default App;
