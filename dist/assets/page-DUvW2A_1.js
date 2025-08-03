import{d as n,v as o,l,j as e,C as p,u as c,A as u,f as x,E as g}from"./index-DNPM4ER3.js";import{V as h}from"./VisuallyHidden-CGK1gidK.js";import{M as v}from"./MoviePromo-BCDduxkQ.js";import"./useDeleteFavorite-CKKPMpgK.js";const y=n.h1`
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
`;function r(i){return typeof i!="string"||!i?"":`${i.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}  руб.`}const w=({movie:i})=>{const a=[{label:"Язык оригинала",value:i.language},{label:"Бюджет",value:r(i.budget)},{label:"Выручка",value:r(i.revenue)},{label:"Режиссёр",value:i.director},{label:"Продакшен",value:i.production},{label:"Награды",value:i.awardsSummary}];return e.jsx(m,{children:e.jsx(p,{children:e.jsxs(b,{children:[e.jsx(j,{children:"О фильме"}),e.jsx(M,{children:a.map(t=>t.value?e.jsxs(I,{children:[e.jsx(S,{children:t.label}),e.jsx($,{}),e.jsx(z,{children:t.value})]},t.value):null)})]})})})};function F(i){return c({queryKey:["movie"],queryFn:()=>u.getMovieById(i),retry:0})}function C(){const{movieId:i}=x(),{data:a,error:t,isLoading:s,isFetching:d,refetch:f}=F(Number(i));return t?e.jsxs(g,{children:["Ошибка: ",t.message]}):a?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:` Cтраница - о фильме ${a.title}`}),e.jsx(v,{isFetching:d,movie:a,refetch:f,isLoading:s,isAboutMovie:!0}),e.jsx(w,{movie:a})]}):null}export{C as default};
