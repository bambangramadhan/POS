import React, { Component } from 'react'
import TambahSupplier from './TambahSupplier'
import '../../App.css'
import 'font-awesome/css/font-awesome.min.css';

export default class DaftarSupplier extends Component {

  render() {

    return(
      <div className="container-fluid">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Daftar Supplier</div>
      <div className="panel-body">
      <form className="form-inline">
      <div className="form-group">
      <TambahSupplier />
      </div>
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
      <th>Nama</th>
      <th>Alamat</th>
      <th>No. Telp</th>
      <th>Email</th>
      <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>Warung Bambang</td>
      <td>Garut</td>
      <td>08192801821</td>
      <td>bambang@gmail.com</td>
      <td>
      <button type="button" className="btn btn-danger"><span className="glyphicon glyphicon-trash"></span> Delete</button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
    )
  }
}
