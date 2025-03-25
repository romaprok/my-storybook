import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as E}from"./index-BKyFwriW.js";import{c as _,T as se}from"./ThemeProvider-BpExdF7_.js";import"./_commonjsHelpers-CqkleIqs.js";const me="_container_rrwck_1",he="_fullWidth_rrwck_7",fe="_label_rrwck_11",xe="_required_rrwck_17",ve="_inputWrapper_rrwck_22",_e="_input_rrwck_22",ge="_outlined_rrwck_42",be="_disabled_rrwck_48",we="_filled_rrwck_58",ye="_standard_rrwck_74",Te="_small_rrwck_93",ke="_large_rrwck_99",Ee="_error_rrwck_106",je="_helperText_rrwck_120",Ae="_startAdornment_rrwck_130",Ie="_endAdornment_rrwck_131",Se="_withStartAdornment_rrwck_148",We="_withEndAdornment_rrwck_152",r={container:me,fullWidth:he,label:fe,required:xe,inputWrapper:ve,input:_e,outlined:ge,disabled:be,filled:we,standard:ye,small:Te,large:ke,error:Ee,helperText:je,startAdornment:Ae,endAdornment:Ie,withStartAdornment:Se,withEndAdornment:We},a=E.forwardRef(({variant:t="outlined",size:ne="medium",label:g,error:f=!1,helperText:b,required:w=!1,fullWidth:y=!1,startAdornment:x,endAdornment:v,className:ie,disabled:T,id:oe,...de},ce)=>{const k=oe||E.useId(),pe=_(r.input,r[t],r[ne],{[r.error]:f,[r.disabled]:T,[r.fullWidth]:y,[r.withStartAdornment]:!!x,[r.withEndAdornment]:!!v},ie),ue=_(r.container,{[r.fullWidth]:y});return e.jsxs("div",{className:ue,children:[g&&e.jsxs("label",{htmlFor:k,className:r.label,children:[g,w&&e.jsx("span",{className:r.required,children:"*"})]}),e.jsxs("div",{className:r.inputWrapper,children:[x&&e.jsx("div",{className:r.startAdornment,children:x}),e.jsx("input",{ref:ce,id:k,disabled:T,"aria-invalid":f,"aria-required":w,className:pe,...de}),v&&e.jsx("div",{className:r.endAdornment,children:v})]}),b&&e.jsx("div",{className:_(r.helperText,{[r.error]:f}),children:b})]})});a.displayName="Input";a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'standard'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'standard'"}]},description:"The variant of the input",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"The size of the input",defaultValue:{value:"'medium'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"The label for the input"},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display below the input"},required:{required:!1,tsType:{name:"boolean"},description:"If true, the input will be required",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If true, the input will take up the full width of its container",defaultValue:{value:"false",computed:!1}},startAdornment:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Start adornment"},endAdornment:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"End adornment"}},composes:["Omit"]};const Re={title:"Basic/Input",component:a,decorators:[t=>e.jsx(se,{children:e.jsx(t,{})})],parameters:{docs:{description:{component:"A versatile input component that supports various styles and features."}}},argTypes:{variant:{control:"select",options:["outlined","filled","standard"],description:"The variant of the input."},size:{control:"select",options:["small","medium","large"],description:"The size of the input."},label:{control:"text",description:"The label for the input."},error:{control:"boolean",description:"If true, the input will be displayed in an error state."},helperText:{control:"text",description:"Helper text to display below the input."},required:{control:"boolean",description:"If true, the input will be required."},fullWidth:{control:"boolean",description:"If true, the input will take up the full width of its container."},disabled:{control:"boolean",description:"If true, the input will be disabled."}}},l={args:{placeholder:"Enter text..."}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{variant:"outlined",placeholder:"Outlined variant"}),e.jsx(a,{variant:"filled",placeholder:"Filled variant"}),e.jsx(a,{variant:"standard",placeholder:"Standard variant"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{size:"small",placeholder:"Small size"}),e.jsx(a,{size:"medium",placeholder:"Medium size"}),e.jsx(a,{size:"large",placeholder:"Large size"})]})},i={args:{label:"Email",placeholder:"Enter your email"}},o={args:{label:"Email",placeholder:"Enter your email",required:!0}},d={args:{label:"Password",type:"password",helperText:"Must be at least 8 characters long"}},c={args:{label:"Email",value:"invalid-email",error:!0,helperText:"Please enter a valid email address"}},p={args:{label:"Disabled input",value:"Cannot edit this",disabled:!0}},u={args:{label:"Full width input",placeholder:"This input takes up the full width",fullWidth:!0}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{startAdornment:"$",placeholder:"Enter amount"}),e.jsx(a,{endAdornment:".com",placeholder:"Enter domain"}),e.jsx(a,{startAdornment:"https://",endAdornment:".com",placeholder:"Enter domain"})]})},h={decorators:[t=>e.jsx(se,{themeId:"dark",children:e.jsx("div",{style:{padding:"24px",background:"#333"},children:e.jsx(t,{})})})],args:{label:"Dark theme input",placeholder:"Type something..."}};var j,A,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(I=(A=l.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var S,W,q;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input variant="outlined" placeholder="Outlined variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="standard" placeholder="Standard variant" />
    </div>
}`,...(q=(W=s.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var z,D,N;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input size="small" placeholder="Small size" />
      <Input size="medium" placeholder="Medium size" />
      <Input size="large" placeholder="Large size" />
    </div>
}`,...(N=(D=n.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var R,F,P;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email'
  }
}`,...(P=(F=i.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var V,H,L;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    required: true
  }
}`,...(L=(H=o.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var M,O,C;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters long'
  }
}`,...(C=(O=d.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var $,B,G;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    value: 'invalid-email',
    error: true,
    helperText: 'Please enter a valid email address'
  }
}`,...(G=(B=c.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Disabled input',
    value: 'Cannot edit this',
    disabled: true
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Full width input',
    placeholder: 'This input takes up the full width',
    fullWidth: true
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input startAdornment="$" placeholder="Enter amount" />
      <Input endAdornment=".com" placeholder="Enter domain" />
      <Input startAdornment="https://" endAdornment=".com" placeholder="Enter domain" />
    </div>
}`,...(re=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,le;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  decorators: [Story => <ThemeProvider themeId="dark">
        <div style={{
      padding: '24px',
      background: '#333'
    }}>
          <Story />
        </div>
      </ThemeProvider>],
  args: {
    label: 'Dark theme input',
    placeholder: 'Type something...'
  }
}`,...(le=(te=h.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};const Fe=["Default","Variants","Sizes","WithLabel","Required","WithHelperText","WithError","Disabled","FullWidth","WithAdornments","DarkTheme"];export{h as DarkTheme,l as Default,p as Disabled,u as FullWidth,o as Required,n as Sizes,s as Variants,m as WithAdornments,c as WithError,d as WithHelperText,i as WithLabel,Fe as __namedExportsOrder,Re as default};
