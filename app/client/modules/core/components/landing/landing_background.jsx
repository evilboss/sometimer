import React from 'react';

class LandingBackground extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="dotted-overlay"></div>
        <div className="video-container">
          <video id="background-video" autoPlay loop>
            <source src="/Assets/landing/bg/landing.webm" type="video/webm"/>
            <source src="/Assets/landing/bg/landing.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    );
  }
}

export default LandingBackground;
