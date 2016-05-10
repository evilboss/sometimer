import React from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component {
  render() {
    return(
     <di>Login</di>
    );
  }

  login(event){
    this.props.login(ReactDOM.findDOMNode(this.refs.email).value, ReactDOM.findDOMNode(this.refs.password).value);
  }
}
