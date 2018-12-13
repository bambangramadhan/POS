import React, { Component } from 'react'

export default class Penjualan extends Component {
  render(){
    return(
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
      <button type="button" className="btn btn-primary"> Detail</button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
    )
  }
}
