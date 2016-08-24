import React from 'react';
import Card from './card';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <section className="dashboard">
        <div className="page-title"><h5>Dashboard</h5></div>
        <div className="row">
          <Card menu={this.props.menu}/>
        </div>
      </section>
    );
  }
}

export default Dashboard;
