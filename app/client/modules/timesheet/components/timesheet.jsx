import React from 'react';
import moment from 'moment';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DatePicker from './datepicker';
import TimeData from '../containers/timedata';
import TimesheetTotal from '../containers/timesheet_total';
import PageTitle from '/client/modules/core/components/page_title';
import UserDetails from './user_details';
const DateData = new ReactiveVar();

class Timesheet extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      dates: []
    };
  };

  componentWillMount() {
    this.getDates();
  }


  getDates(from = null, to = null) {
    const reactState = this;
    Meteor.call('timesheet_dates.getCutOffDates', from, to, function (err, res, callback) {
      if (err) {
        sweatAlert(
          'Ooops',
          'Something went wrong!',
          '' + JSON.stringify(err, null, 2)
        );

      } else {
        reactState.setState({dates: res});
      }
    });
  }

  changeDate(from, to) {
    this.getDates(from, to);
  }

  render() {
    let currentUser = this.props.currentUser;
    let dates = this.state.dates;
    return (
      <section className="timesheet">
        <PageTitle title="Your Time Tracker"/>
        <UserDetails currentUser={currentUser}/>

        <DatePicker changeDate={this.changeDate.bind(this)}/>
        <div>
          <table className="centered bordered">
            <thead>
            <tr>
              <th>Date</th>
              <th>Time In</th>
              <th>Total Break</th>
              <th>Time Out</th>
              <th>Leave</th>
              <th>Hours<br/>Rendered</th>
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

