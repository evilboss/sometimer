import React from 'react';

const Layout = ({head = () => null, content =() =>null, footer =() =>null}) => (
  <section id="body">
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
    <header>
      {head()}
    </header>
    <main id="main">
      {content()}
    </main>
    {footer()}
  </section>
);

export default Layout;
