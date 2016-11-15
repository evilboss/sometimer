import React from 'react';
import moment from 'moment';
import SendInvitationModal from '/client/modules/invitations/components/send_invitation_modal';
import StaffDetails from '../containers/staff_details';
import DatePicker from '/client/modules/timesheet/components/datepicker';
import DateRange from '/client/modules/timesheet/components/daterange';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import {formatHelper} from '/client/utils/helpers/format-helpers';
import Breadcrumbs from '/client/modules/core/containers/breadcrumbs';
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
      <section id="staff-list" className="twbs">
        <PageTitle title={formatHelper.capsAll(domainHelpers.getSubdomain())}/>
        <Tabs/>

        <div className="row">
          <div className="col s6">
            <Breadcrumbs crumbs={
        [{text: 'Team', path: 'dashboard.team', params: ''}, {text: team.name, path: 'dashboard.myteam', params: team._id}]}/>
            <small>{(team) ? (team.description) ? team.description : '' : ''}</small>
          </div>

          <div className="col s6 right-align">
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


        <div className="row no-margin-bottom">
          <div className="col s4 no-margin">
            <h5 className="no-margin-bottom">{(team) ? (team.name) ? team.name : '' : ''}</h5>
          </div>
          <div className="col s5 no-margin">
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
          </div>
          <div className="col s3 no-margin">
            <div className="btn btn-add">
              <a href="" className="waves-effect waves-light secondary-color">
                <i className="material-icons">add</i>
                <span>Add a new staff</span>
              </a>
            </div>
          </div>
        </div>


        <div className="row border-top">
          <div className="col s12">
            <table className="bordered">
              <thead>
              <tr>
                <th>Staff</th>
                <th className="center-align">Time Log Status</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              {staffList.map((staff, index) => (
                <StaffDetails key={index} staff={staff} index={index} teamId={team._id}/>
              ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>
    );
  }
}

export default StaffList;
