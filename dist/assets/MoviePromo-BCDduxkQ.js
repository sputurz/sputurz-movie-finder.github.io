const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-DNB_43tF.js","assets/index-DNPM4ER3.js","assets/custom-media-element-Ce0vsE-t.js","assets/hls-D4QvIzvx.js","assets/react-BVfjVPSC.js","assets/index-BgHetAYT.js","assets/react-DExH4Jkd.js","assets/react-DZt_XpO9.js","assets/react-Bhg1VGnp.js","assets/react-BQgBRsoV.js","assets/react-CPvRGuHq.js","assets/react-Z4rNkycb.js","assets/Preview-CwL_6bOj.js"])))=>i.map(i=>d[i]);
import{B as H,g as J,k as ee,m as te,l as u,d as s,r as d,j as n,n as ne,o as P,v as b,L as ae,R as x,_ as g,p as oe,I as C,q as ie,w as re,x as le,y as se,a as z,z as ce,D as N,F as de,G as ue,C as fe,M as pe}from"./index-DNPM4ER3.js";import{u as ye}from"./useDeleteFavorite-CKKPMpgK.js";const U=u`
  ${H}
  ${J}
  ${ee}
  ${te}

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
`,me=s.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,he=s.img`
  opacity: ${({$isBusy:e})=>e?.1:1};
`,ge=({src:e,alt:t,isFetching:l,isLoading:i,onImageLoadedChange:o,className:a})=>{const[r,y]=d.useState(!1);d.useEffect(()=>{y(!1),o?.(!1)},[e,l,o]);const v=()=>{y(!0),o?.(!0)},m=l||i||!r;return n.jsxs(me,{className:a,children:[n.jsx(he,{$isBusy:m,src:e,alt:t,onLoad:v}),m&&n.jsx(ne,{})]})},ve=s.section`
  position: relative;
`,xe=s.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;

  ${P(u`
      grid-template-columns: 1fr minmax(0, calc(680 / 1280 * 100%));
      grid-template-areas: 'content image';
      align-items: start;
      gap: 0;
      padding-top: 32px;
    `)}
`,Pe=s(ge)`
  img {
    width: 100%;
    border-radius: 16px;
  }

  ${P(u`
      grid-area: image;
    `)}
`,be=s.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${P(u`
    grid-area: content;
    padding: 74px 20px 0 0;
    grid-column: 1;
    grid-row: 1;
  `)}

  ${({$isAboutMovie:e})=>!e&&P(u`
      height: 550px;
      justify-content: space-between;
    `)}
`,we=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${P(u`
    gap: 16px;
  `)}
`,_e=s.div`
  display: flex;
  gap: 16px;
  align-items: center;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

  ${b(u`
    > span {
      font-size: 18px;
      line-height: 24px;
    }
  `)}
`,ke=s.h2`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  ${b(u`
    font-size: 48px;
    line-height: 56px;
  `)}

  ${({$isAboutMovie:e})=>!e&&b(u`
      max-height: 120px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    `)}
`,Ee=s.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);

  ${b(u`
    font-size: 24px;
    line-height: 32px;
  `)}

  ${({$isAboutMovie:e})=>!e&&b(u`
      max-height: 96px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    `)}
`,Ie=s.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 16px;

  grid-template-columns: ${e=>e.$isAboutMovie?"1fr auto":"1fr auto auto"};

  & > button:first-child {
    grid-column: ${e=>e.$isAboutMovie?"span 1":"span 3"};
  }

  ${P(u``)}
`,Se=s.button`
  ${H}

  ${P(u``)}
`,$e=s.button`
  ${U}
  width: 68px;

  ${P(u``)}
`,Le=s(ae)`
  ${U}

  ${({$iSdisabled:e})=>e&&u`
      color: rgba(255, 255, 255, 0.5);
      pointer-events: none;
      background: #747474;
    `}
