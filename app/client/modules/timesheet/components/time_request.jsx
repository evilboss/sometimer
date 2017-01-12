import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';

import TimeRequestData from '/client/modules/timesheet/containers/time_request_data';

class TimeRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  _exportLogs() {
    const {exportLogs, teamId, from, to, teamName} = this.props;
    exportLogs(teamId, from, to, teamName);
  }

  render() {
    const {teamId, timelogs} = this.props;
    console.log(timelogs, 'timelogs');
    return (
      <section id="time-request">
        <PageTitle title='Timesheet View'/>
        <table className="centered bordered">
          <thead>
          <tr>
            <th>Date</th>
            <th></th>
            <th colSpan="3" className="text-left">Staff</th>
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
        {(timelogs.length == 0) ? <div>No Timelogs for selected period</div> :
          <button className="m5 btn theme-color" onClick={this._exportLogs.bind(this)}>Export Logs<i
            className="right material-icons">grid_on</i></button>}
      </section>
    );
  }
}

export default TimeRequest;
