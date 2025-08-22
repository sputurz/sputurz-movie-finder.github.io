import{x as p,v as n,l as i,d as t,y as d,p as c,j as r,w as x,A as g,n as h,z as u,E as m,C as f}from"./index-C2G7T-C2.js";import{t as j,g as $,a as b}from"./dictionary-CsdWf1z5.js";const v=t(d)`
  ${p}

  height: 100%;
  background-color: ${e=>e.theme.bgGenreCard};
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid ${e=>e.theme.brdrCard};
  box-shadow: 0px 0px 80px 0px ${e=>e.theme.boxShadows};

  &:hover {
    transform: scale(1.01);
  }

  ${n(i`
    &:hover {
      transform: scale(1.05);
    }
  `)}
`,w=t.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(220 / 335 * 100%);
  border-radius: 24px 24px 0 0;
  overflow: hidden;

  ${n(i`
    padding-top: calc(220 / 290 * 100%);
  `)}
`,l=t.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`,y=t.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${e=>e.theme.colorText};
  text-align: center;
  padding: 22px 0 30px;
`;function E({genre:e,genreTranslated:o}){const[a,s]=c.useState(!1);return r.jsxs(v,{to:`/movies?genre=${e}`,"aria-label":`Link to genre: ${e}`,children:[r.jsx(w,{children:a?r.jsx(l,{src:"/images/genre/error.jpg",alt:e}):r.jsx(l,{src:`/images/genre/${e}.jpg`,alt:e,onError:()=>s(!0)})}),r.jsx(y,{children:j(o)})]})}const k=t.section`
  margin: 40px 0;

  ${n(i`
    margin: 64px 0 160px;
  `)}
`,C=t.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${n(i`
    gap: 64px;
  `)}
`,T=t.h1`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${e=>e.theme.colorText};

  ${n(i`
    font-size: 48px;
    line-height: 56px;
  `)}
`,G=t.ul`
  height: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${n(i`
    gap: 64px 40px;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  `)}
`;function L(){return x({queryKey:["genres"],queryFn:()=>g.getMovieGenres(),retry:0,refetchOnWindowFocus:!1})}function I(){const e=h(u),{data:o,error:a}=L();return a?r.jsxs(m,{children:["Error: ",a.message]}):o?r.jsx(k,{children:r.jsx(f,{children:r.jsxs(C,{children:[r.jsx(T,{children:"Movie Genres"}),r.jsx(G,{children:o.map(s=>s&&r.jsx("li",{children:r.jsx(E,{genre:s,genreTranslated:$(b,e,s)||s})},s))})]})})}):null}export{I as default};
