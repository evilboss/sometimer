import React from 'react';

class TimeOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="ui btn waves-effect waves-light theme-color">
          <i className="material-icons left">cached</i>
          Time Out
        </button>
        <button className="ui btn waves-effect waves-light theme-color">
          <i className="material-icons left">cached</i>
          Time Out
        </button>
      </div>
    );
  }
}

export default TimeOut;
