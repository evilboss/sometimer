import React from 'react';

class TimeIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const status = this.props.status;
    return (
      <section>
        {(!status || status == 'Out') ?
          <button className="ui In btn waves-effect waves-light" onClick={this.props.action.bind(this)}>
            <i className="material-icons left">cached</i>
            Start Shift
          </button> : ''}
      </section>


    );
  }
}

export default TimeIn;
