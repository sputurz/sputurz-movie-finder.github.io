import{u as l,A as p,v as s,l as a,d as o,j as e,E as d,C as c}from"./index-DRmv6lOD.js";import{M as u}from"./MoviePromo-DDjSL7uq.js";import{M as g}from"./MovieCard-sOr7RNTR.js";import{V as m}from"./VisuallyHidden-occlYv7m.js";import"./Button-C2DmmOPo.js";import"./useMutation-Ch62a-TB.js";import"./useDeleteFavorite-b0uHA31A.js";function f(){return l({queryKey:["top10"],queryFn:()=>p.getMovieTop10(),retry:0,refetchOnWindowFocus:!1})}const h=o.section`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  gap: 40px;

  ${s(a`
    padding: 40px 0 120px;
    gap: 64px;
  `)}
`,y=o.h2`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${r=>r.theme.colorText};

  ${s(a`
    font-size: 40px;
    line-height: 48px;
  `)}
`,j=o.ul`
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

  ${s(a`
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
`,v=o.li`
  flex-shrink: 0;
  width: 224px;
  height: 336px;
`;function w(){const{data:r,error:n}=f();return n?e.jsxs(d,{children:["Ошибка: ",n.message]}):r?e.jsx("section",{children:e.jsx(c,{children:e.jsxs(h,{children:[e.jsx(y,{children:"Top 10 Movies"}),e.jsx(j,{children:r?[...r].sort((i,t)=>t.tmdbRating-i.tmdbRating).map((i,t)=>e.jsx(v,{children:e.jsx(g,{movie:i,indexRating:t+1,isRatingShown:!0})},i.id)):null})]})})}):null}function M(){return l({queryKey:["random"],queryFn:()=>p.getMovieRandom(),retry:0,refetchOnWindowFocus:!1})}const b=o.h1`
  ${m}
`;function C(){const{data:r,error:n,isLoading:i,isFetching:t,refetch:x}=M();return n?e.jsxs(d,{children:["Error: ",n.message]}):r?e.jsxs(e.Fragment,{children:[e.jsx(b,{children:"Main page"}),e.jsx(u,{isLoading:i,movie:r,refetch:x,isFetching:t}),e.jsx(w,{})]}):null}export{C as default};
