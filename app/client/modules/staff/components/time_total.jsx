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
        <td className="center-align">
          <h4>{this.state.totalBreak} hrs</h4>
        </td>
    );
  }
}

export default TimeTotal;
