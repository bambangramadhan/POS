import React, { Component } from 'react'

export default class ListKasir extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      search: false
    }
  }

  handleShow() {
    this.setState({search: true})
  }

  handleHide() {
    this.setState({search: false})
  }

  render() {
    console.log(this.props);
    return(
      <tr>
      <td>{this.props.kasir.kode_barang}</td>
      <td>{this.props.kasir.nama_barang}</td>
      <td>{this.props.kasir.harga_satuan}</td>
      <td>{this.props.kasir.jumlah_jual}</td>
      <td>{this.props.kasir.harga_akhir}</td>
      <td><button type="button" className="btn btn-danger" onClick={()=> this.props.deleteKasir(this.props.kasir._id)}><span className="glyphicon glyphicon-trash"></span> Hapus</button></td>
      </tr>
    )
  }
}
