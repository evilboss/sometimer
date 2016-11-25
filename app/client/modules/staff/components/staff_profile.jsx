import React from 'react';
import StatusIndicator from '/client/modules/team/components/status_indicator';
import {formatHelper} from '/client/utils/helpers/format-helpers';
import moment from 'moment';
class StaffProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user, team, projects} = this.props;
    const {profile} = (user) ? user : '';
    return (
      <section>
        <div className="staff-profile-details">
          <img src={(profile.displayPhoto)?profile.displayPhoto:'/uploads/defaults/default_user.png'}
               className="circle responsive-img dp-medium"/>
          <div className="inline">
            <table className="responsive-table">
              <tr>
                <td>
                  <h5 className="no-margin">{`${profile.firstName} ${profile.lastName}`}</h5>
                  <h6 className="no-margin">{profile.role}&nbsp;
                    <small>{moment(user.createdAt).fromNow()}</small>
                  </h6>
                </td>
                <td>
                  <StatusIndicator class={(profile.status)? formatHelper.capitalize(profile.status):''}/>
                </td>
                <td className="center-align">
                  <div className="icons center-align">

                    <a href={`/dashboard/staff/${team._id}/${user._id}`}>
                      <img src="/Assets/icons/time.png"/>
                    </a>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <section id="staff-project-list" className="col s11">
          <div className="title">
            <h5>Projects</h5>
            <ul>

              {(projects.length !== 0) ?
                projects.map((project, index)=>
                  <li key={index}>
                    <a href={`/projects/${project._id}`}>
                      {project.name}
                    </a>
                  </li>
                ) : <li>No Projects Yet!</li>}

            </ul>
          </div>
        </section>
      </section>
    );
  }
}
StaffProfile.defaultProps = {
  user: {
    _id: 'sampleID',
    createdAt: 'sample date started',
    profile: {
      displayPhoto: '/uploads/defaults/default_user.png',
      firstName: 'Gwen',
      lastName: 'Manansala',
      role: 'sample role',
    }
  },
  team: {
    _id: 'teamId'
  }
}

export default StaffProfile;
