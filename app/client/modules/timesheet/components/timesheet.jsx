import React from 'react';
import moment from 'moment';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DatePicker from './datepicker';
import TimeData from '../containers/timedata';
import PageTitle from '/client/modules/core/components/page_title';
import UserDetails from './user_details';
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

        <PageTitle title="Your Time Tracker"/>
        <UserDetails currentUser={currentUser}/>
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
              <TimeData key={index} keyIndex={index} date={date} userId={currentUser._id} selectedUser={currentUser}/>
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
