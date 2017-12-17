import React from 'react';
import PropTypes from 'prop-types';

import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

export default class TextFieldForm extends React.PureComponent {
  static propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {
      label,
      className,
      input,
      meta: { invalid },
      ...custom
    } = this.props;

    return (
      <FormControl className={className}>
        <InputLabel className={className} error={invalid} htmlFor={label}>
          {label}
        </InputLabel>
        <Input
          className={className}
          id={label}
          error={invalid}
          {...input}
          {...custom}
        />
      </FormControl>
    );
  }
}
