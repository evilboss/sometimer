import React from 'react';
import ReactDOM from 'react-dom';
class Login extends React.Component {
  render() {
    return (
      <section id="login" className="container">Login</section>
    );
  }

  login(event) {
    this.props.login(ReactDOM.findDOMNode(this.refs.email).value, ReactDOM.findDOMNode(this.refs.password).value);
  }
}
export default Login;