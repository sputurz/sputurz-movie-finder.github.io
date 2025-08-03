import{t as n,d as r,p as d,L as l,j as e,I as p}from"./index-DNPM4ER3.js";import{u as c}from"./useDeleteFavorite-CKKPMpgK.js";const x=r.div`
  ${n}

  position: relative;
  aspect-ratio: 224 / 336;
  display: flex;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0px 80px 0px rgba(255, 255, 255, 0.33);
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  button {
    display: none;
  }

  &:hover button,
  &:focus-within button {
    display: flex;
  }
`,u=r(l)`
  ${n}

  border-radius: inherit;

  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`,f=r.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`,h=r.span`
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
  background: #ffffff;
  border-radius: 50px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #6a5dc2;
  z-index: 2;
`,b=r.button`
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
  background-color: #ffffff;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.5;
  }
`;function y({movie:t,indexRating:o,isRatingShown:i=!1,isUserProfile:s=!1}){const{deleteFavoriteHandler:a}=c(t.id);return e.jsxs(x,{children:[e.jsx(u,{to:`/movie/${t.id}`,children:e.jsx(f,{src:t.backdropUrl?t.posterUrl:"/images/movieCard/error.jpg",alt:t.title})}),i?e.jsx(h,{children:o}):null,s?e.jsx(b,{onClick:a,children:e.jsx(p,{name:"CloseIcon"})}):null]})}export{y as M};
