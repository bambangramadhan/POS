import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import DaftarProduk from './DaftarProduk'
import * as AppActions from '../../actions/dataProduk'

class ProdukAction extends Component {
  componentDidMount(){
    this.props.actions.loadProduk();
  }

  render(){
    const {data, actions} = this.props
    return(
      <div>
        <DaftarProduk data={data} actions={actions} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    data: state.data
  }
}
//untuk mengambil data dari reducers

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(AppActions, dispatch)
  }
}
//untuk mengambil data dari actions

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProdukAction)
