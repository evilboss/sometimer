import React from 'react';
import moment from 'moment';

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
          <div className="col s12 m6 l6">
            <table>
              <tbody>
              <tr>
                <th>Name:</th>
                <td>Staff</td>
              </tr>
              <tr>
                <th>Department:</th>
                <td>Department</td>
              </tr>
              <tr>
                <th>Designation:</th>
                <td>Designation</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col s12 m6 l6">
            <table>
              <tbody>
              <tr>
                <th>Status:</th>
                <td>Regular</td>
              </tr>
              <tr>
                <th>Shift:</th>
                <td>9:00 to 18:00</td>
              </tr>
              <tr>
                <th>State:</th>
                <td>Au</td>
              </tr>
              </tbody>
            </table>
          </div>
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
              <tr>{console.log(timelog)}
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
