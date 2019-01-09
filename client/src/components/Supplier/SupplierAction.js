import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import DaftarSupplier from './DaftarSupplier'
import * as AppActions from '../../actions/supplier'

class SupplierAction extends Component {
  componentDidMount(){
    this.props.actions.loadSupplier();
  }

  render(){
    const {data, actions} = this.props
    return(
      <div>
        <DaftarSupplier data={data} actions={actions} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    data: state.supplier
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
)(SupplierAction)
