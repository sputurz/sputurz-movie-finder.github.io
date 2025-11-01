const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-BqFQCoTx.js","assets/index-Cle7R_To.js","assets/custom-media-element-Ce0vsE-t.js","assets/hls-D4QvIzvx.js","assets/react-DcLtm9rD.js","assets/index-BzrmCGTQ.js","assets/react-CPQglt6-.js","assets/react-BVa-Kt5H.js","assets/react-jOmLXxx6.js","assets/react-DA2MTumC.js","assets/react-DsC56ir5.js","assets/react-C6sEKgd_.js","assets/Preview-CTZfmtR3.js"])))=>i.map(i=>d[i]);
import{d,r as c,j as n,g as J,k as E,l as m,v as P,L as ee,m as te,n as ne,o as ae,a as D,p as ie,q as F,w as oe,x as re,R as v,_ as x,y as le,z as se,B as ce,I as U,D as de,C as ue,M as pe}from"./index-Cle7R_To.js";import{a as X,B as V}from"./Button-2L_evtGk.js";import{u as me}from"./useMutation-CnZQDut1.js";import{u as he}from"./useDeleteFavorite-DujnShDt.js";const ye=d.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,fe=d.img`
  opacity: ${({$isBusy:e})=>e?.1:1};
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`,xe=({src:e,alt:t,isFetching:l,isLoading:r,onImageLoadedChange:i,className:a})=>{const[o,h]=c.useState(!1);c.useEffect(()=>{h(!1),i?.(!1)},[e,l,i]);const g=()=>{h(!0),i?.(!0)},y=l||r||!o;return n.jsxs(ye,{className:a,children:[n.jsx(fe,{$isBusy:y,src:e,alt:t,onLoad:g}),y&&n.jsx(J,{})]})},ge=d.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;

  ${E(m`
      grid-template-columns: 1fr minmax(0, calc(680 / 1280 * 100%));
      grid-template-areas: 'content image';
      align-items: start;
      gap: 0;
      padding-top: 32px;
    `)}
`,ve=d(xe)`
  img {
    width: 100%;
    border-radius: 16px;
  }

  ${E(m`
      grid-area: image;
    `)}
`,Pe=d.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${E(m`
    grid-area: content;
    padding: 74px 20px 0 0;
    grid-column: 1;
    grid-row: 1;
  `)}

  ${({$isAboutMovie:e})=>!e&&E(m`
      height: 550px;
      justify-content: space-between;
    `)}
`,be=d.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${E(m`
    gap: 16px;
  `)}
`,we=d.div`
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
`,_e=d.h2`
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
`,ke=d.p`
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
`,$e=d.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 16px;

  grid-template-columns: ${e=>e.$isAboutMovie?"1fr auto":"1fr auto auto"};

  & > button:first-child {
    grid-column: ${e=>e.$isAboutMovie?"span 1":"span 3"};
  }
`,Ee=d(ee)`
  ${X}

  ${({$iSdisabled:e})=>e&&m`
      color: ${t=>t.theme.colorText50};
      pointer-events: none;
      background-color: ${t=>t.theme.bgBtnSecondaryDisabled};
    `}
`,Ie=d.button`
  ${X}

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
`;function Te(e){const t=te(),l=me({mutationFn:a=>ne(a),async onSuccess(){t.invalidateQueries({queryKey:["me"]})}}),r=()=>{l.mutate(e.toString())},i=l.isPending;return{addFavoriteHandler:r,isPending:i}}function Le(e){const t=ae(),l=D(ie),r=D(F),{deleteFavoriteHandler:i,isPending:a}=he(e),{addFavoriteHandler:o,isPending:h}=Te(e);return{onLike:()=>{if(!l){t(oe());return}r?.favorites.includes(e.toString())?i():o()},isPending:a||h}}const je=d.div`
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
`,Ae=d.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: calc((115 / 335) * 100%);
  ${E(m`
    max-width: calc((325 / 580) * 100%);
  `)}
