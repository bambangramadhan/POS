import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class TambahCustomer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          visible : false,
          nama: '',
          no_telp: '',
          email: '',
          tgl_lahir: '',
          jenis_kelamin: 'Laki-laki',
          berlangganan: '',
          alamat: ''
      }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  openModal() {
      this.setState({
          visible : true
      });
  }

  closeModal() {
      this.setState({
          visible : false
      });
  }

  handleSubmit(e){
    e.preventDefault();
    var nama = this.state.nama.trim()
    var no_telp = this.state.no_telp.trim()
    var email = this.state.email.trim()
    var tgl_lahir = this.state.tgl_lahir
    var jenis_kelamin = this.state.jenis_kelamin.trim()
    var berlangganan = this.state.berlangganan
    var alamat = this.state.alamat.trim()
    if(!nama || !no_telp || !email || !tgl_lahir || !jenis_kelamin || !berlangganan || !alamat){
      return;
    }
    this.props.actions.addCustomer(nama, no_telp, email, tgl_lahir, jenis_kelamin, berlangganan, alamat)
    this.setState({nama: '', no_telp: '', email: '', tgl_lahir: '', jenis_kelamin: '', berlangganan: '', alamat: '', visible: false})
  }

    render() {
        return (
            <section>
                <button type="button" className="btn btn-primary" value="Open" onClick={() => this.openModal()} ><span className="glyphicon glyphicon-plus"></span> Tambah</button>
                <Modal
                    visible={this.state.visible}
                    width="800"
                    height="600"
                    effect="fadeInLeft"
                    onClickAway={() => this.closeModal()}
                >

                    <div className="panel panel-primary">

                    <div className="panel-heading">
                      Tambah Customer
                    </div>

                    <div className="panel-body">
                    <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Nama Cutsomer</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="nama" placeholder="Nama Cutsomer" value={this.state.nama} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">No. Telp</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="no_telp" placeholder="No. Telp" value={this.state.no_telp} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Email</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Tanggal Lahir</label>
                      <div className="col-sm-10">
                        <input type="date" className="form-control" name="tgl_lahir" placeholder="Tanggal Lahir" value={this.state.tgl_lahir} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Jenis Kelamin</label>
                      <div className="col-sm-10">
                        <select className="form-control" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange.bind(this)}>
                          <option value="Laki-laki">Laki-laki</option>
                          <option value="Perempuan">Perempuan</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Mulai Berlangganan</label>
                      <div className="col-sm-10">
                        <input type="date" className="form-control" name="berlangganan" placeholder="Mulai Berlangganan" value={this.state.berlangganan} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Alamat</label>
                      <div className="col-sm-10">
                        <textarea className="form-control" name="alamat" placeholder="Alamat" rows="2" value={this.state.alamat} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <br />
                    <button type="submit" className="btn btn-primary btn-lg btn-block"> Tambah</button>
                    <button type="button" className="btn btn-warning btn-lg btn-block" onClick={() => this.closeModal()}>Batal</button>

                    </form>
                    </div>

                    </div>
                </Modal>
            </section>
        );
    }
}
