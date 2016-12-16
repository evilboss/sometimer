import React from 'react';
import StatusIndicator from '/client/modules/team/components/status_indicator';
import {formatHelper} from '/client/utils/helpers/format-helpers';
import moment from 'moment';

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
              <th>Location</th>
              <td>{(user.profile.timezone) ? formatHelper.getCountry(user.profile.timezone) : 'Manila'}</td>
            </tr>
            <tr>
              <th>Time Zone</th>
              <td>{(user.profile.timezone) ? moment().tz(user.profile.timezone).format('z') : moment().tz('Asia/Manila').format('z')}</td>
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
