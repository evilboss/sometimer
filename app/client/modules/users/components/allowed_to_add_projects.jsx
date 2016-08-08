import React from 'react';

class AllowedToAddProjects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {(role == 'manager' || role == 'admin') ? '' : ''}      </div>
    );
  }
}

export default AllowedToAddProjects;
