import React from 'react';

const Layout = ({head = () => null, content =() =>null, footer =() =>null}) => (
  <section id="body" className="body-wrapper">
    <div className="body-container">
      <header>
        {head()}
      </header>
      <main id="main">
        {content()}
      </main>
      
    </div>
  </section>
);

export default Layout;
