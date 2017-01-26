import React from "react";
import moment from "moment";
import StaffDetails from "../containers/staff_details";
import DateRange from "/client/modules/timesheet/components/daterange";
import PageTitle from "/client/modules/core/components/page_title";
import Tabs from "/client/modules/team/containers/tabs";
import {domainHelpers} from "/client/utils/helpers/domain-helpers";
import {formatHelper} from "/client/utils/helpers/format-helpers";
import Breadcrumbs from "/client/modules/core/containers/breadcrumbs";
import {control} from "/lib/access-control/control";
import TimeRequest from "/client/modules/timesheet/containers/time_request";
import Summary from "/client/modules/timesheet/containers/summary";

class StaffList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      from: moment().format('LL'),
      to: moment().add('days', 1).format('LL'),
    };
  }

  componentDidMount() {
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
  }

  componentDidUpdate() {
    $(document).ready(function () {
      $('ul.tabs').tabs();
    });
  }

  getWeek() {
    let curr = new Date;
    let firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
    let lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));

  }

  summaryChangeView(e) {
    $('#summary-date-range').openModal();
  }

  changeView(e) {
    $('#daterange-modal').openModal();
  }

  goToday() {
    console.log('today');
    this.setState({
      from: moment().format('LL'),
      to: moment().format('LL')
    });
    $('ul.tabs').tabs('select_tab', 'request-today');
    $('ul.tabs').tabs('select_tab', 'summary-today');
  }

  goThisWeek() {
    console.info('Week');
    this.setState({
      from: moment().startOf('isoWeek').format('LL'),
      to: moment().endOf('isoWeek').format('LL')
    });
  }

  goThisMonth() {
    console.info('Month');
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstDay = new Date(y, m, 1);
    var lastDay = new Date(y, m + 1, 0);
    this.setState({
      from: moment(firstDay).format('LL'),
      to: moment(lastDay).format('LL')
    });
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
    console.info('custom range');
    this.setState({
      from: moment(from).format('LL'),
      to: moment(to).format('LL')
    });
  }

  render() {
    const {team, currentUser, userPermissions} = this.props;
    const {role} = (currentUser) ? (currentUser.profile) ? currentUser.profile : 'staff' : 'staff';
    return (
      <section id="staff-list">
        {(team) ?
          <div>
            <PageTitle title={(team) ? `${formatHelper.capsAll(team.name)} Team` : '  '}/>
            <Tabs teamId={team._id}/>
            <div className="row no-margin-bottom">
              <div className="col s6">
                <Breadcrumbs crumbs={
                  [{text: 'All Teams', path: 'dashboard.team', params: ''}, {
                    text: team.name,
                    path: 'dashboard.myteam',
                    params: team._id
                  }]}/>
                <small>{(team) ? (team.description) ? team.description : '' : ''}</small>
              </div>

              <div className="col s6 right-align">
              </div>
            </div>


            <div className="row no-margin-bottom">
              <div className="col s12 no-margin">
                <h5 className="team-name">{(team) ? (team.name) ? team.name : '' : ''}</h5>
              </div>
              <div className="col s5 no-margin twbs">
                {!(control.isStaff(Meteor.userId())) ?
                  <div className="row">
                    <ul className="tabs">
                      <li className="tab col s1"><a href="#teamview" className="active">Team View</a></li>
                      <li className="tab col s1" onClick={this.goToday.bind(this)}><a href="#request">Timesheet View</a>
                      </li>
                      <li className="tab col s1" onClick={this.goToday.bind(this)}><a href="#summary">Summary View</a>
                      </li>
                    </ul>
                  </div> : null
                }


              </div>

              <div className="col s3 no-margin">

              </div>
              <div className="col s4 no-margin twbs">
                {
                  (!_.isEmpty(team.teamLeader) && !_.isEmpty(team.members)) ?
                    <div className="btn btn-add">
                      {(control.isPermitted('createManagers', userPermissions)) ?

                        <a href={(team._id) ? `/dashboard/team/${team._id}/user/new/manager` : ''}
                           className="waves-effect waves-light secondary-color"><i
                          className="material-icons">add</i><span>Add a Manager</span>
                        </a>
                        : null
                      }
                      {(control.isPermitted('createStaffs', userPermissions)) ?
                        <a href={`/dashboard/team/${team._id}/user/new/staff`}
                           className="waves-effect waves-light secondary-color">
                          <i className="material-icons">add</i>
                          <span>Add a new staff</span>
                        </a>
                        : null}
                    </div>
                    : ''
                }
              </div>

            </div>
            <div id="teamview" className="row border-top">
              <div className="col s12 no-padding">
                <PageTitle title='Team View'/>

                {((_.isEmpty(team.teamLeader) && (_.isEmpty(team.members)))) ?
                  <div className="empty-team col s9 twbs">
                    <h5>This team is empty. Populate this team by doing either of the two below</h5>
                    <div className="col s5">
                      <div>
                        <span className="red-text">There is no Manager assigned to this team yet.</span>
                        You have created a team but haven't assigned a Manager yet. Click below to add.
                      </div>

                      {(control.isPermitted('createManagers', userPermissions)) ?
                        <div className="btn btn-add block">
                          <a href={(team._id) ? `/dashboard/team/${team._id}/user/new/manager` : ''}
                             className="waves-effect waves-light secondary-color"><i
                            className="material-icons">add</i><span>Add a Manager Now</span></a>
                        </div>
                        : null}
                    </div>

                    <div className="divider">
                      <div className="top">
                      </div>
                      <div className="middle">OR</div>
                      <div className="bottom">
                      </div>
                    </div>

                    <div className="col s5">
                      <div>
                  <span className="red-text">
                  There is no Staff assigned to this team yet.</span>
                        You have created a team but haven't assigned a Staff yet. Click below to add.
                      </div>
                      {(control.isPermitted('createStaffs', userPermissions)) ?
                        <div className="btn btn-add block">
                          <a href={`/dashboard/team/${team._id}/user/new/staff`}
                             className="waves-effect waves-light secondary-color">
                            <i className="material-icons">add</i>
                            <span>Add a Staff Now</span>
                          </a>
                        </div>
                        : null}
                    </div>
                  </div>
                  :
                  <table className="striped staff-list twbs">
                    <thead>
                    <tr>
                      <th></th>
                      <th>Staff</th>
                      <th>Position</th>
                      <th className="center-align">Status</th>
                      <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {(!_.isEmpty(team.teamLeader)) ?
                      team.teamLeader.map((staff, index) => (
                        <StaffDetails key={index} currentUser={currentUser._id} staffId={staff} index={index}
                                      teamId={team._id} isStaff={control.isStaff(Meteor.userId())}/>  )) :
                      <tr>
                        <td></td>
                        <td colSpan="4">
                          <div className="empty-list red-text btn-add">
                            There is no Manager assigned to this team yet. &nbsp;
                            {(control.isPermitted('createManagers', userPermissions)) ?
                              <a href={(team._id) ? `/dashboard/team/${team._id}/user/new/manager` : ''}
                                 className="waves-effect waves-light secondary-color"><i
                                className="material-icons">add</i><span>Add a Manager</span></a>
                              : null}
                            {(control.isPermitted('createStaffs', userPermissions)) ?
                              <a href={`/dashboard/team/${team._id}/user/new/staff`}
                                 className="waves-effect waves-light secondary-color">
                                <i className="material-icons">add</i>
                                <span>Add a Staff</span>
                              </a>
                              : null}
                          </div>
                        </td>
                      </tr>}

                    {
                      (!_.isEmpty(team.members)) ?
                        team.members.map((staff, index) => (
                          <StaffDetails key={index} staffId={staff} index={index} teamId={team._id}
                                        isStaff={(staff._id == currentUser) ? false : control.isStaff(Meteor.userId())}/>
                        ))
                        : <tr>
                          <td></td>
                          <td colSpan="3" className="red-text">
                            <div className="empty-list red-text btn-add">
                              There is no Staff assigned to this team yet. &nbsp;
                              {(control.isPermitted('createManagers', userPermissions)) ?
                                <a href={(team._id) ? `/dashboard/team/${team._id}/user/new/manager` : ''}
                                   className="waves-effect waves-light secondary-color"><i
                                  className="material-icons">add</i><span>Add a Manager</span></a>
                                : ''}
                              {(control.isPermitted('createStaffs', userPermissions)) ?
                                <a href={`/dashboard/team/${team._id}/user/new/staff`}
                                   className="waves-effect waves-light secondary-color">
                                  <i className="material-icons">add</i>
                                  <span>Add a Staff</span>
                                </a>
                                : ''}
                            </div>
                          </td>
                        </tr>
                    }
                    <tr>

                    </tr>
                    </tbody>
                  </table>
                }
              </div>
            </div>
            {!(control.isStaff(Meteor.userId())) ?
              <div>
                <div id="request" className="col s12">
                  <div className="col s5 no-margin">
                    <div className="tabs-background border-bottom">
                      <div className="tabs-wrapper">
                        <ul className="tabs">
                          <li className="tab col s3"><a onClick={this.goToday.bind(this)} className="active"
                                                        href="#request-today">Today</a></li>
                          <li className="tab col s3"><a onClick={this.goThisWeek.bind(this)} href="#request-week">This
                            Week</a>
                          </li>
                          <li className="tab col s3"><a onClick={this.goThisMonth.bind(this)} href="#request-month">This
                            Month</a>
                          </li>
                          <li className="tab col s3"><a onClick={this.changeView.bind(this)} href="#request-custom">Custom
                            Date</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col s6 right-align">
                    <div id="request-today" className="col s12">
                      Today is {moment().format('LL')}
                    </div>
                    <div id="request-week" className="col s12">
                      Period from {this.state.from} to {this.state.to}
                    </div>
                    <div id="request-month" className="col s12">
                      Period from {this.state.from} to {this.state.to}
                    </div>
                    <div id="request-custom" className="col s12">
                      <DateRange changeDate={this.changeDate.bind(this)}/>
                    </div>
                  </div>
                  <TimeRequest teamId={team._id} from={this.state.from} to={this.state.to}
                               teamName={formatHelper.capsAll(team.name)}/>
                </div>
                <div id="summary" className="col s12">
                  <div className="col s5 no-margin">
                    <div className="tabs-background border-bottom">
                      <div className="tabs-wrapper">
                        <ul className="tabs">
                          <li className="tab col s3"><a onClick={this.goToday.bind(this)} className="active"
                                                        href="#summary-today">Today</a></li>
                          <li className="tab col s3"><a onClick={this.goThisWeek.bind(this)} href="#summary-week">This
                            Week</a>
                          </li>
                          <li className="tab col s3"><a onClick={this.goThisMonth.bind(this)} href="#summary-month">This
                            Month</a>
                          </li>
                          <li className="tab col s3"><a onClick={this.summaryChangeView.bind(this)}
                                                        href="#summary-custom">Custom
                            Date</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col s6 right-align">
                    <div id="summary-today" className="col s12">
                      Today is {moment().format('LL')}
                    </div>
                    <div id="summary-week" className="col s12">
                      Period from {this.state.from} to {this.state.to}
                    </div>
                    <div id="summary-month" className="col s12">
                      Period from {this.state.from} to {this.state.to}
                    </div>
                    <div id="summary-custom" className="col s12">
                      <DateRange customId="summary-date-range" changeDate={this.changeDate.bind(this)}/>
                    </div>
                  </div>
                  <Summary team={team} teamId={team._id} from={this.state.from} to={this.state.to}
                           teamName={formatHelper.capsAll(team.name)}/>
                </div>
              </div>

              : null}

          </div> : ''}

      </section>
    );
  }
}

export default StaffList;
