import React, { Component } from 'react'

export default class DataCustomer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false,
      nama: this.props.nama || '',
      stok: this.props.stok || ''
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleEditClick(){
    this.setState({editing: true})
  }

  handleSave(){
    let nama = this.state.nama.trim();
    let stok = this.state.stok.trim();
    if(!nama || !stok){
      return;
    }
    this.props.editProduk(this.props.id, nama, stok)
    this.setState({editing: false})
  }

  render(){
    if(this.state.editing){
      return(
        <tr>
        <td><input type="text" name="nama" className="form-control" placeholder="Nama Kategori" value={this.state.nama} onChange={this.handleChange.bind(this)} /></td>
        <td><input type="text" name="stok" className="form-control" placeholder="Stok Item" value={this.state.stok} onChange={this.handleChange.bind(this)} /></td>
        <td><button type="button" className="btn btn-primary" onClick={this.handleSave.bind(this)}><span className="glyphicon glyphicon-floppy-disk"></span> Simpan</button></td>
        </tr>
      )
    }else {
      return(
        <tr>
        <td>{this.props.nama}</td>
        <td>{this.props.stok}</td>
        <td>
        <button type="button" className="btn btn-success" onClick={this.handleEditClick.bind(this)}><span className="glyphicon glyphicon-pencil"></span> Ubah</button>&nbsp;
        <button type="button" className="btn btn-danger" onClick={() => this.props.deleteProduk(this.props.id)}><span className="glyphicon glyphicon-trash"></span> Hapus</button>
        </td>
        </tr>
      )
    }
  }

}
