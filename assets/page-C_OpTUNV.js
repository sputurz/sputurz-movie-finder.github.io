import{Q as v,B as m,D as b,F as y,G as j,A as w,v as o,l as c,d as h,y as N,p as P,j as r,n as $,z as F,H as E,E as I,C as M,I as R}from"./index-C2G7T-C2.js";import{V as k}from"./VisuallyHidden-jsbB543k.js";import{t as B,g as L,a as O}from"./dictionary-CsdWf1z5.js";import{M as C}from"./MovieCard-CbXDoGaL.js";import{B as T}from"./Button-xkvP5zo6.js";import"./useDeleteFavorite-DKEayNdX.js";import"./useMutation-CZcm_JsO.js";var Q=class extends v{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:m()})}getOptimisticResult(e){return e.behavior=m(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){const{state:i}=e,n=super.createResult(e,t),{isFetching:s,isRefetching:g,isError:u,isRefetchError:p}=n,a=i.fetchMeta?.fetchMore?.direction,l=u&&a==="forward",f=s&&a==="forward",d=u&&a==="backward",x=s&&a==="backward";return{...n,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:y(t,i.data),hasPreviousPage:b(t,i.data),isFetchNextPageError:l,isFetchingNextPage:f,isFetchPreviousPageError:d,isFetchingPreviousPage:x,isRefetchError:p&&!l&&!d,isRefetching:g&&!f&&!x}}};function S(e,t){return j(e,Q)}function z(e){return S({queryKey:["movies",e],queryFn:({pageParam:t=0})=>w.getMovies({...e,page:t}),getNextPageParam:(t,i)=>{const n=e.count??10;return t.length<n?void 0:i.length},initialPageParam:0,retry:0,gcTime:0,staleTime:0,refetchOnWindowFocus:!1})}const A=h.section`
  margin: 40px 0;

  ${o(c`
    margin: 64px 0 160px;
  `)}
`,V=h.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${o(c`
    gap: 64px;
  `)}

  button {
    align-self: center;
    background-color: ${e=>e.theme.bgBtnNext};

    ${o(c`
      width: 218px;
      background-color: ${e=>e.theme.bgBtnPrimary};
    `)}
  }
`,W=h.h1`
  ${k}
`,q=h(N)`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${e=>e.theme.colorText};
  display: flex;
  align-items: center;

  ${o(c`
    font-size: 48px;
    line-height: 56px;
  `)}

  svg {
    width: 32px;
    height: 32px;

    ${o(c`
      width: 40px;
      height: 40px;
    `)}
  }
`,D=h.ul`
  height: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${o(c`
    gap: 64px 40px;
    grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
  `)}
`,G=h.li`
  ${o(c`
    max-width: 224px;
  `)}
`,H=h.div`
  ${o(c`
    position: 'absolute',
      height: 1px,
      width: 100%;
      pointer-events: none;
  `)}
`;function K({onIntersect:e,disabled:t}){const i=P.useRef(null);return P.useEffect(()=>{if(t)return;const n=new IntersectionObserver(g=>{g[0].isIntersecting&&e()}),s=i.current;return s&&n.observe(s),()=>{s&&n.unobserve(s)}},[t,e]),r.jsx(H,{ref:i})}function re(){const e=$(F),[t]=E(),i=t.get("count")?Number(t.get("count")):10,n=t.get("title")||"",s=t.get("genre")||"",{data:g,error:u,fetchNextPage:p,hasNextPage:a,isFetchingNextPage:l}=z({count:i,title:n,genre:s});return u?r.jsxs(I,{children:["Error: ",u.message]}):g?r.jsx(A,{children:r.jsxs(M,{children:[r.jsx(W,{children:"Search for movies by specified filters"}),r.jsxs(V,{children:[s?r.jsxs(q,{"aria-label":"Back to genres page",to:"/genres",children:[r.jsx(R,{name:"LeftIcon"}),B(L(O,e,s)||s)]}):null,r.jsx(D,{children:g.pages.flat().map(f=>r.jsx(G,{children:r.jsx(C,{movie:f})},f.id))}),a?r.jsx(r.Fragment,{children:r.jsx(T,{"aria-label":"Show more",onClick:()=>p(),isLoading:!a||l,children:"Show more"})}):null,a&&r.jsx(K,{disabled:l,onIntersect:()=>p()})]})]})}):null}export{re as default};
