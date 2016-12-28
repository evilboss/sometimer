import React from 'react';
import PageTitle from "/client/modules/core/components/page_title";
class SiteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentUser}=this.props;
    return (
      <section id="team">
        <PageTitle title="Choose an Account"/>
        <section id="site-list" className="col s12">
          <div className="row no-margin-bottom">
            <div className="col s12 no-padding">
              <div className="row">
                {(currentUser) ?
                  <div className="collection-item">
                    <a>
                      <article className="col s12 m6 l4">
                        <div className="card">
                          <div className="card-title">
                            {currentUser.profile.site}
                          </div>
                        </div>
                      </article>
                    </a>
                  </div>
                  : ''}
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default SiteList;
