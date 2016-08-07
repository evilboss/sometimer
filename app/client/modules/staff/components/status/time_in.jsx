import React from 'react';

class TimeIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="ui btn waves-effect waves-light theme-color">
        <i className="material-icons left">cached</i>
        Time In
      </button>
    );
  }
}

export default TimeIn;
