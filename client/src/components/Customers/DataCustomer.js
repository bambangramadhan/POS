import React, { Component } from 'react'
import ViewCustomer from './ViewCustomer'
import moment from 'moment'

export default class DataCustomer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false,
      id: this.props.data.id || '',
      nama: this.props.data.nama || '',
      no_telp: this.props.data.no_telp || '',
      berlangganan: moment(this.props.data.berlangganan).format("YYYY-MM-DD") || '',
      alamat: this.props.data.alamat || ''
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleEditClick(){
    this.setState({editing: true})
  }

  handleSave(){
    var id = this.state.id.trim()
    var nama = this.state.nama.trim()
    var no_telp = this.state.no_telp.trim()
    var berlangganan = this.state.berlangganan
    var alamat = this.state.alamat.trim()
    if(!id || !nama || !no_telp || !berlangganan || !alamat){
      return;
    }
    this.props.editCustomer(this.props.data._id, id, nama, no_telp, berlangganan, alamat)
    this.setState({editing: false})
  }

  render(){
    if(this.state.editing){
      return(
        <tr>
        <td><input type="text" name="id" className="form-control" placeholder="id" value={this.state.id} onChange={this.handleChange.bind(this)} readOnly/></td>
        <td><input type="text" name="nama" className="form-control" placeholder="nama" value={this.state.nama} onChange={this.handleChange.bind(this)} /></td>
        <td><input type="date" name="berlangganan" className="form-control" placeholder="berlangganan" value={this.state.berlangganan} onChange={this.handleChange.bind(this)} /></td>
        <td><input type="text" name="no_telp" className="form-control" placeholder="no_telp" value={this.state.no_telp} onChange={this.handleChange.bind(this)} /></td>
        <td><input type="text" name="alamat" className="form-control" placeholder="alamat" value={this.state.alamat} onChange={this.handleChange.bind(this)} /></td>
        <td>Rp. 21.471.000</td>
        <td>Rp. 21.471.000</td>
        <td>Rp. 21.471.000</td>
        <td><button type="button" className="btn btn-primary" onClick={this.handleSave.bind(this)} ><span className="glyphicon glyphicon-floppy-disk"></span> Simpan</button></td>
        </tr>
      )
    }else {
      return(
        <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.nama}</td>
        <td>{this.props.data.berlangganan}</td>
        <td>{this.props.data.no_telp}</td>
        <td>{this.props.data.alamat}</td>
        <td>Rp. 21.471.000</td>
        <td>Rp. 21.471.000</td>
        <td>Rp. 21.471.000</td>
        <td>
        <button type="button" className="btn btn-success" onClick={this.handleEditClick.bind(this)}><span className="glyphicon glyphicon-pencil"></span> Ubah</button>&nbsp;
        <ViewCustomer key={this.props.data.id} data={this.props.data}/>
        <button type="button" className="btn btn-danger" onClick={() => this.props.deleteCustomer(this.props.data._id)}><span className="glyphicon glyphicon-trash"></span> Hapus</button>
        </td>
        </tr>
      )
    }
  }

}
