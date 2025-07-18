// src/components/SpriteIcon.tsx
import { useEffect, useRef } from 'react';

interface SpriteIconProps {
  name: string;
  className?: string;
  width?: number;
  height?: number;
}

export const Icon = ({
  name,
  className = '',
  width = 24,
  height = 24,
}: SpriteIconProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Принудительно перезагружаем use-ссылку после монтирования
    if (svgRef.current) {
      const useElement = svgRef.current.querySelector('use');
      if (useElement) {
        useElement.setAttribute('xlink:href', `#icon-${name}`);
      }
    }
  }, [name]);

  return (
    <svg
      ref={svgRef}
      className={`sprite-icon ${className}`}
      width={width}
      height={height}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};
