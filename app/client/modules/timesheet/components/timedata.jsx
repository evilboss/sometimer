import React from 'react';
import moment from 'moment';
class Timedata extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const timelog = this.props.timelog;
    return (
      <tbody key={this.props.keyIndex}>
        <td >
          {(timelog)?(timelog.timeIn)?moment(timelog.timeIn).format('hh:mm:ss'):'00:00:00':'--:--:--'}
        </td>
        <td>
          Total break
        </td>
        <td >
          {(timelog)?(timelog.timeOut)?moment(timelog.timeOut).format('hh:mm:ss'):'00:00:00':'--:--:--'}
        </td>
      </tbody>
    );
  }
}

export default Timedata;
