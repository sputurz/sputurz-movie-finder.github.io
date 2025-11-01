import{t as p,v as n,l as i,d as t,L as d,r as c,j as r,u as x,A as g,a as h,s as u,E as m,C as f}from"./index-Cle7R_To.js";import{t as j,g as $,a as b}from"./dictionary-DFIM3K7R.js";const v=t(d)`
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
`;function E({genre:e,genreTranslated:a}){const[o,s]=c.useState(!1);return r.jsxs(v,{to:`/movies?genre=${e}`,"aria-label":`Link to genre: ${e}`,children:[r.jsx(w,{children:o?r.jsx(l,{src:"/images/genre/error.jpg",alt:e}):r.jsx(l,{src:`/images/genre/${e}.jpg`,alt:e,onError:()=>s(!0)})}),r.jsx(y,{children:j(a)})]})}const k=t.section`
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
`,L=t.h1`
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
`,T=t.ul`
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
`;function G(){return x({queryKey:["genres"],queryFn:()=>g.getMovieGenres(),retry:0,refetchOnWindowFocus:!1})}function z(){const e=h(u),{data:a,error:o}=G();return o?r.jsxs(m,{children:["Error: ",o.message]}):a?r.jsx(k,{children:r.jsx(f,{children:r.jsxs(C,{children:[r.jsx(L,{children:"Movie Genres"}),r.jsx(T,{children:a.map(s=>s&&r.jsx("li",{children:r.jsx(E,{genre:s,genreTranslated:$(b,e,s)||s})},s))})]})})}):null}export{z as default};
