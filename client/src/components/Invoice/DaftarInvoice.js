import React, { Component } from 'react'
import '../../App.css'
import DetailInvoice from './DetailInvoice'

export default class DaftarInvoice extends Component {

  render() {

    return(
      <div>
      <span className="glyphicon glyphicon-random"></span><h1 className="">Faktur</h1><hr />
      <div className="container-fluid">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Daftar Invoice</div>
      <div className="panel-body">
      <form className="form-inline" id="demo-2">
      <div className="form-group">
      <input name="kode" type="search" placeholder="No Struk ..." />
      </div>
      </form>
      </div>
      </div>
      <table className="table table-striped">
      <thead>
      <tr>
      <th>No. Struk</th>
      <th>Tanggal</th>
      <th>Pelanggan</th>
      <th>Total</th>
      <th>Opsi</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>000121</td>
      <td>Selasa, 22-10-2018</td>
      <td>Bambang</td>
      <td>Rp. 20.000.000</td>
      <td>
      <DetailInvoice />
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
