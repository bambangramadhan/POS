import React, { Component } from 'react'
import TambahPo from './TambahPo'

export default class BuatOrderan extends Component {
  constructor(props) {
      super(props);
      this.state = {
          visible : false,
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
    let nama = this.state.nama.trim();
    let no_telp = this.state.no_telp.trim();
    let email = this.state.email.trim();
    let alamat = this.state.alamat.trim();
    let kode_pos = this.state.kode_pos.trim();
    let kota = this.state.kota.trim();
    let negara = this.state.negara.trim();
    if(!nama || !no_telp || !email || !alamat || !kode_pos || !kota || !negara){
      return;
    }
    this.props.actions.addSupplier(nama, no_telp, email, alamat, kode_pos, kota, negara)
    this.setState({id: '', nama: '', no_telp: '', email: '', alamat: '', kode_pos: '', kota: '', negara: '' , visisble: false})
  }

  render(){
    return(
      <div>
      <span className="glyphicon glyphicon-random"></span><h1 className="">Buat Orderan</h1><hr />
      <div className="container-fluid">
      <br />
      <div className="panel panel-primary">
      <div className="panel panel-default">
      <div className="panel-heading">Buat Orderan</div>
      <div className="panel-body">
      <form>
      <div className='form-group'>
      <label className="control-label">Pilih Penyuplai</label>
      <select className="form-control" name="rate">
      <option>Pilih Penyuplai</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      </select>
      </div>

      <div className="form-group">
      <label className="control-label">Catatan</label>
      <textarea className="form-control" name="catatan" placeholder="Catatan" rows="8"  />
      </div>

      <div className="form-row">
      <div className="form-group col-md-3">
      <label>Item</label>
      <input type="text" className="form-control" name="" placeholder="Item" />
      </div>

      <div className="form-group col-md-2">
      <label>Stok</label>
      <input type="text" className="form-control" name="" placeholder="Stok" />
      </div>

      <div className="form-group col-md-2">
      <label>Order</label>
      <input type="text" className="form-control" name="" placeholder="Order" />
      </div>

      <div className="form-group col-md-2">
      <label>Harga</label>
      <input type="text" className="form-control" name="" placeholder="Harga" />
      </div>

      <div className="form-group col-md-3">
      <label>Total</label>
      <input type="text" className="form-control" name="" placeholder="Total" />
      </div>
      </div>



      <div className="form-row">
      <div className="form-group col-md-3">
      <label>Item</label>
      <input type="text" className="form-control" name="" placeholder="Item" />
      </div>

      <div className="form-group col-md-2">
      <label>Stok</label>
      <input type="text" className="form-control" name="" placeholder="Stok" />
      </div>

      <div className="form-group col-md-2">
      <label>Order</label>
      <input type="text" className="form-control" name="" placeholder="Order" />
      </div>

      <div className="form-group col-md-2">
      <label>Harga</label>
      <input type="text" className="form-control" name="" placeholder="Harga" />
      </div>

      <div className="form-group col-md-3">
      <label>Total</label>
      <input type="text" className="form-control" name="" placeholder="Total" />
      </div>
      </div>

      <div className="form-group">
        <h4 className="col-sm-9 control-label">Total : </h4>
      <div className="col-sm-3">
        <h4>Rp. 40.000.000</h4>
      </div>
      </div>

      <TambahPo />

      <br /><br />

      <button className="btn btn-success" type="submit"><span className="glyphicon glyphicon-plus"></span> Buat</button>

      </form>

      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
