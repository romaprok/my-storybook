import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

export type InputVariant = 'outlined' | 'filled' | 'standard';
export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The variant of the input */
  variant?: InputVariant;
  /** The size of the input */
  size?: InputSize;
  /** The label for the input */
  label?: string;
  /** Error state */
  error?: boolean;
  /** Helper text to display below the input */
  helperText?: string;
  /** If true, the input will be required */
  required?: boolean;
  /** If true, the input will take up the full width of its container */
  fullWidth?: boolean;
  /** Start adornment */
  startAdornment?: React.ReactNode;
  /** End adornment */
  endAdornment?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'outlined',
      size = 'medium',
      label,
      error = false,
      helperText,
      required = false,
      fullWidth = false,
      startAdornment,
      endAdornment,
      className,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId();

    const classes = classNames(
      styles.input,
      styles[variant],
      styles[size],
      {
        [styles.error]: error,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
        [styles.withStartAdornment]: !!startAdornment,
        [styles.withEndAdornment]: !!endAdornment,
      },
      className
    );

    const containerClasses = classNames(styles.container, {
      [styles.fullWidth]: fullWidth,
    });

    return (
      <div className={containerClasses}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <div className={styles.inputWrapper}>
          {startAdornment && (
            <div className={styles.startAdornment}>{startAdornment}</div>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={error}
            aria-required={required}
            className={classes}
            {...props}
          />
          {endAdornment && (
            <div className={styles.endAdornment}>{endAdornment}</div>
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

Input.displayName = 'Input'; 