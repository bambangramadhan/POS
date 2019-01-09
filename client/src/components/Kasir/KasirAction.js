import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import DataKasir from './DataKasir'
import * as KasirActions from '../../actions/kasir'
import * as DataActions from '../../actions/dataProduk'

class KasirAction extends Component {
  componentDidMount(){
    this.props.actions.loadKasir();
  }

  render(){
    const {data, kasir, actions, actions2} = this.props
    return(
      <div>
        <DataKasir data={data} kasir={kasir} kasirActions={actions} dataActions={actions2} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    data: state.data,
    kasir: state.kasir
  }
}
//untuk mengambil data dari reducers

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(KasirActions, dispatch),
    actions2: bindActionCreators(DataActions, dispatch)
  }
}
//untuk mengambil data dari actions

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KasirAction)
