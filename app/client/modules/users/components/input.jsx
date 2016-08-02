import React from 'react';
import Formsy from 'formsy-react';

const MyInput = React.createClass({

  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
  },
  render() {

    const className = 'row form-group' + (this.props.className || ' ') +
      (this.showRequired() ? 'required' : this.showError() ? 'error' : '');
    const errorMessage = this.getErrorMessage();

    return (
      <div className={className}>
        <div className="input-field col s12">
          <input
            type={this.props.type || 'text'}
            name={this.props.name}
            onChange={this.changeValue}
            value={this.getValue()}
            checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
            className="validate"
          />
          <label for={this.props.name}>{this.props.title}</label>
          <div className='validation-error left-align'>{errorMessage}</div>
        </div>
      </div>
    );
  }
});

export default MyInput;
