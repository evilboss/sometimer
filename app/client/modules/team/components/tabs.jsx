import React from 'react';
import {control} from '/lib/access-control/control';
import {sweetPrompts} from '/client/utils/helpers/sweet-helper';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {userPermissions, userType, teamId, FlowHelpers} = this.props;
    return (
      <div className="tab-nav-wrapper">
        <div className="tab-nav inline">
          <a href={(teamId)?`/dashboard/team/${teamId}`:`/dashboard/team`}
             className={`${FlowHelpers.currentRoutes(['dashboard.team','dashboard.team.new','dashboard.myteam'])}`}>
            Team{(teamId) ? '' : 's'}</a>

          {
            (userPermissions) ? control.isPermitted('readClients', userPermissions) ?
              <a href={(teamId) ? `/dashboard/team/${teamId}/manage-clients` : `/dashboard/team/manage-clients`}
                 className={`${FlowHelpers.currentRoutes(['dashboard.manageClients','dashboard.team.manageClients',(userType=='client')?'dashboard.user.new':''])}`}>Client</a>
              : '' : ''
          }
          <a href="" onClick={sweetPrompts.sweetOkPrompt.bind(this,'Coming Soon!')}
             className={``}>Team Org</a>
          {
            (userPermissions) ? control.isPermitted('readManagers', userPermissions) ?
              <a href={(teamId) ? `/dashboard/team/${teamId}/manage-managers` : `/dashboard/team/manage-managers`}
                 className={`${FlowHelpers.currentRoutes(['dashboard.manageManagers','dashboard.team.manageManagers',(userType=='manager')?'dashboard.user.new':''])}`}>Manager</a>
              : '' : ''
          }
          {
            (userPermissions) ? control.isPermitted('readAdmin', userPermissions) ?
              <a href={`/dashboard/team/manage-admins`}
                 className={`${FlowHelpers.currentRoutes(['dashboard.manageAdmins',(userType=='admin')?'dashboard.user.new':''])}`}>Admin</a>
              : '' : ''
          }
        </div>
      </div>
    );
  }
}
Tabs.defaultProps = {
  FlowHelpers: {
    currentRoutes: (event)=> {
    }
  },
  crumbs: [{text: 'Home', path: 'home', params: ''}, {text: 'Home', path: 'home', params: ''}, {
    text: 'Home',
    path: 'home',
    params: ''
  }]
};
export default Tabs;