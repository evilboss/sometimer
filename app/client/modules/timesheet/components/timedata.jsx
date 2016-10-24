import React from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import tz from 'moment-timezone';
import ApprovalButton from '/client/modules/manager/containers/approval_button';
import EditHoursRendered from './edit_hour_rendered';
/*TODO: @aaron declined timelog*/
class Timedata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '08:00'
    }
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
    const {clearErrors} = this.props;
    clearErrors();
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
    const {update}= this.props;
    update(timelogId, timeLogType, this.state.time);
    this.toggleEditTimelog(timelogId, timeLogType, e);
  }

  /**
   *
   * @param timelogId
   * @param timeLogType
   * @param e
   */
  cancel(timelogId, timeLogType, e) {
    this.toggleEditTimelog(timelogId, timeLogType, e);
  }

  toggleEditTimelog(timelogId, timeLogType, e) {
    const self = this;
    e.preventDefault();
    $('td.' + timeLogType + ' span p#' + timelogId).show();
    $('td.' + timeLogType + ' .edit#' + timelogId).show();
    $('td.' + timeLogType + ' .clickedit#' + timelogId).hide();
    self.setState({time: '08:00'});
  }

  onChange(value) {
    const self = this;
    const showSecond = false;
    const format = showSecond ? 'HH:mm:ss' : 'HH:mm';
    const time = ((format) && value.format(format)) ? value.format(format) : '';
    (time) ? self.setState({time: time}) : '';
  }

  render() {
    const showSecond = false;
    const str = showSecond ? 'HH:mm:ss' : 'HH:mm';
    const {activeRole, timelog, err} = this.props;
    const {timelogId, message, timelogType}=(err) ? err : '';
    const format = 'hh:mm A z';
    return (
      <tr key={this.props.keyIndex} className={this.getRowClass(this.props.date)}>

        <td>{this.props.date.toDateString()}</td>
        <td className="time-in">
          <span className="inline">
          {(timelog) ? (timelog.timeIn) ?
            <p id={timelog._id}>{moment(timelog.timeIn).tz('Asia/Manila').format(format)}</p> : '' : ''}
            {
              err ? (timelogId == timelog._id) ? (timelogType == 'time-in') ?
                < td className="error-container">
                < span className="error-text">
                {message}</span>
                </td>
                : null : null : null
            }
          </span>
          {(activeRole == 'manager' || activeRole == 'admin') ?
            (timelog) ?
              (timelog._id) ?
                <div className="inline">
                  <div className="clickedit" id={timelog._id}>
                    <TimePicker
                      id={`time-in-${timelog._id}`}
                      style={{ width: 100 }}
                      showSecond={showSecond}
                      defaultValue={moment()}
                      className={`time-in ${timelog._id}`}
                      onChange={this.onChange.bind(this)}
                    />
                    <button className="btn done theme-color" onClick={this.done.bind(this,timelog._id,'time-in')}><i
                      className="material-icons">done</i></button>
                    <button className="btn cancel" onClick={this.cancel.bind(this,timelog._id,'time-in')}><i
                      className="material-icons">clear</i></button>
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

            <p id={timelog._id}>{moment(timelog.timeOut).tz('Asia/Manila').format(format)}
              {
                err ? (timelogId == timelog._id) ? (timelogType == 'time-out') ?
                  < td className="error-container">
                < span className="error-text">
                {message}</span>
                  </td>
                  : null : null : null
              }
            </p> : '' : ''}
          </span>

          {(activeRole == 'manager' || activeRole == 'admin') ?
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
                    <button className="btn cancel" onClick={this.cancel.bind(this,timelog._id,'time-out')}><i
                      className="material-icons">clear</i></button>
                  </div>
                  <div onClick={this.edit.bind(this,timelog._id,'time-out')} className="edit" id={timelog._id}>
                    <i className="material-icons">border_color</i>
                  </div>
                </div>
                : ''
              : ''
            : ''}
        </td>
        <td className="rendered">
          {(timelog) ? (timelog.completed) ? (timelog.totalRendered) : (timelog.totalRendered) : '0'}
        </td>
        <td>
          {(timelog) ?
            (timelog.completed) ?
              (timelog.approved) ?
                <div className="status-indicator Approved"></div>
                : (activeRole == 'manager' || activeRole == 'admin') ?
                <ApprovalButton timelogId={timelog._id}/>
                : <div className="status-indicator Pending"></div>
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
