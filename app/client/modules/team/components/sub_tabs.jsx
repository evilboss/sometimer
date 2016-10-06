import React from 'react';

class SubTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row no-margin-bottom">
        <div className="col s9 no-padding">

          <div className="btn-add">
            <a href="/dashboard/team/new" className="waves-effect waves-light secondary-color">
              <span>Add New Team</span>
              <i className="material-icons">add</i></a>
          </div>

        </div>
        <div className="col s3 no-padding drafts">
          <h5>Saved Drafts</h5>
        </div>
      </div>
    );
  }
}

export default SubTabs;
