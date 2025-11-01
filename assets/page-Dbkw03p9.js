import{v as s,l as i,d as n,N as p,H as a,j as e,I as o,C as x,O as l}from"./index-aNZWqHQ0.js";const c=n.nav`
  display: flex;
  gap: 24px;

  ${s(i`
    gap: 64px;
  `)}
`,r=n(a)`
  ${p}

  font-size: 24px;
  line-height: 32px;
  display: flex;
  gap: 4px;

  &.active {
    color: ${t=>t.theme.colorText};
    border-bottom: 1px solid ${t=>t.theme.brdrActive};
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  &:first-child svg {
    color: transparent;
    stroke: ${t=>t.theme.colorText};
    stroke-width: 1.5;
  }

  ${s(i`
      gap: 8px;
    `)}
`;function d(){return e.jsxs(c,{children:[e.jsxs(r,{to:"/profile/favorites",children:[e.jsx(o,{name:"LikeIcon"}),e.jsx("span",{children:"Favorites"})]}),e.jsxs(r,{to:"/profile/settings",children:[e.jsx(o,{name:"UserIcon"}),e.jsx("span",{children:"Settings"})]})]})}const h=n.section`
  padding: 16px 0 152px;

  ${s(i`
    padding: 64px 0 120px;
  `)}
`,g=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${s(i`
      gap: 64px;
    `)}
`,f=n.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${t=>t.theme.colorText};

  ${s(i`
    font-size: 48px;
    line-height: 56px;
  `)}
`;function m({children:t}){return e.jsx(h,{children:e.jsx(x,{children:e.jsxs(g,{children:[e.jsx(f,{children:"My profile"}),e.jsx(d,{}),t||e.jsx(l,{})]})})})}export{m as default};
