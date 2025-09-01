import{y as D,d as p,z as G,v as g,l as x,B as O,W as H,X as Q,j as s,Y as $,Z as j,$ as M,o as _,m as A,a0 as U,I as f,a1 as J,a2 as X,a3 as Y,a4 as E,a5 as ee,a as T,a6 as re,r as y,F as oe,G as te}from"./index-B0ssCld1.js";import{u as B}from"./useMutation-IwkBrr-C.js";import{L as ne,R as se}from"./Movie-BaGhbDUR.js";import{B as k}from"./Button-D5LuHD2x.js";const ie=p.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: env(safe-area-inset-top, 20px);
  z-index: 60;
  background-color: ${e=>e.theme.bgBackdrop};
  backdrop-filter: blur(4px);
  ${e=>D(e.$isOpen)};
`,ae=p.div`
  box-shadow: 0px 0px 80px 0px ${e=>e.theme.boxShadows};
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  margin: 20px;
  width: 100%;
  max-height: calc(100vh - 40px);
  z-index: 1;
  ${e=>G(e.$isOpen)};

  ${g(x`
      width: 420px;
      margin: 20px auto;
    `)}
`,ce=p.div`
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${e=>e.theme.bgBody};
  color: ${e=>e.theme.colorModal};
  width: 100%;
  height: 100%;
  padding: 64px 20px 32px;
  overflow-y: auto;

  a {
    height: 30px;
    padding: 0;

    ${g(x`
        height: 35px;
      `)}
  }

  ${g(x`
      padding: 64px 40px;
    `)}
`,le=p.button`
  ${O}

  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: ${e=>e.theme.colorModal};

  &:hover {
    opacity: 0.5;
  }
`,de=p.button`
  ${O}

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background-color: transparent;
  width: 48px;
  height: 48px;
  overflow: unset;
  color: ${e=>e.theme.colorModal};

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.5;
  }

  ${g(x`
    color: ${e=>e.theme.colorModalBtnClose};
    border-radius: 50%;
    background-color: ${e=>e.theme.bgPrimary};
    top: 0;
    right: -72px;
  `)}
`,ue=p.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  padding-top: 32px;

  ${g(x`
    padding-top: 40px;
  `)}
`,pe=p.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  padding: 24px 0;
`,he=p.label`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  & input,
  & textarea {
    ${H}

    background-color: ${e=>e.theme.bgInput};
    width: 100%;
    border: 1px solid
      ${e=>e.$isError?e.theme.brdrInputError:e.theme.brdrInput};
    border-radius: 8px;
    padding: 16px 36px 16px 52px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: ${e=>e.theme.colorInput};

    /* Стили для автозаполнения в WebKit браузерах (Chrome, Safari, Edge) */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 1000px ${e=>e.theme.bgInput} inset !important;
      -webkit-text-fill-color: ${e=>e.theme.colorInput} !important;
      border-color: ${e=>e.theme.brdrInputAutofill};
      transition: background-color 5000s ease-in-out 0s;
    }

    /* Стили для автозаполнения в Firefox, и стили для современных браузеров */
    &:-moz-autofill,
    &:-moz-autofill:hover,
    &:-moz-autofill:focus,
    &:autofill,
    &:autofill:hover,
    &:autofill:focus {
      background-color: ${e=>e.theme.bgInput} !important;
      color: ${e=>e.theme.colorInput} !important;
      border-color: ${e=>e.theme.brdrInputAutofill};
    }
  }

  & > input::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: ${e=>e.theme.colorInput40};
  }

  &:focus-within > input,
  &:focus-within > textarea {
    outline: none;
    border-color: ${e=>e.theme.brdrInputHover};
  }

  &:hover > input,
  &:hover > textarea {
    border-color: ${e=>e.theme.brdrInputHover} !important;
  }

  & > svg {
    ${Q}

    color: ${e=>e.$isError?e.theme.colorInputError:e.theme.colorInput40};
    position: absolute;
    width: 24px;
    height: 24px;
    top: 16px;
    left: 16px;
  }

  &:hover > svg,
  &:focus-within > svg {
    color: ${e=>e.theme.colorInputHover};
  }
