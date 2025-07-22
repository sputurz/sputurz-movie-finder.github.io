declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.svg?react' {
  import React from 'react';
  const component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default component;
}
