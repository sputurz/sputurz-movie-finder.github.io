import{u as a,A as p,d as t,v as o,l as n,j as r,g as x,E as d}from"./index-BAE7RUWI.js";import{M as c}from"./MovieCard-V4LhtBC4.js";import"./useDeleteFavorite-CoY7E8Bm.js";import"./useMutation-CzHIOHTF.js";function u(){return a({queryKey:["favorites"],queryFn:()=>p.getFavorites(),retry:0,refetchOnWindowFocus:!1})}const f=t.div`
  color: ${e=>e.theme.colorText};
`,h=t.ul`
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
`,m=t.li`
  flex-shrink: 0;
  width: 224px;
  height: 336px;
`,g=t.span`
  font-size: 18px;
  line-height: 24px;
  color: ${e=>e.theme.colorText};

  ${o(n`
    font-size: 24px;
    line-height: 32px;
  `)};
`;function b(){const{data:e,error:s,isLoading:l}=u();return e?l?r.jsx(x,{}):s?r.jsxs(d,{children:["Error: ",s.message]}):r.jsx(f,{children:e.length?r.jsx(h,{children:e.map(i=>r.jsx(m,{children:r.jsx(c,{movie:i,isUserProfile:!0})},i.id))}):r.jsx(g,{children:"The list of films is empty for now"})}):null}export{b as default};
