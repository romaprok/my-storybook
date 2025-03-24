import React from 'react';
import styles from './Select.module.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  /** Array of options for the select */
  options: SelectOption[];
  /** The label for the select */
  label?: string;
  /** The size of the select */
  size?: 'small' | 'medium' | 'large';
  /** Helper text displayed below the select */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Whether the select is required */
  required?: boolean;
  /** Custom class name */
  className?: string;
  /** The current value of the select */
  value?: string;
  /** Default value */
  defaultValue?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Select name */
  name?: string;
  /** Select id */
  id?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  label,
  size = 'medium',
  helperText,
  error,
  required = false,
  className = '',
  value,
  defaultValue,
  onChange,
  disabled = false,
  name,
  id,
}) => {
  const containerClasses = [
    styles.container,
    styles[size],
    disabled && styles.disabled,
    error && styles.error,
    className,
  ].filter(Boolean).join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!disabled) {
      onChange?.(e);
    }
  };

  const selectId = id || React.useId();

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={selectId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.selectWrapper}>
        <select
          id={selectId}
          name={name}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={handleChange}
          required={required}
          className={styles.select}
          aria-invalid={!!error}
          aria-describedby={helperText || error ? `${selectId}-helper-text` : undefined}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className={styles.arrow} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </span>
      </div>
      {(helperText || error) && (
        <div 
          id={`${selectId}-helper-text`}
          className={`${styles.helperText} ${error ? styles.errorText : ''}`}
        >
          {error || helperText}
        </div>
      )}
    </div>
  );
}; 