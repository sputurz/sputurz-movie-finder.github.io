import{o as m,J as f,m as j,A as $,K as r,v as s,l as i,d as o,a as y,q as L,j as t,I as v}from"./index-BAE7RUWI.js";import{u as b}from"./useMutation-CzHIOHTF.js";import{B as T}from"./Button-TJVHal2Q.js";function w(){const e=m(),a=f(),n=j(),l=b({mutationFn:()=>$.logoutUser(),onSuccess:()=>{e(r()),n.removeQueries({queryKey:["me"]}),a("/",{replace:!0})},onError:()=>{e(r()),n.removeQueries({queryKey:["me"]}),a("/",{replace:!0})}}),d=()=>{l.mutate()},g=l.isPending;return{handleLogout:d,isPending:g}}const z=o.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${s(i`
      gap: 64px;
    `)}

  button {
    ${s(i`
        width: 262px;
      `)}
  }
`,S=o.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${s(i``)}
`,c=o.li`
  display: flex;
  gap: 16px;

  ${s(i``)}
`,p=o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${s(i``)}
`,x=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${e=>e.theme.bgSettingLabel};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${e=>e.theme.colorText};

  & svg {
    width: 24px;
    height: 24px;
  }

  ${s(i`
    width: 60px;
    height: 60px;
  `)}
`,u=o.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${e=>e.theme.colorText50};

  ${s(i`
    color: ${e=>e.theme.colorText};
    font-size: 18px;
    line-height: 24px;
  `)}
`,h=o.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: ${e=>e.theme.colorText};

  ${s(i`
    font-size: 24px;
    line-height: 32px;
  `)}
`;function K(){const{handleLogout:e,isPending:a}=w(),n=y(L);return t.jsxs(z,{children:[t.jsxs(S,{children:[t.jsxs(c,{children:[t.jsx(x,{children:`${n?.name[0]}${n?.surname[0]}`}),t.jsxs(p,{children:[t.jsx(u,{children:"Name Surname"}),t.jsx(h,{children:`${n?.name} ${n?.surname}`})]})]}),t.jsxs(c,{children:[t.jsx(x,{children:t.jsx(v,{name:"MailIcon"})}),t.jsxs(p,{children:[t.jsx(u,{children:"E-mail"}),t.jsx(h,{children:n?.email})]})]})]}),t.jsx(T,{"aria-label":"Logout",onClick:e,isLoading:a,children:"Logout"})]})}export{K as default};
