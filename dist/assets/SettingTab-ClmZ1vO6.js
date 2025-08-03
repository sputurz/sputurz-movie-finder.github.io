import{y as f,J as y,q as m,w as S,A as j,K as r,v as n,l as s,d as i,B as b,a as T,D as $,j as e,I as v}from"./index-DNPM4ER3.js";function w(){const a=f(),o=y(),t=m(),l=S({mutationFn:()=>j.logoutUser(),onSuccess:()=>{a(r()),t.removeQueries({queryKey:["me"]}),o("/",{replace:!0})},onError:()=>{a(r()),t.removeQueries({queryKey:["me"]}),o("/",{replace:!0})}}),u=()=>{l.mutate()},h=l.isPending;return{handleLogout:u,isPending:h}}const L=i.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${n(s`
      gap: 64px;
    `)}
`,z=i.button`
  ${b}

  ${n(s`
      width: 262px;
    `)}
`,q=i.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${n(s``)}
`,c=i.li`
  display: flex;
  gap: 16px;

  ${n(s``)}
`,x=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${n(s``)}
`,d=i.span`
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

  ${n(s`
    width: 60px;
    height: 60px;
  `)}
`,p=i.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.5);

  ${n(s`
    font-size: 18px;
    line-height: 24px;
  `)}
`,g=i.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  ${n(s`
    font-size: 24px;
    line-height: 32px;
  `)}
`;function I(){const{handleLogout:a,isPending:o}=w(),t=T($);return e.jsxs(L,{children:[e.jsxs(q,{children:[e.jsxs(c,{children:[e.jsx(d,{children:`${t?.name[0]}${t?.surname[0]}`}),e.jsxs(x,{children:[e.jsx(p,{children:"Имя Фамилия"}),e.jsx(g,{children:`${t?.name} ${t?.surname}`})]})]}),e.jsxs(c,{children:[e.jsx(d,{children:e.jsx(v,{name:"MailIcon"})}),e.jsxs(x,{children:[e.jsx(p,{children:"Электронная почта"}),e.jsx(g,{children:t?.email})]})]})]}),e.jsx(z,{onClick:a,disabled:o,children:"Выйти из аккаунта"})]})}export{I as default};
