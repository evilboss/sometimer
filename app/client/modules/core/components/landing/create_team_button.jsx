import React from 'react';

class CreateTeamButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href="/team/signin" className="waves-effect waves-light btn-large light-green darken-1"><b>
        Sign in to Remotiv</b></a>
    );
  }
}

export default CreateTeamButton;
