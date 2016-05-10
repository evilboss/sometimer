import React from 'react';
import ReactDOM from 'react-dom';

export default class RecoverPassword extends React.Component {
  render() {
    return (
      <div>Recover</div>
    );
  }

  recover_password(event) {
    this.props.recover_password(ReactDOM.findDOMNode(this.refs.email).value);
  }
}