`,fe=p.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${e=>e.theme.colorInputError};
`,m=({children:e,isError:n,errorMessage:o})=>s.jsxs(he,{$isError:n,children:[e,o&&s.jsx(fe,{children:o})]}),me=p.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 32px 0 24px;

  ${g(x`
    padding-top: 40px;
  `)}
`,ge=p.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,xe=p.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${e=>e.theme.colorError};
`,I=(e,n,o)=>{if(e&&"reportValidity"in e){const r=$(o,n);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},S=(e,n)=>{for(const o in n.fields){const r=n.fields[o];r&&r.ref&&"reportValidity"in r.ref?I(r.ref,o,e):r&&r.refs&&r.refs.forEach(a=>I(a,o,e))}},P=(e,n)=>{n.shouldUseNativeValidation&&S(e,n);const o={};for(const r in e){const a=$(n.fields,r),c=Object.assign(e[r]||{},{ref:a&&a.ref});if(ye(n.names||Object.keys(e),r)){const t=Object.assign({},$(o,r));j(t,"root",c),j(o,r,t)}else j(o,r,c)}return o},ye=(e,n)=>{const o=z(n);return e.some(r=>z(r).match(`^${o}\\.\\d+`))};function z(e){return e.replace(/\]|\[/g,"")}function F(e,n,o){function r(i,l){var d;Object.defineProperty(i,"_zod",{value:i._zod??{},enumerable:!1}),(d=i._zod).traits??(d.traits=new Set),i._zod.traits.add(e),n(i,l);for(const h in t.prototype)h in i||Object.defineProperty(i,h,{value:t.prototype[h].bind(i)});i._zod.constr=t,i._zod.def=l}const a=o?.Parent??Object;class c extends a{}Object.defineProperty(c,"name",{value:e});function t(i){var l;const d=o?.Parent?new c:this;r(d,i),(l=d._zod).deferred??(l.deferred=[]);for(const h of d._zod.deferred)h();return d}return Object.defineProperty(t,"init",{value:r}),Object.defineProperty(t,Symbol.hasInstance,{value:i=>o?.Parent&&i instanceof o.Parent?!0:i?._zod?.traits?.has(e)}),Object.defineProperty(t,"name",{value:e}),t}class be extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}const we={};function R(e){return we}function ve(e,n){return typeof n=="bigint"?n.toString():n}const L=Error.captureStackTrace?Error.captureStackTrace:(...e)=>{};function w(e){return typeof e=="string"?e:e?.message}function V(e,n,o){const r={...e,path:e.path??[]};if(!e.message){const a=w(e.inst?._zod.def?.error?.(e))??w(n?.error?.(e))??w(o.customError?.(e))??w(o.localeError?.(e))??"Invalid input";r.message=a}return delete r.inst,delete r.continue,n?.reportInput||delete r.input,r}const N=(e,n)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:n,enumerable:!1}),Object.defineProperty(e,"message",{get(){return JSON.stringify(n,ve,2)},enumerable:!0}),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},je=F("$ZodError",N),Z=F("$ZodError",N,{Parent:Error}),$e=e=>(n,o,r,a)=>{const c=r?Object.assign(r,{async:!1}):{async:!1},t=n._zod.run({value:o,issues:[]},c);if(t instanceof Promise)throw new be;if(t.issues.length){const i=new(a?.Err??e)(t.issues.map(l=>V(l,c,R())));throw L(i,a?.callee),i}return t.value},Ee=$e(Z),Se=e=>async(n,o,r,a)=>{const c=r?Object.assign(r,{async:!0}):{async:!0};let t=n._zod.run({value:o,issues:[]},c);if(t instanceof Promise&&(t=await t),t.issues.length){const i=new(a?.Err??e)(t.issues.map(l=>V(l,c,R())));throw L(i,a?.callee),i}return t.value},ke=Se(Z);function C(e,n){try{var o=e()}catch(r){return n(r)}return o&&o.then?o.then(void 0,n):o}function Ie(e,n){for(var o={};e.length;){var r=e[0],a=r.code,c=r.message,t=r.path.join(".");if(!o[t])if("unionErrors"in r){var i=r.unionErrors[0].errors[0];o[t]={message:i.message,type:i.code}}else o[t]={message:c,type:a};if("unionErrors"in r&&r.unionErrors.forEach(function(h){return h.errors.forEach(function(u){return e.push(u)})}),n){var l=o[t].types,d=l&&l[r.code];o[t]=M(t,n,o,a,d?[].concat(d,r.message):r.message)}e.shift()}return o}function Pe(e,n){for(var o={};e.length;){var r=e[0],a=r.code,c=r.message,t=r.path.join(".");if(!o[t])if(r.code==="invalid_union"){var i=r.errors[0][0];o[t]={message:i.message,type:i.code}}else o[t]={message:c,type:a};if(r.code==="invalid_union"&&r.errors.forEach(function(h){return h.forEach(function(u){return e.push(u)})}),n){var l=o[t].types,d=l&&l[r.code];o[t]=M(t,n,o,a,d?[].concat(d,r.message):r.message)}e.shift()}return o}function W(e,n,o){if(o===void 0&&(o={}),function(r){return"_def"in r&&typeof r._def=="object"&&"typeName"in r._def}(e))return function(r,a,c){try{return Promise.resolve(C(function(){return Promise.resolve(e[o.mode==="sync"?"parse":"parseAsync"](r,n)).then(function(t){return c.shouldUseNativeValidation&&S({},c),{errors:{},values:o.raw?Object.assign({},r):t}})},function(t){if(function(i){return Array.isArray(i?.issues)}(t))return{values:{},errors:P(Ie(t.errors,!c.shouldUseNativeValidation&&c.criteriaMode==="all"),c)};throw t}))}catch(t){return Promise.reject(t)}};if(function(r){return"_zod"in r&&typeof r._zod=="object"}(e))return function(r,a,c){try{return Promise.resolve(C(function(){return Promise.resolve((o.mode==="sync"?Ee:ke)(e,r,n)).then(function(t){return c.shouldUseNativeValidation&&S({},c),{errors:{},values:o.raw?Object.assign({},r):t}})},function(t){if(function(i){return i instanceof je}(t))return{values:{},errors:P(Pe(t.issues,!c.shouldUseNativeValidation&&c.criteriaMode==="all"),c)};throw t}))}catch(t){return Promise.reject(t)}};throw new Error("Invalid input: not a Zod schema")}const ze=()=>{const e=_(),n=A(),{register:o,handleSubmit:r,formState:{errors:a},reset:c}=U({resolver:W(ne)}),t=B({mutationFn:J,async onSuccess(){const i=await X();e(Y(i)),n.invalidateQueries({queryKey:["me"]}),e(E()),c()}});return s.jsxs(me,{onSubmit:r(({email:i,password:l})=>{t.mutate({email:i,password:l})}),children:[s.jsxs(ge,{children:[s.jsxs(m,{errorMessage:a.email?.message,isError:!!a.email,children:[s.jsx(f,{name:"MailIcon"}),s.jsx("input",{type:"text",placeholder:"E-mail",...o("email"),autoComplete:"email"})]}),s.jsxs(m,{errorMessage:a.password?.message,isError:!!a.password,children:[s.jsx(f,{name:"PasswordIcon"}),s.jsx("input",{type:"password",placeholder:"Password",...o("password"),autoComplete:"current-password"})]})]}),s.jsx(k,{isLoading:t.isPending,type:"submit",kind:"auth",children:"Login"}),t.error&&s.jsx(xe,{children:t.error.message})]})},Ce=p.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 32px 0 24px;

  ${g(x`
    padding-top: 40px;
  `)}
