import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as s}from"./index-BKyFwriW.js";import{c as y,T as ce}from"./ThemeProvider-BpExdF7_.js";import"./_commonjsHelpers-CqkleIqs.js";const ye="_container_2f9v0_1",we="_fullWidth_2f9v0_7",Re="_label_2f9v0_11",qe="_required_2f9v0_17",We="_textarea_2f9v0_22",je="_autoResize_2f9v0_37",Se="_outlined_2f9v0_43",Ie="_disabled_2f9v0_49",Me="_filled_2f9v0_59",ke="_standard_2f9v0_75",ze="_error_2f9v0_94",De="_helperText_2f9v0_109",Ve="_small_2f9v0_129",Ee="_focused_2f9v0_139",He="_hasValue_2f9v0_140",Ne="_large_2f9v0_144",Fe="_primary_2f9v0_199",Ae="_secondary_2f9v0_203",Ce="_success_2f9v0_207",Oe="_warning_2f9v0_211",a={container:ye,fullWidth:we,label:Re,required:qe,textarea:We,autoResize:je,outlined:Se,disabled:Ie,filled:Me,standard:ke,error:ze,helperText:De,small:Ve,focused:Ee,hasValue:He,large:Ne,primary:Fe,secondary:Ae,success:Ce,warning:Oe},r=s.forwardRef(({variant:t="outlined",label:w,error:v=!1,helperText:R,required:q=!1,fullWidth:W=!1,autoResize:_=!1,minRows:T=3,maxRows:j=10,className:ue,disabled:S,id:pe,onChange:o,...me},he)=>{const I=pe||s.useId(),l=s.useRef(null);s.useImperativeHandle(he,()=>l.current,[]);const fe=s.useCallback(ge=>{if(_&&l.current){const n=l.current;n.style.height="auto";const M=parseInt(getComputedStyle(n).lineHeight),ve=T*M,_e=j*M,Te=n.scrollHeight;n.style.height=`${Math.min(Math.max(ve,Te),_e)}px`}o==null||o(ge)},[_,T,j,o]),xe=y(a.textarea,a[t],{[a.error]:v,[a.disabled]:S,[a.fullWidth]:W,[a.autoResize]:_},ue),be=y(a.container,{[a.fullWidth]:W});return e.jsxs("div",{className:be,children:[w&&e.jsxs("label",{htmlFor:I,className:a.label,children:[w,q&&e.jsx("span",{className:a.required,children:"*"})]}),e.jsx("textarea",{ref:l,id:I,disabled:S,"aria-invalid":v,"aria-required":q,className:xe,onChange:fe,rows:T,...me}),R&&e.jsx("div",{className:y(a.helperText,{[a.error]:v}),children:R})]})});r.displayName="Textarea";r.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'standard'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'standard'"}]},description:"The variant of the textarea",defaultValue:{value:"'outlined'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"The label for the textarea"},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display below the textarea"},required:{required:!1,tsType:{name:"boolean"},description:"If true, the textarea will be required",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"If true, the textarea will take up the full width of its container",defaultValue:{value:"false",computed:!1}},autoResize:{required:!1,tsType:{name:"boolean"},description:"If true, the textarea will automatically adjust its height based on content",defaultValue:{value:"false",computed:!1}},minRows:{required:!1,tsType:{name:"number"},description:"Minimum number of rows to show",defaultValue:{value:"3",computed:!1}},maxRows:{required:!1,tsType:{name:"number"},description:"Maximum number of rows before scrolling",defaultValue:{value:"10",computed:!1}}},composes:["Omit"]};const Ge={title:"Basic/Textarea",component:r,decorators:[t=>e.jsx(ce,{children:e.jsx(t,{})})],parameters:{docs:{description:{component:"A versatile textarea component that supports various styles and features."}}},argTypes:{variant:{control:"select",options:["outlined","filled","standard"],description:"The variant of the textarea."},label:{control:"text",description:"The label for the textarea."},error:{control:"boolean",description:"If true, the textarea will be displayed in an error state."},helperText:{control:"text",description:"Helper text to display below the textarea."},required:{control:"boolean",description:"If true, the textarea will be required."},fullWidth:{control:"boolean",description:"If true, the textarea will take up the full width of its container."},autoResize:{control:"boolean",description:"If true, the textarea will automatically adjust its height based on content."},minRows:{control:"number",description:"Minimum number of rows to show."},maxRows:{control:"number",description:"Maximum number of rows before scrolling."},disabled:{control:"boolean",description:"If true, the textarea will be disabled."}}},i={args:{placeholder:"Enter text..."}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{variant:"outlined",placeholder:"Outlined variant"}),e.jsx(r,{variant:"filled",placeholder:"Filled variant"}),e.jsx(r,{variant:"standard",placeholder:"Standard variant"})]})},c={args:{label:"Message",placeholder:"Enter your message"}},u={args:{label:"Message",placeholder:"Enter your message",required:!0}},p={args:{label:"Bio",placeholder:"Tell us about yourself",helperText:"Write a brief description about yourself"}},m={args:{label:"Message",value:"Too short",error:!0,helperText:"Message must be at least 20 characters long"}},h={args:{label:"Disabled textarea",value:"This content cannot be edited",disabled:!0}},f={args:{label:"Full width textarea",placeholder:"This textarea takes up the full width",fullWidth:!0}},x={args:{label:"Auto-resize textarea",placeholder:"Type something to see the textarea grow...",autoResize:!0,minRows:3,maxRows:10}},b={args:{label:"Custom rows",placeholder:"This textarea has custom min and max rows",autoResize:!0,minRows:5,maxRows:15}},g={decorators:[t=>e.jsx(ce,{themeId:"dark",children:e.jsx("div",{style:{padding:"24px",background:"#333"},children:e.jsx(t,{})})})],args:{label:"Dark theme textarea",placeholder:"Type something..."}};var k,z,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var V,E,H;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Textarea variant="outlined" placeholder="Outlined variant" />
      <Textarea variant="filled" placeholder="Filled variant" />
      <Textarea variant="standard" placeholder="Standard variant" />
    </div>
}`,...(H=(E=d.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var N,F,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Enter your message'
  }
}`,...(A=(F=c.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var C,O,B;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Enter your message',
    required: true
  }
}`,...(B=(O=u.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var P,L,$;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    helperText: 'Write a brief description about yourself'
  }
}`,...($=(L=p.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    value: 'Too short',
    error: true,
    helperText: 'Message must be at least 20 characters long'
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Disabled textarea',
    value: 'This content cannot be edited',
    disabled: true
  }
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Full width textarea',
    placeholder: 'This textarea takes up the full width',
    fullWidth: true
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,te;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Auto-resize textarea',
    placeholder: 'Type something to see the textarea grow...',
    autoResize: true,
    minRows: 3,
    maxRows: 10
  }
}`,...(te=(re=x.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,oe,le;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Custom rows',
    placeholder: 'This textarea has custom min and max rows',
    autoResize: true,
    minRows: 5,
    maxRows: 15
  }
}`,...(le=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ne,ie,de;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  decorators: [Story => <ThemeProvider themeId="dark">
        <div style={{
      padding: '24px',
      background: '#333'
    }}>
          <Story />
        </div>
      </ThemeProvider>],
  args: {
    label: 'Dark theme textarea',
    placeholder: 'Type something...'
  }
}`,...(de=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const Je=["Default","Variants","WithLabel","Required","WithHelperText","WithError","Disabled","FullWidth","AutoResize","WithCustomRows","DarkTheme"];export{x as AutoResize,g as DarkTheme,i as Default,h as Disabled,f as FullWidth,u as Required,d as Variants,b as WithCustomRows,m as WithError,p as WithHelperText,c as WithLabel,Je as __namedExportsOrder,Ge as default};
