import React from 'react';

class ProjectQuickView extends React.Component {
  constructor(props) {
    super(props);
  }

  /*<a href='' className="collection-item">
   <b>project title</b>
   </a>*/
  render() {
    const projects = this.props.projects;
    return (
      <div className="collection">
        {projects.map((project, index)=>(
          <a href={`/project/${project._id}`} className="collection-item">
            <b>{project.name}</b>
          </a>
        ))}
      </div>
    );
  }
}

export default ProjectQuickView;
