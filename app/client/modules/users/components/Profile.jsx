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
    const user = this.props.user;
    return (
      <div>Profile</div>
    );
  }
}
