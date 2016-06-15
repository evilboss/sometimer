import React from 'react';

class CreateTeamButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href="/team/create" className="waves-effect waves-light btn-large light-green darken-1"><b>
        <i className="material-icons right">&#xE7F0;</i>
        Create Your Team</b></a>
    );
  }
}

export default CreateTeamButton;
