import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as T}from"./index-BKyFwriW.js";import{c as h,T as K}from"./ThemeProvider-BpExdF7_.js";import"./_commonjsHelpers-CqkleIqs.js";const ae="_container_1ump0_1",re="_fullWidth_1ump0_7",le="_wrapper_1ump0_11",oe="_radio_1ump0_17",se="_circle_1ump0_26",te="_disabled_1ump0_60",ie="_label_1ump0_69",de="_small_1ump0_82",ne="_large_1ump0_92",ce="_error_1ump0_103",pe="_helperText_1ump0_120",r={container:ae,fullWidth:re,wrapper:le,radio:oe,circle:se,disabled:te,label:ie,small:de,large:ne,error:ce,helperText:pe},a=T.forwardRef(({size:l="medium",label:f,error:u=!1,helperText:b,fullWidth:x=!1,className:Q,disabled:v,id:X,...Y},Z)=>{const g=X||T.useId(),$=h(r.radio,r[l],{[r.error]:u,[r.disabled]:v,[r.fullWidth]:x},Q),ee=h(r.container,{[r.fullWidth]:x});return e.jsxs("div",{className:ee,children:[e.jsxs("div",{className:r.wrapper,children:[e.jsx("input",{ref:Z,type:"radio",id:g,disabled:v,"aria-invalid":u,className:$,...Y}),e.jsx("div",{className:r.circle}),f&&e.jsx("label",{htmlFor:g,className:r.label,children:f})]}),b&&e.jsx("div",{className:h(r.helperText,{[r.error]:u}),children:b})]})});a.displayName="Radio";a.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"The size of the radio",defaultValue:{value:"'medium'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label for the radio"},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display below the radio"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If true, the radio will take up the full width of its container",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const be={title:"Basic/Radio",component:a,decorators:[l=>e.jsx(K,{children:e.jsx(l,{})})],parameters:{docs:{description:{component:"A versatile radio component that supports various sizes and states."}}},argTypes:{size:{control:"select",options:["small","medium","large"],description:"The size of the radio."},label:{control:"text",description:"The label for the radio."},error:{control:"boolean",description:"If true, the radio will be displayed in an error state."},helperText:{control:"text",description:"Helper text to display below the radio."},fullWidth:{control:"boolean",description:"If true, the radio will take up the full width of its container."},disabled:{control:"boolean",description:"If true, the radio will be disabled."}}},o={args:{label:"Radio option",name:"default"}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{size:"small",label:"Small radio",name:"size",value:"small"}),e.jsx(a,{size:"medium",label:"Medium radio",name:"size",value:"medium"}),e.jsx(a,{size:"large",label:"Large radio",name:"size",value:"large"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Unchecked",name:"states",value:"unchecked"}),e.jsx(a,{label:"Checked",name:"states",value:"checked",defaultChecked:!0}),e.jsx(a,{label:"Disabled",name:"states",value:"disabled",disabled:!0}),e.jsx(a,{label:"Disabled checked",name:"states",value:"disabled-checked",disabled:!0,defaultChecked:!0})]})},i={args:{label:"Select option",helperText:"Additional information about this option",name:"helper"}},d={args:{label:"Invalid option",error:!0,helperText:"Please select a valid option",name:"error"}},n={args:{label:"Full width radio",helperText:"This radio takes up the full width",fullWidth:!0,name:"fullwidth"}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{name:"group",value:"option1",label:"Option 1",helperText:"Description for option 1"}),e.jsx(a,{name:"group",value:"option2",label:"Option 2",helperText:"Description for option 2"}),e.jsx(a,{name:"group",value:"option3",label:"Option 3",helperText:"Description for option 3"})]})},p={args:{label:e.jsxs("span",{children:["I agree to receive"," ",e.jsx("a",{href:"#",style:{color:"var(--phork-accent-color, #0060ce)"},children:"promotional emails"})]}),name:"html-label"}},m={decorators:[l=>e.jsx(K,{themeId:"dark",children:e.jsx("div",{style:{padding:"24px",background:"#333"},children:e.jsx(l,{})})})],args:{label:"Dark theme radio",name:"dark-theme"}};var _,k,y;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Radio option',
    name: 'default'
  }
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var j,R,D;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Radio size="small" label="Small radio" name="size" value="small" />
      <Radio size="medium" label="Medium radio" name="size" value="medium" />
      <Radio size="large" label="Large radio" name="size" value="large" />
    </div>
}`,...(D=(R=s.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var w,z,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Radio label="Unchecked" name="states" value="unchecked" />
      <Radio label="Checked" name="states" value="checked" defaultChecked />
      <Radio label="Disabled" name="states" value="disabled" disabled />
      <Radio label="Disabled checked" name="states" value="disabled-checked" disabled defaultChecked />
    </div>
}`,...(S=(z=t.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var W,I,N;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    helperText: 'Additional information about this option',
    name: 'helper'
  }
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var O,C,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Invalid option',
    error: true,
    helperText: 'Please select a valid option',
    name: 'error'
  }
}`,...(H=(C=d.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var L,q,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Full width radio',
    helperText: 'This radio takes up the full width',
    fullWidth: true,
    name: 'fullwidth'
  }
}`,...(E=(q=n.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var F,P,M;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Radio name="group" value="option1" label="Option 1" helperText="Description for option 1" />
      <Radio name="group" value="option2" label="Option 2" helperText="Description for option 2" />
      <Radio name="group" value="option3" label="Option 3" helperText="Description for option 3" />
    </div>
}`,...(M=(P=c.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var A,V,G;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: <span>
        I agree to receive{' '}
        <a href="#" style={{
        color: 'var(--phork-accent-color, #0060ce)'
      }}>
          promotional emails
        </a>
      </span>,
    name: 'html-label'
  }
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var U,B,J;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  decorators: [Story => <ThemeProvider themeId="dark">
        <div style={{
      padding: '24px',
      background: '#333'
    }}>
          <Story />
        </div>
      </ThemeProvider>],
  args: {
    label: 'Dark theme radio',
    name: 'dark-theme'
  }
}`,...(J=(B=m.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};const xe=["Default","Sizes","States","WithHelperText","WithError","FullWidth","Group","WithHTMLLabel","DarkTheme"];export{m as DarkTheme,o as Default,n as FullWidth,c as Group,s as Sizes,t as States,d as WithError,p as WithHTMLLabel,i as WithHelperText,xe as __namedExportsOrder,be as default};