`,Se=({movie:e})=>n.jsxs(je,{children:[n.jsx("span",{children:e.releaseYear}),n.jsx(Ae,{children:e.genres?.join(", ")||""}),n.jsx("span",{children:re(e.runtime)})]}),Y=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,H=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,N=/\.(m3u8)($|\?)/i,Re=/\.(mpd)($|\?)/i,Ce=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,Oe=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,Me=/vimeo\.com\/(?!progressive_redirect).+/,ze=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,De=/open\.spotify\.com\/(\w+)\/(\w+)/i,Ue=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,Be=/tiktok\.com\/(?:@[^/]+\/video\/)?(\d+)(?:\/([\w-]+))?/,j=(e,t)=>{if(Array.isArray(e)){for(const l of e)if(typeof l=="string"&&j(l,t)||j(l.src,t))return!0;return!1}return t(e)},f={html:e=>j(e,t=>Y.test(t)||H.test(t)),hls:e=>j(e,t=>N.test(t)),dash:e=>j(e,t=>Re.test(t)),mux:e=>Ce.test(e),youtube:e=>Oe.test(e),vimeo:e=>Me.test(e)&&!H.test(e)&&!N.test(e),wistia:e=>ze.test(e),spotify:e=>De.test(e),twitch:e=>Ue.test(e),tiktok:e=>Be.test(e)},Ve=v.forwardRef((e,t)=>{const l=Y.test(`${e.src}`)?"audio":"video";return v.createElement(l,{...e,ref:t},e.children)});var He=Ve;const Ne=[{key:"hls",name:"hls.js",canPlay:f.hls,canEnablePIP:()=>!0,player:c.lazy(()=>x(()=>import("./react-BqFQCoTx.js"),__vite__mapDeps([0,1,2,3])))},{key:"dash",name:"dash.js",canPlay:f.dash,canEnablePIP:()=>!0,player:c.lazy(()=>x(()=>import("./react-DcLtm9rD.js"),__vite__mapDeps([4,1,2])))},{key:"mux",name:"Mux",canPlay:f.mux,canEnablePIP:()=>!0,player:c.lazy(()=>x(()=>import("./index-BzrmCGTQ.js"),__vite__mapDeps([5,1,3,2])))},{key:"youtube",name:"YouTube",canPlay:f.youtube,player:c.lazy(()=>x(()=>import("./react-CPQglt6-.js"),__vite__mapDeps([6,1])))},{key:"vimeo",name:"Vimeo",canPlay:f.vimeo,player:c.lazy(()=>x(()=>import("./react-BVa-Kt5H.js"),__vite__mapDeps([7,1])))},{key:"wistia",name:"Wistia",canPlay:f.wistia,canEnablePIP:()=>!0,player:c.lazy(()=>x(()=>import("./react-jOmLXxx6.js"),__vite__mapDeps([8,1])))},{key:"spotify",name:"Spotify",canPlay:f.spotify,canEnablePIP:()=>!1,player:c.lazy(()=>x(()=>import("./react-DA2MTumC.js"),__vite__mapDeps([9,1])))},{key:"twitch",name:"Twitch",canPlay:f.twitch,canEnablePIP:()=>!1,player:c.lazy(()=>x(()=>import("./react-DsC56ir5.js"),__vite__mapDeps([10,1])))},{key:"tiktok",name:"TikTok",canPlay:f.tiktok,canEnablePIP:()=>!1,player:c.lazy(()=>x(()=>import("./react-C6sEKgd_.js"),__vite__mapDeps([11,1])))},{key:"html",name:"html",canPlay:f.html,canEnablePIP:()=>!0,player:He}];var B=Ne;const We={width:"320px",height:"180px",volume:1,playbackRate:1,previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}"},q=v.forwardRef((e,t)=>{const{playing:l,pip:r}=e,i=e.activePlayer,a=c.useRef(null),o=c.useRef(!0);c.useEffect(()=>{var s,u;a.current&&(a.current.paused&&l===!0&&a.current.play(),!a.current.paused&&l===!1&&a.current.pause(),a.current.playbackRate=(s=e.playbackRate)!=null?s:1,a.current.volume=(u=e.volume)!=null?u:1)}),c.useEffect(()=>{var s,u,p,b,w;if(!(!a.current||!globalThis.document)){if(r&&!document.pictureInPictureElement)try{(u=(s=a.current).requestPictureInPicture)==null||u.call(s)}catch{}if(!r&&document.pictureInPictureElement)try{(b=(p=a.current).exitPictureInPicture)==null||b.call(p),(w=document.exitPictureInPicture)==null||w.call(document)}catch{}}},[r]);const h=s=>{var u,p;o.current=!0,(u=e.onReady)==null||u.call(e),(p=e.onLoadStart)==null||p.call(e,s)},g=s=>{var u,p;o.current&&(o.current=!1,(u=e.onStart)==null||u.call(e,s)),(p=e.onPlay)==null||p.call(e,s)};if(!i)return null;const y={};for(const s in e)s.startsWith("on")&&(y[s]=e[s]);return v.createElement(i,{...y,style:e.style,className:e.className,slot:e.slot,ref:c.useCallback(s=>{a.current=s,typeof t=="function"?t(s):t!==null&&(t.current=s)},[t]),src:e.src,crossOrigin:e.crossOrigin,preload:e.preload,controls:e.controls,muted:e.muted,autoPlay:e.autoPlay,loop:e.loop,playsInline:e.playsInline,config:e.config,onLoadStart:h,onPlay:g},e.children)});q.displayName="Player";var Fe=q;const Xe=c.lazy(()=>x(()=>import("./Preview-CTZfmtR3.js"),__vite__mapDeps([12,1]))),L=[],Ye=(e,t)=>{const l=i=>{for(const a of[...L,...e])if(i&&a.canPlay(i))return a;return t||null},r=v.forwardRef((i,a)=>{const o={...We,...i},{src:h,slot:g,className:y,style:s,width:u,height:p,fallback:b,wrapper:w}=o,[I,T]=c.useState(!!o.light);c.useEffect(()=>{o.light?T(!0):T(!1)},[o.light]);const S=k=>{var _;T(!1),(_=o.onClickPreview)==null||_.call(o,k)},R=k=>{if(!k)return null;const{light:_,playIcon:A,previewTabIndex:$,oEmbedUrl:O,previewAriaLabel:M}=o;return v.createElement(Xe,{src:k,light:_,playIcon:A,previewTabIndex:$,previewAriaLabel:M,oEmbedUrl:O,onClickPreview:S})},C=k=>{var _,A;const $=l(k);if(!$)return null;const{style:O,width:M,height:G,wrapper:z}=o,Z=(_=o.config)==null?void 0:_[$.key];return v.createElement(Fe,{...o,ref:a,activePlayer:(A=$.player)!=null?A:$,slot:z?void 0:g,className:z?void 0:y,style:z?{display:"block",width:"100%",height:"100%"}:{display:"block",width:M,height:G,...O},config:Z})},K=w??W,Q=b===!1?W:c.Suspense;return v.createElement(K,{slot:g,className:y,style:{width:u,height:p,...s}},v.createElement(Q,{fallback:b},I?R(h):C(h)))});return r.displayName="ReactPlayer",r.addCustomPlayer=i=>{L.push(i)},r.removeCustomPlayers=()=>{L.length=0},r.canPlay=i=>{if(i){for(const a of[...L,...e])if(a.canPlay(i))return!0}return!1},r.canEnablePIP=i=>{var a;if(i){for(const o of[...L,...e])if(o.canPlay(i)&&((a=o.canEnablePIP)!=null&&a.call(o)))return!0}return!1},r},W=({children:e})=>e,qe=B[B.length-1];var Ke=Ye(B,qe);const Qe=d.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  background-color: ${e=>e.theme.bgBackdrop};
  backdrop-filter: blur(4px);
  ${e=>le(e.$isOpen)};
  z-index: 60;
`,Ge=d.div`
  position: relative;
  width: min(100vw, calc(100vh * (16 / 9)));
  height: min(100vh, calc(100vw * (9 / 16)));
  aspect-ratio: 16 / 9;
  background-color: ${e=>e.theme.bgSecondary};
  ${e=>se(e.$isOpen)};

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
`,Ze=d.button`
  ${ce}

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
`,Je=d.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: ${e=>e.theme.colorText};
`,et=({isOpen:e,trailerUrl:t,trailerYouTubeId:l,onBackdrop:r,onClose:i,onExited:a})=>{const o=l?`https://youtube.com/watch?v=${l}`:t;return n.jsx(Qe,{onAnimationEnd:()=>{e||a()},$isOpen:e,onClick:r,children:n.jsxs(Ge,{$isOpen:e,onClick:h=>h.stopPropagation(),children:[o?n.jsx(Ke,{src:o,playing:!0}):n.jsx(Je,{children:"Video not found"}),n.jsx(Ze,{"aria-label":"Close video",onClick:i,children:n.jsx(U,{name:"CloseIcon"})})]})})},ot=({movie:e,isFetching:t,isLoading:l,isAboutMovie:r=!1,refetch:i})=>{const o=D(F)?.favorites.includes(e.id.toString())||!1,{onLike:h}=Le(e.id),[g,y]=c.useState(!1),[s,u]=c.useState(!1),p=t||l||!g,[b,w,I]=de(),T=()=>{i&&i()},S=()=>{w(!0),u(!0),document.body.style.overflow="hidden"},R=()=>{u(!1),document.body.style.overflow=""},C=()=>{u(!1),document.body.style.overflow=""};return n.jsx("section",{children:n.jsx(ue,{children:n.jsxs(ge,{children:[n.jsx(ve,{src:e.backdropUrl||"/images/moviePromo/error.jpg",alt:e.title,isFetching:t,isLoading:l,onImageLoadedChange:y}),n.jsxs(Pe,{$isAboutMovie:r,children:[n.jsxs(be,{children:[n.jsxs(we,{children:[e.tmdbRating?n.jsx(pe,{rating:e.tmdbRating}):null,n.jsx(Se,{movie:e})]}),n.jsx(_e,{$isAboutMovie:r,children:e.title}),n.jsx(ke,{$isAboutMovie:r,children:e.plot})]}),n.jsxs($e,{$isAboutMovie:r,children:[n.jsx(V,{"aria-label":"Show movie trailer",isDisabled:p,onClick:S,children:"Trailer"}),b&&n.jsx(et,{isOpen:s,trailerYouTubeId:e.trailerYoutubeId,trailerUrl:e.trailerUrl,onBackdrop:R,onClose:C,onExited:I}),r?null:n.jsx(Ee,{"aria-label":"About the movie",$iSdisabled:p,to:`/movie/${e.id}`,children:"About"}),n.jsx(Ie,{"aria-label":"Add movie to favorites",$isLiked:o,disabled:p,onClick:h,children:n.jsx(U,{name:"LikeIcon"})}),r?null:n.jsx(V,{"aria-label":"Show new random movie",onClick:T,isDisabled:p,kind:"secondary",children:n.jsx(U,{name:"UpdateIcon"})})]})]})]})})})};export{ot as M};
