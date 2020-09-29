import React from 'react';
import cls from 'classnames';
import { Field } from 'formik';
import './Input.scss';

function Input({ name, placeholder, label }) {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <div className="form-control">
          <label htmlFor={name}>{label}</label>
          <input
            className={cls({ 'input-error': meta.touched && meta.error })}
            type="text"
            placeholder={placeholder}
            id={name}
            {...field}
          />
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
}

export default Input;
