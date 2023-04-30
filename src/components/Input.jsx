import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, label, onChange, value } = this.props;
    return (
      <label className='border-black border' htmlFor={ name }>
        { label }
          <input
            className='border-black border bg-cyan-600'
            type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
            id={ name }
          />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  onChange: null,
};

export default Input;