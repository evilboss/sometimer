import React from 'react';
import moment from 'moment';
import StaffInfo from './staff_info';
class Timesheet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let timelogs = this.props.timelogs;
    return (
      <section className="timesheet">
        <h5>Employee's TimeSheet</h5>
        <div className="no-horizontal-margin row z-depth-1-half card-top-border">
          <StaffInfo/>
        </div>

        <div className="z-depth-1-half card-top-border">
          <table className="centered responsive-table striped">
            <thead>
            <tr>
              <th>Date</th>
              <th>Shift</th>
              <th>Time In</th>
              <th>Out To Lunch</th>
              <th>Back From Lunch</th>
              <th>Time Out</th>
              <th colSpan="2">Leave</th>
              <th>Undertime</th>
              <th>Overtime</th>
              <th>Hours<br/>Rendered</th>
              <th>Night<br/>Differential</th>
            </tr>
            </thead>

            <tbody>
            {timelogs.map(timelog => (
              <tr>
                <td>{moment(timelog.timeIn).format('LL')}</td>
                <td></td>
                <td>{moment(timelog.timeIn).format('LTS')}</td>
                <td>{moment(timelog.outToLunch).format('LTS')}</td>
                <td>{moment(timelog.backFromLunch).format('HH:MM:SS')}</td>
                <td>{moment(timelog.timeOut).format('HH:MM:SS')}</td>
              </tr>
            ))}

            </tbody>
            <tfoot>
            <tr>
              <th>Total:</th>
              <th></th>
              <th></th>
              <th></th>
              <th colSpan="2">Paid:0/Unpaid:0</th>
              <th></th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
              <th>0</th>
            </tr>
            </tfoot>
          </table>
        </div>
      </section>
    );
  }
}

export default Timesheet;
