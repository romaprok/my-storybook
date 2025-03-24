import React from 'react';
import styles from './Textarea.module.css';

export interface TextareaProps {
  /** The label for the textarea */
  label?: string;
  /** The size of the textarea */
  size?: 'small' | 'medium' | 'large';
  /** Helper text displayed below the textarea */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Whether the textarea is required */
  required?: boolean;
  /** Number of rows to display */
  rows?: number;
  /** Custom class name */
  className?: string;
  /** The current value of the textarea */
  value?: string;
  /** Default value */
  defaultValue?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Whether the textarea is disabled */
  disabled?: boolean;
  /** Textarea name */
  name?: string;
  /** Textarea id */
  id?: string;
  /** Placeholder text */
  placeholder?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  size = 'medium',
  helperText,
  error,
  required = false,
  rows = 4,
  className = '',
  value,
  defaultValue,
  onChange,
  disabled = false,
  name,
  id,
  placeholder,
}) => {
  const containerClasses = [
    styles.container,
    styles[size],
    disabled && styles.disabled,
    error && styles.error,
    className,
  ].filter(Boolean).join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!disabled) {
      onChange?.(e);
    }
  };

  const textareaId = id || React.useId();

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={textareaId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={handleChange}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className={styles.textarea}
        aria-invalid={!!error}
        aria-describedby={helperText || error ? `${textareaId}-helper-text` : undefined}
      />
      {(helperText || error) && (
        <div 
          id={`${textareaId}-helper-text`}
          className={`${styles.helperText} ${error ? styles.errorText : ''}`}
        >
          {error || helperText}
        </div>
      )}
    </div>
  );
}; 