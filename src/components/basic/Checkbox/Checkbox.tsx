import React from 'react';
import classNames from 'classnames';
import styles from './Checkbox.module.css';

export type CheckboxSize = 'small' | 'medium' | 'large';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The size of the checkbox */
  size?: CheckboxSize;
  /** The label for the checkbox */
  label?: React.ReactNode;
  /** Error state */
  error?: boolean;
  /** Helper text to display below the checkbox */
  helperText?: string;
  /** If true, the checkbox will be indeterminate */
  indeterminate?: boolean;
  /** If true, the checkbox will take up the full width of its container */
  fullWidth?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'medium',
      label,
      error = false,
      helperText,
      indeterminate = false,
      fullWidth = false,
      className,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || React.useId();
    const checkboxRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => checkboxRef.current!, []);

    React.useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const classes = classNames(
      styles.checkbox,
      styles[size],
      {
        [styles.error]: error,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
        [styles.indeterminate]: indeterminate,
      },
      className
    );

    const containerClasses = classNames(styles.container, {
      [styles.fullWidth]: fullWidth,
    });

    return (
      <div className={containerClasses}>
        <div className={styles.wrapper}>
          <input
            ref={checkboxRef}
            type="checkbox"
            id={checkboxId}
            disabled={disabled}
            aria-invalid={error}
            className={classes}
            {...props}
          />
          <div className={styles.checkmark} />
          {label && (
            <label htmlFor={checkboxId} className={styles.label}>
              {label}
            </label>
          )}
        </div>
        {helperText && (
          <div className={classNames(styles.helperText, { [styles.error]: error })}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox'; 