import React from 'react';
import Helmet from 'react-helmet';
const AppLayout = ({title, head = () => null, content =() =>null, footer =() =>null}) =>(
  <div>
    <Helmet title={title}
            meta={[
          {"name": "viewport", "content": "width=device-width, initial-scale=1"}
        ]}/>
    <section id="body">
      <header>
        {head()}
      </header>
      <main id="main">
        {content()}
      </main>
      {footer()}
    </section>
  </div>
);

export default AppLayout;


