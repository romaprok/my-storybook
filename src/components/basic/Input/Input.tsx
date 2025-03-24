import React from 'react';
import styles from './Input.module.css';

export interface InputProps {
  /** The variant of the input */
  variant?: 'outlined' | 'filled' | 'standard';
  /** The size of the input */
  size?: 'small' | 'medium' | 'large';
  /** Label text */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Custom class name */
  className?: string;
  /** Input value */
  value?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Focus handler */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Input type */
  type?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the input is required */
  required?: boolean;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
}

export const Input: React.FC<InputProps> = ({
  variant = 'outlined',
  size = 'medium',
  label,
  helperText,
  error,
  disabled = false,
  className = '',
  value,
  onChange,
  onFocus,
  onBlur,
  type = 'text',
  placeholder,
  required = false,
  name,
  id,
}) => {
  const [focused, setFocused] = React.useState(false);
  const [touched, setTouched] = React.useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    setTouched(true);
    onBlur?.(e);
  };

  const showError = error && (touched || focused);
  const hasValue = value !== undefined && value !== '';

  const containerClasses = [
    styles.container,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    focused && styles.focused,
    showError && styles.error,
    hasValue && styles.hasValue,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          className={styles.input}
          aria-invalid={!!showError}
          aria-describedby={helperText ? 'helper-text' : undefined}
        />
      </div>
      {(helperText || showError) && (
        <div 
          id="helper-text" 
          className={`${styles.helperText} ${showError ? styles.errorText : ''}`}
        >
          {showError ? error : helperText}
        </div>
      )}
    </div>
  );
}; 