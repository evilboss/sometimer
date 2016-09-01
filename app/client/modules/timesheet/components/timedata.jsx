import React from 'react';
import moment from 'moment';
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
    return (
      <tr key={this.props.keyIndex} className={this.getRowClass(this.props.date)}>
        <td>{this.props.date.toDateString()}</td>
        <td>
          {(timelog) ? (timelog.timeIn) ? moment(timelog.timeIn).format('hh:mm:ss a') : '' : ''}
        </td>
        <td>
          {(timelog) ? (timelog.totalBreak) ?
            <a href={`/dashboard/timesheet/breaks/${timelog._id}`}>{timelog.totalBreak}</a> : '' : ''}
        </td>
        <td>
          {(timelog) ? (timelog.timeOut) ? moment(timelog.timeOut).format('hh:mm:ss a') : '' : ''}
        </td>
        <td>

        </td>
        <td className="rendered">
          {(timelog) ? (timelog.completed) ? (timelog.totalRendered) : (timelog.totalRendered) : '0'}
          {(userRole == 'manager') ?
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
          {(timelog) ?
            (timelog.completed) ?
              (timelog.approved) ?
                'Approved'
                : (userRole == 'manager') ?
                <ApprovalButton timelogId={timelog._id}/>
                : 'Waiting for approval'
              : ''
            : ''}</td>
      </tr>
    );
  }

  getTotalHours() {
    return 'total hours';
  }
}

export default Timedata;
