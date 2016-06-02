import React from 'react';
import Background from './landing_background';
class EntryPoint extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="entry-point">
        <Background />
        <div className="center-align container body">
          <h1 className="white-text">
            Remotiv Platform
          </h1>
          <a className="waves-effect waves-light btn-large amber darken-2"><b>
            <i className="material-icons right">&#xE7F0;</i>
            Create Your Team</b></a>
        </div>
      </section>
    );
  }
}

export default EntryPoint;
