import{v as s,l as i,d as t,N as f,G as x,j as e,I as r,E as d,C as c,O as h}from"./index-J5vA05xB.js";import{u as g}from"./useMovieTop-2ZGu5Omh.js";const j=t.nav`
  display: flex;
  gap: 24px;

  ${s(i`
    gap: 64px;
  `)}
`,a=t(x)`
  ${f}

  font-size: 24px;
  line-height: 32px;
  display: flex;
  gap: 4px;

  &.active {
    color: #ffffff;
    border-bottom: 1px solid rgba(151, 71, 255, 1);
  }

  & svg {
    width: 24px;
    height: 24px;

    ${s(i``)}
  }

  &:first-child svg {
    color: transparent;
    stroke: #ffffff;
    stroke-width: 1.5;
  }

  ${s(i`
      gap: 8px;
    `)}
`,o=t.span`
  ${s(i``)}
`;function v(){return e.jsxs(j,{children:[e.jsxs(a,{to:"/profile/favorites",children:[e.jsx(r,{name:"LikeIcon"}),e.jsx(o,{children:"Избранное"})]}),e.jsxs(a,{to:"/profile/settings",children:[e.jsx(r,{name:"UserIcon"}),e.jsx(o,{children:"Настройки"})]})]})}const u=t.section`
  padding: 16px 0 152px;

  ${s(i`
    padding: 64px 0 120px;
  `)}
`,m=t.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${s(i`
      gap: 64px;
    `)}
`,y=t.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  ${s(i`
    font-size: 48px;
    line-height: 56px;
  `)}
`;function $({children:l}){const{data:p,error:n}=g();return n?e.jsxs(d,{children:["Ошибка: ",n.message]}):p?e.jsx(u,{children:e.jsx(c,{children:e.jsxs(m,{children:[e.jsx(y,{children:"Мой аккаунт"}),e.jsx(v,{}),l||e.jsx(h,{})]})})}):null}export{$ as default};
