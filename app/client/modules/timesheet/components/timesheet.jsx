import React from 'react';

class Timesheet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="timesheet">
        <h5>Employee's TimeSheet</h5>
        <div className="no-horizontal-margin row z-depth-1-half card-top-border">
          <div className="col s12 m6 l6">
            <table>
              <tbody>
              <tr>
                <th>Name:</th>
                <td>Aaron</td>
              </tr>
              <tr>
                <th>Department:</th>
                <td>Dev</td>
              </tr>
              <tr>
                <th>Designation:</th>
                <td>Soft Eng</td>
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
              <th>Time Out</th>
              <th colSpan="2">Leave</th>
              <th>Status</th>
              <th>Undertime</th>
              <th>Overtime</th>
              <th>Hours<br/>Rendered</th>
              <th>Night<br/>Differential</th>
            </tr>
            </thead>

            <tbody>
            <tr>
              <td>Alvin</td>
              <td>Eclair</td>
              <td>$0.87</td>
              <td>Alvin</td>
              <td colSpan="2">Eclair</td>
              <td>Eclair</td>
              <td>$0.87</td>
              <td>$0.87</td>
              <td>$0.87</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>Eclair</td>
              <td>$3.76</td>
              <td colSpan="2">Alvin</td>
              <td>$0.87</td>
              <td>$0.87</td>
              <td>Eclair</td>
              <td>$0.87</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>Eclair</td>
              <td>$7.00</td>
              <td colSpan="2">Alvin</td>
              <td>$0.87</td>
              <td>Alvin</td>
              <td>Eclair</td>
              <td>$0.87</td>
              <td>$0.87</td>
            </tr>
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
