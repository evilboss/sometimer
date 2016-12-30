import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';

import TimeRequestData from '/client/modules/timesheet/containers/time_request_data';

class TimeRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {teamId, timelogs} = this.props;
    return (
      <section id="time-request">
        <PageTitle title='Timesheet View'/>
        <table className="centered bordered">
          <thead>
          <tr>
            <th>Date</th>
            <th></th>
            <th colSpan="3">Staff</th>
            <th>Actions</th>
            <th>Time-In</th>
            <th>Total Break</th>
            <th>Time-Out</th>
            <th>Hours Rendered</th>
            <th>Approval</th>
          </tr>
          </thead>
          <tbody>
          {timelogs.map((request, index) =>
            <TimeRequestData key={index} teamId={teamId} request={request}/>
          )}
          </tbody>
        </table>
        {(timelogs.length == 0) ? <div>No Pending Request</div> : ''}
      </section>
    );
  }
}

export default TimeRequest;
