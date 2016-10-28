import React from 'react';

class TimeOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const status = this.props.status;
    return (
      <div>
        {(status == 'In') ?
          <section>
            <button className="ui btn waves-effect waves-light theme-color btn-block"
                    onClick={this.props.startBreakAction.bind(this)}>
              <i className="material-icons left">timer</i>
              Break Time
            </button>
            <button className="ui btn waves-effect waves-light theme-color btn-block time-out"
                    onClick={this.props.endShiftAction.bind(this)}>
              <i className="material-icons left">cached</i>
              Log Out
            </button>
          </section> : ''}
      </div>
    );
  }
}

export default TimeOut;
