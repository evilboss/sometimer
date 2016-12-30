import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import StaffDetails from "/client/modules/staff/containers/staff_details";
import StaffSummary from "/client/modules/staff/containers/staff_summary";

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {team} = this.props;
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
          { (team) ?
            team.members.map((staff, index) => (
              <StaffSummary key={index} staffId={staff} index={index} teamId={team._id}/>
            )) : ''}
          </tbody>
        </table>
      </section>
    );
  }
}

export default Summary;
