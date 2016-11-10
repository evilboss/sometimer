import React from 'react';

class StatusIn extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="input-field">
        <a href='' className="status" data-activates='status'>
          Log In
          <div className="status-indicator In"></div>
        </a>
        <ul id='status' className='dropdown-content'>
          <li><a href="" onClick={this.props.startBreakAction.bind(this)}>Break Time</a></li>
          <li><a href="" onClick={this.props.endShiftAction.bind(this)}>Log Out</a></li>
        </ul>
      </div>
    );
  }
}

export default StatusIn;
