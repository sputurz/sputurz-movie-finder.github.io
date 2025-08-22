const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-M8J8qSoK.js","assets/index-C2G7T-C2.js","assets/custom-media-element-Ce0vsE-t.js","assets/hls-D4QvIzvx.js","assets/react-DW3xFnIO.js","assets/index-B_l-jGXr.js","assets/react-d3MeFcte.js","assets/react-DAX_6OjK.js","assets/react-CbIWAr9l.js","assets/react-CJUBh7Gm.js","assets/react-B5F2wIZH.js","assets/react-B7Pwci9d.js","assets/Preview-BSxTyvTY.js"])))=>i.map(i=>d[i]);
import{d,p as c,j as a,K as J,M as $,l as m,v as P,y as ee,R as v,_ as x,t as te,I as O,e as ae,N as ne,u as ie,n as z,O as oe,P as H,S as re,T as le,C as se,U as ce}from"./index-C2G7T-C2.js";import{a as N,B as U}from"./Button-xkvP5zo6.js";import{u as de}from"./useMutation-CZcm_JsO.js";import{u as ue}from"./useDeleteFavorite-DKEayNdX.js";const pe=d.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,me=d.img`
  opacity: ${({$isBusy:e})=>e?.1:1};
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`,he=({src:e,alt:t,isFetching:l,isLoading:o,onImageLoadedChange:i,className:n})=>{const[r,h]=c.useState(!1);c.useEffect(()=>{h(!1),i?.(!1)},[e,l,i]);const g=()=>{h(!0),i?.(!0)},y=l||o||!r;return a.jsxs(pe,{className:n,children:[a.jsx(me,{$isBusy:y,src:e,alt:t,onLoad:g}),y&&a.jsx(J,{})]})},ye=d.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;

  ${$(m`
      grid-template-columns: 1fr minmax(0, calc(680 / 1280 * 100%));
      grid-template-areas: 'content image';
      align-items: start;
      gap: 0;
      padding-top: 32px;
    `)}
`,fe=d(he)`
  img {
    width: 100%;
    border-radius: 16px;
  }

  ${$(m`
      grid-area: image;
    `)}
`,xe=d.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${$(m`
    grid-area: content;
    padding: 74px 20px 0 0;
    grid-column: 1;
    grid-row: 1;
  `)}

  ${({$isAboutMovie:e})=>!e&&$(m`
      height: 550px;
      justify-content: space-between;
    `)}
`,ge=d.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${$(m`
    gap: 16px;
  `)}
`,ve=d.div`
  display: flex;
  gap: 16px;
  align-items: center;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${e=>e.theme.colorText70};
  }

  ${P(m`
    > span {
      font-size: 18px;
      line-height: 24px;
    }
  `)}
`,Pe=d.h2`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${e=>e.theme.colorText};

  ${P(m`
    font-size: 48px;
    line-height: 56px;
  `)}

  ${({$isAboutMovie:e})=>!e&&P(m`
      max-height: 120px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    `)}
`,be=d.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${e=>e.theme.colorText70};

  ${P(m`
    font-size: 24px;
    line-height: 32px;
  `)}

  ${({$isAboutMovie:e})=>!e&&P(m`
      max-height: 96px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    `)}
`,we=d.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 16px;

  grid-template-columns: ${e=>e.$isAboutMovie?"1fr auto":"1fr auto auto"};

  & > button:first-child {
    grid-column: ${e=>e.$isAboutMovie?"span 1":"span 3"};
  }
`,_e=d(ee)`
  ${N}

  ${({$iSdisabled:e})=>e&&m`
      color: ${t=>t.theme.colorText50};
      pointer-events: none;
      background-color: ${t=>t.theme.bgBtnSecondaryDisabled};
    `}
`,ke=d.button`
  ${N}

  svg {
    color: ${({$isLiked:e,theme:t})=>e?t.colorLike:"transparent"};
    stroke: ${({$isLiked:e,theme:t})=>e?"transparent":t.colorText};
    stroke-width: 1.5;
  }

  &:focus-visible svg,
  &:hover svg {
    stroke: ${({$isLiked:e,theme:t})=>e?"transparent":t.colorTextInverse};
    color: ${({$isLiked:e,theme:t})=>e?t.colorLike:"transparent"};
  }
