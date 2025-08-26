import{d as i,v as n,l,j as t,C as c,u,A as x,f as g,E as h}from"./index-BAE7RUWI.js";import{V as f}from"./VisuallyHidden-DHsZpeh5.js";import{M as m}from"./MoviePromo-C57b-oQ5.js";import"./Button-TJVHal2Q.js";import"./useMutation-CzHIOHTF.js";import"./useDeleteFavorite-CoY7E8Bm.js";const v=i.h1`
  ${f}
`,b=i.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0 32px;
  gap: 40px;

  ${n(l`
    padding: 40px 0 120px;
    gap: 64px;
  `)}
`,j=i.h2`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${e=>e.theme.colorText};

  ${n(l`
    font-size: 40px;
    line-height: 48px;
  `)}
`,y=i.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${n(l`
      gap: 24px;
    `)}
`,$=i.li`
  display: flex;
  flex-direction: column;
  gap: 2px;

  ${n(l`
    display: grid;
    gap: 8px;
    grid-template-columns: auto 1fr calc(952 / 1280 * 100%);
    align-items: start;
  `)}
`,M=i.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${e=>e.theme.colorText50};

  ${n(l`
    font-size: 18px;
    line-height: 24px;
    color: ${e=>e.theme.colorText};
  `)}
`,T=i.div`
  ${n(l`
      height: 18px;
      border-bottom: 1px dashed ${e=>e.theme.brdrDash};
    `)}
`,w=i.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${e=>e.theme.colorText};
`;function a(e){return typeof e!="string"||!e?"":`${e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}  ₽.`}const z=({movie:e})=>{const o=[{label:"Original language",value:e.language},{label:"Budget",value:a(e.budget)},{label:"Revenue",value:a(e.revenue)},{label:"Director",value:e.director},{label:"Production",value:e.production},{label:"Awards",value:e.awardsSummary}];return t.jsx("section",{children:t.jsx(c,{children:t.jsxs(b,{children:[t.jsx(j,{children:"About the movie"}),t.jsx(y,{children:o.map(r=>r.value?t.jsxs($,{children:[t.jsx(M,{children:r.label}),t.jsx(T,{}),t.jsx(w,{children:r.value})]},r.value):null)})]})})})};function A(e){return u({queryKey:["movie"],queryFn:()=>x.getMovieById(e),retry:0,refetchOnWindowFocus:!1})}function R(){const{movieId:e}=g(),{data:o,error:r,isLoading:s,isFetching:d,refetch:p}=A(Number(e));return r?t.jsxs(h,{children:["Error: ",r.message]}):o?t.jsxs(t.Fragment,{children:[t.jsx(v,{children:` Page - about movie: ${o.title}`}),t.jsx(m,{isFetching:d,movie:o,refetch:p,isLoading:s,isAboutMovie:!0}),t.jsx(z,{movie:o})]}):null}export{R as default};
