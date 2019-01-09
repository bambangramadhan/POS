import React, { Component } from 'react'
import DataKategori from './DataKategori'

export default class Kategori extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      adding: false,
      nama: '',
      stok: ''
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleAddClick(){
    this.setState({adding: true})
  }

  handleCancelClick(){
    this.setState({adding: false})
  }

  handleSubmit(e){
    e.preventDefault();
    let nama = this.state.nama.trim();
    let stok = this.state.stok.trim();
    if(!nama || !stok){
      return;
    }
    this.props.actions.addProduk(nama, stok)
    this.setState({nama: '', stok: '', adding: false})
  }

  render() {
    let dataNodes = [].concat(this.props.data)
    .sort((a, b) => a.nama > b.nama)
    .map(val => {
       return (
          <DataKategori key={val._id} id={val._id} nama={val.nama} stok={val.stok} {...this.props.actions}/>
       )
    })
    //tujuan dari mapping ini supaya nanti pas dipanggil di file sekanjutnya tidak menghasilkan undefined

    if(this.state.adding) {
      return(
        <div>
        <span className="glyphicon glyphicon-random"></span><h1 className="">Kategori Produk</h1><hr />
        <div className="container-fluid">
        <br />
        <div className="panel panel-primary">
        <div className="panel panel-default">
        <div className="panel-heading">Kategori</div>
        <div className="panel-body">
        <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
        <label>Nama Kategori</label>&nbsp;
        <input type="text" name="nama" className="form-control" placeholder="Nama Kategori" value={this.state.nama} onChange={this.handleChange.bind(this)} />&nbsp;
        </div>
        <div className="form-group">
        <label>Stok</label>&nbsp;
        <input type="text" name="stok" className="form-control" placeholder="Stok" value={this.state.stok} onChange={this.handleChange.bind(this)} />&nbsp;
        </div>
        <button type="submit" className="btn btn-success"><span className="glyphicon glyphicon-ok-circle"> Simpan</span></button>&nbsp;
        <button type="button" className="btn btn-warning" onClick={this.handleCancelClick.bind(this)}><span className="glyphicon glyphicon-ban-circle"> Batal</span></button>
        </form>
        </div>
        </div>
        <table className="table table-striped">
        <thead>
        <tr>
        <th>Nama Kategori</th>
        <th>Stok Item</th>
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
      )
    }else {
      return(
        <div>
        <span className="glyphicon glyphicon-random"></span><h1 className="">Kategori Produk</h1><hr />
        <div className="container-fluid">
        <br />
        <div className="panel panel-primary">
        <div className="panel panel-default">
        <div className="panel-heading">Customer List</div>
        <div className="panel-body">
        <button type="button" className="btn btn-primary" onClick={this.handleAddClick.bind(this)}><span className="glyphicon glyphicon-plus"></span> Tambah</button>
        </div>
        </div>
        <table className="table table-striped">
        <thead>
        <tr>
        <th>Nama Kategori</th>
        <th>Stok Item</th>
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
}
