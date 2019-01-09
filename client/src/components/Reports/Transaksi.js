import React, { Component } from 'react'
import DetailTransaksi from './DetailTransaksi'

export default class Transaksi extends Component {
  render(){
    return(
      <div>
      <span className="glyphicon glyphicon-random"></span><h1 className="">Transaksi</h1><hr />
      <div className="container-fluid">
      <br />
      <div className="panel panel-primary">

      <table className="table table-striped">
      <thead>
      <tr>
      <th>No. Struk</th>
      <th>Tanggal</th>
      <th>Pelanggan</th>
      <th>Total</th>
      <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>000121</td>
      <td>Selasa, 22-10-2018</td>
      <td>Bambang</td>
      <td>Rp. 20.000.000</td>
      <td>
      <DetailTransaksi />
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
