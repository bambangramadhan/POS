import React, { Component } from 'react'

export default class DataCustomer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false,
      kode: this.props.data.kode || '',
      nama: this.props.data.nama || '',
      kategori: this.props.data.kategori || '',
      harga_beli: this.props.data.harga_beli || '',
      harga_jual: this.props.data.harga_jual || '',
      stok: this.props.data.stok || ''
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleEditClick(){
    this.setState({editing: true})
  }

  handleSave(){
    var kode = this.state.kode.trim()
    var nama = this.state.nama.trim()
    var kategori = this.state.kategori.trim()
    var harga_beli = this.state.harga_beli.trim()
    var harga_jual = this.state.harga_jual.trim()
    var stok = this.state.stok.trim()
    if(!nama || !kategori || !harga_beli || !harga_jual || !stok){
      return;
    }
    this.props.editProduk(this.props.data._id, kode, nama, kategori, harga_beli, harga_jual, stok)
    this.setState({editing: false})
  }

  render(){
    if(this.state.editing){
      return(
        <tr>
        <td><input type="text" name="kode" className="form-control" placeholder="kode" value={this.state.kode} onChange={this.handleChange.bind(this)} readOnly/></td>
        <td><input type="text" name="nama" className="form-control" placeholder="nama" value={this.state.nama} onChange={this.handleChange.bind(this)} /></td>
        <td><input type="text" name="kategori" className="form-control" placeholder="kategori" value={this.state.kategori} onChange={this.handleChange.bind(this)}/></td>
        <td><input type="text" name="harga_beli" className="form-control" placeholder="hargabeli" value={this.state.harga_beli} onChange={this.handleChange.bind(this)}/></td>
        <td><input type="text" name="harga_jual" className="form-control" placeholder="hargajual" value={this.state.harga_jual} onChange={this.handleChange.bind(this)}/></td>
        <td><input type="text" name="stok" className="form-control" placeholder="stok" value={this.state.stok} onChange={this.handleChange.bind(this)}/></td>
        <td><button type="button" className="btn btn-primary" onClick={this.handleSave.bind(this)}><span className="glyphicon glyphicon-floppy-disk"></span> Simpan</button></td>
        </tr>
      )
    }else {
      return(
        <tr>
        <td>{this.props.data.kode}</td>
        <td>{this.props.data.nama}</td>
        <td>{this.props.data.kategori}</td>
        <td>{this.props.data.harga_beli}</td>
        <td>{this.props.data.harga_jual}</td>
        <td>{this.props.data.stok}</td>
        <td>
        <button type="button" className="btn btn-success" onClick={this.handleEditClick.bind(this)}><span className="glyphicon glyphicon-pencil"></span> Ubah</button>&nbsp;
        <button type="button" className="btn btn-danger" onClick={() => this.props.deleteProduk(this.props.data._id)}><span className="glyphicon glyphicon-trash"></span> Hapus</button>
        </td>
        </tr>
      )
    }
  }
}
