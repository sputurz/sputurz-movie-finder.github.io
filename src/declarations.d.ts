// declarations.d.ts
declare module '*.module.scss' {
	const classes: { [key: string]: string }; 
	export default classes;
}

declare module '*.svg' {
  import React from 'react';
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}