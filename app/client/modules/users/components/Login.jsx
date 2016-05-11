import React from 'react';
import ReactDOM from 'react-dom';
class Login extends React.Component {
  render() {
    return(
      <div>Login</div>
    );
  }

  login(event){
    this.props.login(ReactDOM.findDOMNode(this.refs.email).value, ReactDOM.findDOMNode(this.refs.password).value);
  }
}
export default Login;