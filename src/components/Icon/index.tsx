/*
 * Author: Gavin.wang
 * Date: 2025-07-30 17:57:45
 * LastEditors: Gavin.wang
 * LastEditTime: 2025-12-02 14:50:36
 * FilePath: /react-vite-cli/src/components/Icon/index.tsx
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
