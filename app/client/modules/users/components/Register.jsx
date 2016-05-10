import React from 'react';
import ReactDOM from 'react-dom';


export default class Register extends React.Component {
  render() {
    return (
      <div>Register</div>
    );
  }

  register(event) {
    let user = {
      username: ReactDOM.findDOMNode(this.refs.username).value,
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value,
      profile: {
        firstname: ReactDOM.findDOMNode(this.refs.firstname).value,
        lastname: ReactDOM.findDOMNode(this.refs.lastname).value
      }
    }
    this.props.register(user);
  }
}
