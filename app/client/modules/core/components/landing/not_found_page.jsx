import React from 'react';
import Background from './landing_background';

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
          <a href="/team/create" className="waves-effect waves-light btn-large amber darken-2"><b>
            <i className="material-icons right">&#xE7F0;</i>
            Create Your Team</b></a>
        </div>
      </section>
    );
  }
}

export default NotFoundPage;
