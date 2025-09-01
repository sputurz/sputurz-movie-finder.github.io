import{l as o,a7 as s,a8 as l,d as b,j as n,g as m}from"./index-B0ssCld1.js";const e=o`
  ${l}

  border: 1px solid ${r=>r.theme.brdrBtnPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 22px;
  background-color: ${r=>r.theme.bgBtnPrimary};
  border-radius: 28px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: ${r=>r.theme.colorBtnPrimary};
  user-select: none;
  min-height: 58px;
  width: 100%;

  &:focus-visible,
  &:hover {
    background-color: ${r=>r.theme.bgBtnPrimaryHover};
  }

  &:disabled {
    background-color: ${r=>r.theme.bgBtnPrimaryDisabled};
    pointer-events: none;
  }
`,h=o`
  ${e}

  &:disabled {
    background-color: ${r=>r.theme.bgBtnAuthDisabled};
  }
`,y=o`
  ${e}
  ${s("color, border-color, background-color")}

  color: ${r=>r.theme.colorBtnSecondary};
  background-color: ${r=>r.theme.bgBtnSecondary};
  border-color: ${r=>r.theme.brdrBtnSecondary};

  &:focus-visible,
  &:hover {
    color: ${r=>r.theme.colorBtnSecondaryHover};
    background-color: ${r=>r.theme.bgBtnSecondaryHover};
    border-color: ${r=>r.theme.brdrBtnSecondaryHover};
  }

  &:disabled {
    background-color: ${r=>r.theme.bgBtnSecondaryDisabled};
  }
`,g={primary:e,secondary:y,auth:h},u=b.button`
  ${({$kind:r})=>g[r||"primary"]}

  position: relative;
`,$=({children:r,kind:a="primary",isLoading:t,isDisabled:c=t,type:d="button",onClick:i})=>n.jsx(u,{disabled:c,type:d,$kind:a,onClick:i,children:t?n.jsx(m,{}):r});export{$ as B,y as a};
