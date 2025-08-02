import{t as d,d as r,v as a,l as n,L as p,r as c,j as e,u as g,A as x,a as f,s as u,E as h,C as m}from"./index-J5vA05xB.js";import{t as y,g as j,a as b}from"./dictionarty-CsdWf1z5.js";const v=r(p)`
  ${d}

  height: 100%;
  background: #0a0b0b;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0px 80px 0px rgba(255, 255, 255, 0.33);

  &:hover {
    transform: scale(1.05);
  }
`,w=r.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(220 / 335 * 100%);
  border-radius: 24px 24px 0 0;
  overflow: hidden;
  background: #1a1a1a;

  ${a(n`
    padding-top: calc(220 / 290 * 100%);
  `)}
`,l=r.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`,S=r.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  text-align: center;
  padding: 22px 0 30px;

  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
`;function C({genre:s,genreTranslated:i}){const[o,t]=c.useState(!1);return e.jsxs(v,{to:`/movies?genre=${s}`,children:[e.jsx(w,{children:o?e.jsx(l,{src:"/images/genre/error.jpg",alt:s}):e.jsx(l,{src:`/images/genre/${s}.jpg`,alt:s,onError:()=>t(!0)})}),e.jsx(S,{children:y(i)})]})}const G=r.section`
  margin: 40px 0;

  ${a(n`
    margin: 64px 0 160px;
  `)}
`,$=r.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${a(n`
    gap: 64px;
  `)}
`,E=r.h1`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  ${a(n`
    font-size: 48px;
    line-height: 56px;
  `)}
`,k=r.ul`
  height: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${a(n`
    gap: 64px 40px;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  `)}
`,L=r.li``;function P(){return g({queryKey:["genres"],queryFn:()=>x.getMovieGenres(),retry:0})}function A(){const s=f(u),{data:i,error:o}=P();return o?e.jsxs(h,{children:["Ошибка: ",o.message]}):i?e.jsx(G,{children:e.jsx(m,{children:e.jsxs($,{children:[e.jsx(E,{children:"Жанры фильмов"}),e.jsx(k,{children:i.map(t=>t&&e.jsx(L,{children:e.jsx(C,{genre:t,genreTranslated:j(b,s,t)||t})},t))})]})})}):null}export{A as default};
