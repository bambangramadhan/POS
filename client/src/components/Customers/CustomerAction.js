import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CustomerList from './CustomerList'
import * as AppActions from '../../actions/customers'

class CustomerAction extends Component {
  componentDidMount(){
    this.props.actions.loadCustomer();
  }

  render(){
    const {data, actions} = this.props
    return(
      <div>
        <CustomerList data={data} actions={actions} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    data: state.customer
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
)(CustomerAction)
