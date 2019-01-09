import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Kategori from './Kategori'
import * as AppActions from '../../actions/kategoriProduk'

class KategoriAction extends Component {
  componentDidMount(){
    this.props.actions.loadProduk();
  }

  render(){
    const {data, actions} = this.props
    return(
      <div>
        <Kategori data={data} actions={actions} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    data: state.kategori
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
)(KategoriAction)
