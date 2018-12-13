import React, { Component } from 'react'
import DataProduk from './DataProduk'
import TambahProduk from './TambahProduk'

export default class DaftarProduk extends Component {
  render() {

    return(
      <div className="container-fluid">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Daftar Produk</div>
      <div className="panel-body">
      <form className="form-inline">
      <div className="form-group">
      <TambahProduk />
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
      <th>Kode</th>
      <th>Nama</th>
      <th>Kategori</th>
      <th>Harga</th>
      <th>Stok</th>
      <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        <DataProduk />
      </tbody>
      </table>
      </div>
      </div>
    );
  }
}
