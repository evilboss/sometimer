import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import StaffSummary from "/client/modules/staff/containers/staff_summary";
import {addTime} from '/lib/lib/time';

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  _exportLogs() {
    const {exportLogs, teamId, from, to, teamName} = this.props;
    exportLogs(teamId, from, to, teamName);
  }

  getTotalRendered(staffLogs) {
    let summaryTotal = '00:00:00';
    _.each(staffLogs, (log)=> {
      summaryTotal = addTime(summaryTotal, log.totalRendered);
    });
    return summaryTotal;
  }

  getTotalBreak(staffLogs) {
    let summaryBreak = '00:00:00';
    _.each(staffLogs, (log)=> {
      summaryBreak = addTime(summaryTotal, log.totalBreak);
    });
    return summaryBreak;


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
                <StaffSummary key={index} staffId={staff._id} totalBreak={this.getTotalBreak(staff.timelogs)}
                              totalHours={this.getTotalRendered(staff.timelogs)} index={index}
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
