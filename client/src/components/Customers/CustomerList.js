import React, { Component } from 'react'
import DataCustomer from './DataCustomer'
import TambahCustomer from './TambahCustomer'

export default class CustomerList extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      id: '',
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
        <DataCustomer key={data.id} data={data} {...actions} />
      )
    });

    return(
      <div>
      <span className="glyphicon glyphicon-random"></span><h1 className="">Pelanggan</h1><hr />
      <div className="container-fluid">
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Customer List</div>
      <div className="panel-body">
      <div className="form-group">
      <TambahCustomer data={data} actions={actions} />
      </div>
      <form className="form-inline" id="demo-2" onSubmit={this.handleSubmit.bind(this)}>
      <div className="form-group">
      <input name="id" type="search" placeholder="Masukkan id ..." value={this.state.id} onChange={this.handleChange.bind(this)} />&nbsp;
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
      <th>ID</th>
      <th>Nama</th>
      <th>Pelanggan Sejak</th>
      <th>No. Telp</th>
      <th>Alamat</th>
      <th>Bulan Ini</th>
      <th>Tahun Ini</th>
      <th>Semuanya</th>
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
  }
}
