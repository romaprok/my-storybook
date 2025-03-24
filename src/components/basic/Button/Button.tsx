import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  /** The variant of the button */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** The size of the button */
  size?: 'small' | 'medium' | 'large';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** The content of the button */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Custom class name */
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  children,
  onClick,
  className = '',
}) => {
  const buttonClasses = [
    styles.button,
    styles[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`button${size.charAt(0).toUpperCase() + size.slice(1)}`],
    disabled || loading ? styles.buttonDisabled : '',
    className,
  ].join(' ');

  const contentClasses = [
    styles.buttonContent,
    loading ? styles.buttonContentLoading : '',
  ].join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      type="button"
      aria-busy={loading}
    >
      <span className={contentClasses}>
        {loading && (
          <span className={styles.spinner} role="status" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              className={styles.spinnerSvg}
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className={styles.spinnerCircle}
                cx="12"
                cy="12"
                r="10"
                fill="none"
                strokeWidth="2"
              />
            </svg>
          </span>
        )}
        <span className={styles.buttonText}>{children}</span>
      </span>
    </button>
  );
}; 