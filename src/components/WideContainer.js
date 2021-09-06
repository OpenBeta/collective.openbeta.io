import React from 'react';

export default function WideContainer({
  className,
  contentWidth,
  contentClass,
  children,
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className={`layout-center px-4 ${contentWidth} ${contentClass}`}>
        {children}
      </div>
    </div>
  );
}
