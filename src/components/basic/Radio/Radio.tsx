import React from 'react';
import styles from './Radio.module.css';

export interface RadioProps {
  /** The label for the radio button */
  label?: string;
  /** The position of the label */
  labelPosition?: 'left' | 'right';
  /** The size of the radio button */
  size?: 'small' | 'medium' | 'large';
  /** Helper text displayed below the radio button */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Whether the radio button is required */
  required?: boolean;
  /** Custom class name */
  className?: string;
  /** Whether the radio button is checked */
  checked?: boolean;
  /** Default checked state */
  defaultChecked?: boolean;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Whether the radio button is disabled */
  disabled?: boolean;
  /** Radio button name */
  name?: string;
  /** Radio button id */
  id?: string;
  /** Radio button value */
  value?: string;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  labelPosition = 'right',
  size = 'medium',
  helperText,
  error,
  required = false,
  className = '',
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  name,
  id,
  value,
}) => {
  const containerClasses = [
    styles.container,
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

  const radioId = id || React.useId();

  return (
    <div className={containerClasses}>
      <div className={styles.inputWrapper}>
        <input
          id={radioId}
          name={name}
          type="radio"
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={handleChange}
          value={value}
          required={required}
          className={styles.input}
          aria-invalid={!!error}
          aria-describedby={helperText || error ? `${radioId}-helper-text` : undefined}
        />
        <span className={styles.control} aria-hidden="true">
          <span className={styles.inner} />
        </span>
      </div>
      {label && (
        <label htmlFor={radioId} className={styles.label}>
          {label}
        </label>
      )}
      {(helperText || error) && (
        <div 
          id={`${radioId}-helper-text`}
          className={`${styles.helperText} ${error ? styles.errorText : ''}`}
        >
          {error || helperText}
        </div>
      )}
    </div>
  );
}; 