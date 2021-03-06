import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class DetailInvoice extends Component {
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
                    height="540"
                    effect="fadeInRight"
                    onClickAway={() => this.closeModal()}
                >

                <div className="container-fluid">
                <br />
                <div className="panel panel-primary">
                <div className="panel panel-default">
                <div className="panel-heading">Detail Invoice</div>
                <div className="panel-body">
                <p>No. Struk : 0012012</p>
                <p>Tanggal : 20 November 2018 pada 09:19</p>
                <p>Produk :</p>
                </div>
                </div>
                <table className="table table-striped">
                <thead>
                <tr>
                <th>Item</th>
                <th>Jumlah</th>
                <th>Harga</th>
                <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>item 1</td>
                <td>20</td>
                <td>Rp. 1.000</td>
                <td>Rp. 20.000</td>
                </tr>
                </tbody>
                </table>
                <br /><br />
                <div className="form-group">
                  <h5 className="col-sm-9 control-label">Total : </h5>
                <div className="col-sm-3">
                  <h5>Rp. 100.000</h5>
                </div>
                </div>
                <div className="form-group">
                  <h5 className="col-sm-9 control-label">Pembayaran : </h5>
                <div className="col-sm-3">
                  <h5>Rp. 100.000</h5>
                </div>
                </div>
                <div className="form-group">
                  <h5 className="col-sm-9 control-label">Kembalian : </h5>
                <div className="col-sm-3">
                  <h5>Rp. 100.000</h5>
                </div>
                </div>
                <p>.</p>
                </div>
                </div>

                <button type="button" className="btn btn-warning btn-lg btn-block" onClick={() => this.closeModal()}>Cancel</button>

                </Modal>
            </section>
        );
    }
}
