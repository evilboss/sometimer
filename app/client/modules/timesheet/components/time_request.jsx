import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';

import TimeRequestData from '/client/modules/timesheet/containers/time_request_data';

class TimeRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  _exportLogs() {
    const {exportLogs} = this.props;
    exportLogs();
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
            <th colSpan="3">St
              aff</th>
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
          <button className="btn btn-default btn-sm"onClick={this._exportLogs.bind(this)}>Export Logs<i className="fa fa-table" aria-hidden="true"></i></button>}
      </section>
    );
  }
}

export default TimeRequest;
