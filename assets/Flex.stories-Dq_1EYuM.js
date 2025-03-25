import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as oe,T as le}from"./ThemeProvider-BpExdF7_.js";import"./_commonjsHelpers-CqkleIqs.js";const ne="_flex_ir55o_1",se="_directionRow_ir55o_7",ie="_directionColumn_ir55o_11",te="_directionRowReverse_ir55o_15",ae="_directionColumnReverse_ir55o_19",xe="_wrapNowrap_ir55o_24",ce="_wrapWrap_ir55o_28",de="_wrapWrapReverse_ir55o_32",pe="_alignFlexStart_ir55o_37",he="_alignFlexEnd_ir55o_41",ue="_alignCenter_ir55o_45",Be="_alignStretch_ir55o_49",fe="_alignBaseline_ir55o_53",me="_justifyFlexStart_ir55o_58",ve="_justifyFlexEnd_ir55o_62",je="_justifyCenter_ir55o_66",ge="_justifySpaceBetween_ir55o_70",_e="_justifySpaceAround_ir55o_74",ye="_justifySpaceEvenly_ir55o_78",we="_gapNone_ir55o_83",be="_gapXs_ir55o_87",Fe="_gapSm_ir55o_91",We="_gapMd_ir55o_95",Ce="_gapLg_ir55o_99",Se="_gapXl_ir55o_103",Te="_gapXxl_ir55o_107",Ve="_fullWidth_ir55o_112",Re="_fullHeight_ir55o_116",Ae="_inline_ir55o_120",Ee="_center_ir55o_124",He="_centerVertical_ir55o_129",qe="_centerHorizontal_ir55o_133",De="_spaceBetween_ir55o_137",ke="_spaceAround_ir55o_141",ze="_spaceEvenly_ir55o_145",Ne="_reverse_ir55o_149",Xe="_responsive_ir55o_155",l={flex:ne,directionRow:se,directionColumn:ie,directionRowReverse:te,directionColumnReverse:ae,wrapNowrap:xe,wrapWrap:ce,wrapWrapReverse:de,alignFlexStart:pe,alignFlexEnd:he,alignCenter:ue,alignStretch:Be,alignBaseline:fe,justifyFlexStart:me,justifyFlexEnd:ve,justifyCenter:je,justifySpaceBetween:ge,justifySpaceAround:_e,justifySpaceEvenly:ye,gapNone:we,gapXs:be,gapSm:Fe,gapMd:We,gapLg:Ce,gapXl:Se,gapXxl:Te,fullWidth:Ve,fullHeight:Re,inline:Ae,center:Ee,centerVertical:He,centerHorizontal:qe,spaceBetween:De,spaceAround:ke,spaceEvenly:ze,reverse:Ne,responsive:Xe},o=({align:n,justify:h,direction:u="row",wrap:B="nowrap",gap:f="none",fullWidth:G=!1,fullHeight:L=!1,inline:M=!1,center:U=!1,centerVertical:$=!1,centerHorizontal:J=!1,spaceBetween:I=!1,spaceAround:O=!1,spaceEvenly:P=!1,reverse:K=!1,responsive:Q=!1,className:Y,children:Z,...ee})=>{const re=oe(l.flex,{[l.fullWidth]:G,[l.fullHeight]:L,[l.inline]:M,[l.center]:U,[l.centerVertical]:$,[l.centerHorizontal]:J,[l.spaceBetween]:I,[l.spaceAround]:O,[l.spaceEvenly]:P,[l.reverse]:K,[l.responsive]:Q},n&&l[`align${n.charAt(0).toUpperCase()+n.slice(1)}`],h&&l[`justify${h.charAt(0).toUpperCase()+h.slice(1)}`],u&&l[`direction${u.charAt(0).toUpperCase()+u.slice(1)}`],B&&l[`wrap${B.charAt(0).toUpperCase()+B.slice(1)}`],f&&l[`gap${f.charAt(0).toUpperCase()+f.slice(1)}`],Y);return e.jsx("div",{className:re,...ee,children:Z})};o.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{align:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}]},description:"The alignment of flex items along the cross-axis"},justify:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"}]},description:"The alignment of flex items along the main-axis"},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column' | 'row-reverse' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column-reverse'"}]},description:"The direction of the flex container",defaultValue:{value:"'row'",computed:!1}},wrap:{required:!1,tsType:{name:"union",raw:"'nowrap' | 'wrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap'"},{name:"literal",value:"'wrap-reverse'"}]},description:"Whether flex items should wrap",defaultValue:{value:"'nowrap'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"The gap between flex items",defaultValue:{value:"'none'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the flex container should take full width",defaultValue:{value:"false",computed:!1}},fullHeight:{required:!1,tsType:{name:"boolean"},description:"Whether the flex container should take full height",defaultValue:{value:"false",computed:!1}},inline:{required:!1,tsType:{name:"boolean"},description:"Whether the flex container should be inline",defaultValue:{value:"false",computed:!1}},center:{required:!1,tsType:{name:"boolean"},description:"Whether the flex container should be centered",defaultValue:{value:"false",computed:!1}},centerVertical:{required:!1,tsType:{name:"boolean"},description:"Whether the flex container should be centered vertically",defaultValue:{value:"false",computed:!1}},centerHorizontal:{required:!1,tsType:{name:"boolean"},description:"Whether the flex container should be centered horizontally",defaultValue:{value:"false",computed:!1}},spaceBetween:{required:!1,tsType:{name:"boolean"},description:"Whether the flex container should be spaced between",defaultValue:{value:"false",computed:!1}},spaceAround:{required:!1,tsType:{name:"boolean"},description:"Whether the flex container should be spaced around",defaultValue:{value:"false",computed:!1}},spaceEvenly:{required:!1,tsType:{name:"boolean"},description:"Whether the flex container should be spaced evenly",defaultValue:{value:"false",computed:!1}},reverse:{required:!1,tsType:{name:"boolean"},description:"Whether the flex container should be reversed",defaultValue:{value:"false",computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:"Whether the flex container should be responsive",defaultValue:{value:"false",computed:!1}}}};const Ue={title:"Basic/Flex",component:o,decorators:[n=>e.jsx(le,{children:e.jsx(n,{})})],parameters:{docs:{description:{component:"A flexible container component for creating layouts."}}},argTypes:{align:{control:"select",options:["flex-start","flex-end","center","stretch","baseline"],description:"The alignment of flex items along the cross-axis"},justify:{control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"],description:"The alignment of flex items along the main-axis"},direction:{control:"select",options:["row","column","row-reverse","column-reverse"],description:"The direction of the flex container"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"],description:"Whether flex items should wrap"},gap:{control:"select",options:["none","xs","sm","md","lg","xl","xxl"],description:"The gap between flex items"},fullWidth:{control:"boolean",description:"Whether the flex container should take full width"},fullHeight:{control:"boolean",description:"Whether the flex container should take full height"},inline:{control:"boolean",description:"Whether the flex container should be inline"},center:{control:"boolean",description:"Whether the flex container should be centered"},centerVertical:{control:"boolean",description:"Whether the flex container should be centered vertically"},centerHorizontal:{control:"boolean",description:"Whether the flex container should be centered horizontally"},spaceBetween:{control:"boolean",description:"Whether the flex container should be spaced between"},spaceAround:{control:"boolean",description:"Whether the flex container should be spaced around"},spaceEvenly:{control:"boolean",description:"Whether the flex container should be spaced evenly"},reverse:{control:"boolean",description:"Whether the flex container should be reversed"},responsive:{control:"boolean",description:"Whether the flex container should be responsive"}}},r=({children:n})=>e.jsx("div",{style:{background:"var(--phork-primary-color, #1976d2)",color:"white",padding:"16px",borderRadius:"4px",minWidth:"100px",textAlign:"center"},children:n}),s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"})]})}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Row (default)"}),e.jsxs(o,{children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Column"}),e.jsxs(o,{direction:"column",children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"})]})]})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Flex Start"}),e.jsxs(o,{align:"flex-start",style:{height:"100px"},children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Center"}),e.jsxs(o,{align:"center",style:{height:"100px"},children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Flex End"}),e.jsxs(o,{align:"flex-end",style:{height:"100px"},children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"})]})]})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Space Between"}),e.jsxs(o,{justify:"space-between",children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Center"}),e.jsxs(o,{justify:"center",children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Space Around"}),e.jsxs(o,{justify:"space-around",children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"})]})]})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Small Gap"}),e.jsxs(o,{gap:"sm",children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Medium Gap"}),e.jsxs(o,{gap:"md",children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Large Gap"}),e.jsxs(o,{gap:"lg",children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"})]})]})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"No Wrap"}),e.jsxs(o,{style:{width:"300px"},children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"}),e.jsx(r,{children:"Box 4"}),e.jsx(r,{children:"Box 5"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Wrap"}),e.jsxs(o,{wrap:"wrap",style:{width:"300px"},children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"}),e.jsx(r,{children:"Box 4"}),e.jsx(r,{children:"Box 5"})]})]})]})},d={render:()=>e.jsxs(o,{responsive:!0,style:{border:"1px solid var(--phork-border-color, #ddd)",padding:"16px"},children:[e.jsx(r,{children:"Box 1"}),e.jsx(r,{children:"Box 2"}),e.jsx(r,{children:"Box 3"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Center Both"}),e.jsx(o,{center:!0,style:{height:"100px",border:"1px solid var(--phork-border-color, #ddd)"},children:e.jsx(r,{children:"Centered Box"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Center Vertical"}),e.jsx(o,{centerVertical:!0,style:{height:"100px",border:"1px solid var(--phork-border-color, #ddd)"},children:e.jsx(r,{children:"Vertically Centered Box"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Center Horizontal"}),e.jsx(o,{centerHorizontal:!0,style:{height:"100px",border:"1px solid var(--phork-border-color, #ddd)"},children:e.jsx(r,{children:"Horizontally Centered Box"})})]})]})};var m,v,j;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        <Box>Box 1</Box>
        <Box>Box 2</Box>
        <Box>Box 3</Box>
      </>
  }
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var g,_,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <h3>Row (default)</h3>
        <Flex>
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Column</h3>
        <Flex direction="column">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
    </div>
}`,...(y=(_=i.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var w,b,F;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <h3>Flex Start</h3>
        <Flex align="flex-start" style={{
        height: '100px'
      }}>
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Center</h3>
        <Flex align="center" style={{
        height: '100px'
      }}>
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Flex End</h3>
        <Flex align="flex-end" style={{
        height: '100px'
      }}>
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
    </div>
}`,...(F=(b=t.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var W,C,S;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <h3>Space Between</h3>
        <Flex justify="space-between">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Center</h3>
        <Flex justify="center">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Space Around</h3>
        <Flex justify="space-around">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
    </div>
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var T,V,R;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <h3>Small Gap</h3>
        <Flex gap="sm">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Medium Gap</h3>
        <Flex gap="md">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
      <div>
        <h3>Large Gap</h3>
        <Flex gap="lg">
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
        </Flex>
      </div>
    </div>
}`,...(R=(V=x.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var A,E,H;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <h3>No Wrap</h3>
        <Flex style={{
        width: '300px'
      }}>
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
          <Box>Box 4</Box>
          <Box>Box 5</Box>
        </Flex>
      </div>
      <div>
        <h3>Wrap</h3>
        <Flex wrap="wrap" style={{
        width: '300px'
      }}>
          <Box>Box 1</Box>
          <Box>Box 2</Box>
          <Box>Box 3</Box>
          <Box>Box 4</Box>
          <Box>Box 5</Box>
        </Flex>
      </div>
    </div>
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var q,D,k;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Flex responsive style={{
    border: '1px solid var(--phork-border-color, #ddd)',
    padding: '16px'
  }}>
      <Box>Box 1</Box>
      <Box>Box 2</Box>
      <Box>Box 3</Box>
    </Flex>
}`,...(k=(D=d.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var z,N,X;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <h3>Center Both</h3>
        <Flex center style={{
        height: '100px',
        border: '1px solid var(--phork-border-color, #ddd)'
      }}>
          <Box>Centered Box</Box>
        </Flex>
      </div>
      <div>
        <h3>Center Vertical</h3>
        <Flex centerVertical style={{
        height: '100px',
        border: '1px solid var(--phork-border-color, #ddd)'
      }}>
          <Box>Vertically Centered Box</Box>
        </Flex>
      </div>
      <div>
        <h3>Center Horizontal</h3>
        <Flex centerHorizontal style={{
        height: '100px',
        border: '1px solid var(--phork-border-color, #ddd)'
      }}>
          <Box>Horizontally Centered Box</Box>
        </Flex>
      </div>
    </div>
}`,...(X=(N=p.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};const $e=["Default","Direction","Alignment","Justify","Gap","Wrap","Responsive","Center"];export{t as Alignment,p as Center,s as Default,i as Direction,x as Gap,a as Justify,d as Responsive,c as Wrap,$e as __namedExportsOrder,Ue as default};
