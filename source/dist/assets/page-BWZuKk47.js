import{d as n,v as o,l,j as e,C as p,u as c,A as u,f as x,E as g}from"./index-J5vA05xB.js";import{V as h}from"./VisuallyHidden-DzlT0GIl.js";import{M as v}from"./MoviePromo-h7JBck1c.js";import"./useDeleteFavorite-BZCgDi8b.js";const y=n.h1`
  ${h}
`,m=n.section``,b=n.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0 32px;
  gap: 40px;

  ${o(l`
    padding: 40px 0 120px;
    gap: 64px;
  `)}
`,j=n.h2`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  ${o(l`
    font-size: 40px;
    line-height: 48px;
  `)}
`,M=n.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${o(l`
      gap: 24px;
    `)}
`,I=n.li`
  display: flex;
  flex-direction: column;
  gap: 2px;

  ${o(l`
    display: grid;
    gap: 8px;
    grid-template-columns: auto 1fr calc(952 / 1280 * 100%);
    align-items: start;
  `)}
`,S=n.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.5);

  ${o(l`
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  `)}
`,$=n.div`
  ${o(l`
      height: 18px;
      border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
    `)}
`,z=n.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  ${o(l``)}
`;function s(i){return typeof i!="string"||!i?"":`${i.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}  руб.`}const L=({movie:i})=>{const r=[{label:"Язык оригинала",value:i.language},{label:"Бюджет",value:s(i.budget)},{label:"Выручка",value:s(i.revenue)},{label:"Режиссёр",value:i.director},{label:"Продакшен",value:i.production},{label:"Награды",value:i.awardsSummary}];return e.jsx(m,{children:e.jsx(p,{children:e.jsxs(b,{children:[e.jsx(j,{children:"О фильме"}),e.jsx(M,{children:r.map(t=>t.value?e.jsxs(I,{children:[e.jsx(S,{children:t.label}),e.jsx($,{}),e.jsx(z,{children:t.value})]},t.value):null)})]})})})};function w(i){return c({queryKey:["movie"],queryFn:()=>u.getMovieById(i),retry:0})}function C(){const{movieId:i}=x(),{data:r,error:t,isLoading:a,isFetching:d,refetch:f}=w(Number(i));return a?e.jsx("div",{children:"Loading..."}):t?e.jsxs(g,{children:["Ошибка: ",t.message]}):r?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:` Cтраница - о фильме ${r.title}`}),e.jsx(v,{isFetching:d,movie:r,refetch:f,isLoading:a,isAboutMovie:!0}),e.jsx(L,{movie:r})]}):null}export{C as default};
