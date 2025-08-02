import{x as u,H as y,p as m,q as S,A as j,J as c,v as n,l as i,d as s,B as b,a as T,z as $,j as t,I as v}from"./index-J5vA05xB.js";function w(){const a=u(),o=y(),e=m(),l=S({mutationFn:()=>j.logoutUser(),onSuccess:()=>{a(c()),e.removeQueries({queryKey:["me"]}),o("/",{replace:!0})},onError:()=>{a(c()),e.removeQueries({queryKey:["me"]}),o("/",{replace:!0})}}),h=()=>{l.mutate()},f=l.isPending;return{handleLogout:h,isPending:f}}const L=s.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${n(i`
      gap: 64px;
    `)}
`,z=s.button`
  ${b}

  ${n(i`
      width: 262px;
    `)}
`,q=s.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${n(i``)}
`,r=s.li`
  display: flex;
  gap: 16px;

  ${n(i``)}
`,x=s.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${n(i``)}
`,p=s.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.5);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  & svg {
    width: 24px;
    height: 24px;
  }

  ${n(i`
    width: 60px;
    height: 60px;
  `)}
`,d=s.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.5);

  ${n(i`
    font-size: 18px;
    line-height: 24px;
  `)}
`,g=s.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  ${n(i`
    font-size: 24px;
    line-height: 32px;
  `)}
`;function I(){const{handleLogout:a,isPending:o}=w(),e=T($);return t.jsxs(L,{children:[t.jsxs(q,{children:[t.jsxs(r,{children:[t.jsx(p,{children:`${e==null?void 0:e.name[0]}${e==null?void 0:e.surname[0]}`}),t.jsxs(x,{children:[t.jsx(d,{children:"Имя Фамилия"}),t.jsx(g,{children:`${e==null?void 0:e.name} ${e==null?void 0:e.surname}`})]})]}),t.jsxs(r,{children:[t.jsx(p,{children:t.jsx(v,{name:"MailIcon"})}),t.jsxs(x,{children:[t.jsx(d,{children:"Электронная почта"}),t.jsx(g,{children:e==null?void 0:e.email})]})]})]}),t.jsx(z,{onClick:a,disabled:o,children:"Выйти из аккаунта"})]})}export{I as default};
