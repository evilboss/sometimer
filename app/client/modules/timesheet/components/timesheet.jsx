import React from 'react';
import moment from 'moment';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DatePicker from './datepicker';
import TimeData from '../containers/timedata';
const DateData = new ReactiveVar();

class Timesheet extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      dates: []
    };
  }

  componentWillMount() {
    this.getDates();
  }


  getDates() {
    let reactState = this;
    Meteor.call('timesheet_dates.getCutOffDates', function (err, res, callback) {
      if (err) {
        console.log(JSON.stringify(err, null, 2))
      } else {
        reactState.setState({dates: res});
      }
    });
  }

  getUserName() {
    Tracker.autorun(function () {
      if (Meteor.user()) {
        if (Meteor.user().profile) {
          return Meteor.user().profile.firstName;
        }
      }
    });
  }

  render() {
    let currentUser = this.props.currentUser;
    let currentDisplayName = this.getUserName();
    let dates = this.state.dates;
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
            </div>
            : 'Please wait'}
        </section>
          : 'please wait more'}

        <DatePicker/>
        <div className="z-depth-1-half card-top-border">
          <table className="centered responsive-table bordered">
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
            {dates.map((date, index)=>(
              <TimeData keyIndex={index} date={date} userId={currentUser._id} selectedUser={currentUser}/>
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
