import{u as o,A as n,v as r,l as t,d as s,j as e,E as p}from"./index-DNPM4ER3.js";import{M as d}from"./MovieCard-B7flfbH9.js";import"./useDeleteFavorite-CKKPMpgK.js";function u(){return o({queryKey:["favorites"],queryFn:()=>n.getFavorites(),retry:0})}const x=s.div`
  color: white;

  ${r(t``)}
`,c=s.ul`
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

  ${r(t`
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
`,f=s.li`
  flex-shrink: 0;
  width: 224px;
  height: 336px;

  ${r(t``)}
`;function b(){const{data:a,error:i}=u();return i?e.jsxs(p,{children:["Ошибка: ",i.message]}):a?e.jsx(x,{children:e.jsx(c,{children:a.map(l=>e.jsx(f,{children:e.jsx(d,{movie:l,isUserProfile:!0})},l.id))})}):null}export{b as default};
