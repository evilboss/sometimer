import React from 'react';
import moment from 'moment';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DatePicker from './datepicker';
import PageTitle from '/client/modules/core/components/page_title';
import UserDetails from './user_details';
import TimesheetTable from './timesheet_table';
import DateRange from './daterange';
const DateData = new ReactiveVar();

class Timesheet extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      dates: []
    }
  };

  componentDidMount() {

    $('.modal-trigger').leanModal();
    $('select').material_select();
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

        <PageTitle
          title={(currentUser)?`${(Meteor.userId()==currentUser._id)?'Your':`${currentUser.profile.firstName}'s`} Time Tracker`:''}/>
        <UserDetails currentUser={currentUser}/>
        <DateRange changeDate={this.changeDate.bind(this)}/>
        <TimesheetTable currentUser={currentUser} dates={dates}/>
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

