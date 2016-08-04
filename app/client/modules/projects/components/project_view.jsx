import React from 'react';

class ProjectView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="project">
        <div><h5>ProjectList <span>
          <a href="/projects/new" className="btn-floating waves-effect waves-light theme-color">
            <i className="material-icons">add</i></a></span></h5>
        </div>
      </section>
    );
  }
}

export default ProjectView;
