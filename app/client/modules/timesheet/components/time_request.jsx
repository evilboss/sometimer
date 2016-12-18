import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import ApprovalButton from '/client/modules/manager/containers/approval_button';

import TimeData from '/client/modules/timesheet/containers/timedata';
import StaffDp from '/client/modules/users/containers/staff_dp';
import Username from '/client/modules/users/containers/username';
import moment from 'moment';
import tz from 'moment-timezone';

class TimeRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const timeRequest = this.props.timeRequest;
    const format = 'hh:mm A z';
    return (
      <section id="time-request">
        <PageTitle title='Timesheet View'/>
        <table className="centered bordered">
          <thead>
          <tr>
            <th>Date</th>
            <th colSpan="3">Staff</th>
            <th>Log In</th>
            <th>Total Break</th>
            <th>Log Out</th>
            <th>Leave</th>
            <th>Hours Rendered</th>
            <th>Approval</th>
          </tr>
          </thead>
          <tbody>
          {timeRequest.map((request, index)=>
            <tr key={index}>
              <td>
                {request.date}
              </td>
              <td colSpan="3" className="staff">
                {request.logs.map((log, index)=>
                  <div key={index} className="relative ">
                    <span className="dp">
                    <StaffDp userId={log.userId}/>
                      </span>
                    <span className="name">
                    <Username userId={log.userId}/>
                      </span>
                  </div>
                )}
              </td>
              <td>
                {request.logs.map((log, index)=>
                  (log.timeIn) ? <div key={index} className="content-padding">{moment(log.timeIn).tz('Asia/Manila').format(format)}</div> : ''
                )}
              </td>
              <td>
                {request.logs.map((log, index)=>
                  (log.totalBreak) ?
                    <div key={index} className="content-padding">
                      <a href={`/dashboard/timesheet/breaks/${log._id}`}>
                        {log.totalBreak}
                      </a>
                    </div>
                    : ''
                )}
              </td>
              <td>
                {request.logs.map((log, index)=>
                  (log.timeOut) ? <div className="content-padding" key={index}>{moment(log.timeOut).tz('Asia/Manila').format(format)}</div> : ''
                )}
              </td>
              <td>

              </td>
              <td>
                {request.logs.map((log, index)=>
                  (log.totalRendered) ? <div className="content-padding" key={index}>{log.totalRendered}</div> : ''
                )}
              </td>
              <td>
                {request.logs.map((log, index)=>
                  <div key={index} className="content-padding">
                    {(log.approved) ? <div className="status-indicator Approved"></div>
                      : <ApprovalButton timelogId={log._id}/>}
                  </div>
                )}
              </td>
            </tr>
          )}
          </tbody>

        </table>
        {(timeRequest.length == 0) ? <div>No Pending Request</div> : ''}
      </section>
    );
  }
}

export default TimeRequest;
