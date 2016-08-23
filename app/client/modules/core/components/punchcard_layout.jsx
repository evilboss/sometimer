import React from 'react';

const Layout = ({content =() =>null}) => (
  <section id="body">
    <main id="main">
      {content()}
    </main>
  </section>
);

export default Layout;
