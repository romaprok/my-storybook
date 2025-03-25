import React from 'react';
import classNames from 'classnames';
import styles from './Typography.module.css';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

export type TypographyColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export type TypographyWeight =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold';

export type TypographyAlign =
  | 'inherit'
  | 'left'
  | 'center'
  | 'right'
  | 'justify';

export interface TypographyProps extends Omit<React.HTMLAttributes<HTMLElement>, 'as'> {
  /** The variant of the typography */
  variant?: TypographyVariant;
  /** The color of the typography */
  color?: TypographyColor;
  /** The font weight of the typography */
  weight?: TypographyWeight;
  /** The text alignment */
  align?: TypographyAlign;
  /** If true, the text will not wrap */
  noWrap?: boolean;
  /** If true, the text will be truncated with an ellipsis */
  truncate?: boolean;
  /** The HTML tag to use */
  as?: React.ElementType;
}

const defaultVariantMapping: Record<TypographyVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = 'body1',
      color = 'inherit',
      weight = 'regular',
      align = 'inherit',
      noWrap = false,
      truncate = false,
      as,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || defaultVariantMapping[variant];

    const classes = classNames(
      styles.typography,
      styles[variant],
      styles[`color-${color}`],
      styles[`weight-${weight}`],
      styles[`align-${align}`],
      {
        [styles.noWrap]: noWrap,
        [styles.truncate]: truncate,
      },
      className
    );

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography'; 