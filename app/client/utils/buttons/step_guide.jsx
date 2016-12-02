import React from 'react';

class StepGuide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {userType, pageTitle}= this.props;
    return (
      <div className={`${userType} step-guide-wrapper`}>
        <div className="step-guide relative">
          <h5>Can't find the {userType} that you need?</h5>
          <p>Continue creating this {pageTitle} and you can add a new {userType} onto the {userType}'s tab</p>
        </div>
      </div>
    );
  }
}
StepGuide.defaultProps = {
  userType: 'staff',
  pageTitle: 'team'
}


export default StepGuide;


