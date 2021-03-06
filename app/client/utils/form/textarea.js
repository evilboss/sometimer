import React from 'react';
import Formsy from 'formsy-react';

const TextArea = React.createClass({
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
          <textarea className="materialize-textarea"
                    name={this.props.name}
                    id={this.props.name}
                    placeholder={this.props.title}
                    onChange={this.changeValue}
                    value={this.getValue()}
                    checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
                    className="validate materialize-textarea"
          />
          <label htmlFor={this.props.name} className="active">{this.props.title}</label>
          <div className='validation-error left-align'>{errorMessage}</div>
        </div>
      </div>
    )


  }
});

export default TextArea;

