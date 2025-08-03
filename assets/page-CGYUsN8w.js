import{d as n,v as o,l as a,j as e,E as l,C as d,u as x,A as c}from"./index-DNPM4ER3.js";import{M as u}from"./MoviePromo-BCDduxkQ.js";import{u as f}from"./useMovieTop-DAOl3UXs.js";import{M as m}from"./MovieCard-B7flfbH9.js";import{V as g}from"./VisuallyHidden-CGK1gidK.js";import"./useDeleteFavorite-CKKPMpgK.js";const h=n.section``,y=n.section`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  gap: 40px;

  ${o(a`
    padding: 40px 0 120px;
    gap: 64px;
  `)}
`,j=n.h2`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  ${o(a`
    font-size: 40px;
    line-height: 48px;
  `)}
`,v=n.ul`
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

  ${o(a`
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
`,w=n.li`
  flex-shrink: 0;
  width: 224px;
  height: 336px;

  ${o(a``)}
`;function b(){const{data:i,error:r}=f();return r?e.jsxs(l,{children:["Ошибка: ",r.message]}):i?e.jsx(h,{children:e.jsx(d,{children:e.jsxs(y,{children:[e.jsx(j,{children:"Топ 10 фильмов"}),e.jsx(v,{children:i?[...i].sort((t,s)=>s.tmdbRating-t.tmdbRating).map((t,s)=>e.jsx(w,{children:e.jsx(m,{movie:t,indexRating:s+1,isRatingShown:!0})},t.id)):null})]})})}):null}function T(){return x({queryKey:["random"],queryFn:()=>c.getMovieRandom(),retry:0})}const M=n.h1`
  ${g}
`;function E(){const{data:i,error:r,isLoading:t,isFetching:s,refetch:p}=T();return r?e.jsxs(l,{children:["Ошибка: ",r.message]}):i?e.jsxs(e.Fragment,{children:[e.jsx(M,{children:"Главная страница - Маруся"}),e.jsx(u,{isLoading:t,movie:i,refetch:p,isFetching:s}),e.jsx(b,{})]}):null}export{E as default};