`,Te=s.button`
  ${U}
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
`,F=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,V=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,B=/\.(m3u8)($|\?)/i,je=/\.(mpd)($|\?)/i,Me=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,Ae=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,Re=/vimeo\.com\/(?!progressive_redirect).+/,Ce=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,ze=/open\.spotify\.com\/(\w+)\/(\w+)/i,Oe=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,Ue=/tiktok\.com\/(?:@[^/]+\/video\/)?(\d+)(?:\/([\w-]+))?/,T=(e,t)=>{if(Array.isArray(e)){for(const l of e)if(typeof l=="string"&&T(l,t)||T(l.src,t))return!0;return!1}return t(e)},h={html:e=>T(e,t=>F.test(t)||V.test(t)),hls:e=>T(e,t=>B.test(t)),dash:e=>T(e,t=>je.test(t)),mux:e=>Me.test(e),youtube:e=>Ae.test(e),vimeo:e=>Re.test(e)&&!V.test(e)&&!B.test(e),wistia:e=>Ce.test(e),spotify:e=>ze.test(e),twitch:e=>Oe.test(e),tiktok:e=>Ue.test(e)},Ve=x.forwardRef((e,t)=>{const l=F.test(`${e.src}`)?"audio":"video";return x.createElement(l,{...e,ref:t},e.children)});var Be=Ve;const De=[{key:"hls",name:"hls.js",canPlay:h.hls,canEnablePIP:()=>!0,player:d.lazy(()=>g(()=>import("./react-DNB_43tF.js"),__vite__mapDeps([0,1,2,3])))},{key:"dash",name:"dash.js",canPlay:h.dash,canEnablePIP:()=>!0,player:d.lazy(()=>g(()=>import("./react-BVfjVPSC.js"),__vite__mapDeps([4,1,2])))},{key:"mux",name:"Mux",canPlay:h.mux,canEnablePIP:()=>!0,player:d.lazy(()=>g(()=>import("./index-BgHetAYT.js"),__vite__mapDeps([5,1,3,2])))},{key:"youtube",name:"YouTube",canPlay:h.youtube,player:d.lazy(()=>g(()=>import("./react-DExH4Jkd.js"),__vite__mapDeps([6,1])))},{key:"vimeo",name:"Vimeo",canPlay:h.vimeo,player:d.lazy(()=>g(()=>import("./react-DZt_XpO9.js"),__vite__mapDeps([7,1])))},{key:"wistia",name:"Wistia",canPlay:h.wistia,canEnablePIP:()=>!0,player:d.lazy(()=>g(()=>import("./react-Bhg1VGnp.js"),__vite__mapDeps([8,1])))},{key:"spotify",name:"Spotify",canPlay:h.spotify,canEnablePIP:()=>!1,player:d.lazy(()=>g(()=>import("./react-BQgBRsoV.js"),__vite__mapDeps([9,1])))},{key:"twitch",name:"Twitch",canPlay:h.twitch,canEnablePIP:()=>!1,player:d.lazy(()=>g(()=>import("./react-CPvRGuHq.js"),__vite__mapDeps([10,1])))},{key:"tiktok",name:"TikTok",canPlay:h.tiktok,canEnablePIP:()=>!1,player:d.lazy(()=>g(()=>import("./react-Z4rNkycb.js"),__vite__mapDeps([11,1])))},{key:"html",name:"html",canPlay:h.html,canEnablePIP:()=>!0,player:Be}];var O=De;const He={width:"320px",height:"180px",volume:1,playbackRate:1,previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}"},W=x.forwardRef((e,t)=>{const{playing:l,pip:i}=e,o=e.activePlayer,a=d.useRef(null),r=d.useRef(!0);d.useEffect(()=>{var c,f;a.current&&(a.current.paused&&l===!0&&a.current.play(),!a.current.paused&&l===!1&&a.current.pause(),a.current.playbackRate=(c=e.playbackRate)!=null?c:1,a.current.volume=(f=e.volume)!=null?f:1)}),d.useEffect(()=>{var c,f,p,w,_;if(!(!a.current||!globalThis.document)){if(i&&!document.pictureInPictureElement)try{(f=(c=a.current).requestPictureInPicture)==null||f.call(c)}catch{}if(!i&&document.pictureInPictureElement)try{(w=(p=a.current).exitPictureInPicture)==null||w.call(p),(_=document.exitPictureInPicture)==null||_.call(document)}catch{}}},[i]);const y=c=>{var f,p;r.current=!0,(f=e.onReady)==null||f.call(e),(p=e.onLoadStart)==null||p.call(e,c)},v=c=>{var f,p;r.current&&(r.current=!1,(f=e.onStart)==null||f.call(e,c)),(p=e.onPlay)==null||p.call(e,c)};if(!o)return null;const m={};for(const c in e)c.startsWith("on")&&(m[c]=e[c]);return x.createElement(o,{...m,style:e.style,className:e.className,slot:e.slot,ref:d.useCallback(c=>{a.current=c,typeof t=="function"?t(c):t!==null&&(t.current=c)},[t]),src:e.src,crossOrigin:e.crossOrigin,preload:e.preload,controls:e.controls,muted:e.muted,autoPlay:e.autoPlay,loop:e.loop,playsInline:e.playsInline,config:e.config,onLoadStart:y,onPlay:v},e.children)});W.displayName="Player";var Ne=W;const Fe=d.lazy(()=>g(()=>import("./Preview-CwL_6bOj.js"),__vite__mapDeps([12,1]))),L=[],We=(e,t)=>{const l=o=>{for(const a of[...L,...e])if(o&&a.canPlay(o))return a;return t||null},i=x.forwardRef((o,a)=>{const r={...He,...o},{src:y,slot:v,className:m,style:c,width:f,height:p,fallback:w,wrapper:_}=r,[S,$]=d.useState(!!r.light);d.useEffect(()=>{r.light?$(!0):$(!1)},[r.light]);const Y=E=>{var k;$(!1),(k=r.onClickPreview)==null||k.call(r,E)},X=E=>{if(!E)return null;const{light:k,playIcon:j,previewTabIndex:I,oEmbedUrl:M,previewAriaLabel:A}=r;return x.createElement(Fe,{src:E,light:k,playIcon:j,previewTabIndex:I,previewAriaLabel:A,oEmbedUrl:M,onClickPreview:Y})},q=E=>{var k,j;const I=l(E);if(!I)return null;const{style:M,width:A,height:Q,wrapper:R}=r,Z=(k=r.config)==null?void 0:k[I.key];return x.createElement(Ne,{...r,ref:a,activePlayer:(j=I.player)!=null?j:I,slot:R?void 0:v,className:R?void 0:m,style:R?{display:"block",width:"100%",height:"100%"}:{display:"block",width:A,height:Q,...M},config:Z})},K=_??D,G=w===!1?D:d.Suspense;return x.createElement(K,{slot:v,className:m,style:{width:f,height:p,...c}},x.createElement(G,{fallback:w},S?X(y):q(y)))});return i.displayName="ReactPlayer",i.addCustomPlayer=o=>{L.push(o)},i.removeCustomPlayers=()=>{L.length=0},i.canPlay=o=>{if(o){for(const a of[...L,...e])if(a.canPlay(o))return!0}return!1},i.canEnablePIP=o=>{var a;if(o){for(const r of[...L,...e])if(r.canPlay(o)&&((a=r.canEnablePIP)!=null&&a.call(r)))return!0}return!1},i},D=({children:e})=>e,Ye=O[O.length-1];var Xe=We(O,Ye);const qe=s.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 60;
`,Ke=s.div`
  position: relative;
  width: min(100vw, calc(100vh * (16 / 9)));
  height: min(100vh, calc(100vw * (9 / 16)));
  aspect-ratio: 16 / 9;
  background-color: #393b3c;

  youtube-video {
    height: 100% !important;
    width: auto !important;
  }

  ${b(u`
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: calc(100% - 160px);
    max-width: 960px;
    height: unset;
  `)}
`,Ge=s.button`
  ${oe}

  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 0;
  border: none;

  svg {
    color: #000000;
    width: 16px;
    height: 16px;
  }

  ${b(u`
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

  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  color: #ffffff;
