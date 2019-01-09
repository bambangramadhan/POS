import React, { Component } from 'react'
import DetailPenjualan from './DetailPenjualan'

export default class Penjualan extends Component {
  render(){
    return(
      <div>
      <span className="glyphicon glyphicon-random"></span><h1 className="">Penjualan</h1><hr />
      <div className="container-fluid">
      <br />
      <div className="panel panel-primary">

      <table className="table table-striped">
      <thead>
      <tr>
      <th>Nama</th>
      <th>Kategori</th>
      <th>Jumlah Terjual</th>
      <th>Total</th>
      <th>Opsi</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>Teh Gelas</td>
      <td>Minuman</td>
      <td>10</td>
      <td>Rp. 20.000</td>
      <td>
      <DetailPenjualan />
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
    )
  }
}
