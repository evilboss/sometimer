import React from 'react';

const Layout = ({head = () => null, content =() =>null, footer =() =>null}) => (
  <section id="body">
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
