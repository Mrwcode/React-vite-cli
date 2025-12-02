/*
 * Author: Gavin.wang
 * Date: 2025-05-21 17:43:50
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-06-27 13:53:59
 * FilePath: /china_portugal_economictrade_frontend/src/components/IconFont/index.tsx
 * Description:
 */
import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 16, color = '#000', className = '' }) => {
  return (
    <svg className={`icon ${className}`} style={{ width: size, height: size, fill: color }} aria-hidden='true'>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

export default Icon;
