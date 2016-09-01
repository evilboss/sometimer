import React from 'react';

class PhaseList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="phase-list row">
        <div className="z-depth-1 col s6">
          <div className="phase-title">Phase Title <i className="material-icons">border_color</i></div>
          <p className="description">lorem ipsum dolor sit amet, coneskdsjhfksj</p>
          <div className="timeline row">
            <div className="col s3">Timeline:</div>
            <div className="col s9 bold">Start: August 24 2016 to October 24, 2016</div>
          </div>
          <div className="team-lead row">
            <div className="col s3">Team Leader:</div>
            <div className="col s9 bold">Greg H.</div>
          </div>
          <div className="collaborator row">
            <div className="col s3">Collaborators:</div>
            <div className="col s9 bold">
              <ul className="no-margin">
                <li>Patricia G.</li>
                <li>Patricia G.</li>
                <li>Patricia G.</li>
              </ul>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default PhaseList;
