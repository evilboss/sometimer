import React from 'react';

class CancelBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {route} = this.props;
    return (
      <a href={route} type="button" className="btn cancel">Cancel</a>
    );
  }
}

export default CancelBtn;
