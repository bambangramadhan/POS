import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class TambahProduk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            kode: '',
            nama: '',
            kategori: '',
            harga_beli: '',
            harga_jual: '',
            stok: ''
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
      var kode = this.state.kode.trim()
      var nama = this.state.nama.trim()
      var kategori = this.state.kategori.trim()
      var harga_beli = this.state.harga_beli.trim()
      var harga_jual = this.state.harga_jual.trim()
      var stok = this.state.stok.trim()
      if(!kode || !nama || !kategori || !harga_beli || !harga_jual || !stok){
        return;
      }
      this.props.actions.addProduk(kode, nama, kategori, harga_beli, harga_jual, stok)
      this.setState({kode: '', nama: '', kategori: '', harga_beli: '', harga_jual:'', stok: '', visible: false})
    }

    render() {
        return (
            <section>
                <button type="button" className="btn btn-primary" value="Open" onClick={() => this.openModal()} ><span className="glyphicon glyphicon-plus"></span> Tambah</button>
                <Modal
                    visible={this.state.visible}
                    width="800"
                    height="500"
                    effect="fadeInLeft"
                    onClickAway={() => this.closeModal()}
                >

                    <div className="panel panel-primary">

                    <div className="panel-heading">
                      Tambah Produk
                    </div>

                    <div className="panel-body">
                    <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Kode Produk</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="kode" placeholder="Kode Produk" value={this.state.kode} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Nama Produk</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="nama" placeholder="Nama Produk" value={this.state.nama} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Kategori</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="kategori" placeholder="Kategori" value={this.state.kategori} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Harga Beli</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="harga_beli" placeholder="Harga Beli" value={this.state.harga_beli} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Harga Jual</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="harga_jual" placeholder="Harga Jual" value={this.state.harga_jual} onChange={this.handleChange.bind(this)} />
                      </div>
                    </div>

                    <div className="form-group">
                    <label className="col-sm-2 control-label">Stok</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="stok" placeholder="Stok" value={this.state.stok} onChange={this.handleChange.bind(this)} />
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
