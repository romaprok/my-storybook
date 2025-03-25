import React from 'react';
import classNames from 'classnames';
import styles from './Radio.module.css';

export type RadioSize = 'small' | 'medium' | 'large';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** The size of the radio */
  size?: RadioSize;
  /** The label for the radio */
  label?: React.ReactNode;
  /** Error state */
  error?: boolean;
  /** Helper text to display below the radio */
  helperText?: string;
  /** If true, the radio will take up the full width of its container */
  fullWidth?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size = 'medium',
      label,
      error = false,
      helperText,
      fullWidth = false,
      className,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const radioId = id || React.useId();

    const classes = classNames(
      styles.radio,
      styles[size],
      {
        [styles.error]: error,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
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
            ref={ref}
            type="radio"
            id={radioId}
            disabled={disabled}
            aria-invalid={error}
            className={classes}
            {...props}
          />
          <div className={styles.circle} />
          {label && (
            <label htmlFor={radioId} className={styles.label}>
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

Radio.displayName = 'Radio'; 