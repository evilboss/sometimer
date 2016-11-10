import React from 'react';

class StatusBreak extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input-field">
        <a href='' className="status" data-activates='status'>
          Break Time
          <div className="status-indicator Break"></div>
        </a>
        <ul id='status' className='dropdown-content'>
          <li><a href="" onClick={this.props.action.bind(this)}>Back to Work</a></li>
        </ul>
      </div>
    );
  }
}

export default StatusBreak;
