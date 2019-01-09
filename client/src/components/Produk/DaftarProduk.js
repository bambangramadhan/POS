import React, { Component } from 'react'
import DataProduk from './DataProduk'
import TambahProduk from './TambahProduk'

export default class DaftarProduk extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      kode: '',
      nama: ''
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
  }

  render() {
    const {data, actions} = this.props

    var kode = this.state.kode.trim().toLowerCase()
    var nama = this.state.nama.trim().toLowerCase()

    var filteredData = data

    if(kode !== '' && nama !== '' ){
      filteredData = data.filter(item => item.kode.startsWith(kode) && item.nama.toLowerCase().startsWith(nama))
    }else if (kode !== '') {
      filteredData =  data.filter(item => item.kode.startsWith(kode))
    }else if (nama !== '') {
      filteredData =  data.filter(item => item.nama.toLowerCase().startsWith(nama))
    }

    let dataNodes = filteredData.map(function(data){
      return(
        <DataProduk key={data._id} data={data} {...actions} />
      )
    });

    return(
      <div>
      <span className="glyphicon glyphicon-random"></span><h1 className="">Daftar Produk</h1><hr />
      <div className="container-fluid">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Daftar Produk</div>
      <div className="panel-body">
      <div className="form-group">
      <TambahProduk data={data} actions={actions} />
      </div>
      <form className="form-inline" id="demo-2" onSubmit={this.handleSubmit.bind(this)}>
      <div className="form-group">
      <input name="kode" type="search" placeholder="Masukkan kode ..." value={this.state.kode} onChange={this.handleChange.bind(this)} />&nbsp;
      </div>
      <div className="form-group">
      <input name="nama" type="search" placeholder="Masukkan nama ..." value={this.state.nama} onChange={this.handleChange.bind(this)} />
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
      <th>Harga Beli</th>
      <th>Harga Jual</th>
      <th>Stok</th>
      <th>Opsi</th>
      </tr>
      </thead>
      <tbody>
        {dataNodes}
      </tbody>
      </table>
      </div>
      </div>
      </div>
    );
  }
}
