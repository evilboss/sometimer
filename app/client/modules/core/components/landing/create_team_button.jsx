import React from 'react';

class CreateTeamButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href="/login" className="waves-effect waves-light btn-large light-green darken-1"><b>
        Login to Remotiv</b></a>
    );
  }
}

export default CreateTeamButton;
