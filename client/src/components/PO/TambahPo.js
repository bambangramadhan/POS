import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class TambahPo extends Component {
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
                <button type="button" className="btn btn-primary btn-lg btn-block" value="Open" onClick={() => this.openModal()} ><span className="glyphicon glyphicon-plus"></span> Tambah Item</button>
                <Modal
                    visible={this.state.visible}
                    width="800"
                    height="600"
                    effect="fadeInDown"
                    onClickAway={() => this.closeModal()}
                >

                    <div className="panel panel-primary">

                    <div className="panel-heading">
                      Tambah Customer
                    </div>

                    <div className="panel-body">
                    <form className="form-horizontal">

                    <div className="form-group">
                    <div className="box">
                    <div className="container-2">&nbsp;
                    <span className="icon"><i className="fa fa-search fa-lg fa-fw" aria-hidden="true"></i></span>
                    <input type="text" id="search" placeholder="    Cari..." />
                    </div>
                    </div>
                    </div>

                    <table className="table table-striped">
                    <thead>
                    <tr>
                    <th>Item</th>
                    <th>Stok</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Item 1</td>
                    <td>1000</td>
                    </tr>
                    </tbody>
                    </table>

                    <br />

                    <button type="submit" className="btn btn-primary"> Tambah</button>&nbsp;
                    <button type="button" className="btn btn-warning" onClick={() => this.closeModal()}>Batal</button>

                    </form>
                    </div>

                    </div>
                </Modal>
            </section>
        );
    }
}
