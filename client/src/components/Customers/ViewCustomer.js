import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class ViewCustomer extends Component {
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
                    width="1000"
                    height="600"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >

                <div className="container-fluid">
                <br />
                <div className="panel panel-primary">
                <div className="panel panel-default">
                <div className="panel-heading">Customer List</div>
                <div className="container">
                <div className="col-sm-4">
                <h3>{this.props.data.nama}</h3><hr />
                <p>Alamat        : {this.props.data.alamat}</p>
                <p>No. Handphone : {this.props.data.no_telp}</p>
                <p>Email         : {this.props.data.email}</p>
                <p>Tanggal Lahir : {this.props.data.tgl_lahir}</p>
                <p>Jenis Kelamin : {this.props.data.jenis_kelamin}</p>
                </div>

                <div className="col-sm-6">
                <h3>Customer Highlight</h3><hr />
                <div className="col-sm-4">
                <div className="panel panel-primary">
                <h4>3 TRANSACTIONS</h4>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="panel panel-primary">
                <h4>LIFETIME</h4>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="panel panel-primary">
                <h4>AVERAGE</h4>
                </div>
                </div>
                </div>
                </div>

                <br />
                <h3>Purchase History</h3><hr />

                <table className="table table-striped">
                <thead>
                <tr>
                <th>Date</th>
                <th>Outlite</th>
                <th>Sale</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>17/11/2018</td>
                <td>Outlite 1</td>
                <td>Rp. 21.750.000,00</td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
                </div>

                <button type="button" className="btn btn-warning btn-lg btn-block" onClick={() => this.closeModal()}>Batal</button>

                </Modal>
            </section>
        );
    }
}