`,Oe=p.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${e=>e.theme.colorModal};
  text-align: center;
`,Me=p.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,_e=p.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${e=>e.theme.colorError};
`,Ae=({onSuccess:e})=>{const n=A(),{register:o,handleSubmit:r,formState:{errors:a},reset:c}=U({resolver:W(se)}),t=B({mutationFn:ee,async onSuccess(){n.invalidateQueries({queryKey:["login"]}),e(),c()}});return s.jsxs(Ce,{onSubmit:r(({email:i,password:l,name:d,surname:h})=>{t.mutate({email:i,password:l,name:d,surname:h})}),children:[s.jsx(Oe,{children:"Create a new account"}),s.jsxs(Me,{children:[s.jsxs(m,{errorMessage:a.email?.message,isError:!!a.email,children:[s.jsx(f,{name:"MailIcon"}),s.jsx("input",{type:"text",placeholder:"E-mail",autoComplete:"email",...o("email")})]}),s.jsxs(m,{errorMessage:a.name?.message,isError:!!a.name,children:[s.jsx(f,{name:"UserIcon"}),s.jsx("input",{type:"text",placeholder:"Name",autoComplete:"given-name",...o("name")})]}),s.jsxs(m,{errorMessage:a.surname?.message,isError:!!a.surname,children:[s.jsx(f,{name:"UserIcon"}),s.jsx("input",{type:"text",placeholder:"Surname",autoComplete:"family-name",...o("surname")})]}),s.jsxs(m,{errorMessage:a.password?.message,isError:!!a.password,children:[s.jsx(f,{name:"PasswordIcon"}),s.jsx("input",{type:"password",placeholder:"Password",autoComplete:"new-password",...o("password")})]}),s.jsxs(m,{errorMessage:a.confirmPassword?.message,isError:!!a.confirmPassword,children:[s.jsx(f,{name:"PasswordIcon"}),s.jsx("input",{type:"password",placeholder:"Confirm password",autoComplete:"new-password",...o("confirmPassword")})]})]}),s.jsx(k,{isLoading:t.isPending,type:"submit",kind:"auth",children:"Sign Up"}),t.error&&s.jsx(_e,{children:t.error.message})]})},Ue=()=>{const e=_(),n=T(re),[o,r]=y.useState("auth"),[a,c]=y.useState(!1),t=()=>{r(u=>u==="register"?"auth":"register")},i=()=>{e(E())},l=u=>{u.target===u.currentTarget&&i()},d=()=>{c(!0),r("auth")},h=()=>{c(!1)};return y.useEffect(()=>{const u=b=>{b.key==="Escape"&&(e(E()),r("auth"))};return n?(document.body.style.overflow="hidden",window.addEventListener("keydown",u)):document.body.style.overflow="",()=>{window.removeEventListener("keydown",u),document.body.style.overflow=""}},[n,e]),{isOpen:n,authType:o,toggleAuthType:t,closeModal:i,handleBackdropClick:l,isRegisterSuccess:a,onSuccessRegister:d,onSuccessBtnClick:h}};function Le({onExitComplete:e}){const n=T(oe),{isOpen:o,authType:r,toggleAuthType:a,closeModal:c,handleBackdropClick:t,isRegisterSuccess:i,onSuccessRegister:l,onSuccessBtnClick:d}=Ue(),h=y.useRef(null),[u,b]=y.useState(!1);y.useEffect(()=>{o||b(!0)},[o]);const q=()=>{u&&(b(!1),e?.())},K=v=>{u||t(v)};return s.jsx(ie,{onClick:K,onAnimationEnd:q,$isOpen:!u&&o,children:s.jsx(ae,{$isOpen:!u&&o,onClick:v=>v.stopPropagation(),children:s.jsxs(ce,{children:[s.jsx(te,{src:n=="dark"?"/logoBlack.svg":"/logoWhite.svg",ref:h}),i?s.jsxs(s.Fragment,{children:[s.jsx(ue,{children:"Sign Up succsess!"}),s.jsx(pe,{children:"Use your e-mail to Log In"}),s.jsx(k,{onClick:d,kind:"auth",children:"Log In"})]}):s.jsxs(s.Fragment,{children:[r==="register"?s.jsx(Ae,{onSuccess:l}):s.jsx(ze,{}),s.jsx(le,{onClick:a,"aria-label":r==="register"?"Go to Log In":"Go to Sing Up",children:r==="register"?"Already have an account?":" Sign Up"})]}),s.jsx(de,{onClick:c,"aria-label":"Close form",children:s.jsx(f,{name:"CloseIcon"})})]})})})}export{Le as default};
