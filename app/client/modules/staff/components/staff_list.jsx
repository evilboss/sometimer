import React from 'react';
import moment from 'moment';
import SendInvitationModal from '/client/modules/invitations/components/send_invitation_modal';
import StaffDetails from '../containers/staff_details';
import PageTitle from '/client/modules/core/components/page_title';
import DatePicker from '/client/modules/timesheet/components/datepicker';
import DateRange from '/client/modules/timesheet/components/daterange';
import Tabs from '/client/modules/team/containers/tabs';
import SubTabs from '/client/modules/team/containers/sub_tabs';


/*TODO: @aaron tabs-background*/

class StaffList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      from: moment().format('LL'),
      to: moment().format('LL'),
    };
  }

  componentDidMount() {
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
  }

  getWeek() {
    var curr = new Date;
    var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
    var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
    console.log(firstday, lastday);
  }

  changeView(e) {
    console.log(e);
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
    const {team, staffList} = this.props;
    return (
      <section id="staff-list">
        <Tabs/>
        <SubTabs target="/dashboard/manage-clients/new" text="Add New Client" permission="createClients"/>
        <PageTitle title={(team)?(team.name)?team.name:'':''}/>
        <small>{(team) ? (team.description) ? team.description : '' : ''}</small>
        <div className="row">
          <div className="col s12">
            <div id="today" className="col s12">
              Today is {moment().format('LL')}
            </div>
            <div id="week" className="col s12">
              Period from {this.state.from} to {this.state.to}
            </div>
            <div id="month" className="col s12">
              Period from {this.state.from} to {this.state.to}
            </div>
            <div id="custom" className="col s12">
              <DateRange changeDate={this.changeDate.bind(this)}/>
            </div>
          </div>
        </div>
        <div className="tabs-background">
          <div className="tabs-wrapper">
            <ul className="tabs">
              <li className="tab col s3"><a onClick={this.changeView.bind(this)} className="active"
                                            href="#today">Today</a></li>
              <li className="tab col s3"><a onClick={this.getWeek.bind(this)} href="#week">This Week</a></li>
              <li className="tab col s3"><a onClick={this.changeView.bind(this)} href="#month">This Month</a></li>
              <li className="tab col s3"><a onClick={this.changeView.bind(this)} href="#custom">Custom Date</a></li>
            </ul>
          </div>
        </div>
        <div className="collection">
          {staffList.map((staff, index) => (
            <StaffDetails key={index} staff={staff} index={index}/>
          ))}
        </div>
        <div id="invitationButton">
          <SendInvitationModal/>
        </div>
      </section>
    );
  }
}

export default StaffList;
