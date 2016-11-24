import React from 'react';
import StatusIndicator from '/client/modules/team/components/status_indicator';
class StaffProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user, team} = this.props;
    const {profile} = (user) ? user : '';

    return (
      <section>
        <div className="staff-profile-details">
          <img src={profile.displayPhoto} className="circle responsive-img dp-medium"/>
          <div className="inline">
            <table className="responsive-table">
              <tr>
                <td>
                  <h5 className="no-margin">{`${profile.firstName} ${profile.lastName}`}</h5>
                  <h6 className="no-margin">{profile.role}&nbsp;
                    <small>{profile.createdAt}</small>
                  </h6>
                </td>
                <td>
                  <StatusIndicator class="In"/>
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

        <section id="staff-project-list">
          <div className="title">
            <h5>Projects</h5>
          </div>
        </section>
      </section>
    );
  }
}
StaffProfile.defaultProps = {
  user: {
    _id: 'sampleID',
    profile: {
      displayPhoto: '/uploads/defaults/default_user.png',
      firstName: 'Gwen',
      lastName: 'Manansala',
      role: 'sample role',
      createdAt: 'sample date started'
    }
  },
  team: {
    _id: 'teamId'
  }
}

export default StaffProfile;
