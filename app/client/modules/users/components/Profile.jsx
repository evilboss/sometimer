import React from 'react';
import ReactDOM from 'react-dom';

export default class Profile extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showPasswordModal: false,
      showEmailModal: false,
      showUsernameModal: false
    };
  };

  changePassword() {
    this.props.change_password(
      ReactDOM.findDOMNode(this.refs.oldPassword).value,
      ReactDOM.findDOMNode(this.refs.newPassword).value
    );
    this.togglePasswordModal();
  }

  changeEmail() {
    this.props.change_email(
      ReactDOM.findDOMNode(this.refs.email).value
    );
    this.toggleEmailModal();
  }

  changeUsername() {
    this.props.change_username(
      ReactDOM.findDOMNode(this.refs.username).value
    );
    this.toggleUsernameModal();
    this.forceUpdate();
  }

  update(event) {
    let user = {};
    user[event.target.name] = event.target.value;
    this.props.update(user);
  }

  togglePasswordModal(event) {
    this.setState({showPasswordModal: !this.state.showPasswordModal});
  }

  toggleEmailModal(event) {
    this.setState({showEmailModal: !this.state.showEmailModal});
  }

  toggleUsernameModal(event) {
    this.setState({showUsernameModal: !this.state.showUsernameModal});
  }

  render() {
    const user = Meteor.user();
    return (
      <section className="profile">
        <h5 className="title">My Account</h5>
        {(user) ?
          <div className="row">
            <div className="col s12 m2 l2">
              <img
                src={(user.profile.displayPhoto)?user.profile.displayPhoto:'http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg'}
                alt="dp"
                className="display-photo responsive-img"/>
            </div>

            <div className="col s12 m10 l10">
              <h5>Account Information</h5>
              <ul className="collection">
                <li className="collection-item">Email: <span>{(user.emails[0]) ? user.emails[0].address : ''}</span>
                </li>
                <li className="collection-item">First Name:
                  <span>{(user.profile.firstName) ? user.profile.firstName : ''}</span></li>
                <li className="collection-item">Last Name:
                  <span>{(user.profile.lastName) ? user.profile.lastName : ''}</span></li>
                <li className="collection-item">Department:
                  <span>{(user.profile.department) ? user.profile.department : ''}</span></li>
                <li className="collection-item">Designation:
                  <span>{(user.profile.jobTitle) ? user.profile.jobTitle : ''}</span></li>
                <li className="collection-item">Status:
                  <span>{(user.profile.staffType) ? user.profile.staffType : ''}</span></li>
              </ul>
            </div>

          </div>
          : ''}
      </section>
    );
  }
}
