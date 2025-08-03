import{Q as m,i as P,h as y,b,c as M,A as j,v as a,l as o,d as c,B as w,L as N,r as v,j as s,e as R,E as k,C as E,I}from"./index-DNPM4ER3.js";import{V as S}from"./VisuallyHidden-CGK1gidK.js";import{t as $,g as F,a as C}from"./dictionarty-CsdWf1z5.js";import{M as O}from"./MovieCard-B7flfbH9.js";import"./useDeleteFavorite-CKKPMpgK.js";var T=class extends m{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:P()})}getOptimisticResult(e){return e.behavior=P(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){const{state:i}=e,r=super.createResult(e,t),{isFetching:n,isRefetching:h,isError:l,isRefetchError:u}=r,g=i.fetchMeta?.fetchMore?.direction,d=l&&g==="forward",f=n&&g==="forward",x=l&&g==="backward",p=n&&g==="backward";return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:b(t,i.data),hasPreviousPage:y(t,i.data),isFetchNextPageError:d,isFetchingNextPage:f,isFetchPreviousPageError:x,isFetchingPreviousPage:p,isRefetchError:u&&!d&&!x,isRefetching:h&&!f&&!p}}};function B(e,t){return M(e,T)}function L(e){return B({queryKey:["movies",e],queryFn:({pageParam:t=0})=>j.getMovies({...e,page:t}),getNextPageParam:(t,i)=>{const r=e.count??10;return t.length<r?void 0:i.length},initialPageParam:0,retry:0,gcTime:0,staleTime:0})}const Q=c.section`
  margin: 40px 0;

  ${a(o`
    margin: 64px 0 160px;
  `)}
`,V=c.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${a(o`
    gap: 64px;
  `)}
`,q=c.h1`
  ${S}
`,z=c(N)`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  display: flex;
  align-items: center;

  ${a(o`
    font-size: 48px;
    line-height: 56px;
  `)}

  svg {
    width: 32px;
    height: 32px;

    ${a(o`
      width: 40px;
      height: 40px;
    `)}
  }
`,A=c.ul`
  height: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${a(o`
    gap: 64px 40px;
    grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
  `)}
`,H=c.li`
  ${a(o`
    max-width: 224px;
  `)}
`,D=c.button`
  ${w}

  align-self: center;
  width: 100%;
  background-color: #6a5dc2;

  ${a(o`
    width: 218px;
    background-color: #67a5eb;
  `)}
`,G=c.div`
  ${a(o`
    position: 'absolute',
      height: 1px,
      width: 100%;
      pointer-events: none;
  `)}
`;function K({onIntersect:e,disabled:t}){const i=v.useRef(null);return v.useEffect(()=>{if(t)return;const r=new IntersectionObserver(h=>{h[0].isIntersecting&&e()}),n=i.current;return n&&r.observe(n),()=>{n&&r.unobserve(n)}},[t,e]),s.jsx(G,{ref:i})}const U="russian";function ee(){const[e]=R(),t=e.get("count")?Number(e.get("count")):10,i=e.get("title")||"",r=e.get("genre")||"",{data:n,error:h,fetchNextPage:l,hasNextPage:u,isFetchingNextPage:g}=L({count:t,title:i,genre:r});return h?s.jsxs(k,{children:["Ошибка: ",h.message]}):n?s.jsx(Q,{children:s.jsxs(E,{children:[s.jsx(q,{children:"Поиск фильмов по заданными фильтрам"}),s.jsxs(V,{children:[r?s.jsxs(z,{to:"/genres",children:[s.jsx(I,{name:"LeftIcon"}),$(F(C,U,r)||r)]}):null,s.jsx(A,{children:n.pages.flat().map(d=>s.jsx(H,{children:s.jsx(O,{movie:d})},d.id))}),u?s.jsx(D,{onClick:()=>l(),disabled:!u||g,children:"Показать ещё"}):null,u&&s.jsx(K,{disabled:g,onIntersect:()=>l()})]})]})}):null}export{ee as default};
