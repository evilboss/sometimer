import React from 'react';
import Quickform from '/client/modules/reactUtils/components/quickform';

class TeamName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <Quickform
            buttonText='Next'
            field={this.props.team}
            operation='insert'
            name="insertTeamForm"
            buttonClass = "waves-effect waves-light btn-large amber darken-2"
            ommited = "members"
          />
          <p className="subtext center-align">
            (this would be your team domain)</p>
        </div>
      </div>

    );
  }
}

export default TeamName;
