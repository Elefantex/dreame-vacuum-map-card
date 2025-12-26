/**
 * SVG Icon component for rendering inline SVG icons
 */

import type { CSSProperties } from 'react';

interface SvgIconProps {
  svg: string;
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export function SvgIcon({ svg, size = 24, color, className, style }: SvgIconProps) {
  const iconStyle: CSSProperties = {
    width: size,
    height: size,
    display: 'inline-block',
    color: color,
    ...style,
  };

  return (
    <span
      className={className}
      style={iconStyle}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
