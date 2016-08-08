import React from 'react';
import moment from 'moment';
class Timedata extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const timelog = this.props.timelog;
    return (
      <tr key={this.props.keyIndex}>
        <td>{this.props.date.toDateString()}</td>
        <td>
          {(timelog) ? (timelog.timeIn) ? moment(timelog.timeIn).format('hh:mm:ss') : '00:00:00' : '--:--:--'}
        </td>
        <td>
          Total break
        </td>
        <td >
          {(timelog) ? (timelog.timeOut) ? moment(timelog.timeOut).format('hh:mm:ss') : '00:00:00' : '--:--:--'}
        </td>
        <td>
          --:--:--
        </td>
        <td>
          {this.getTotalHours()}
        </td>
      </tr>
    );
  }

  getTotalHours() {
    return 'total hours';
  }
}

export default Timedata;
