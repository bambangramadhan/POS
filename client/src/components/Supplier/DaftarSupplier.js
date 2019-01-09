import React, { Component } from 'react'
import TambahSupplier from './TambahSupplier'
import '../../App.css'
import 'font-awesome/css/font-awesome.min.css';

export default class DaftarSupplier extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      id: '',
      nama: '',
      no_telp: '',
      email: '',
      alamat: '',
      kode_pos: '',
      kota: '',
      negara: ''
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    const {data, actions} = this.props

    var id = this.state.id.trim().toLowerCase()
    var nama = this.state.nama.trim().toLowerCase()

    var filteredData = data

    if(id !== '' && nama !== '' ){
      filteredData = data.filter(item => item.id.startsWith(id) && item.nama.toLowerCase().startsWith(nama))
    }else if (id !== '') {
      filteredData =  data.filter(item => item.id.startsWith(id))
    }else if (nama !== '') {
      filteredData =  data.filter(item => item.nama.toLowerCase().startsWith(nama))
    }

    let dataNodes = filteredData.map(function(data){
      return(
        <tr>
        <td>{data.nama}</td>
        <td>{data.alamat}</td>
        <td>{data.no_telp}</td>
        <td>{data.email}</td>
        <td>
        <button type="button" className="btn btn-danger" onClick={() => actions.deleteSupplier(data._id)}><span className="glyphicon glyphicon-trash"></span> Hapus</button>
        </td>
        </tr>
      )
    });

    return(
      <div>
      <span className="glyphicon glyphicon-random"></span><h1 className="">Daftar Penyuplai</h1><hr />
      <div className="container-fluid">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Daftar Supplier</div>
      <div className="panel-body">
      <div className="form-group">
      <TambahSupplier data={data} actions={actions} />
      </div>
      <form className="form-inline" id="demo-2" onSubmit={this.handleSubmit.bind(this)}>
      <div className="form-group">
      <input name="nama" type="search" placeholder="Masukkan nama ..." value={this.state.nama} onChange={this.handleChange.bind(this)} />&nbsp;
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
      {dataNodes}
      </tbody>
      </table>
      </div>
      </div>
      </div>
    )
  }
}
