import React from 'react';
import moment from 'moment';
import ApprovalButton from '../../manager/components/approval_button';
class Timedata extends React.Component {
  constructor(props) {
    super(props);
  }

  isToday(date) {
    return ((moment(date).isSame(moment(), 'day'))) ? 'table-row-active' : '';
  }

  isWeekend(date) {
    return ((moment(date).isoWeekday() == 6) || (moment(date).isoWeekday() == 7)) ? 'table-row-weekend' : '';
  }

  getRowClass(date) {
    return this.isWeekend(date) + ' ' + this.isToday(date);
  }

  render() {
    const timelog = this.props.timelog;
    return (
      <tr key={this.props.keyIndex} className={this.getRowClass(this.props.date)}>
        <td>{this.props.date.toDateString()}</td>
        <td>
          {(timelog) ? (timelog.timeIn) ? moment(timelog.timeIn).format('hh:mm:ss') : '' : ''}
        </td>
        <td>
          0
        </td>
        <td >
          {(timelog) ? (timelog.timeOut) ? moment(timelog.timeOut).format('hh:mm:ss') : '' : ''}
        </td>
        <td>

        </td>
        <td>
          {(timelog) ? (timelog.completed) ? this.getTotalHours(timelog.timeIn, timelog.timeOut) : '0' : '0'}
          {}
        </td>
        <td>{(timelog) ? (timelog.completed) ? <ApprovalButton/> : '' : ''}</td>
      </tr>
    );
  }

  getTotalHours() {
    return 'total hours';
  }
}

export default Timedata;
