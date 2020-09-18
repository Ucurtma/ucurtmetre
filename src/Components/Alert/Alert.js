import React from 'react';
import cls from 'classnames';
import './Alert.scss';

function Alert({ icon, variant, message }) {
  return (
    <div
      className={cls('alert', {
        danger: variant === 'danger',
        success: variant === 'success',
        warning: variant === 'warning',
      })}
    >
      {icon && <div className="alert-icon">{icon}</div>}
      {message && <div>{message}</div>}
    </div>
  );
}

export default Alert;
