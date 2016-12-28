import React from 'react';
import {domainHelpers} from '/client/utils/helpers/domain-helpers';

class CreateTeamButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <a href={(domainHelpers.getSubdomain() == '') ? '/team/signin' : '/login'}
         className="waves-effect waves-light btn-large light-green darken-1"><b>
        Sign in to Remotiv</b></a>
    );
  }
}

export default CreateTeamButton;