`,W=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,D=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,V=/\.(m3u8)($|\?)/i,Ee=/\.(mpd)($|\?)/i,$e=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,Ie=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,Te=/vimeo\.com\/(?!progressive_redirect).+/,Le=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,je=/open\.spotify\.com\/(\w+)\/(\w+)/i,Se=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,Ae=/tiktok\.com\/(?:@[^/]+\/video\/)?(\d+)(?:\/([\w-]+))?/,j=(e,t)=>{if(Array.isArray(e)){for(const l of e)if(typeof l=="string"&&j(l,t)||j(l.src,t))return!0;return!1}return t(e)},f={html:e=>j(e,t=>W.test(t)||D.test(t)),hls:e=>j(e,t=>V.test(t)),dash:e=>j(e,t=>Ee.test(t)),mux:e=>$e.test(e),youtube:e=>Ie.test(e),vimeo:e=>Te.test(e)&&!D.test(e)&&!V.test(e),wistia:e=>Le.test(e),spotify:e=>je.test(e),twitch:e=>Se.test(e),tiktok:e=>Ae.test(e)},Re=v.forwardRef((e,t)=>{const l=W.test(`${e.src}`)?"audio":"video";return v.createElement(l,{...e,ref:t},e.children)});var Ce=Re;const Oe=[{key:"hls",name:"hls.js",canPlay:f.hls,canEnablePIP:()=>!0,player:c.lazy(()=>x(()=>import("./react-M8J8qSoK.js"),__vite__mapDeps([0,1,2,3])))},{key:"dash",name:"dash.js",canPlay:f.dash,canEnablePIP:()=>!0,player:c.lazy(()=>x(()=>import("./react-DW3xFnIO.js"),__vite__mapDeps([4,1,2])))},{key:"mux",name:"Mux",canPlay:f.mux,canEnablePIP:()=>!0,player:c.lazy(()=>x(()=>import("./index-B_l-jGXr.js"),__vite__mapDeps([5,1,3,2])))},{key:"youtube",name:"YouTube",canPlay:f.youtube,player:c.lazy(()=>x(()=>import("./react-d3MeFcte.js"),__vite__mapDeps([6,1])))},{key:"vimeo",name:"Vimeo",canPlay:f.vimeo,player:c.lazy(()=>x(()=>import("./react-DAX_6OjK.js"),__vite__mapDeps([7,1])))},{key:"wistia",name:"Wistia",canPlay:f.wistia,canEnablePIP:()=>!0,player:c.lazy(()=>x(()=>import("./react-CbIWAr9l.js"),__vite__mapDeps([8,1])))},{key:"spotify",name:"Spotify",canPlay:f.spotify,canEnablePIP:()=>!1,player:c.lazy(()=>x(()=>import("./react-CJUBh7Gm.js"),__vite__mapDeps([9,1])))},{key:"twitch",name:"Twitch",canPlay:f.twitch,canEnablePIP:()=>!1,player:c.lazy(()=>x(()=>import("./react-B5F2wIZH.js"),__vite__mapDeps([10,1])))},{key:"tiktok",name:"TikTok",canPlay:f.tiktok,canEnablePIP:()=>!1,player:c.lazy(()=>x(()=>import("./react-B7Pwci9d.js"),__vite__mapDeps([11,1])))},{key:"html",name:"html",canPlay:f.html,canEnablePIP:()=>!0,player:Ce}];var M=Oe;const ze={width:"320px",height:"180px",volume:1,playbackRate:1,previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}"},F=v.forwardRef((e,t)=>{const{playing:l,pip:o}=e,i=e.activePlayer,n=c.useRef(null),r=c.useRef(!0);c.useEffect(()=>{var s,u;n.current&&(n.current.paused&&l===!0&&n.current.play(),!n.current.paused&&l===!1&&n.current.pause(),n.current.playbackRate=(s=e.playbackRate)!=null?s:1,n.current.volume=(u=e.volume)!=null?u:1)}),c.useEffect(()=>{var s,u,p,b,w;if(!(!n.current||!globalThis.document)){if(o&&!document.pictureInPictureElement)try{(u=(s=n.current).requestPictureInPicture)==null||u.call(s)}catch{}if(!o&&document.pictureInPictureElement)try{(b=(p=n.current).exitPictureInPicture)==null||b.call(p),(w=document.exitPictureInPicture)==null||w.call(document)}catch{}}},[o]);const h=s=>{var u,p;r.current=!0,(u=e.onReady)==null||u.call(e),(p=e.onLoadStart)==null||p.call(e,s)},g=s=>{var u,p;r.current&&(r.current=!1,(u=e.onStart)==null||u.call(e,s)),(p=e.onPlay)==null||p.call(e,s)};if(!i)return null;const y={};for(const s in e)s.startsWith("on")&&(y[s]=e[s]);return v.createElement(i,{...y,style:e.style,className:e.className,slot:e.slot,ref:c.useCallback(s=>{n.current=s,typeof t=="function"?t(s):t!==null&&(t.current=s)},[t]),src:e.src,crossOrigin:e.crossOrigin,preload:e.preload,controls:e.controls,muted:e.muted,autoPlay:e.autoPlay,loop:e.loop,playsInline:e.playsInline,config:e.config,onLoadStart:h,onPlay:g},e.children)});F.displayName="Player";var Me=F;const Ue=c.lazy(()=>x(()=>import("./Preview-BSxTyvTY.js"),__vite__mapDeps([12,1]))),L=[],De=(e,t)=>{const l=i=>{for(const n of[...L,...e])if(i&&n.canPlay(i))return n;return t||null},o=v.forwardRef((i,n)=>{const r={...ze,...i},{src:h,slot:g,className:y,style:s,width:u,height:p,fallback:b,wrapper:w}=r,[I,T]=c.useState(!!r.light);c.useEffect(()=>{r.light?T(!0):T(!1)},[r.light]);const X=k=>{var _;T(!1),(_=r.onClickPreview)==null||_.call(r,k)},Y=k=>{if(!k)return null;const{light:_,playIcon:S,previewTabIndex:E,oEmbedUrl:A,previewAriaLabel:R}=r;return v.createElement(Ue,{src:k,light:_,playIcon:S,previewTabIndex:E,previewAriaLabel:R,oEmbedUrl:A,onClickPreview:X})},K=k=>{var _,S;const E=l(k);if(!E)return null;const{style:A,width:R,height:G,wrapper:C}=r,Z=(_=r.config)==null?void 0:_[E.key];return v.createElement(Me,{...r,ref:n,activePlayer:(S=E.player)!=null?S:E,slot:C?void 0:g,className:C?void 0:y,style:C?{display:"block",width:"100%",height:"100%"}:{display:"block",width:R,height:G,...A},config:Z})},q=w??B,Q=b===!1?B:c.Suspense;return v.createElement(q,{slot:g,className:y,style:{width:u,height:p,...s}},v.createElement(Q,{fallback:b},I?Y(h):K(h)))});return o.displayName="ReactPlayer",o.addCustomPlayer=i=>{L.push(i)},o.removeCustomPlayers=()=>{L.length=0},o.canPlay=i=>{if(i){for(const n of[...L,...e])if(n.canPlay(i))return!0}return!1},o.canEnablePIP=i=>{var n;if(i){for(const r of[...L,...e])if(r.canPlay(i)&&((n=r.canEnablePIP)!=null&&n.call(r)))return!0}return!1},o},B=({children:e})=>e,Ve=M[M.length-1];var Be=De(M,Ve);const He=d.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  background-color: ${e=>e.theme.bgBackdrop};
  backdrop-filter: blur(4px);
  z-index: 60;
`,Ne=d.div`
  position: relative;
  width: min(100vw, calc(100vh * (16 / 9)));
  height: min(100vh, calc(100vw * (9 / 16)));
  aspect-ratio: 16 / 9;
  background-color: ${e=>e.theme.bgSecondary};

  youtube-video {
    height: 100% !important;
    width: auto !important;
  }

  ${P(m`
    border: 1px solid ${e=>e.theme.brdrVideo};
    width: calc(100% - 160px);
    max-width: 960px;
    height: unset;
  `)}
`,We=d.button`
  ${te}

  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.bgPrimary};
  padding: 0;
  border: none;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  svg {
    color: ${e=>e.theme.colorModalBtnClose};
    width: 16px;
    height: 16px;
  }

  ${P(m`
    top: 0;
    right: -72px;
    width: 48px;
    height: 48px;

    svg {
      width: 24px;
      height: 24px;
    }
  `)}
  &:hover {
    opacity: 0.5;
  }
`,Fe=d.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: ${e=>e.theme.colorText};
`,Xe=({trailerUrl:e,trailerYouTubeId:t,onBackdrop:l,onClose:o})=>{const i=t?`https://youtube.com/watch?v=${t}`:e;return a.jsx(He,{onClick:l,children:a.jsxs(Ne,{onClick:n=>n.stopPropagation(),children:[i?a.jsx(Be,{src:i,playing:!0}):a.jsx(Fe,{children:"Video not found"}),a.jsx(We,{"aria-label":"Close video",onClick:o,children:a.jsx(O,{name:"CloseIcon"})})]})})};function Ye(e){const t=ae(),l=de({mutationFn:n=>ne(n),async onSuccess(){t.invalidateQueries({queryKey:["me"]})}}),o=()=>{l.mutate(e.toString())},i=l.isPending;return{addFavoriteHandler:o,isPending:i}}function Ke(e){const t=ie(),l=z(oe),o=z(H),{deleteFavoriteHandler:i,isPending:n}=ue(e),{addFavoriteHandler:r,isPending:h}=Ye(e);return{onLike:()=>{if(!l){t(re());return}o?.favorites.includes(e.toString())?i():r()},isPending:n||h}}const qe=d.div`
  display: flex;
  gap: 16px;
  align-items: center;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${e=>e.theme.colorText70};
  }

  ${P(m`
    > span {
      font-size: 18px;
      line-height: 24px;
    }
  `)}
