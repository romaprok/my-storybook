import React from 'react';
import styles from './Typography.module.css';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextVariant = 'body1' | 'body2' | 'caption' | 'overline';

export interface TypographyProps {
  /** The variant of the typography */
  variant?: HeadingLevel | TextVariant;
  /** The HTML element to render */
  component?: HeadingLevel | 'p' | 'span' | 'div';
  /** The content */
  children: React.ReactNode;
  /** The color variant */
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info';
  /** The text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** The font weight */
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  /** Custom class name */
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  component,
  children,
  color = 'primary',
  align = 'left',
  weight = 'regular',
  className = '',
}) => {
  // Determine the HTML element to render
  const Component = component || getDefaultComponent(variant);

  // Combine class names
  const typographyClasses = [
    styles.typography,
    styles[`typography${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`typography${color.charAt(0).toUpperCase() + color.slice(1)}`],
    styles[`typography${align.charAt(0).toUpperCase() + align.slice(1)}`],
    styles[`typography${weight.charAt(0).toUpperCase() + weight.slice(1)}`],
    className,
  ].join(' ');

  return (
    <Component className={typographyClasses}>
      {children}
    </Component>
  );
};

// Helper function to determine the default HTML element based on variant
function getDefaultComponent(variant: HeadingLevel | TextVariant): HeadingLevel | 'p' | 'span' {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant;
    case 'body1':
    case 'body2':
      return 'p';
    case 'caption':
    case 'overline':
      return 'span';
    default:
      return 'p';
  }
} 