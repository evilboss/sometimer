import React from 'react';
import TimeData from '../containers/timedata';
import TimesheetTotal from '../containers/timesheet_total';

class TimesheetTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser;
    const dates = this.props.dates;
    return (
      <section className="timesheet-table">
        <table className="centered bordered">
          <thead>
          <tr>
            <th>Date</th>
            <th>Log In</th>
            <th>Total Break</th>
            <th>Log Out</th>
            <th>Hours Rendered</th>
            <th>Approval</th>
          </tr>
          </thead>
          <tbody>
          {dates.map((date, index)=>(
            <TimeData key={index} keyIndex={index} date={date} userId={currentUser._id} selectedUser={currentUser}/>
          ))}

          </tbody>
          <tfoot>
          <TimesheetTotal from={_.first(dates)} to={_.last(dates)}/>

          </tfoot>
        </table>

      </section>
    );
  }
}

export default TimesheetTable;
