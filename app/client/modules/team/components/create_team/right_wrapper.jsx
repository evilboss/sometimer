import React from 'react';

class RightWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="right-wrapper col hide-on-med-and-down l7 no-margin">
        <div className="background-image"></div>
        <div className="header">

        </div>

        <div className="content container valign-wrapper">
          <div className="translucent-background margin-auto center-align z-depth-4">
            <div className="big-logo">
              <img src="/Assets/teams/default/logo/remotiv_io_logo_style3.png"/></div>
            <div className="remotiv-text"><h1>Remotiv<span>.io</span></h1>
              <h5 className="sub-text">Business Beyond Boundaries</h5></div>
          </div>
        </div>

        <div className="page-footer">

        </div>

      </div>
    );
  }
}

export default RightWrapper;
