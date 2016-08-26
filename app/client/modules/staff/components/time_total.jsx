import React from 'react';

class TimeTotal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalBreak: 0,
      totalRendered: 0
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps() {
    console.log('props recived');
    console.log(this.props.totalBreak, this.props.totalRendered);
    (this.props.totalRendered) ? this.setState({totalRendered: this.props.totalRendered}) : '';
    (this.props.totalBreak) ? this.setState({totalBreak: this.props.totalBreak}) : '';
  }

  render() {
    return (
      <div className="total-time col s8">

        <div className="center-align">
          <h2>{this.state.totalRendered}</h2>
          Work hrs.
        </div>

        <div className="center-align">
          <h2>{this.state.totalBreak}</h2>
          Break hrs.
        </div>
        
      </div>
    );
  }
}

export default TimeTotal;
