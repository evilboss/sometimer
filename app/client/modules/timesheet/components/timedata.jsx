import React from 'react';
import moment from 'moment';
import tz from 'moment-timezone';
import ApprovalButton from '/client/modules/manager/containers/approval_button';
import EditHoursRendered from './edit_hour_rendered';
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
    const userRole = this.props.activeRole;
    const format = 'hh:mm A z';
    return (
      <tr key={this.props.keyIndex} className={this.getRowClass(this.props.date)}>
        <td>{this.props.date.toDateString()}</td>
        <td className="time-in">
          {(timelog) ? (timelog.timeIn) ? (moment(timelog.timeIn).tz('Asia/Manila').format(format)) : '' : ''}
          {(userRole == 'manager' || userRole == 'admin') ?
            (timelog) ?
              (timelog._id) ?
                <span>
                  <div data-target={timelog._id} className="chip z-depth-1 modal-trigger" data-toggle="modal">
                    Edit
                  </div>
                  <EditHoursRendered target={timelog._id}/>
                </span>
                : ''
              : ''
            : ''}
        </td>
        <td className="total-break">
          {(timelog) ? (timelog.totalBreak) ?
            <a href={`/dashboard/timesheet/breaks/${timelog._id}`}>{timelog.totalBreak}</a> : '' : ''}
        </td>
        <td className="time-out">
          {(timelog) ? (timelog.timeOut) ? (moment(timelog.timeOut).tz('Asia/Manila').format(format)) : '' : ''}
          {(userRole == 'manager' || userRole == 'admin') ?
            (timelog) ?
              (timelog._id) ?
                <span>
                  <div data-target={timelog._id} className="chip z-depth-1 modal-trigger" data-toggle="modal">
                    Edit
                  </div>
                  <EditHoursRendered target={timelog._id}/>
                </span>
                : ''
              : ''
            : ''}
        </td>
        <td>

        </td>
        <td className="rendered">
          {(timelog) ? (timelog.completed) ? (timelog.totalRendered) : (timelog.totalRendered) : '0'}
        </td>
        <td>
          {(timelog) ?
            (timelog.completed) ?
              (timelog.approved) ?
                'Approved'
                : (userRole == 'manager' || userRole == 'admin') ?
                <ApprovalButton timelogId={timelog._id}/>
                : 'Waiting for approval'
              : ''
            : ''}
        </td>
      </tr>
    );
  }

  getTotalHours() {
    return 'total hours';
  }
}

export default Timedata;
