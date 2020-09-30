import { Field } from 'formik';
import React from 'react';
import './Checkbox.scss';

function Checkbox({ name, children }) {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <>
          <div className="form-control">
            <div className=" checkbox-control">
              <input {...field} id={name} type="checkbox" />
              <label htmlFor={name}>{children}</label>
            </div>
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </div>
        </>
      )}
    </Field>
  );
}

export default Checkbox;
