import React from 'react';
import ChartSection1 from '../Sections/ChartSection1';
import ChartSection2 from '../Sections/ChartSection2';

export default class ViewDashboard extends React.Component {
  render(){
    return(
      <div>
      <span className="glyphicon glyphicon-random"></span><h1 className="">Dashboard</h1><hr />
      <div className="container-fluid">
        <ChartSection1 />
        <ChartSection2 />
      </div>
      </div>
    )
  }
}
