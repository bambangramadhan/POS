import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PurchaseOrder from './PurchaseOrder'
import * as AppActions from '../../actions/po'

class PoAction2 extends Component {
  componentDidMount(){
    this.props.actions.loadPO();
  }

  render(){
    const {data, actions} = this.props
    return(
      <div>
        <PurchaseOrder data={data} actions={actions} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    data: state.po
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
)(PoAction2)
