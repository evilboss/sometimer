import React from 'react';

class BackToWork extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="ui btn waves-effect waves-light theme-color">
        <i className="material-icons left">cached</i>
        Back To Work
      </button>
    );
  }
}

export default BackToWork;