`,Qe=s.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #ffffff;
`,Ze=({trailerUrl:e,trailerYouTubeId:t,onBackdrop:l,onClose:i})=>{const o=t?`https://youtube.com/watch?v=${t}`:e;return n.jsx(qe,{onClick:l,children:n.jsxs(Ke,{onClick:a=>a.stopPropagation(),children:[o?n.jsx(Xe,{src:o}):n.jsx(Qe,{children:"Видео не найдено"}),n.jsx(Ge,{onClick:i,children:n.jsx(C,{name:"CloseIcon"})})]})})};function Je(e){const t=ie(),l=re({mutationFn:a=>le(a),async onSuccess(){t.invalidateQueries({queryKey:["me"]})}}),i=()=>{l.mutate(e.toString())},o=l.isPending;return{addFavoriteHandler:i,isPending:o}}function et(e){const t=se(),l=z(ce),i=z(N),{deleteFavoriteHandler:o,isPending:a}=ye(e),{addFavoriteHandler:r,isPending:y}=Je(e);return{onLike:()=>{if(!l){t(de());return}i?.favorites.includes(e.toString())?o():r()},isPending:a||y}}const tt=s.div`
  display: flex;
  gap: 16px;
  align-items: center;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

  ${b(u`
    > span {
      font-size: 18px;
      line-height: 24px;
    }
  `)}
`,nt=s.span``,at=s.span``,ot=s.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: calc((115 / 335) * 100%);
  ${P(u`
    max-width: calc((325 / 580) * 100%);
  `)}
