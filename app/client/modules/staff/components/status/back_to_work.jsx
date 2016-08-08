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
          <button className="ui btn waves-effect waves-light theme-color" onClick={this.props.action.bind(this)}>
            <i className="material-icons left">cached</i>
            Back To Work
          </button> : ''}
      </section>

    );
  }
}

export default BackToWork;
