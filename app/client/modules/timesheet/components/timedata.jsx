import React from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

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

  /**
   *
   * @param timelogId : Uniqe identifier for timelog collection
   * @param timeLogType : the type of timelog needed to be edit
   * @param e : event triggered by html object
   */
  edit(timelogId, timeLogType, e) {
    e.preventDefault();
    $('td.' + timeLogType + ' span p#' + timelogId).hide();
    $('td.' + timeLogType + ' .edit#' + timelogId).hide();
    $('td.' + timeLogType + ' .clickedit#' + timelogId).show();
  }

  /**
   *
   * @param timelogId
   * @param timeLogType
   * @param e
   */
  done(timelogId, timeLogType, e) {
    e.preventDefault();
    $('td.' + timeLogType + ' span p#' + timelogId).show();
    $('td.' + timeLogType + ' .edit#' + timelogId).show();
    $('td.' + timeLogType + ' .clickedit#' + timelogId).hide();
  }


  componentDidMount() {

  }

  onChange(value) {
    console.log(value && value.format(str));
  }

  render() {
    const showSecond = true;
    const str = showSecond ? 'HH:mm:ss' : 'HH:mm';
    const timelog = this.props.timelog;
    const userRole = this.props.activeRole;
    const format = 'hh:mm A z';
    return (
      <tr key={this.props.keyIndex} className={this.getRowClass(this.props.date)}>
        <td>{this.props.date.toDateString()}</td>
        <td className="time-in">
          <span className="inline">
          {(timelog) ? (timelog.timeIn) ?
            <p id={timelog._id}>{moment(timelog.timeIn).tz('Asia/Manila').format(format)}</p> : '' : ''}
          </span>
          {(userRole == 'manager' || userRole == 'admin') ?
            (timelog) ?
              (timelog._id) ?
                <div className="inline">
                  <div className="clickedit" id={timelog._id}>
                    <TimePicker
                      style={{ width: 100 }}
                      showSecond={showSecond}
                      defaultValue={moment()}
                      className={`time-in ${timelog._id}`}
                      onChange={this.onChange}
                    />
                    <button className="btn done theme-color" onClick={this.done.bind(this,timelog._id,'time-in')}><i
                      className="material-icons">done</i></button>
                  </div>
                  <div onClick={this.edit.bind(this,timelog._id,'time-in')} className="edit" id={timelog._id}>
                    <i className="material-icons">border_color</i>
                  </div>
                </div>
                : ''
              : ''
            : ''}
        </td>
        <td className="total-break">
          {(timelog) ? (timelog.totalBreak) ?
            <a href={`/dashboard/timesheet/breaks/${timelog._id}`}>{timelog.totalBreak}</a> : '' : ''}
        </td>
        <td className="time-out">
          <span className="inline">
          {(timelog) ? (timelog.timeOut) ?
            <p id={timelog._id}>{moment(timelog.timeOut).tz('Asia/Manila').format(format)}</p> : '' : ''}
          </span>

          {(userRole == 'manager' || userRole == 'admin') ?
            (timelog) ?
              (timelog._id) ?
                <div className="inline">
                  <div className="clickedit" id={timelog._id}>
                    <TimePicker
                      style={{ width: 100 }}
                      showSecond={showSecond}
                      defaultValue={moment()}
                      className={`time-out ${timelog._id}`}
                      onChange={this.onChange}
                    />
                    <button className="btn done theme-color" onClick={this.done.bind(this,timelog._id,'time-out')}><i
                      className="material-icons">done</i></button>
                  </div>
                  <div onClick={this.edit.bind(this,timelog._id,'time-out')} className="edit" id={timelog._id}>
                    <i className="material-icons">border_color</i>
                  </div>
                </div>
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

export
default
Timedata;
