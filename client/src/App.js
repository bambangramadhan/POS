import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Test from './components/Test'
import CustomerList from './components/Customers/CustomerList'
import DaftarProduk from './components/Produk/DaftarProduk'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Test} />
        <Route path='/customer' component={CustomerList}/>
        <Route path='/produk' component={DaftarProduk}/>
      </Switch>
    )
  }
}



export default App;
