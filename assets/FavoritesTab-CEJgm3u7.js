import{u as l,A as p,P as x,d as t,v as o,l as n,j as r,g as d,E as c}from"./index-C_i5Jflz.js";import{M as u}from"./MovieCard-BPaumsKL.js";import"./useDeleteFavorite-eoMmb7pm.js";import"./useMutation-D0smmmYM.js";function f(){return l({queryKey:["favorites"],queryFn:()=>p.getFavorites(),retry:0,refetchOnWindowFocus:!1})}const h=t.div`
  color: ${e=>e.theme.colorText};
  animation: ${x} 0.7s ease-in-out;
`,m=t.ul`
  margin: -80px -20px;
  padding: 80px 20px;
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  gap: 40px;
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${o(n`
    margin: 0;
    padding: 0;
    overflow-x: unset;
    scrollbar-width: unset;
    display: grid;
    grid-template-columns: repeat(auto-fit, 224px);
    gap: 64px 40px;
    justify-content: space-evenly;

    &::-webkit-scrollbar {
      display: unset;
    }
  `)}
`,g=t.li`
  flex-shrink: 0;
  width: 224px;
  height: 336px;
`,y=t.span`
  font-size: 18px;
  line-height: 24px;
  color: ${e=>e.theme.colorText};

  ${o(n`
    font-size: 24px;
    line-height: 32px;
  `)};
`;function F(){const{data:e,error:s,isLoading:a}=f();return e?a?r.jsx(d,{}):s?r.jsxs(c,{children:["Error: ",s.message]}):r.jsx(h,{children:e.length?r.jsx(m,{children:e.map(i=>r.jsx(g,{children:r.jsx(u,{movie:i,isUserProfile:!0})},i.id))}):r.jsx(y,{children:"The list of films is empty for now"})}):null}export{F as default};