`,it=({movie:e})=>n.jsxs(tt,{children:[n.jsx(nt,{children:e.releaseYear}),n.jsx(ot,{children:e.genres?.join(", ")||""}),n.jsx(at,{children:ue(e.runtime)})]}),st=({movie:e,isFetching:t,isLoading:l,isAboutMovie:i=!1,refetch:o})=>{const r=z(N)?.favorites.includes(e.id.toString())||!1,{onLike:y}=et(e.id),[v,m]=d.useState(!1),[c,f]=d.useState(!1),p=t||l||!v,w=()=>{o&&o()},_=()=>{f(!0),document.body.style.overflow="hidden"},S=()=>{f(!1),document.body.style.overflow=""},$=()=>{f(!1),document.body.style.overflow=""};return n.jsx(ve,{children:n.jsx(fe,{children:n.jsxs(xe,{children:[n.jsx(Pe,{src:e.backdropUrl||"/images/moviePromo/error.jpg",alt:e.title,isFetching:t,isLoading:l,onImageLoadedChange:m}),n.jsxs(be,{$isAboutMovie:i,children:[n.jsxs(we,{children:[n.jsxs(_e,{children:[e.tmdbRating?n.jsx(pe,{rating:e.tmdbRating}):null,n.jsx(it,{movie:e})]}),n.jsx(ke,{$isAboutMovie:i,children:e.title}),n.jsx(Ee,{$isAboutMovie:i,children:e.plot})]}),n.jsxs(Ie,{$isAboutMovie:i,children:[n.jsx(Se,{disabled:p,onClick:_,children:"Трейлер"}),c&&n.jsx(Ze,{trailerYouTubeId:e.trailerYoutubeId,trailerUrl:e.trailerUrl,onBackdrop:S,onClose:$}),i?null:n.jsx(Le,{$iSdisabled:p,to:`/movie/${e.id}`,children:"о фильме"}),n.jsx(Te,{$isLiked:r,disabled:p,onClick:y,children:n.jsx(C,{name:"LikeIcon"})}),i?null:n.jsx($e,{onClick:w,disabled:p,children:n.jsx(C,{name:"UpdateIcon"})})]})]})]})})})};export{st as M};
