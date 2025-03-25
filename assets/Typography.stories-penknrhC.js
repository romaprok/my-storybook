import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as Z}from"./index-BKyFwriW.js";import{c as ee,T as M}from"./ThemeProvider-BpExdF7_.js";import"./_commonjsHelpers-CqkleIqs.js";const re="_typography_1annd_1",ae="_h1_1annd_7",ne="_h2_1annd_14",te="_h3_1annd_21",oe="_h4_1annd_28",ie="_h5_1annd_35",le="_h6_1annd_42",se="_subtitle1_1annd_49",pe="_subtitle2_1annd_56",he="_body1_1annd_63",de="_body2_1annd_69",ce="_caption_1annd_75",ye="_overline_1annd_81",ge="_noWrap_1annd_160",ue="_truncate_1annd_164",n={typography:re,h1:ae,h2:ne,h3:te,h4:oe,h5:ie,h6:le,subtitle1:se,subtitle2:pe,body1:he,body2:de,caption:ce,overline:ye,"color-inherit":"_color-inherit_1annd_89","color-primary":"_color-primary_1annd_93","color-secondary":"_color-secondary_1annd_97","color-success":"_color-success_1annd_101","color-warning":"_color-warning_1annd_105","color-error":"_color-error_1annd_109","color-info":"_color-info_1annd_113","weight-light":"_weight-light_1annd_118","weight-regular":"_weight-regular_1annd_122","weight-medium":"_weight-medium_1annd_126","weight-semibold":"_weight-semibold_1annd_130","weight-bold":"_weight-bold_1annd_134","align-inherit":"_align-inherit_1annd_139","align-left":"_align-left_1annd_143","align-center":"_align-center_1annd_147","align-right":"_align-right_1annd_151","align-justify":"_align-justify_1annd_155",noWrap:ge,truncate:ue},me={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",caption:"span",overline:"span"},r=Z.forwardRef(({variant:a="body1",color:P="inherit",weight:O="regular",align:$="inherit",noWrap:J=!1,truncate:z=!1,as:F,className:G,children:K,...Q},U)=>{const X=F||me[a],Y=ee(n.typography,n[a],n[`color-${P}`],n[`weight-${O}`],n[`align-${$}`],{[n.noWrap]:J,[n.truncate]:z},G);return e.jsx(X,{ref:U,className:Y,...Q,children:K})});r.displayName="Typography";r.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'subtitle1'
| 'subtitle2'
| 'body1'
| 'body2'
| 'caption'
| 'overline'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'subtitle1'"},{name:"literal",value:"'subtitle2'"},{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'overline'"}]},description:"The variant of the typography",defaultValue:{value:"'body1'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'inherit'
| 'primary'
| 'secondary'
| 'success'
| 'warning'
| 'error'
| 'info'`,elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"The color of the typography",defaultValue:{value:"'inherit'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:`| 'light'
| 'regular'
| 'medium'
| 'semibold'
| 'bold'`,elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"The font weight of the typography",defaultValue:{value:"'regular'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:`| 'inherit'
| 'left'
| 'center'
| 'right'
| 'justify'`,elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'justify'"}]},description:"The text alignment",defaultValue:{value:"'inherit'",computed:!1}},noWrap:{required:!1,tsType:{name:"boolean"},description:"If true, the text will not wrap",defaultValue:{value:"false",computed:!1}},truncate:{required:!1,tsType:{name:"boolean"},description:"If true, the text will be truncated with an ellipsis",defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"The HTML tag to use"}},composes:["Omit"]};const fe={title:"Basic/Typography",component:r,decorators:[a=>e.jsx(M,{children:e.jsx(a,{})})],parameters:{docs:{description:{component:"A versatile typography component that supports various styles and features."}}},argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline"],description:"The variant of the typography."},color:{control:"select",options:["inherit","primary","secondary","success","warning","error","info"],description:"The color of the typography."},weight:{control:"select",options:["light","regular","medium","semibold","bold"],description:"The font weight of the typography."},align:{control:"select",options:["inherit","left","center","right","justify"],description:"The text alignment."},noWrap:{control:"boolean",description:"If true, the text will not wrap."},truncate:{control:"boolean",description:"If true, the text will be truncated with an ellipsis."},as:{control:"text",description:"The HTML tag to use."}}},t={args:{children:"Typography Example"}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{variant:"h1",children:"Heading 1"}),e.jsx(r,{variant:"h2",children:"Heading 2"}),e.jsx(r,{variant:"h3",children:"Heading 3"}),e.jsx(r,{variant:"h4",children:"Heading 4"}),e.jsx(r,{variant:"h5",children:"Heading 5"}),e.jsx(r,{variant:"h6",children:"Heading 6"}),e.jsx(r,{variant:"subtitle1",children:"Subtitle 1"}),e.jsx(r,{variant:"subtitle2",children:"Subtitle 2"}),e.jsx(r,{variant:"body1",children:"Body 1"}),e.jsx(r,{variant:"body2",children:"Body 2"}),e.jsx(r,{variant:"caption",children:"Caption Text"}),e.jsx(r,{variant:"overline",children:"Overline Text"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{color:"inherit",children:"Inherit Color"}),e.jsx(r,{color:"primary",children:"Primary Color"}),e.jsx(r,{color:"secondary",children:"Secondary Color"}),e.jsx(r,{color:"success",children:"Success Color"}),e.jsx(r,{color:"warning",children:"Warning Color"}),e.jsx(r,{color:"error",children:"Error Color"}),e.jsx(r,{color:"info",children:"Info Color"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{weight:"light",children:"Light Weight (300)"}),e.jsx(r,{weight:"regular",children:"Regular Weight (400)"}),e.jsx(r,{weight:"medium",children:"Medium Weight (500)"}),e.jsx(r,{weight:"semibold",children:"Semibold Weight (600)"}),e.jsx(r,{weight:"bold",children:"Bold Weight (700)"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{align:"left",children:"Left Aligned Text"}),e.jsx(r,{align:"center",children:"Center Aligned Text"}),e.jsx(r,{align:"right",children:"Right Aligned Text"}),e.jsx(r,{align:"justify",children:"Justify Aligned Text. This is a longer text to demonstrate justified alignment. The text will be spaced to align with both the left and right margins."})]})},p={args:{noWrap:!0,children:"This is a very long text that would normally wrap to the next line, but noWrap prevents that from happening."}},h={args:{truncate:!0,style:{width:"200px"},children:"This is a very long text that will be truncated with an ellipsis when it reaches the width limit."}},d={args:{as:"a",color:"primary",children:"This is a link styled with Typography",style:{textDecoration:"none",cursor:"pointer"}},render:a=>e.jsx(r,{...a,onClick:()=>window.open("#","_blank"),children:a.children})},c={decorators:[a=>e.jsx(M,{themeId:"dark",children:e.jsx("div",{style:{padding:"24px",background:"#333"},children:e.jsx(a,{})})})],render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{variant:"h4",color:"primary",children:"Dark Theme Typography"}),e.jsx(r,{color:"secondary",children:"Secondary text in dark theme"}),e.jsx(r,{children:"Default text in dark theme"})]})};var y,g,u;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Typography Example'
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,T,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="caption">Caption Text</Typography>
      <Typography variant="overline">Overline Text</Typography>
    </div>
}`,...(x=(T=o.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var v,_,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Typography color="inherit">Inherit Color</Typography>
      <Typography color="primary">Primary Color</Typography>
      <Typography color="secondary">Secondary Color</Typography>
      <Typography color="success">Success Color</Typography>
      <Typography color="warning">Warning Color</Typography>
      <Typography color="error">Error Color</Typography>
      <Typography color="info">Info Color</Typography>
    </div>
}`,...(f=(_=i.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var b,w,j;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Typography weight="light">Light Weight (300)</Typography>
      <Typography weight="regular">Regular Weight (400)</Typography>
      <Typography weight="medium">Medium Weight (500)</Typography>
      <Typography weight="semibold">Semibold Weight (600)</Typography>
      <Typography weight="bold">Bold Weight (700)</Typography>
    </div>
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var C,W,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Typography align="left">Left Aligned Text</Typography>
      <Typography align="center">Center Aligned Text</Typography>
      <Typography align="right">Right Aligned Text</Typography>
      <Typography align="justify">
        Justify Aligned Text. This is a longer text to demonstrate justified
        alignment. The text will be spaced to align with both the left and right
        margins.
      </Typography>
    </div>
}`,...(S=(W=s.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var D,k,H;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    noWrap: true,
    children: 'This is a very long text that would normally wrap to the next line, but noWrap prevents that from happening.'
  }
}`,...(H=(k=p.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var A,I,R;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    truncate: true,
    style: {
      width: '200px'
    },
    children: 'This is a very long text that will be truncated with an ellipsis when it reaches the width limit.'
  }
}`,...(R=(I=h.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var V,E,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    as: 'a',
    color: 'primary',
    children: 'This is a link styled with Typography',
    style: {
      textDecoration: 'none',
      cursor: 'pointer'
    }
  },
  render: args => <Typography {...args} onClick={() => window.open('#', '_blank')}>
      {args.children}
    </Typography>
}`,...(q=(E=d.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var B,L,N;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  decorators: [Story => <ThemeProvider themeId="dark">
        <div style={{
      padding: '24px',
      background: '#333'
    }}>
          <Story />
        </div>
      </ThemeProvider>],
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Typography variant="h4" color="primary">Dark Theme Typography</Typography>
      <Typography color="secondary">Secondary text in dark theme</Typography>
      <Typography>Default text in dark theme</Typography>
    </div>
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const be=["Default","Variants","Colors","Weights","Alignment","NoWrap","Truncate","CustomComponent","DarkTheme"];export{s as Alignment,i as Colors,d as CustomComponent,c as DarkTheme,t as Default,p as NoWrap,h as Truncate,o as Variants,l as Weights,be as __namedExportsOrder,fe as default};
