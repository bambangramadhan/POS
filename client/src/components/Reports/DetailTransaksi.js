import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class DetailTransaksi extends Component {
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
                <button type="button" className="btn btn-primary" value="Open" onClick={() => this.openModal()} ><span className="glyphicon glyphicon-eye-open"></span> Detail</button>
                <Modal
                    visible={this.state.visible}
                    width="800"
                    height="600"
                    effect="fadeInLeft"
                    onClickAway={() => this.closeModal()}
                >

                    <div className="panel panel-primary">

                    <div className="panel-heading">
                      Tambah Produk
                    </div>

                    <div className="panel-body">
                    <form className="form-horizontal">

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Kode Produk</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="title" placeholder="Kode Produk" onChange='' />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Nama Produk</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="title" placeholder="Nama Produk" onChange='' />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Harga</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="title" placeholder="Harga" onChange='' />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Stok</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="title" placeholder="Tanggal Lahir" onChange='' />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Kategori</label>
                      <div className="col-sm-10">
                        <select className="form-control" name="rate" onChange=''>
                          <option value="Makanan">Makanan</option>
                          <option value="Minuman">Minuman</option>
                          <option value="Elektronik">Elektronik</option>
                          <option value="Perabotan">Perabotan</option>
                        </select>
                      </div>
                    </div>

                    <br />
                    <button type="submit" className="btn btn-primary btn-lg btn-block"> Add</button>
                    <button type="button" className="btn btn-warning btn-lg btn-block" onClick={() => this.closeModal()}>Cancel</button>

                    </form>
                    </div>

                    </div>
                </Modal>
            </section>
        );
    }
}
