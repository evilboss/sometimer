import React from 'react';
import {control} from '/lib/access-control/control';

class TeamCardAction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {teamRoute, editTeam, userPermissions} = this.props;
    return (
      <div className="card-hover-action">
        {
          (userPermissions) ? control.isPermitted('deleteTeam', userPermissions) ?
            <div className="clearfix"><i className="right material-icons close">delete_forever</i></div>
            : '' : ''
        }
        <div className="action-buttons">
          {
            (userPermissions) ? control.isPermitted('updateTeam', userPermissions) ?
              <a href={editTeam} className="btn">Edit / Manage</a>
              : '' : ''
          }
          <a href={teamRoute} className="btn">View Team</a>
        </div>
      </div>
    );
  }
}

export default TeamCardAction;
