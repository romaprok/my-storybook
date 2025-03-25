import React from 'react';
import classNames from 'classnames';
import styles from './Textarea.module.css';

export type TextareaVariant = 'outlined' | 'filled' | 'standard';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** The variant of the textarea */
  variant?: TextareaVariant;
  /** The label for the textarea */
  label?: string;
  /** Error state */
  error?: boolean;
  /** Helper text to display below the textarea */
  helperText?: string;
  /** If true, the textarea will be required */
  required?: boolean;
  /** If true, the textarea will take up the full width of its container */
  fullWidth?: boolean;
  /** If true, the textarea will automatically adjust its height based on content */
  autoResize?: boolean;
  /** Minimum number of rows to show */
  minRows?: number;
  /** Maximum number of rows before scrolling */
  maxRows?: number;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'outlined',
      label,
      error = false,
      helperText,
      required = false,
      fullWidth = false,
      autoResize = false,
      minRows = 3,
      maxRows = 10,
      className,
      disabled,
      id,
      onChange,
      ...props
    },
    ref
  ) => {
    const textareaId = id || React.useId();
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    React.useImperativeHandle(ref, () => textareaRef.current!, []);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (autoResize && textareaRef.current) {
          const textarea = textareaRef.current;
          // Reset height to auto to get the correct scrollHeight
          textarea.style.height = 'auto';
          
          // Calculate new height
          const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
          const minHeight = minRows * lineHeight;
          const maxHeight = maxRows * lineHeight;
          const scrollHeight = textarea.scrollHeight;
          
          // Set new height within constraints
          textarea.style.height = `${Math.min(Math.max(minHeight, scrollHeight), maxHeight)}px`;
        }
        onChange?.(event);
      },
      [autoResize, minRows, maxRows, onChange]
    );

    const classes = classNames(
      styles.textarea,
      styles[variant],
      {
        [styles.error]: error,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
        [styles.autoResize]: autoResize,
      },
      className
    );

    const containerClasses = classNames(styles.container, {
      [styles.fullWidth]: fullWidth,
    });

    return (
      <div className={containerClasses}>
        {label && (
          <label htmlFor={textareaId} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <textarea
          ref={textareaRef}
          id={textareaId}
          disabled={disabled}
          aria-invalid={error}
          aria-required={required}
          className={classes}
          onChange={handleChange}
          rows={minRows}
          {...props}
        />
        {helperText && (
          <div className={classNames(styles.helperText, { [styles.error]: error })}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea'; 