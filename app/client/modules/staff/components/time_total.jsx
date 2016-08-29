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
      <div className="total-time">

        <div className="center-align">
          <h4>{this.state.totalRendered}</h4>
          Work hrs.
        </div>

        <div className="center-align">
          <h4>1</h4>
          Task(s)
        </div>

        <div className="center-align">
          <h4>{this.state.totalBreak}</h4>
          Break hrs.
        </div>

      </div>
    );
  }
}

export default TimeTotal;
