import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as l}from"./index-BKyFwriW.js";import{c as x,T as B}from"./ThemeProvider-BpExdF7_.js";import"./_commonjsHelpers-CqkleIqs.js";const $="_container_3glzp_1",ee="_fullWidth_3glzp_7",re="_wrapper_3glzp_11",ae="_checkbox_3glzp_17",te="_checkmark_3glzp_26",le="_indeterminate_3glzp_60",se="_disabled_3glzp_74",oe="_label_3glzp_83",ce="_small_3glzp_96",ie="_large_3glzp_113",ne="_error_3glzp_131",de="_helperText_3glzp_146",r={container:$,fullWidth:ee,wrapper:re,checkbox:ae,checkmark:te,indeterminate:le,disabled:se,label:oe,small:ce,large:ie,error:ne,helperText:de},a=l.forwardRef(({size:t="medium",label:k,error:u=!1,helperText:f,indeterminate:b=!1,fullWidth:g=!1,className:G,disabled:_,id:J,...K},Q)=>{const T=J||l.useId(),s=l.useRef(null);l.useImperativeHandle(Q,()=>s.current,[]),l.useEffect(()=>{s.current&&(s.current.indeterminate=b)},[b]);const X=x(r.checkbox,r[t],{[r.error]:u,[r.disabled]:_,[r.fullWidth]:g,[r.indeterminate]:b},G),Z=x(r.container,{[r.fullWidth]:g});return e.jsxs("div",{className:Z,children:[e.jsxs("div",{className:r.wrapper,children:[e.jsx("input",{ref:s,type:"checkbox",id:T,disabled:_,"aria-invalid":u,className:X,...K}),e.jsx("div",{className:r.checkmark}),k&&e.jsx("label",{htmlFor:T,className:r.label,children:k})]}),f&&e.jsx("div",{className:x(r.helperText,{[r.error]:u}),children:f})]})});a.displayName="Checkbox";a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"The size of the checkbox",defaultValue:{value:"'medium'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label for the checkbox"},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display below the checkbox"},indeterminate:{required:!1,tsType:{name:"boolean"},description:"If true, the checkbox will be indeterminate",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If true, the checkbox will take up the full width of its container",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const be={title:"Basic/Checkbox",component:a,decorators:[t=>e.jsx(B,{children:e.jsx(t,{})})],parameters:{docs:{description:{component:"A versatile checkbox component that supports various sizes and states."}}},argTypes:{size:{control:"select",options:["small","medium","large"],description:"The size of the checkbox."},label:{control:"text",description:"The label for the checkbox."},error:{control:"boolean",description:"If true, the checkbox will be displayed in an error state."},helperText:{control:"text",description:"Helper text to display below the checkbox."},indeterminate:{control:"boolean",description:"If true, the checkbox will be in an indeterminate state."},fullWidth:{control:"boolean",description:"If true, the checkbox will take up the full width of its container."},disabled:{control:"boolean",description:"If true, the checkbox will be disabled."}}},o={args:{label:"Checkbox"}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{size:"small",label:"Small checkbox"}),e.jsx(a,{size:"medium",label:"Medium checkbox"}),e.jsx(a,{size:"large",label:"Large checkbox"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Unchecked"}),e.jsx(a,{label:"Checked",defaultChecked:!0}),e.jsx(a,{label:"Indeterminate",indeterminate:!0}),e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled checked",disabled:!0,defaultChecked:!0}),e.jsx(a,{label:"Disabled indeterminate",disabled:!0,indeterminate:!0})]})},n={args:{label:"Terms and Conditions",helperText:"Please read and accept the terms and conditions"}},d={args:{label:"Accept terms",error:!0,helperText:"You must accept the terms to continue"}},h={args:{label:"Full width checkbox",helperText:"This checkbox takes up the full width",fullWidth:!0}},p={args:{label:e.jsxs("span",{children:["I agree to the"," ",e.jsx("a",{href:"#",style:{color:"var(--phork-accent-color, #0060ce)"},children:"terms and conditions"})]})}},m={decorators:[t=>e.jsx(B,{themeId:"dark",children:e.jsx("div",{style:{padding:"24px",background:"#333"},children:e.jsx(t,{})})})],args:{label:"Dark theme checkbox"}};var v,y,j;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox'
  }
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var z,C,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Checkbox size="small" label="Small checkbox" />
      <Checkbox size="medium" label="Medium checkbox" />
      <Checkbox size="large" label="Large checkbox" />
    </div>
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var D,I,S;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled indeterminate />
    </div>
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var W,N,R;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Terms and Conditions',
    helperText: 'Please read and accept the terms and conditions'
  }
}`,...(R=(N=n.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var H,q,E;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms',
    error: true,
    helperText: 'You must accept the terms to continue'
  }
}`,...(E=(q=d.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var L,F,P;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Full width checkbox',
    helperText: 'This checkbox takes up the full width',
    fullWidth: true
  }
}`,...(P=(F=h.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var M,V,A;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: <span>
        I agree to the{' '}
        <a href="#" style={{
        color: 'var(--phork-accent-color, #0060ce)'
      }}>
          terms and conditions
        </a>
      </span>
  }
}`,...(A=(V=p.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var O,U,Y;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  decorators: [Story => <ThemeProvider themeId="dark">
        <div style={{
      padding: '24px',
      background: '#333'
    }}>
          <Story />
        </div>
      </ThemeProvider>],
  args: {
    label: 'Dark theme checkbox'
  }
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const xe=["Default","Sizes","States","WithHelperText","WithError","FullWidth","WithHTMLLabel","DarkTheme"];export{m as DarkTheme,o as Default,h as FullWidth,c as Sizes,i as States,d as WithError,p as WithHTMLLabel,n as WithHelperText,xe as __namedExportsOrder,be as default};
