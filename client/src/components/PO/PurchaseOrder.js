import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class PurchaseOrder extends Component {

  render() {

    return(
      <div>
      <span className="glyphicon glyphicon-random"></span><h1 className="">Data Pembelian</h1><hr />
      <div className="container-fluid">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Purchase Order</div>
      <div className="panel-body">
      <div className="form-group">
      <NavLink type="button" to='/buat-orderan' className="btn btn-primary"><span className="glyphicon glyphicon-plus"></span> Buat Orderan</NavLink>
      </div>
      <form className="form-inline" id="demo-2">
      <div className="form-group">
      <input name="nama" type="search" placeholder="Masukkan nama ..." />&nbsp;
      </div>
      </form>
      </div>
      </div>
      <table className="table table-striped">
      <thead>
      <tr>
      <th>Tanggal</th>
      <th>Penyuplai</th>
      <th>No. Orderan</th>
      <th>Total</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>Selasa, 20-11-2018 09:19</td>
      <td>Warung Bambang</td>
      <td>#0000222291092019</td>
      <td>Rp. 7.000.000</td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
    )
  }
}
