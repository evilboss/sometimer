import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import StaffSummary from "/client/modules/staff/containers/staff_summary";

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  _exportLogs() {
    const {exportLogs, teamId, from, to,teamName} = this.props;
    exportLogs(teamId, from, to,teamName);
  }

  render() {
    const {team, summaryList} = this.props;
    return (
      <section id="summary">
        <PageTitle title='Summary View'/>
        <table className="centered bordered">
          <thead>
          <tr>
            <th></th>
            <th>Staff</th>
            <th>Total Breaks</th>
            <th className="center-align">Total Hours Rendered</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {
            (summaryList) ?
              summaryList.map((staff, index) => (
                <StaffSummary key={index} staffId={staff._id} totalBreak={staff.totalBreak} totalHours={staff.totalRendered} index={index} teamId={team._id}/>
              )) : ''
          }
          </tbody>
        </table>
        {(team) ? <button className="m5 btn theme-color" onClick={this._exportLogs.bind(this)}>Export Logs<i
          className="right material-icons">grid_on</i></button>
          : <div>No Summary for selected period</div>
        }
      </section>
    );
  }
}

export default Summary;
