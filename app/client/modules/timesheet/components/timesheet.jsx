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


  componentDidUpdate() {
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });

  }

  componentDidMount() {
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
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
        console.log(res);
        reactState.setState({dates: res});
      }
    });
  }

  changeDate(from, to) {
    console.log(from, to);
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

        <div id="request" className="col s12">
          <div className="col s5 no-margin">
            <div className="tabs-background border-bottom">
              <div className="tabs-wrapper">
                <ul className="tabs">
                  <li className="tab col s3"><a className="active"
                                                href="#request-today">Today</a></li>
                  <li className="tab col s3"><a href="#request-week">This
                    Week</a>
                  </li>
                  <li className="tab col s3"><a href="#request-month">This
                    Month</a>
                  </li>
                  <li className="tab col s3"><a href="#request-custom">Custom
                    Date</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col s6 right-align">
            <div id="request-today" className="col s12">

            </div>
            <div id="request-week" className="col s12">

            </div>
            <div id="request-month" className="col s12">

            </div>
            <div id="request-custom" className="col s12">

            </div>
          </div>
        </div>
        <DateRange changeDate={this.changeDate.bind(this)}/>
        <TimesheetTable currentUser={currentUser} dates={dates}/>
      </section>
    );
  }


}

export default Timesheet;

