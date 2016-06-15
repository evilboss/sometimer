import React from 'react';
import Background from './landing_background';
import CreateTeamButton from './create_team_button';
class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="not-found">
        <Background />
        <div className="center-align container body white-text">
          <div className="error-box container">
            <h1>
              <i className="material-icons left error">error_outline</i>
              You've found a Glitch!
            </h1>
            You've found yourself in a weird place.
            Probably not the place you were looking for.&nbsp; ¯\_(ツ)_/¯
          </div>
          <CreateTeamButton />
        </div>
      </section>
    );
  }
}

export default NotFoundPage;
