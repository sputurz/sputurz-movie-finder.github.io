import{v as o,l as n,d as t,j as i,C as d,u as x,A as u,f as h,g,E as f}from"./index-B0ssCld1.js";import{V as m}from"./VisuallyHidden-DKRQzNcO.js";import{M as v}from"./MoviePromo-BVBiaZ7x.js";import{i as j}from"./Movie-BaGhbDUR.js";import"./Button-D5LuHD2x.js";import"./useMutation-IwkBrr-C.js";import"./useDeleteFavorite-fBCBOqYA.js";const b=t.h1`
  ${m}
`,$=t.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${e=>e.theme.colorText};

  ${o(n`
    font-size: 48px;
    line-height: 56px;
  `)}
`,y=t.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0 32px;
  gap: 40px;

  ${o(n`
    padding: 40px 0 120px;
    gap: 64px;
  `)}
`,M=t.h2`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${e=>e.theme.colorText};

  ${o(n`
    font-size: 40px;
    line-height: 48px;
  `)}
`,T=t.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${o(n`
      gap: 24px;
    `)}
`,w=t.li`
  display: flex;
  flex-direction: column;
  gap: 2px;

  ${o(n`
    display: grid;
    gap: 8px;
    grid-template-columns: auto 1fr calc(952 / 1280 * 100%);
    align-items: start;
  `)}
`,z=t.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${e=>e.theme.colorText50};

  ${o(n`
    font-size: 18px;
    line-height: 24px;
    color: ${e=>e.theme.colorText};
  `)}
`,I=t.div`
  ${o(n`
      height: 18px;
      border-bottom: 1px dashed ${e=>e.theme.brdrDash};
    `)}
`,A=t.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${e=>e.theme.colorText};
`;function s(e){return typeof e!="string"||!e?"":`${e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}  ₽.`}const B=({movie:e})=>{const l=[{label:"Original language",value:e.language},{label:"Budget",value:s(e.budget)},{label:"Revenue",value:s(e.revenue)},{label:"Director",value:e.director},{label:"Production",value:e.production},{label:"Awards",value:e.awardsSummary}];return i.jsx("section",{children:i.jsx(d,{children:i.jsxs(y,{children:[i.jsx(M,{children:"About the movie"}),i.jsx(T,{children:l.map(r=>r.value?i.jsxs(w,{children:[i.jsx(z,{children:r.label}),i.jsx(I,{}),i.jsx(A,{children:r.value})]},r.value):null)})]})})})};function E(e){return x({queryKey:["movie"],queryFn:()=>u.getMovieById(e),retry:0,refetchOnWindowFocus:!1})}function C(){const{movieId:e}=h(),{data:l,error:r,isLoading:a,isFetching:c,refetch:p}=E(Number(e));return a?i.jsx(g,{}):j(l)?r?i.jsxs(f,{children:["Error: ",r.message]}):i.jsxs(i.Fragment,{children:[i.jsx(b,{children:` Page - about movie: ${l.title}`}),i.jsx(v,{isFetching:c,movie:l,refetch:p,isLoading:a,isAboutMovie:!0}),i.jsx(B,{movie:l})]}):i.jsx("section",{children:i.jsx(d,{children:i.jsx($,{children:`Sorry, Invalid movie Id: "${e}"`})})})}export{C as default};
