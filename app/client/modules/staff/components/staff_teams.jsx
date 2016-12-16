import React from "react";
import CancelBtn from "/client/utils/buttons/cancel_btn";
import {formatHelper} from '/client/utils/helpers/format-helpers';
import {control} from '/lib/access-control/control';
import StaffDp from '/client/modules/users/containers/staff_dp';
import DisplayManager from '/client/modules/manager/containers/display_manager';
class StaffTeams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: null,
    }
  }

  _update() {
    const {profileUpdate, user} = this.props;
    const {firstName, lastName, department, position, company}= this.refs;
    const profile = {
      firstName: firstName.value,
      lastName: lastName.value,
      department: (department) ? department.value : '',
      company: (company) ? company.value : '',
      position: position.value,
    };
    profileUpdate(user._id, profile);
  }

  render() {
    const {user, teams, currentUser, permissions} = this.props;
    const {firstName, lastName, department, jobTitle, role}= (user) ? (user.profile) ? user.profile : '' : '';
    const detailType = (role == 'client') ? 'company' : 'department';
    return (
      <section className="twbs">
        <div className="col s12 no-padding">
          <h4>{`${firstName} 's`} Teams</h4>


          <div className="row">
            {(teams) ?
              teams.map((team, index) => (
                <div key={index} className="collection-item">
                  <a href={`/dashboard/team/${team._id}`}>
                    <article className="col s12 m6 l6">
                      <div className="card">
                        <div className="card-title">{team.name}
                        </div>
                        <div className="card-content">
                          {(team.teamLeader) ?
                            <DisplayManager userId={team.teamLeader}
                                            target={(permissions) ? control.isPermitted('updateManagers', permissions) ? `/dashboard/staff-settings/team/${team._id}/${team.teamLeader}` : '' : ''}/>
                            :
                            <div className="row no-margin">
                              <img
                                src='/uploads/defaults/default_user.png'
                                alt="Team Lead" className="circle responsive-img dp-small left"/>
                              <div className="col s8 no-margin red-text">
                                {(currentUser._id) ?
                                  (control.isAdmin(currentUser._id)) ?
                                    <span>
                                      Needs a Team Leader!<br/>Manage now.
                                    </span>
                                    : <span>
                                     There is no Manager assigned to this team yet.
                                    </span> : <span>
                                     There is no Manager assigned to this team yet.
                                    </span>}
                              </div>
                            </div>
                          }

                        </div>
                        <div className="card-action">
                          {(!_.isEmpty(team.members)) ?
                            team.members.map((member, key) => (
                              (key <= 4) ?
                                <StaffDp staffType="staff" key={key} teamId={team._id} userId={member}
                                         target={ (permissions) ? control.isPermitted('updateStaffs', permissions) ? `/dashboard/staff-settings/team/${team._id}/${member}` : '' : ''}/> : ''
                            ))
                            :
                            <div className="row no-margin">
                              <img
                                src='/uploads/defaults/default_user.png'
                                alt="Team Lead" className="circle responsive-img dp-small left"/>
                              <div className="col s8 no-margin">
                                    <span>Needs a Staff!<br/>
                                    Manage now.
                                    </span>
                              </div>
                            </div>
                          }
                        </div>
                      </div>
                    </article>
                  </a>
                </div>
              )) : ''}
          </div>


        </div>
      </section>
    );
  }
}

export default StaffTeams;
