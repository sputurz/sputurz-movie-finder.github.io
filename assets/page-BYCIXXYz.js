import{u as p,A as d,v as a,l,d as o,j as e,E as c,C as x}from"./index-aNZWqHQ0.js";import{M as u}from"./MoviePromo-DjWI8Wus.js";import{M as g}from"./MovieCard-CCgH36rp.js";import{V as m}from"./VisuallyHidden-tsM77frJ.js";import"./Button-DX8ho5gj.js";import"./useMutation-1O9FvtkA.js";import"./useDeleteFavorite-CtxAVUHR.js";function f(){return p({queryKey:["top10"],queryFn:()=>d.getMovieTop10(),retry:0,refetchOnWindowFocus:!1})}const h=o.section`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  gap: 40px;

  ${a(l`
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

  ${a(l`
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

  ${a(l`
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
`;function w(){const{data:r,error:i}=f();return i?e.jsxs(c,{children:["Ошибка: ",i.message]}):r?e.jsx("section",{children:e.jsx(x,{children:e.jsxs(h,{children:[e.jsx(y,{children:"Top 10 Movies"}),e.jsx(j,{children:r?[...r].sort((n,t)=>{const s=n.tmdbRating??0;return(t.tmdbRating??0)-s}).map((n,t)=>e.jsx(v,{children:e.jsx(g,{movie:n,indexRating:t+1,isRatingShown:!0})},n.id)):null})]})})}):null}function M(){return p({queryKey:["random"],queryFn:()=>d.getMovieRandom(),retry:0,refetchOnWindowFocus:!1})}const b=o.h1`
  ${m}
`;function C(){const{data:r,error:i,isLoading:n,isFetching:t,refetch:s}=M();return i?e.jsxs(c,{children:["Error: ",i.message]}):r?e.jsxs(e.Fragment,{children:[e.jsx(b,{children:"Main page"}),e.jsx(u,{isLoading:n,movie:r,refetch:s,isFetching:t}),e.jsx(w,{})]}):null}export{C as default};
