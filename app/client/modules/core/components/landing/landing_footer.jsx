import React from 'react';

class LandingFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="landing-footer">
        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
              <img src="/Assets/teams/default/logo/remotiv_io_logo_style3.png"/>
              <span>© 2016 Remotiv.io</span>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default LandingFooter;
