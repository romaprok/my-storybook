import React from 'react';
import classNames from 'classnames';
import styles from './Flex.module.css';

export type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
export type FlexJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The alignment of flex items along the cross-axis */
  align?: FlexAlign;
  /** The alignment of flex items along the main-axis */
  justify?: FlexJustify;
  /** The direction of the flex container */
  direction?: FlexDirection;
  /** Whether flex items should wrap */
  wrap?: FlexWrap;
  /** The gap between flex items */
  gap?: FlexGap;
  /** Whether the flex container should take full width */
  fullWidth?: boolean;
  /** Whether the flex container should take full height */
  fullHeight?: boolean;
  /** Whether the flex container should be inline */
  inline?: boolean;
  /** Whether the flex container should be centered */
  center?: boolean;
  /** Whether the flex container should be centered vertically */
  centerVertical?: boolean;
  /** Whether the flex container should be centered horizontally */
  centerHorizontal?: boolean;
  /** Whether the flex container should be spaced between */
  spaceBetween?: boolean;
  /** Whether the flex container should be spaced around */
  spaceAround?: boolean;
  /** Whether the flex container should be spaced evenly */
  spaceEvenly?: boolean;
  /** Whether the flex container should be reversed */
  reverse?: boolean;
  /** Whether the flex container should be responsive */
  responsive?: boolean;
}

export const Flex: React.FC<FlexProps> = ({
  align,
  justify,
  direction = 'row',
  wrap = 'nowrap',
  gap = 'none',
  fullWidth = false,
  fullHeight = false,
  inline = false,
  center = false,
  centerVertical = false,
  centerHorizontal = false,
  spaceBetween = false,
  spaceAround = false,
  spaceEvenly = false,
  reverse = false,
  responsive = false,
  className,
  children,
  ...props
}) => {
  const flexClassName = classNames(
    styles.flex,
    {
      [styles.fullWidth]: fullWidth,
      [styles.fullHeight]: fullHeight,
      [styles.inline]: inline,
      [styles.center]: center,
      [styles.centerVertical]: centerVertical,
      [styles.centerHorizontal]: centerHorizontal,
      [styles.spaceBetween]: spaceBetween,
      [styles.spaceAround]: spaceAround,
      [styles.spaceEvenly]: spaceEvenly,
      [styles.reverse]: reverse,
      [styles.responsive]: responsive,
    },
    align && styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
    justify && styles[`justify${justify.charAt(0).toUpperCase() + justify.slice(1)}`],
    direction && styles[`direction${direction.charAt(0).toUpperCase() + direction.slice(1)}`],
    wrap && styles[`wrap${wrap.charAt(0).toUpperCase() + wrap.slice(1)}`],
    gap && styles[`gap${gap.charAt(0).toUpperCase() + gap.slice(1)}`],
    className
  );

  return (
    <div className={flexClassName} {...props}>
      {children}
    </div>
  );
}; 