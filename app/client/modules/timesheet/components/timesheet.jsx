import React from 'react';
import moment from 'moment';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ApprovalButton from '../../manager/components/approval_button';
class Timesheet extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
  }

  getUserName() {
    Tracker.autorun(function () {
      if (Meteor.user()) {

        if (Meteor.user().profile) {
          return Meteor.user().profile.firstName;
          console.log(Meteor.user());
        }
      }
    });


  }

  render() {

    let timelogs = this.props.timelogs;
    let currentUser = Meteor.user();
    let currentDisplayName = this.getUserName();
    return (
      <section className="timesheet">
        <h5>Employee's TimeSheet</h5>

        {(currentUser) ? <section class="user-details">
          {(currentUser.profile) ?
            <div className="no-horizontal-margin row z-depth-1-half card-top-border">
              <div className="col s12 m6 l6">
                <table>
                  <tbody>
                  <tr>
                    <th>Name:</th>
                    <td>{(currentUser.profile.firstName) ? currentUser.profile.firstName : ''} {(currentUser.profile.lastName) ? currentUser.profile.lastName : ''} </td>
                  </tr>
                  <tr>
                    <th>Department:</th>
                    <td>{(currentUser.profile.department) ? currentUser.profile.department : ''}</td>
                  </tr>
                  <tr>
                    <th>Designation:</th>
                    <td>{(currentUser.profile.jobTitle) ? currentUser.profile.jobTitle : ''}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div className="col s12 m6 l6">
                <table>
                  <tbody>
                  <tr>
                    {
                      /*<th>Shift:</th>
                       <td>9:00 to 18:00</td>*/
                    }
                  </tr>
                  <tr>
                    {
                      /*<th>State:</th>
                       <td>Au</td>*/
                    }
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            : 'Please wait'}
        </section>
          : 'please wait more'}

        <div className="z-depth-1-half card-top-border">
          <table className="centered responsive-table striped">
            <thead>
            <tr>
              <th>Date</th>
              <th>Time In</th>
              <th>Out To Lunch</th>
              <th>Back From Lunch</th>
              <th>Time Out</th>
              <th>Leave</th>
              <th>Hours<br/>Rendered</th>
            </tr>
            </thead>
            <tbody>
            {timelogs.map(timelog => (
              <tr key={timelog._id}>
                <td>{moment(timelog.timeIn).format('LL')}</td>
                <td>{(timelog.timeIn) ? moment(timelog.timeIn).format('LTS') : ''}</td>
                <td>{(timelog.outToLunch) ? moment(timelog.outToLunch).format('LTS') : ''}</td>
                <td>{(timelog.backFromLunch) ? moment(timelog.backFromLunch).format('HH:MM:SS') : ''}</td>
                <td>{(timelog.timeOut) ? moment(timelog.timeOut).format('HH:MM:SS') : ''}</td>
                <td></td>
                <td></td>
              </tr>
            ))}

            </tbody>
            <tfoot>
            <tr>
              <th>Total:</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th colSpan="2">Paid:0/Unpaid:0</th>
            </tr>
            </tfoot>
          </table>

        </div>
        <ApprovalButton/>
      </section>
    );
  }
}

export default Timesheet;
