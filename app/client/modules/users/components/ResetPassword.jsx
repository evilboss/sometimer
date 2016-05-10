import React from 'react';
import ReactDOM from 'react-dom';


export default class ResetPassword extends React.Component {
  render() {
    return(
<div>Reset</div>
    );
  }

  reset_password(event){
    this.props.reset_password(this.props.token,
      ReactDOM.findDOMNode(this.refs.password).value,
      ReactDOM.findDOMNode(this.refs.repeatPassword).value);
  }
}
