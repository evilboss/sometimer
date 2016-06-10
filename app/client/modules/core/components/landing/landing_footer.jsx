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
              © 2016 Ezy VA
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default LandingFooter;
