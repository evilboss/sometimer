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

  componentDidUpdate() {
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
    const {team, staffList, teamLeader, currentUser, userPermissions} = this.props;
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
              <div className="col s12 no-margin">
                <h5 className="team-name">{(team) ? (team.name) ? team.name : '' : ''}</h5>
              </div>
              <div className="col s3 no-margin twbs">
                {/*TODO: need to add timelog request view in this page*/}
                {!(control.isStaff(Meteor.userId())) ?
                  <div className="row">
                    <ul className="tabs">
                      <li className="tab col s1"><a href="#teamview" className="active">Team View</a></li>
                      <li className="tab col s1"><a href="#request">TimeLog Request</a></li>
                    </ul>
                  </div> : null
                }


              </div>

              <div className="col s5 no-margin">
                <div className="tabs-background">
                  <div className="tabs-wrapper">
                    <ul className="tabs">
                      <li className="tab col s3"><a onClick={this.changeView.bind(this)} className="active"
                                                    href="#today">Today</a></li>
                      <li className="tab col s3"><a onClick={this.getWeek.bind(this)} href="#week">This Week</a></li>
                      <li className="tab col s3"><a onClick={this.changeView.bind(this)} href="#month">This Month</a>
                      </li>
                      <li className="tab col s3"><a onClick={this.changeView.bind(this)} href="#custom">Custom Date</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col s4 no-margin twbs">
                {
                  ((teamLeader) && (!_.isEmpty(staffList))) ?

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


                {((!teamLeader) && (_.isEmpty(staffList))) ?
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
                            <span>Go and add a Staff now</span>
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
                    {(teamLeader) ?
                      <StaffDetails currentUser={currentUser._id} staff={teamLeader} index={312809}
                                    teamId={team._id} isStaff={control.isStaff(Meteor.userId())}/> :
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

                    {(!_.isEmpty(staffList)) ?
                      staffList.map((staff, index) => (
                        <StaffDetails key={index} staff={staff} index={index} teamId={team._id}
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
            <div id="request" className="col s12"><TimeRequest/></div>

          </div> : ''}

      </section>
    );
  }
}

export default StaffList;
