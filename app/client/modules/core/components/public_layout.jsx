import React from 'react';
import Helmet from 'react-helmet';
const PublicLayout = ({title, head =() =>null, content =() =>null}) =>(
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
    </section>
  </div>
);

export default PublicLayout;


