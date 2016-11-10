import React from 'react';

class StatusOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input-field">
        <a href='' className="status" data-activates='status'>
          Log Out
          <div className="status-indicator Out"></div>
        </a>
        <ul id='status' className='dropdown-content'>
          <li><a href="" onClick={this.props.action.bind(this)}>Log In</a></li>
        </ul>
      </div>

    );
  }
}

export default StatusOut;
