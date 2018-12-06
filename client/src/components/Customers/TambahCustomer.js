import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class ModalExample extends Component {
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
                <h1>React-Modal Examples</h1>
                <input type="button" value="Open" onClick={() => this.openModal()} />
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
                    <form className="form-horizontal">

                    <div className="form-group">
                    <label className="col-sm-2 control-label">ID Customer</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="title" placeholder="ID Customer"  onChange='' />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Nama Customer</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="title" placeholder="Nama Customer" onChange='' />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">No. Telp</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="title" placeholder="No. Telp" onChange='' />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Email</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="title" placeholder="Email" onChange='' />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Tanggal Lahir</label>
                      <div className="col-sm-10">
                        <input type="date" className="form-control" name="title" placeholder="Tanggal Lahir" onChange='' />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Jenis Kelamin</label>
                      <div className="col-sm-10">
                        <select className="form-control" name="rate" onChange=''>
                          <option value="Laki-laki">Laki-laki</option>
                          <option value="Perempuan">Perempuan</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Alamat</label>
                      <div className="col-sm-10">
                        <textarea className="form-control" name="description" placeholder="Alamat" rows="2" onChange='' />
                      </div>
                    </div>

                    <br />
                    <button type="submit" className="btn btn-primary btn-lg btn-block"> Add</button>&nbsp;
                    <button type="button" className="btn btn-warning btn-lg btn-block" onClick={() => this.closeModal()}>Cancel</button>

                    </form>
                    </div>

                    </div>
                </Modal>
            </section>
        );
    }
}
