import React from 'react';
import Quickform from '/client/modules/reactUtils/components/quickform';
import {TeamInfo} from '/client/modules/team/libs/teamInfo';

class TeamMembers extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    renderSiteLink = ()=> {
      if (this.props.newTeam.name) {
        return(<div>
          <h1>Your New Site : {TeamInfo.generatePlatform(this.props.newTeam.name, this.props.path)} </h1>
          <a href={TeamInfo.generatePlatform(this.props.newTeam.name,this.props.path)}>Site Link</a>
        </div>
        );

      }

    }
    renderNoSite = ()=> {
      return 'no site';
    }
    return (
      <div>
        {(() => {
          return (this.props.newTeam) ? (this.props.newTeam.name) ? renderSiteLink() : renderNoSite() : renderNoSite()
        })()}
      </div>
    );
  }
}

export default TeamMembers;
