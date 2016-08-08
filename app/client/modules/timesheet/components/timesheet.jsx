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

        {(currentUser) ? <section className="user-details">
          {(currentUser.profile) ?
            <div className="no-horizontal-margin row z-depth-1-half card-top-border">
              <div className="col s12 m6 l6">
                <h5>Staff</h5>
                <div className="col s8">
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
                    <tr>
                      <th>Status:</th>
                      <td>{(currentUser.profile.staffType) ? currentUser.profile.staffType : ''}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col s4">
                  <img src="/uploads/defaults/default-img.png" alt="dp"
                       className="display-photo responsive-img center-block circle"/>
                </div>
              </div>
              <div className="col s12 m6 l6">
                <h5>Team Account Manager</h5>
                <div className="col s8">
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
                    <tr>
                      <th>Status:</th>
                      <td>{(currentUser.profile.staffType) ? currentUser.profile.staffType : ''}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col s4">
                  <img src="/uploads/defaults/default-img.png" alt="dp"
                       className="display-photo responsive-img center-block circle"/>
                </div>
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
              <th>Total Break</th>
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
                <td>{(timelog.backFromLunch) ? moment(timelog.backFromLunch).format('LTS') : ''}</td>
                <td>{(timelog.timeOut) ? moment(timelog.timeOut).format('LTS') : ''}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{(timelog.complete) ? this.getDiff(moment(timelog.timeIn).format('HH:MM:SS'), moment(timelog.timeOut).format('HH:MM:SS')) : '0'}
                </td>
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
              <th>Paid:0/Unpaid:0</th>
            </tr>
            </tfoot>
          </table>

        </div>
        <ApprovalButton/>
      </section>
    );
  }

  getDiff(timeIn, timeOut) {
    let dateB = moment(timeOut, 'HH:MM:SS');
    let dateC = moment(timeIn, 'HH:MM:SS');
    console.log(dateB.diff(dateC));
  }
}

export default Timesheet;
