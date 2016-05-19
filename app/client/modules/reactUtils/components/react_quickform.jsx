import React from 'react';
const QuickFormTemplate = BlazeToReact('quickFormTemplate');
class ReactQuickform extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
        <QuickFormTemplate
          field = {this.props.field}
          name = {this.props.name}
          operation={this.props.operation}
          buttonText = {this.props.buttonText}
          buttonClass = {this.props.buttonClass}
          included = {this.props.included}
          ommited = {this.props.ommited}
        />
    );
  }
}

export default ReactQuickform;
