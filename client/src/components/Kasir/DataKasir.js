import React, { Component } from 'react'
import ListItem from './ListItem'
import ListKasir from './ListKasir'

export default class Kasir extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      id: '',
      nama: '',
      no_nota: '',
      tgl_transaksi: '',
      kode_barang: '',
      nama_barang: '',
      harga_satuan: '',
      jumlah_jual: '',
      harga_akhir: '',
      total_transaksi: '2500000'
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    let id = this.state.id.trim();
    let nama = this.state.nama.trim();
    let no_nota = this.state.no_nota.trim();
    let tgl_transaksi = this.state.tgl_transaksi.trim();
    let kode_barang = this.state.kode_barang.trim();
    let nama_barang = this.state.nama_barang.trim();
    let harga_satuan = this.state.harga_satuan.trim();
    let jumlah_jual = this.state.jumlah_jual.trim();
    let harga_akhir = this.state.harga_akhir.trim();
    let total_transaksi = this.state.total_transaksi.trim();
    if(!id || !nama || !no_nota || !tgl_transaksi || ! kode_barang || !nama_barang || !harga_satuan || !jumlah_jual || !harga_akhir || !total_transaksi){
      return;
    }
    this.props.kasirActions.addKasir(id, nama, no_nota, tgl_transaksi, kode_barang, nama_barang, harga_satuan, jumlah_jual, harga_akhir, total_transaksi)
    this.setState({id: '', nama: '', no_nota: '', tgl_transaksi: '', kode_barang: '', nama_barang: '', harga_satuan: '', jumlah_jual: '', harga_akhir: '', total_transaksi: ''})
  }

  render() {
    const {data, kasir, kasirActions, dataActions} = this.props

    let dataNodes = [].concat(data)
    .sort((a, b) => a.nama > b.nama)
    .map(val => {
       return (
          <ListItem key={val._id} data={val.data} {...dataActions}/>
       )
    })

    let dataKasir = kasir.map(function(data){
      return(
        <ListKasir key={data.id} kasir={data} {...kasirActions} />
      )
    });
    return (
      <div>
      <span className="glyphicon glyphicon-random"></span><h1 className="">Kasir</h1><hr />
      <div className="container-fluid">
      <br /><br />

      <div className="panel panel-primary">
      <div className="panel-body">

      <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-plus"></span> Mulai Transaksi Baru</button>
      <br /><br />

      <form onSubmit={this.handleSubmit.bind(this)}>

      <div className="col-sm-6">
      <div className="panel panel-primary">
      <div className="panel-body">


      <div className='form-group'>
      <label className="col-sm-4 control-label">Pelanggan</label>
      <div className="col-sm-6">
      <input type="text" className="form-control" name="id" placeholder="Id Pelanggan" value={this.state.id} onChange={this.handleChange.bind(this)} />
      </div>
      <div className="col-sm-2">
      <button type="button" className="btn btn-success"><span className="glyphicon glyphicon-search"></span> Cari</button>
      </div>
      </div>

      <br />

      <div className='form-group'>
      <label className="col-sm-4 control-label"></label>
      <div className="col-sm-8">
      <input type="text" className="form-control" name="nama" placeholder="Nama Pelanggan" value={this.state.nama} onChange={this.handleChange.bind(this)} />
      </div>
      </div>

      <br />

      <div className='form-group'>
      <label className="col-sm-4 control-label">No. Nota</label>
      <div className="col-sm-8">
      <input type="text" className="form-control" name="no_nota" placeholder="No nota" value={this.state.no_nota} onChange={this.handleChange.bind(this)} />
      </div>
      </div>

      <br />

      <div className='form-group'>
      <label className="col-sm-4 control-label">Tanggal Transaksi</label>
      <div className="col-sm-8">
      <input type="date" className="form-control" name="tgl_transaksi" placeholder="tgl_transaksi" value={this.state.tgl_transaksi} onChange={this.handleChange.bind(this)} />
      </div>
      </div>

      </div>
      </div>
      </div>

      <div className="col-sm-6">
      <div className="panel panel-success">
      <div className="panel-body">

      <div className='form-group'>
      <label className="col-sm-4 control-label"><br /><br /><br /><br />Total Transaksi</label>
      <div className="col-sm-8"><br /><br />
      <div className="panel panel-success">
      <div className="panel-body">
      <h3 name="total_transaksi" onChange={this.handleChange.bind(this)}>Rp. {this.state.total_transaksi},00</h3>
      </div>
      </div>
      </div>
      </div>

      </div>
      <br />
      </div>
      </div>


      <div className="form-row">
      <div className="form-group col-md-2">
      <label>Kode Barang</label>
      <input type="text" className="form-control" name="kode_barang" placeholder="Kode Barang" value={this.state.kode_barang} onChange={this.handleChange.bind(this)} />
      </div>

      <div className="form-group col-md-2">
      <label>Nama Barang</label>
      <input type="text" className="form-control" name="nama_barang" placeholder="Nama Barang" value={this.state.nama_barang} onChange={this.handleChange.bind(this)} />
      </div>

      <div className="form-group col-md-2">
      <label>Harga Satuan</label>
      <input type="text" className="form-control" name="harga_satuan" placeholder="Harga Satuan" value={this.state.harga_satuan} onChange={this.handleChange.bind(this)} />
      </div>

      <div className="form-group col-md-2">
      <label>Jumlah Jual</label>
      <input type="text" className="form-control" name="jumlah_jual" placeholder="Jumlah Jual" value={this.state.jumlah_jual} onChange={this.handleChange.bind(this)} />
      </div>

      <div className="form-group col-md-2">
      <label>Harga Akhir</label>
      <input type="text" className="form-control" name="harga_akhir" placeholder="Harga Akhir" value={this.state.harga_akhir} onChange={this.handleChange.bind(this)} />
      </div>
      </div>

      <div className="form-group col-md-2">
      <br/><p><button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-plus"></span> Tambahkan</button></p>
      </div>

      </form>

      {dataNodes}

      <br /><br />

      <table className="table table-striped">
      <thead>
      <tr>
      <th>Kode Barang</th>
      <th>Nama Barang</th>
      <th>Harga Satuan</th>
      <th>Jumlah Jual</th>
      <th>Harga Akhir</th>
      <th>Opsi</th>
      </tr>
      </thead>
      <tbody>
      {dataKasir}
      </tbody>
      </table>

      <hr /><hr />

      <form className="form-horizontal">

      <div className='form-group'>
      <label className="col-sm-2 control-label">Bayar</label>
      <div className="col-sm-4">
      <input type="text" className="form-control" name="bayar" placeholder="Bayar" value={this.state.bayar} onChange={this.handleChange.bind(this)} />
      </div>
      </div>

      <div className='form-group'>
      <label className="col-sm-2 control-label">Kembalian</label>
      <div className="col-sm-4">
      <input type="text" className="form-control" name="kembalian" placeholder="Kembalian" value={this.state.kembalian} onChange={this.handleChange.bind(this)} />
      </div>
      </div>

      <button type="button" className="btn btn-primary col-md-offset-2 "><span className="glyphicon glyphicon-euro"></span> Bayar</button>&nbsp;
      <button type="button" className="btn btn-success"><span className="glyphicon glyphicon-floppy-disk"></span> Simpan Transaksi</button>

      </form>

      </div>
      </div>
      </div>
      </div>
    )
  }
}
