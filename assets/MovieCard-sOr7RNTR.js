import{t as n,v as l,l as p,d as r,B as d,L as c,j as t,I as x}from"./index-DRmv6lOD.js";import{u as h}from"./useDeleteFavorite-b0uHA31A.js";const u=r.div`
  ${n}

  position: relative;
  aspect-ratio: 224 / 336;
  display: flex;
  border-radius: 16px;
  border: 1px solid ${e=>e.theme.brdrCard};
  box-shadow: 0px 0px 80px 0px ${e=>e.theme.boxShadows};
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;

  &:hover,
  &:focus {
    transform: scale(1.01);
  }

  button {
    display: none;
  }

  &:hover button,
  &:focus-within button {
    display: flex;
  }

  ${l(p`
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  `)}
`,b=r(c)`
  ${n}

  border-radius: inherit;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`,g=r.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`,f=r.span`
  user-select: none;
  width: 62px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  position: absolute;
  left: -12px;
  top: -12px;
  background: ${e=>e.theme.bgPrimary};
  border-radius: 50px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${e=>e.theme.colorTop};
  z-index: 2;
`,m=r.button`
  ${d}

  position: absolute;
  top: -20px;
  right: -20px;
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: ${e=>e.theme.bgPrimary};

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.5;
  }
`,w=r.span`
  position: absolute;
  display: flex;
  text-align: center;
  top: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.colorText};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;function y({movie:e,indexRating:o,isRatingShown:s=!1,isUserProfile:i=!1}){const{deleteFavoriteHandler:a}=h(e.id);return t.jsxs(u,{children:[t.jsx(b,{to:`/movie/${e.id}`,"aria-label":`Link to info about movie: ${e.title}`,children:t.jsx(g,{src:e.posterUrl?e.posterUrl:"/images/movieCard/error.jpg",alt:e.title})}),s?t.jsx(f,{children:o}):null,i?t.jsx(m,{onClick:a,children:t.jsx(x,{name:"CloseIcon"})}):null,e.posterUrl?null:t.jsx(w,{children:e.title})]})}export{y as M};
