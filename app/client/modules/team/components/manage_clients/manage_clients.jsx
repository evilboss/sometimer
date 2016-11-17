import React from 'react';
import PageTitle from '/client/modules/core/components/page_title';
import Tabs from '/client/modules/team/containers/tabs';
import SubTabs from '/client/modules/team/containers/sub_tabs';
import StatusIndicator from '/client/modules/team/components/status_indicator';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';
import {formatHelper} from '/client/utils/helpers/format-helpers';

class ManageClients extends React.Component {
  constructor(props) {
    super(props);
  }

  getAssignedTeam(userId) {
    let {teams} = this.props;
    let teamName = '';
    _.each(teams, (team)=> {
      (teamName) ? null : teamName = (_.contains(team.members, userId)) ? team.name : '';
    });
    return (teamName) ? teamName : 'Unassigned';
  }


  render() {
    let {allClients, teamId} = this.props;

    return (
      <section id="team">
        <PageTitle title={formatHelper.capsAll(domainHelpers.getSubdomain())}/>
        <Tabs teamId={teamId}/>
        <SubTabs target={(teamId)?`/dashboard/team/${teamId}/user/new/client`:'/dashboard/team/user/new/client'}
                 text="Add New Client" permission="createClients"/>
        <section id="manage-clients" className="col s12">
          <div className="row no-margin-bottom">
            <div className="col s12 no-padding">
              <table className="bordered">
                <thead>
                <tr>
                  <th>Clients</th>
                </tr>
                </thead>
                <tbody>
                {allClients.map((client, index) => (
                  <tr key={index}>
                    <td>
                      <a href={`/dashboard/team/manage-clients/${client._id}`}>
                        <img
                          src={(client.profile.displayPhoto)?`${client.profile.displayPhoto}`:'/uploads/defaults/default_user.png'}
                          alt="client" className="circle responsive-img dp-small left"/>
                        <div className="col client-details no-margin">
                          <h6>{client.profile.company}<br/>
                            <small>{client.profile.firstName} {client.profile.lastName}</small>
                          </h6>
                        </div>
                      </a>
                    </td>
                    <td>
                      {formatHelper.capitalize(client.profile.status)}
                    </td>
                    <td>
                      {this.getAssignedTeam(client._id)}
                    </td>
                    <td className="status">
                      <StatusIndicator class={formatHelper.capitalize(client.profile.status)}/>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default ManageClients;
