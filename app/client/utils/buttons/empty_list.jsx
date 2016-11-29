import React from 'react';

class EmptyList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {userType} = this.props;
    return (
      <div className="empty-list btn-add">
        No {userType} exist in the system
        <a href={`/dashboard/team/user/new/${userType}`} class="waves-effect waves-light secondary-color"><i
          class="material-icons">add</i><span>Add a new {userType}</span></a>
      </div>
    );
  }
}
EmptyList.defaultProps = {
  userType: 'manager'
}


export default EmptyList;


