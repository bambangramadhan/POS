import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class TambahSupplier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
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

    render() {
        return (
            <section>
                <button type="button" className="btn btn-primary" value="Open" onClick={() => this.openModal()} >Tambah Supplier</button>
                <Modal
                    visible={this.state.visible}
                    width="800"
                    height="600"
                    effect="fadeInLeft"
                    onClickAway={() => this.closeModal()}
                >

                    <div className="panel panel-primary">

                    <div className="panel-heading">
                      Tambah Supplier
                    </div>

                    <div className="panel-body">
                    <form className="form-horizontal">

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Nama Penyuplai</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="nama" placeholder="Nama Penyuplai" onChange='' />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">No. Telp</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="no" placeholder="No. Telp" onChange='' />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Email</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="email" placeholder="Email" onChange='' />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Alamat</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="alamat" placeholder="Alamat" onChange='' />
                      </div>
                    </div>

                    <div className="form-group" style={{width:"300px;"}}>
                    <label></label>&nbsp;
                    <input type="text" className="form-control" name="nama" style={{width:"80px"}}  />
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
