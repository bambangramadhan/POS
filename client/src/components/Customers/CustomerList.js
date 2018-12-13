import React, { Component } from 'react'
import DataCustomer from './DataCustomer'
import TambahCustomer from './TambahCustomer'

export default class CustomerList extends Component {

  render() {

    return(
      <div className="container-fluid">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Customer List</div>
      <div className="panel-body">
      <form className="form-inline">
      <div className="form-group">
      <TambahCustomer />
      </div>
      <div className="form-group">
      <div className="box">
      <div className="container-2">&nbsp;
      <span className="icon"><i className="fa fa-search fa-lg fa-fw" aria-hidden="true"></i></span>
      <input type="text" id="search" placeholder="    Cari berdasarkan ID..." />
      </div>
      </div>
      </div>
      <div className="form-group">
      <div className="box">
      <div className="container-2">&nbsp;
      <span className="icon"><i className="fa fa-search fa-lg fa-fw" aria-hidden="true"></i></span>
      <input type="text" id="search" placeholder="    Cari berdasarkan Nama..." />
      </div>
      </div>
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
