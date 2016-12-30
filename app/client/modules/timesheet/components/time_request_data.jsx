import React from 'react';
import ApprovalButton from '/client/modules/manager/containers/approval_button';
import StaffDp from '/client/modules/users/containers/staff_dp';
import Username from '/client/modules/users/containers/username';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
class TimeRequestData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      timeIn: null,
      timeOut: null,
    }
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  changeTimeLog() {
    let {request, updateLog} = this.props;
    let {timeIn, timeOut} =this.state;
    updateLog(timeIn, timeOut, request);
    this.setState({timeIn: null, timeOut: null});
    this.toggleEdit();
  }

  changeTimeIn(value) {
    this.setState({timeIn: value.format('HH:mm')});

  }

  changeTimeOut(value) {
    this.setState({timeOut: value.format('HH:mm')});

  }

  render() {
    let {request, teamId} = this.props;
    let {isEditing} = this.state;
    const format = 'hh:mm A z';
    return (
      <tr>
        <td>
          {request.date}
        </td>
        <td className="staff">
          <div className="dp">
            <StaffDp target={`/dashboard/staff-settings/team/${teamId}/${request.userId}`}
                     userId={request.userId}/>

          </div>


        </td>
        <td colSpan="3" className="staff">

          <Username userId={request.userId}/>


        </td>
        <td>

          {(isEditing) ?
            <div>
              <button className="btn done theme-color" onClick={this.changeTimeLog.bind(this)}><i
                className="material-icons">done</i></button>
              <button className="btn cancel" onClick={this.toggleEdit.bind(this)}>
                <i className="material-icons">clear</i>
              </button>
            </div>
            :
            (request.approved) ?
              null :
              <div onClick={this.toggleEdit.bind(this)} className="edit">
                {/*Only Render if request is not approved*/}
                <i className="material-icons">border_color</i>
              </div>
          }
        </td>
        <td>
          <div className="content-padding">
            {(isEditing) ?
              <TimePicker
                style={{width: 100}}
                showSecond={false}
                onChange={this.changeTimeIn.bind(this)}
              /> :
              (request.timeIn) ?
                moment(request.timeIn).tz('Asia/Manila').format(format)
                : ''
            }

          </div>

        </td>
        <td>
          {(request.totalBreak) ?
            <div className="content-padding">
              <a href={`/dashboard/timesheet/breaks/${request._id}`}>
                {request.totalBreak}
              </a>
            </div>
            : ''}
        </td>
        <td>
          {

            <div className="content-padding">
              {(isEditing) ?
                <TimePicker
                  style={{width: 100}}
                  showSecond={false}
                  onChange={this.changeTimeOut.bind(this)}
                /> :
                (request.timeOut) ?
                  moment(request.timeOut).tz('Asia/Manila').format(format)
                  : ''
              }
            </div>
          }
        </td>
        <td>
          {
            (request.totalRendered) ? <div className="content-padding">{request.totalRendered}</div> : ''
          }
        </td>
        <td>
          {
            <div className="content-padding">
              {(request.approved) ? <div className="status-indicator Approved"></div>
                : <ApprovalButton timelogId={request._id}/>}
            </div>
          }
        </td>
      </tr>
    );
  }
}

export default TimeRequestData;
