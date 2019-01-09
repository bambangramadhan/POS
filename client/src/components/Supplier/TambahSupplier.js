import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class TambahSupplier extends Component {
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
      this.setState({id: '', nama: '', no_telp: '', email: '', alamat: '', kode_pos: '', kota: '', negara: '' , visible: false})
    }

    render() {
        return (
            <section>
                <button type="button" className="btn btn-primary" value="Open" onClick={() => this.openModal()} ><span className="glyphicon glyphicon-plus"></span> Tambah Supplier</button>
                <Modal
                    visible={this.state.visible}
                    width="860"
                    height="470"
                    effect="fadeInLeft"
                    onClickAway={() => this.closeModal()}
                >

                    <div className="panel panel-primary">

                    <div className="panel-heading">
                      Tambah Supplier
                    </div>

                    <div className="panel-body">
                    <form onSubmit={this.handleSubmit.bind(this)}>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Nama Penyuplai</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="nama" placeholder="Nama Penyuplai" value={this.state.nama} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <br /><br />

                    <div className="form-group">
                    <label className="col-sm-2 control-label">No. Telp</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="no_telp" placeholder="No. Telp" value={this.state.no_telp} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <br />

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Email</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <br />

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Alamat</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="alamat" placeholder="Alamat" value={this.state.alamat} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <br /><br />

                    <div className="form-row">
                    <div className="form-group col-md-4">
                      <label>Kode Pos</label>
                      <input type="text" className="form-control" name="kode_pos" placeholder="Kode Pos" value={this.state.kode_pos} onChange={this.handleChange.bind(this)} />
                    </div>

                    <div className="form-group col-md-4">
                      <label>Kota</label>
                      <input type="text" className="form-control" name="kota" placeholder="Kota" value={this.state.kota} onChange={this.handleChange.bind(this)} />
                    </div>

                    <div className="form-group col-md-4">
                      <label>Negara</label>
                      <input type="text" className="form-control" name="negara" placeholder="Negara" value={this.state.negara} onChange={this.handleChange.bind(this)} />
                    </div>
                    </div>

                    <br /><br />
                    <button type="submit" className="btn btn-primary btn-lg btn-block"> Simpan</button>
                    <button type="button" className="btn btn-warning btn-lg btn-block" onClick={() => this.closeModal()}>Batal</button>

                    </form>
                    </div>

                    </div>
                </Modal>
            </section>
        );
    }
}
