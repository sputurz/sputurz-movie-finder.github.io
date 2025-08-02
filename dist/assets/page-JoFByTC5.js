import{Q as b,i as m,h as M,b as j,c as w,A as N,v as a,l as o,d as c,B as R,L as k,r as y,j as s,e as E,E as I,C as S,I as $}from"./index-J5vA05xB.js";import{V as F}from"./VisuallyHidden-DzlT0GIl.js";import{t as C,g as O,a as T}from"./dictionarty-CsdWf1z5.js";import{M as B}from"./MovieCard-DzEJGqmI.js";import"./useDeleteFavorite-BZCgDi8b.js";var L=class extends b{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:m()})}getOptimisticResult(e){return e.behavior=m(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var P,v;const{state:i}=e,r=super.createResult(e,t),{isFetching:n,isRefetching:h,isError:l,isRefetchError:u}=r,g=(v=(P=i.fetchMeta)==null?void 0:P.fetchMore)==null?void 0:v.direction,d=l&&g==="forward",f=n&&g==="forward",x=l&&g==="backward",p=n&&g==="backward";return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:j(t,i.data),hasPreviousPage:M(t,i.data),isFetchNextPageError:d,isFetchingNextPage:f,isFetchPreviousPageError:x,isFetchingPreviousPage:p,isRefetchError:u&&!d&&!x,isRefetching:h&&!f&&!p}}};function Q(e,t){return w(e,L)}function V(e){return Q({queryKey:["movies",e],queryFn:({pageParam:t=0})=>N.getMovies({...e,page:t}),getNextPageParam:(t,i)=>{const r=e.count??10;return t.length<r?void 0:i.length},initialPageParam:0,retry:0,gcTime:0,staleTime:0})}const q=c.section`
  margin: 40px 0;

  ${a(o`
    margin: 64px 0 160px;
  `)}
`,z=c.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${a(o`
    gap: 64px;
  `)}
`,A=c.h1`
  ${F}
`,H=c(k)`
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
`,D=c.ul`
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
`,G=c.li`
  ${a(o`
    max-width: 224px;
  `)}
`,K=c.button`
  ${R}

  align-self: center;
  width: 100%;
  background-color: #6a5dc2;

  ${a(o`
    width: 218px;
    background-color: #67a5eb;
  `)}
`,U=c.div`
  ${a(o`
    position: 'absolute',
      height: 1px,
      width: 100%;
      pointer-events: none;
  `)}
`;function W({onIntersect:e,disabled:t}){const i=y.useRef(null);return y.useEffect(()=>{if(t)return;const r=new IntersectionObserver(h=>{h[0].isIntersecting&&e()}),n=i.current;return n&&r.observe(n),()=>{n&&r.unobserve(n)}},[t,e]),s.jsx(U,{ref:i})}const J="russian";function se(){const[e]=E(),t=e.get("count")?Number(e.get("count")):10,i=e.get("title")||"",r=e.get("genre")||"",{data:n,error:h,fetchNextPage:l,hasNextPage:u,isFetchingNextPage:g}=V({count:t,title:i,genre:r});return h?s.jsxs(I,{children:["Ошибка: ",h.message]}):n?s.jsx(q,{children:s.jsxs(S,{children:[s.jsx(A,{children:"Поиск фильмов по заданными фильтрам"}),s.jsxs(z,{children:[r?s.jsxs(H,{to:"/genres",children:[s.jsx($,{name:"LeftIcon"}),C(O(T,J,r)||r)]}):null,s.jsx(D,{children:n.pages.flat().map(d=>s.jsx(G,{children:s.jsx(B,{movie:d})},d.id))}),u?s.jsx(K,{onClick:()=>l(),disabled:!u||g,children:"Показать ещё"}):null,u&&s.jsx(W,{disabled:g,onIntersect:()=>l()})]})]})}):null}export{se as default};
