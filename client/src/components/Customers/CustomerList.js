import React, { Component } from 'react'
import DataCustomer from './DataCustomer'

export default class CustomerList extends Component {

  render() {

    return(
      <div className="container">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Customer List</div>
      <div className="panel-body">
      <form className="form-inline">
      <button type="button" className="btn btn-primary">Tambah</button>
      <div className="form-group">
      <label></label>&nbsp;
      <input type="text" className="form-control" name="id" placeholder="Cari berdasarkan id" />
      </div>
      <div className="form-group">
      <label></label>&nbsp;
      <input type="text" className="form-control" name="nama" placeholder="Cari berdasarkan nama" />
      </div>
      </form>
      </div>
      </div>
      <table className="table table-striped">
      <thead>
      <tr>
      <th>ID</th>
      <th>Nama</th>
      <th>Pelanggan Sejak</th>
      <th>Bulan Ini</th>
      <th>Tahun Ini</th>
      <th>Semuanya</th>
      <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        <DataCustomer />
      </tbody>
      </table>
      </div>
      </div>
    )
  }
}
