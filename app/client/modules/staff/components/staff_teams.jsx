import React from "react";
import CancelBtn from "/client/utils/buttons/cancel_btn";
import {formatHelper} from '/client/utils/helpers/format-helpers';

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
    const {user, teams} = this.props;
    const {firstName, lastName, department, jobTitle, role}= (user) ? (user.profile) ? user.profile : '' : '';
    const detailType = (role == 'client') ? 'company' : 'department';
    return (
      <section className="twbs">
        <div className="col s12 no-padding">
          <h4>{`${firstName} 's`} Teams</h4>
          <ul>
            {teams.map((team, index) => (

              <li>
                <a href={`/dashboard/team/${team._id}`}>
                  {team.name}</a>
              </li>


            ))}
          </ul>

        </div>
      </section>
    );
  }
}

export default StaffTeams;