`,Qe=d.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: calc((115 / 335) * 100%);
  ${$(m`
    max-width: calc((325 / 580) * 100%);
  `)}
`,Ge=({movie:e})=>a.jsxs(qe,{children:[a.jsx("span",{children:e.releaseYear}),a.jsx(Qe,{children:e.genres?.join(", ")||""}),a.jsx("span",{children:le(e.runtime)})]}),at=({movie:e,isFetching:t,isLoading:l,isAboutMovie:o=!1,refetch:i})=>{const r=z(H)?.favorites.includes(e.id.toString())||!1,{onLike:h}=Ke(e.id),[g,y]=c.useState(!1),[s,u]=c.useState(!1),p=t||l||!g,b=()=>{i&&i()},w=()=>{u(!0),document.body.style.overflow="hidden"},I=()=>{u(!1),document.body.style.overflow=""},T=()=>{u(!1),document.body.style.overflow=""};return a.jsx("section",{children:a.jsx(se,{children:a.jsxs(ye,{children:[a.jsx(fe,{src:e.backdropUrl||"/images/moviePromo/error.jpg",alt:e.title,isFetching:t,isLoading:l,onImageLoadedChange:y}),a.jsxs(xe,{$isAboutMovie:o,children:[a.jsxs(ge,{children:[a.jsxs(ve,{children:[e.tmdbRating?a.jsx(ce,{rating:e.tmdbRating}):null,a.jsx(Ge,{movie:e})]}),a.jsx(Pe,{$isAboutMovie:o,children:e.title}),a.jsx(be,{$isAboutMovie:o,children:e.plot})]}),a.jsxs(we,{$isAboutMovie:o,children:[a.jsx(U,{"aria-label":"Show movie trailer",isDisabled:p,onClick:w,children:"Trailer"}),s&&a.jsx(Xe,{trailerYouTubeId:e.trailerYoutubeId,trailerUrl:e.trailerUrl,onBackdrop:I,onClose:T}),o?null:a.jsx(_e,{"aria-label":"About the movie",$iSdisabled:p,to:`/movie/${e.id}`,children:"About"}),a.jsx(ke,{"aria-label":"Add movie to favorites",$isLiked:r,disabled:p,onClick:h,children:a.jsx(O,{name:"LikeIcon"})}),o?null:a.jsx(U,{"aria-label":"Show new random movie",onClick:b,isDisabled:p,kind:"secondary",children:a.jsx(O,{name:"UpdateIcon"})})]})]})]})})})};export{at as M};
