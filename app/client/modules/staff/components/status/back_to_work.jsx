import React from 'react';

class BackToWork extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const status = this.props.status;
    return (
      <section>
        {(status == 'Break') ?
          <button className="ui In btn waves-effect waves-light" onClick={this.props.action.bind(this)}>
            <i className="material-icons left">cached</i>
            Back To Work
          </button> : ''}
      </section>
    );
  }
}

export default BackToWork;
