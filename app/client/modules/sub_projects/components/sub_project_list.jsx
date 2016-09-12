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

        <div className="row">
          {subProjects.length === 0 ? <p>No Sub-Projects Yet!</p> : null}
          {subProjects.map(subProject => (
            <a href="" key={subProject._id}>
              <article className="col s12 l3">
                <div className="card">
                  <div className="content">
                    <div className="card-title">
                      {subProject.name}
                      {subProject.saving ? '...' : null}
                    </div>
                    <p>{subProject.details}</p>
                  </div>
                  <div className="card-action">
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        <SubCreate projectId={projectId}/>
      </section>
    );
  }
}
export default SubProjectList;
