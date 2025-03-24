import React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  /** The variant of the checkbox */
  variant?: 'checkbox' | 'switch';
  /** The size of the checkbox */
  size?: 'small' | 'medium' | 'large';
  /** The label for the checkbox */
  label?: string;
  /** The position of the label */
  labelPosition?: 'left' | 'right';
  /** Helper text displayed below the checkbox */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Custom class name */
  className?: string;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Default checked state */
  defaultChecked?: boolean;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Checkbox name */
  name?: string;
  /** Checkbox id */
  id?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  variant = 'checkbox',
  size = 'medium',
  label,
  labelPosition = 'right',
  helperText,
  error,
  className = '',
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  name,
  id,
}) => {
  const containerClasses = [
    styles.container,
    styles[variant],
    styles[size],
    styles[`label-${labelPosition}`],
    disabled && styles.disabled,
    error && styles.error,
    className,
  ].filter(Boolean).join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange?.(e);
    }
  };

  const checkboxId = id || React.useId();

  return (
    <div className={containerClasses}>
      <div className={styles.inputWrapper}>
        <input
          id={checkboxId}
          name={name}
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={handleChange}
          className={styles.input}
          aria-invalid={!!error}
          aria-describedby={helperText || error ? `${checkboxId}-helper-text` : undefined}
        />
        <span className={styles.control} aria-hidden="true">
          {variant === 'checkbox' && (
            <svg className={styles.checkmark} viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          )}
          {variant === 'switch' && (
            <span className={styles.thumb} />
          )}
        </span>
      </div>
      {label && (
        <label htmlFor={checkboxId} className={styles.label}>
          {label}
        </label>
      )}
      {(helperText || error) && (
        <div 
          id={`${checkboxId}-helper-text`}
          className={`${styles.helperText} ${error ? styles.errorText : ''}`}
        >
          {error || helperText}
        </div>
      )}
    </div>
  );
}; 