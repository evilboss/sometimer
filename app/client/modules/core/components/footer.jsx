import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="page-footer theme-color">
        <div className="footer-copyright">
          <div className="container">
            © 2016 Ezy VA
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
