import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as Z}from"./index-BKyFwriW.js";import{c as $,T as F}from"./ThemeProvider-BpExdF7_.js";import"./_commonjsHelpers-CqkleIqs.js";const ee="_button_g8yz0_1",te="_outlined_g8yz0_41",ne="_text_g8yz0_56",re="_primary_g8yz0_71",ae="_secondary_g8yz0_79",oe="_success_g8yz0_87",se="_warning_g8yz0_95",le="_error_g8yz0_103",ie="_info_g8yz0_111",de="_small_g8yz0_120",ce="_large_g8yz0_125",ue="_startIcon_g8yz0_131",pe="_endIcon_g8yz0_138",me="_loading_g8yz0_146",xe="_spinner_g8yz0_150",he="_spin_g8yz0_150",fe="_fullWidth_g8yz0_167",n={button:ee,outlined:te,text:ne,primary:re,secondary:ae,success:oe,warning:se,error:le,info:ie,small:de,large:ce,startIcon:ue,endIcon:pe,loading:me,spinner:xe,spin:he,fullWidth:fe},t=Z.forwardRef(({children:m,className:M,variant:A="contained",color:G="primary",size:H="medium",fullWidth:J=!1,startIcon:x,endIcon:h,loading:r=!1,disabled:K=!1,...Q},U)=>{const X=$(n.button,n[A],n[G],n[H],{[n.fullWidth]:J,[n.loading]:r},M),f=(a,Y)=>a?e.jsx("span",{className:Y,children:typeof a=="string"?e.jsx("span",{"aria-hidden":"true",children:a}):a}):null;return e.jsxs("button",{ref:U,className:X,disabled:K||r,...Q,children:[r&&e.jsx("span",{className:n.spinner,role:"status","aria-label":"Loading"}),!r&&x&&f(x,n.startIcon),e.jsx("span",{className:n.content,children:m}),!r&&h&&f(h,n.endIcon)]})});t.displayName="Button";t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'contained' | 'outlined' | 'text'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'text'"}]},description:"",defaultValue:{value:"'contained'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const _e={title:"Basic/Button",component:t,decorators:[m=>e.jsx(F,{children:e.jsx(m,{})})],parameters:{docs:{description:{component:"A versatile button component that supports various styles, states, and features."}}},argTypes:{variant:{control:"select",options:["contained","outlined","text"],description:"The variant to use."},color:{control:"select",options:["primary","secondary","success","warning","error","info"],description:"The color of the component."},size:{control:"select",options:["small","medium","large"],description:"The size of the component."},disabled:{control:"boolean",description:"If true, the button will be disabled."},loading:{control:"boolean",description:"If true, the button will show a loading spinner."},fullWidth:{control:"boolean",description:"If true, the button will take up the full width of its container."},startIcon:{control:"text",description:"Element placed before the children."},endIcon:{control:"text",description:"Element placed after the children."}}},o={args:{children:"Button"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(t,{variant:"contained",children:"Contained"}),e.jsx(t,{variant:"outlined",children:"Outlined"}),e.jsx(t,{variant:"text",children:"Text"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(t,{color:"primary",children:"Primary"}),e.jsx(t,{color:"secondary",children:"Secondary"}),e.jsx(t,{color:"success",children:"Success"}),e.jsx(t,{color:"warning",children:"Warning"}),e.jsx(t,{color:"error",children:"Error"}),e.jsx(t,{color:"info",children:"Info"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{size:"small",children:"Small"}),e.jsx(t,{size:"medium",children:"Medium"}),e.jsx(t,{size:"large",children:"Large"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(t,{startIcon:"→",children:"Start Icon"}),e.jsx(t,{endIcon:"→",children:"End Icon"}),e.jsx(t,{startIcon:"→",endIcon:"→",children:"Both Icons"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(t,{children:"Default"}),e.jsx(t,{disabled:!0,children:"Disabled"}),e.jsx(t,{loading:!0,children:"Loading"})]})},u={render:()=>e.jsxs("div",{style:{width:"300px"},children:[e.jsx(t,{fullWidth:!0,children:"Full Width"}),e.jsx("div",{style:{marginTop:"16px"},children:e.jsx(t,{children:"Normal Width"})})]})},p={render:()=>e.jsx(F,{themeId:"dark",children:e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",padding:"16px",background:"#1a1a1a"},children:[e.jsx(t,{children:"Default"}),e.jsx(t,{variant:"outlined",children:"Outlined"}),e.jsx(t,{variant:"text",children:"Text"}),e.jsx(t,{color:"secondary",children:"Secondary"}),e.jsx(t,{disabled:!0,children:"Disabled"}),e.jsx(t,{loading:!0,children:"Loading"})]})})};var y,g,B;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(B=(g=o.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var v,_,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </div>
}`,...(j=(_=s.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var I,b,z;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
      <Button color="info">Info</Button>
    </div>
}`,...(z=(b=l.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var w,T,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var W,N,D;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Button startIcon="→">Start Icon</Button>
      <Button endIcon="→">End Icon</Button>
      <Button startIcon="→" endIcon="→">Both Icons</Button>
    </div>
}`,...(D=(N=d.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var R,q,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
}`,...(E=(q=c.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var V,k,L;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <Button fullWidth>Full Width</Button>
      <div style={{
      marginTop: '16px'
    }}>
        <Button>Normal Width</Button>
      </div>
    </div>
}`,...(L=(k=u.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var C,O,P;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ThemeProvider themeId="dark">
      <div style={{
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
      padding: '16px',
      background: '#1a1a1a'
    }}>
        <Button>Default</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
    </ThemeProvider>
}`,...(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const je=["Default","Variants","Colors","Sizes","WithIcons","States","FullWidth","DarkTheme"];export{l as Colors,p as DarkTheme,o as Default,u as FullWidth,i as Sizes,c as States,s as Variants,d as WithIcons,je as __namedExportsOrder,_e as default};
