import React from 'react';

class ListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="project-view">
          <a href="/projects/listview"><i className="material-icons">view_module</i></a>
          <i className="material-icons active">view_list</i>
        </div>
        <div className="collection">
          {this.props.projects.map(project => (
            <a href="#!" key={project._id} className="collection-item">
              <b>{project.name}</b>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default ListView;
