import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import StaffSummary from "/client/modules/staff/containers/staff_summary";
import {summation} from '/lib/lib/time';
import {timeHelpers} from '/client/utils/helpers/time-helpers';
class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  _exportLogs() {
    const {exportSummary, teamId, from, to, teamName, summaryList} = this.props;
    exportSummary(teamId, from, to, teamName, summaryList);
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
                <StaffSummary key={index} staffId={staff._id}
                              totalBreak={timeHelpers.formatSeconds((_.isEmpty(staff.timelogs)) ? 0 : summation(staff.timelogs, 'totalBreak'))}
                              totalHours={timeHelpers.formatSeconds((_.isEmpty(staff.timelogs)) ? 0 : summation(staff.timelogs, 'totalRendered'))}
                              index={index}
                              teamId={team._id}/>

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
