import React, { Component } from 'react'
import '../../App.css'
import DetailInvoice from './DetailInvoice'

export default class DaftarInvoice extends Component {

  render() {

    return(
      <div className="container-fluid">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Daftar Invoice</div>
      <div className="panel-body">
      <form className="form-inline">
      <div className="form-group">
      <div className="box">
      <div className="container-2">&nbsp;
      <span className="icon"><i className="fa fa-search fa-lg fa-fw" aria-hidden="true"></i></span>
      <input type="text" id="search" placeholder="    Cari..." />
      </div>
      </div>
      </div>
      </form>
      </div>
      </div>
      <table className="table table-striped">
      <thead>
      <tr>
      <th>No. Struk</th>
      <th>Tanggal</th>
      <th>Customer</th>
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
      <DetailInvoice />
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
    )
  }
}
