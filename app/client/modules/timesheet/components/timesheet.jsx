import React from 'react';
import moment from 'moment';
//import TrackerReact from 'meteor/ultimatejs:tracker-react';
import DatePicker from './datepicker';
import PageTitle from '/client/modules/core/components/page_title';
import UserDetails from './user_details';
import TimesheetTable from './timesheet_table';
import DateRange from './daterange';
//const DateData = new ReactiveVar();
import Breadcrumbs from '/client/modules/core/containers/breadcrumbs';
class Timesheet extends React.Component {
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
    const {currentUser, teamId, teamName} = this.props;
    const {dates}  = this.state;
    return (
      <section className="timesheet">
        <PageTitle
          title={(currentUser) ? `${(Meteor.userId() == currentUser._id) ? 'Your' : `${currentUser.profile.firstName}'s`} Time Tracker` : ''}/>
        {(teamId) ? <Breadcrumbs crumbs={
          [
            {text: 'All Teams', path: 'dashboard.team', params: ''},
            {text: (teamName) ? teamName : 'Team', path: 'dashboard.myteam', params: teamId},
            {
              text: (currentUser) ? `${currentUser.profile.firstName} ${currentUser.profile.lastName}` : '',
              path: 'dashboard.myteam',
              params: `${teamId}/${(currentUser) ? currentUser._id : ''}`
            }
          ]}/>
          : null}
        <UserDetails currentUser={currentUser}/>
        <DateRange changeDate={this.changeDate.bind(this)}/>
        <TimesheetTable currentUser={currentUser} dates={dates}/>
      </section>
    );
  }

  getDiff(timeIn, timeOut) {
    let dateB = moment(timeOut, 'HH:MM:SS');
    let dateC = moment(timeIn, 'HH:MM:SS');
  }

}

export default Timesheet;

