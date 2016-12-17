import React from "react";
import {formatHelper} from "/client/utils/helpers/format-helpers";
import moment from "moment";

class StaffProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user, teams, team, projects} = this.props;
    const {profile} = (user) ? user : '';

    return (
      <section>
        {(user) ?
          <table>
            <tbody>
            <tr>
              <th>Position</th>
              <td>{(user.profile.position) ? user.profile.position : ''}</td>
            </tr>
            <tr>
              <th>Team</th>
              <td>
                {(teams) ?
                  teams.map((team, index) => (
                    <span key={index}>
                    {`${team.name} `}
                    </span>
                  )) : ''}

              </td>
            </tr>

            <tr>
              <th>Country:</th>
              <td>{(user.profile.country) ? user.profile.country : ''}</td>
            </tr>
            <tr>
              <th>Time Zone</th>
              <td>{(user.profile.timezone) ? moment().tz(user.profile.timezone).format('z') : moment().tz('Asia/Manila').format('z')}</td>
            </tr>

            <tr>
              <th>Skype ID:</th>
              <td>{(user.profile.skypeID) ? user.profile.skypeID : ''}</td>
            </tr>
            <tr>
              <th>Contact Number:</th>
              <td>{(user.profile.contactNumber) ? user.profile.contactNumber : ''}</td>
            </tr>
            </tbody>
          </table>
          : ''}

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
