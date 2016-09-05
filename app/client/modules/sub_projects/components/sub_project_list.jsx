import React from 'react';
import SubCreate from '../containers/sub_create';
import Username from '/client/modules/users/containers/username';
class SubProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {subProjects, projectId} = this.props;
    return (
      <section className="subproject white-wrapper">
        <h4>Sub Projects</h4>
        <div>
          <SubCreate projectId={projectId}/>
        </div>
        <div className="subproject-list">
          {subProjects.length === 0 ? <p>No Sub-Projects Yet!</p> : null}
          {subProjects.map(subProject => (
            <div key={subProject._id} className="subproject">
              <Username userId={subProject.author}/>:{subProject.name}{subProject.details}
              {subProject.saving ? '...' : null}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default SubProjectList;
