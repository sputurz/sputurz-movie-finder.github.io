import{B as b,g as k,k as M,m as P,l as o,d as i,r as h,j as t,n as B,o as d,v as p,L,p as T,q as F,w as A,x as z,a as m,y as U,z as $,D as Y,F as R,C as D,M as H,I as y}from"./index-J5vA05xB.js";import{u as I}from"./useDeleteFavorite-BZCgDi8b.js";const v=o`
  ${b}
  ${k}
  ${M}
  ${P}

  background:   #393b3c;
  border-color: rgba(0, 0, 0, 0.4);

  &:focus-visible,
  &:hover {
    color: #000000;
    background-color: #ffffff;
    border-color: #ffffff;
    opacity: unset;
  }

  &:disabled {
    background: #747474;
  }
`,q=i.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,E=i.img`
  opacity: ${({$isBusy:e})=>e?.1:1};
`,N=({src:e,alt:r,isFetching:a,isLoading:s,onImageLoadedChange:n,className:l})=>{const[x,c]=h.useState(!1);h.useEffect(()=>{c(!1),n==null||n(!1)},[e,a,n]);const f=()=>{c(!0),n==null||n(!0)},u=a||s||!x;return t.jsxs(q,{className:l,children:[t.jsx(E,{$isBusy:u,src:e,alt:r,onLoad:f}),u&&t.jsx(B,{})]})},W=i.section`
  position: relative;
`,C=i.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;

  ${d(o`
      grid-template-columns: 1fr minmax(0, calc(680 / 1280 * 100%));
      grid-template-areas: 'content image';
      align-items: start;
      gap: 0;
      padding-top: 32px;
    `)}
`,Q=i(N)`
  img {
    width: 100%;
    border-radius: 16px;
  }

  ${d(o`
      grid-area: image;
    `)}
`,V=i.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${d(o`
    grid-area: content;
    padding: 74px 20px 0 0;
    grid-column: 1;
    grid-row: 1;
  `)}

  ${({$isAboutMovie:e})=>!e&&d(o`
      height: 550px;
      justify-content: space-between;
    `)}
`,G=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${d(o`
    gap: 16px;
  `)}
`,K=i.div`
  display: flex;
  gap: 16px;
  align-items: center;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

  ${p(o`
    > span {
      font-size: 18px;
      line-height: 24px;
    }
  `)}
`,_=i.h2`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  ${p(o`
    font-size: 48px;
    line-height: 56px;
  `)}

  ${({$isAboutMovie:e})=>!e&&p(o`
      max-height: 120px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    `)}
`,J=i.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);

  ${p(o`
    font-size: 24px;
    line-height: 32px;
  `)}

  ${({$isAboutMovie:e})=>!e&&p(o`
      max-height: 96px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    `)}
`,O=i.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 16px;

  grid-template-columns: ${e=>e.$isAboutMovie?"1fr auto":"1fr auto auto"};

  & > button:first-child {
    grid-column: ${e=>e.$isAboutMovie?"span 1":"span 3"};
  }

  ${d(o``)}
`,X=i.button`
  ${b}

  ${d(o``)}
`,Z=i.button`
  ${v}
  width: 68px;

  ${d(o``)}
`,ee=i(L)`
  ${v}

  ${({$iSdisabled:e})=>e&&o`
      color: rgba(255, 255, 255, 0.5);
      pointer-events: none;
      background: #747474;
    `}
`,te=i.button`
  ${v}
  width: 68px;

  svg {
    width: 24px;
    height: 24px;

    color: ${({$isLiked:e})=>e?"#B4A9FF":"transparent"};
    stroke: ${({$isLiked:e})=>e?"transparent":"#ffffff"};
    stroke-width: 1.5;
  }

  &:focus-visible svg,
  &:hover svg {
    stroke: ${({$isLiked:e})=>e?"transparent":"#0c0707ff"};
    color: ${({$isLiked:e})=>e?"#B4A9FF":"transparent"};
  }
`,ie=({trailerUrl:e,trailerYouTubeId:r})=>t.jsxs("div",{className:"trailer-container",children:[t.jsx("h2",{children:"Трейлер"}),t.jsx("div",{className:"video-wrapper",children:t.jsx("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${r}`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),t.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"trailer-link",children:"Смотреть на YouTube"})]});function oe(e){const r=T(),a=F({mutationFn:l=>A(l),async onSuccess(){r.invalidateQueries({queryKey:["me"]})}}),s=()=>{a.mutate(e.toString())},n=a.isPending;return{addFavoriteHandler:s,isPending:n}}function se(e){const r=z(),a=m(U),s=m($),{deleteFavoriteHandler:n,isPending:l}=I(e),{addFavoriteHandler:x,isPending:c}=oe(e);return{onLike:()=>{if(!a){r(Y());return}s!=null&&s.favorites.includes(e.toString())?n():x()},isPending:l||c}}const ne=i.div`
  display: flex;
  gap: 16px;
  align-items: center;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

  ${p(o`
    > span {
      font-size: 18px;
      line-height: 24px;
    }
  `)}
`,re=i.span``,ae=i.span``,le=i.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: calc((115 / 335) * 100%);
  ${d(o`
    max-width: calc((325 / 580) * 100%);
  `)}
`,de=({movie:e})=>{var r;return t.jsxs(ne,{children:[t.jsx(re,{children:e.releaseYear}),t.jsx(le,{children:((r=e.genres)==null?void 0:r.join(", "))||""}),t.jsx(ae,{children:R(e.runtime)})]})},xe=({movie:e,isFetching:r,isLoading:a,isAboutMovie:s=!1,refetch:n})=>{const l=m($),x=(l==null?void 0:l.favorites.includes(e.id.toString()))||!1,{onLike:c}=se(e.id),[f,u]=h.useState(!1),[w,j]=h.useState(!1),g=r||a||!f,S=()=>{n&&n()};return t.jsx(W,{children:t.jsx(D,{children:t.jsxs(C,{children:[t.jsx(Q,{src:e.backdropUrl||"/images/moviePromo/error.jpg",alt:e.title,isFetching:r,isLoading:a,onImageLoadedChange:u}),t.jsxs(V,{$isAboutMovie:s,children:[t.jsxs(G,{children:[t.jsxs(K,{children:[e.tmdbRating?t.jsx(H,{rating:e.tmdbRating}):null,t.jsx(de,{movie:e})]}),t.jsx(_,{$isAboutMovie:s,children:e.title}),t.jsx(J,{$isAboutMovie:s,children:e.plot})]}),t.jsxs(O,{$isAboutMovie:s,children:[t.jsx(X,{disabled:g,onClick:()=>j(!0),children:"Трейлер"}),w&&t.jsx(ie,{trailerYouTubeId:e.trailerYoutubeId,trailerUrl:e.trailerUrl}),s?null:t.jsx(ee,{$iSdisabled:g,to:`/movie/${e.id}`,children:"о фильме"}),t.jsx(te,{$isLiked:x,disabled:g,onClick:c,children:t.jsx(y,{name:"LikeIcon"})}),s?null:t.jsx(Z,{onClick:S,disabled:g,children:t.jsx(y,{name:"UpdateIcon"})})]})]})]})})})};export{xe as M};
