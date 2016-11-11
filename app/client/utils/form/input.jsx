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
    const fieldSize = this.props.fieldSize;
    return (
      <div className={`${className} ${(fieldSize)?(fieldSize):'col s12'}`}>
        <div className="input-field col s12 no-padding">
          <input
            type={this.props.type || 'text'}
            name={this.props.name}
            id={this.props.name}
            placeholder={this.props.title}
            onChange={this.changeValue}
            value={this.getValue()}
            checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
            className="validate"
          />
          <label htmlFor={this.props.name} className="active">{this.props.title}</label>
          <div className='validation-error left-align'>{errorMessage}</div>
        </div>
      </div>
    );
  }
});

export default MyInput;
