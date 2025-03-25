import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'contained',
      color = 'primary',
      size = 'medium',
      fullWidth = false,
      startIcon,
      endIcon,
      loading = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const buttonClasses = classNames(
      styles.button,
      styles[variant],
      styles[color],
      styles[size],
      {
        [styles.fullWidth]: fullWidth,
        [styles.loading]: loading,
      },
      className
    );

    const renderIcon = (icon: React.ReactNode, className: string) => {
      if (!icon) return null;
      return (
        <span className={className}>
          {typeof icon === 'string' ? (
            <span aria-hidden="true">{icon}</span>
          ) : (
            icon
          )}
        </span>
      );
    };

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <span className={styles.spinner} role="status" aria-label="Loading" />}
        {!loading && startIcon && renderIcon(startIcon, styles.startIcon)}
        <span className={styles.content}>{children}</span>
        {!loading && endIcon && renderIcon(endIcon, styles.endIcon)}
      </button>
    );
  }
);

Button.displayName = 'Button'; 