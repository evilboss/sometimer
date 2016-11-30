import React from 'react';

class EmptyList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {userType, message} = this.props;
    return (
      <div className="empty-list btn-add">
        No {userType} {message}.&nbsp;
        <a href={(userType=="team")?`/dashboard/team/new`
        :`/dashboard/team/user/new/${userType}`}
           className="waves-effect waves-light secondary-color"><i
          className="material-icons">add</i><span>Add a new {userType}</span></a>
      </div>
    );
  }
}
EmptyList.defaultProps = {
  userType: 'staff',
  message: 'exist in the system. Continue to create team. you can add later'
}


export default EmptyList;


