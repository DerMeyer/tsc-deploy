(this.webpackJsonptsc=this.webpackJsonptsc||[]).push([[0],{105:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a,c=n(2),r=n(0),i=n(12),o=n.n(i),s=(n(105),n(7)),l=n(21),u=["Erstellen","Teilnehmer","Wettbewerb"],d="event-list",j="event-manager",b="competitor-list",f="competitor-manager",p="work-space",O=(a={},Object(s.a)(a,d,"Erstellen"),Object(s.a)(a,j,"Erstellen"),Object(s.a)(a,b,"Teilnehmer"),Object(s.a)(a,f,"Teilnehmer"),Object(s.a)(a,p,"Wettbewerb"),a);function v(e){return O[e]}var m,h,g=Object(l.createSlice)({name:"navigation",initialState:{activeContent:d,activeStep:v(d)},reducers:{setActiveContent:function(e,t){e.activeContent=t.payload,e.activeStep=v(t.payload)},setActiveStep:function(e,t){e.activeContent=function(e){for(var t=Object.keys(O),n=0;n<t.length;n++){var a=t[n];if(O[a]===e)return a}}(t.payload),e.activeStep=t.payload}}}),x=g.actions,y=x.setActiveContent,S=x.setActiveStep,C=g.reducer,w=n(22),N=n.n(w),k=n(36),I=n(17),A=n(14),T={FEMALE:"W",MALE:"M"},E=[9,10,11,12,13,14],L={A:"Kinder",B:"Sch\xfcler"},P=(m={},Object(s.a)(m,L.A,[9,10,11,12]),Object(s.a)(m,L.B,[13,14]),m),R={PUSH:"Bankdr\xfccken",PULL:"Zug liegend",SNATCH:"Rei\xdfen",CLEAN_AND_JERK:"Sto\xdfen",PULL_UP:"Klimmziehen",T2B:"Anristen",SCHO:"SCHO",H1:"H1",LT:"LT",DR_M:"30m",SW:"SW",SD:"SD",PL:"PL",GYM:"Turnen"},_={GYMNASTICS:R.GYM};function D(){var e;return{id:0,name:"",date:(new Date).toISOString().split("T")[0],place:"",host:"",start:"16:30",final:!1,disciplines:Object.values(R).reduce((function(e,t){return Object(I.a)(Object(I.a)({},e),{},Object(s.a)({},t,!1))}),{}),gymnastics:(e={},Object(s.a)(e,L.A,""),Object(s.a)(e,L.B,""),e),competitorIds:[]}}var M,U=Object(l.createAsyncThunk)("events/getEvents",function(){var e=Object(k.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.requestService.post("".concat(A.requestService.baseUrl,"/tsc/get_events"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),W=Object(l.createAsyncThunk)("events/deleteEvent",function(){var e=Object(k.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.requestService.get("".concat(A.requestService.baseUrl,"/tsc/delete_event/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),G=Object(l.createAsyncThunk)("events/saveEvent",function(){var e=Object(k.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.requestService.post("".concat(A.requestService.baseUrl,"/tsc/upsert_event"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F=Object(l.createSlice)({name:"events",initialState:{all:{},activeId:0,draft:D()},reducers:{resetEvents:function(e){e.activeId=0,e.draft=D()},setEventId:function(e,t){e.activeId=t.payload},addCompetitorId:function(e,t){e.activeId&&e.all[e.activeId].competitorIds.push(t.payload)},removeCompetitorId:function(e,t){if(e.activeId){var n=e.all[e.activeId];n.competitorIds.splice(n.competitorIds.indexOf(t.payload),1)}},editEvent:function(e,t){e.draft=e.all[t.payload]},setName:function(e,t){e.draft.name=t.payload},setDate:function(e,t){e.draft.date=t.payload},setPlace:function(e,t){e.draft.place=t.payload},setHost:function(e,t){e.draft.host=t.payload},setStart:function(e,t){e.draft.start=t.payload},toggleFinal:function(e){e.draft.final=!e.draft.final},toggleDiscipline:function(e,t){e.draft.disciplines[t.payload]=!e.draft.disciplines[t.payload]},setGymnastics:function(e,t){t.payload.group&&(e.draft.gymnastics[t.payload.group]=t.payload.gymnastics)}},extraReducers:(h={},Object(s.a)(h,U.fulfilled,(function(e,t){Array.isArray(t.payload)?e.all=t.payload.reduce((function(e,t){return Object(I.a)(Object(I.a)({},e),{},Object(s.a)({},t.id,t))}),{}):console.warn("error getting events")})),Object(s.a)(h,W.fulfilled,(function(e,t){var n;(null===(n=t.payload)||void 0===n?void 0:n.success)?(e.activeId===Number(t.payload.id)&&(e.activeId=0),delete e.all[t.payload.id]):console.warn("error deleting event")})),Object(s.a)(h,G.fulfilled,(function(e,t){var n;(null===(n=t.payload)||void 0===n?void 0:n.success)?(e.all[t.payload.event.id]=t.payload.event,e.activeId=t.payload.event.id,e.draft=D()):console.warn("error saving event")})),h)}),Y=F.actions,H=Y.resetEvents,B=Y.setEventId,q=Y.addCompetitorId,J=Y.removeCompetitorId,K=Y.editEvent,z=Y.setName,V=Y.setDate,$=Y.setPlace,Z=Y.setHost,Q=Y.setStart,X=Y.toggleFinal,ee=Y.toggleDiscipline,te=Y.setGymnastics,ne=F.reducer;function ae(){return{id:0,name:"",gender:T.FEMALE,year:(new Date).toISOString().split("T")[0].split("-")[0]-9,weight:{},club:"",results:{}}}var ce=Object(l.createAsyncThunk)("competitors/getCompetitors",function(){var e=Object(k.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.requestService.post("".concat(A.requestService.baseUrl,"/tsc/get_competitors"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),re=Object(l.createAsyncThunk)("competitors/deleteCompetitor",function(){var e=Object(k.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.requestService.get("".concat(A.requestService.baseUrl,"/tsc/delete_competitor/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ie=Object(l.createAsyncThunk)("competitors/saveCompetitor",function(){var e=Object(k.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.requestService.post("".concat(A.requestService.baseUrl,"/tsc/upsert_competitor"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),oe=Object(l.createSlice)({name:"competitors",initialState:{all:{},draft:ae()},reducers:{resetCompetitors:function(e){e.draft=ae()},editCompetitor:function(e,t){e.draft=e.all[t.payload]},setName:function(e,t){e.draft.name=t.payload},setGender:function(e,t){e.draft.gender=t.payload},setYear:function(e,t){e.draft.year=t.payload},setWeight:function(e,t){t.payload.eventId?t.payload.competitorId?e.all[t.payload.competitorId].weight[t.payload.eventId]=t.payload.weight:console.warn("you tried to set a weight without a competitor id"):console.warn("you tried to set a weight without an event id")},setClub:function(e,t){e.draft.club=t.payload},setResult:function(e,t){t.payload.eventId?t.payload.competitorId?(e.all[t.payload.competitorId].results[t.payload.eventId]||(e.all[t.payload.competitorId].results[t.payload.eventId]={}),e.all[t.payload.competitorId].results[t.payload.eventId][t.payload.discipline]=t.payload.result):console.warn("you tried to set a result without a competitor id"):console.warn("you tried to set a result without an event id")}},extraReducers:(M={},Object(s.a)(M,ce.fulfilled,(function(e,t){Array.isArray(t.payload)?e.all=t.payload.reduce((function(e,t){return Object(I.a)(Object(I.a)({},e),{},Object(s.a)({},t.id,t))}),e.all):console.warn("error getting competitors")})),Object(s.a)(M,re.fulfilled,(function(e,t){var n;(null===(n=t.payload)||void 0===n?void 0:n.success)?delete e.all[t.payload.id]:console.warn("error deleting competitor")})),Object(s.a)(M,ie.fulfilled,(function(e,t){var n;(null===(n=t.payload)||void 0===n?void 0:n.success)?(e.all[t.payload.competitor.id]=t.payload.competitor,e.draft=ae()):console.warn("error saving competitor")})),M)}),se=oe.actions,le=se.resetCompetitors,ue=se.editCompetitor,de=se.setName,je=se.setGender,be=se.setYear,fe=se.setWeight,pe=se.setClub,Oe=se.setResult,ve={navigation:C,events:ne,competitors:oe.reducer},me=n(8),he=n(35),ge={ARRAY:[],OBJECT:{},FUNCTION:function(){}},xe=function(e){return e.events.activeId?e.events.all[e.events.activeId]:ge.OBJECT},ye=function(e){var t=xe(e).competitorIds||[];return Object.keys(e.competitors.all).reduce((function(n,a){return t.includes(Number(a))?[].concat(Object(he.a)(n),[e.competitors.all[a]]):n}),[])},Se=function(e){var t,n=null===(t=xe(e).date)||void 0===t?void 0:t.split("-")[0];return n?Object.values(e.events.all).filter((function(e){var t;return(null===(t=e.date)||void 0===t?void 0:t.split("-")[0])===n})).map((function(e){return e.id})):ge.ARRAY},Ce=n(15),we=n(213),Ne=n(192),ke=n(214);var Ie=function(){var e=Object(r.useState)(!0),t=Object(Ce.a)(e,2),n=t[0],a=t[1];return Object(c.jsx)(we.a,{open:n,onClose:function(){},"aria-labelledby":"form-dialog-title",children:Object(c.jsx)(Ne.a,{children:Object(c.jsx)(ke.a,{autoFocus:!0,margin:"dense",id:"pw",label:Object(c.jsx)("span",{className:"material-icons",children:"vpn_key"}),type:"password",fullWidth:!0,onChange:function(e){"fest"===e.target.value&&a(!1)}})})})},Ae=n(5),Te=n(197),Ee=n(152),Le=n(198),Pe=n(199),Re=n(210),_e=Object(Ae.a)({alternativeLabel:{top:22},active:{"& $line":{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},completed:{"& $line":{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},line:{height:3,border:0,backgroundColor:"#eaeaf0",borderRadius:1}})(Ee.a),De=Object(Te.a)({root:{backgroundColor:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center",cursor:"pointer"},active:{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},completed:{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"}});function Me(e){var t=De(),n=e.active,a=e.completed,r={1:Object(c.jsx)("span",{className:"material-icons",children:"event_note"}),2:Object(c.jsx)("span",{className:"material-icons",children:"people_alt"}),3:Object(c.jsx)("span",{className:"material-icons",children:"emoji_events"})};return Object(c.jsx)("div",{className:"".concat(t.root).concat(n?" ".concat(t.active):"").concat(a?" ".concat(t.completed):""),children:r[String(e.icon)]})}var Ue,We=function(){var e=Object(me.useDispatch)(),t=Object(me.useSelector)((function(e){return e.navigation.activeStep}));return Object(c.jsx)(Le.a,{className:"top-navigation-stepper",alternativeLabel:!0,activeStep:u.indexOf(t),connector:Object(c.jsx)(_e,{}),children:u.map((function(t){return Object(c.jsx)(Pe.a,{onClick:function(){return e(S(t))},children:Object(c.jsx)(Re.a,{StepIconComponent:Me})},t)}))})},Ge=n(71),Fe=n.n(Ge),Ye=n(204),He=n(218),Be=n(219),qe=n(211),Je=n(201),Ke=n(202),ze=n(153),Ve=n(203),$e=n(154),Ze=Object(Te.a)((function(e){return{card:{margin:"10px 0"},cardActive:{backgroundColor:e.palette.secondary.light},cardContent:{display:"grid",gridTemplateColumns:"auto 160px"},cardActions:{justifySelf:"end",alignSelf:"start"},contrastText:{color:e.palette.grey[100]},gymnasticsTag:{color:e.palette.primary.main}}})),Qe=Object(Te.a)((function(e){return{card:{margin:"10px 0"},flexRow:{display:"flex"},gridRow:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"10px"},spacer:{width:"10px",flexShrink:0},marginTop:{marginTop:"15px"}}})),Xe=Object(Te.a)((function(e){return{card:{margin:"10px 0"},row:{display:"flex",justifyContent:"space-between"},editor:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"10px"},editorEntry:{display:"flex",flexWrap:"wrap",alignItems:"center"},editorIcon:{color:e.palette.grey[300]},editorPoints:{marginLeft:"10px"},gymnasticsResult:{alignSelf:"center",display:"flex",alignItems:"center"},marginTop:{marginTop:"15px"}}})),et=Object(Te.a)((function(e){return{filter:{display:"flex",justifyContent:"center",marginTop:"10px"},filterGroup:{marginRight:"10px"}}}));function tt(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return function(r){return Math.max(Math.round(((n-a)*(r-e)/(e-t)+n)/c),0)*c}}var nt,at,ct,rt,it=(Ue={},Object(s.a)(Ue,R.PUSH,tt(0,15,0,30)),Object(s.a)(Ue,R.PULL,tt(0,15,0,30)),Object(s.a)(Ue,R.PULL_UP,tt(0,15,0,30)),Object(s.a)(Ue,R.T2B,tt(0,15,0,30)),Object(s.a)(Ue,R.H1,tt(10,15.7,45,16)),Object(s.a)(Ue,R.LT,tt(11,16,50,0)),Object(s.a)(Ue,R.DR_M,tt(4.3,6.3,40,0)),Object(s.a)(Ue,R.SW,tt(1.35,2.85,0,50)),Object(s.a)(Ue,R.SD,tt(4,9,0,50)),Object(s.a)(Ue,R.SCHO,tt(3,13,0,50)),Object(s.a)(Ue,R.PL,tt(9,14,50,0)),Object(s.a)(Ue,R.GYM,tt(0,10,0,30,.5)),Object(s.a)(Ue,R.SNATCH,tt(0,10,0,30,.5)),Object(s.a)(Ue,R.CLEAN_AND_JERK,tt(0,10,0,30,.5)),Ue),ot=Object(s.a)({},_.GYMNASTICS,(function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)}));function st(e,t){var n=it[e];return"function"!==typeof n?0:(Object.values(_).includes(e)&&(t=ot[e](t)),n(t))}function lt(e){return(new Date).getFullYear()-Number(e)}function ut(e){return(new Date).getFullYear()-e}function dt(e,t){var n={};return Object.values(L).forEach((function(t){n[t]=e.filter((function(e){return P[t].includes(lt(e.year))}))})),Object.values(n).reduce((function(e,n){return[].concat(Object(he.a)(e),Object(he.a)(function(e,t){var n=Array.isArray(t)?t:[t],a=-1,c=1,r=e.reduce((function(e,t){var a=n.reduce((function(n,a){var c=t.results[a];return c?(Object.keys(c).forEach((function(t){"number"===typeof e[t]?e[t]=e[t]+c[t]:e[t]=c[t]})),e):e}),{});return[].concat(Object(he.a)(e),[{id:t.id,points:Object.keys(a).reduce((function(e,t){return a[t]?e+st(t,a[t]):e}),0)}])}),[]).sort((function(e,t){return t.points-e.points})).map((function(e){return a>e.points&&(c++,a=e.points),-1===a&&(a=e.points),Object(I.a)(Object(I.a)({},e),{},{rank:c})}));return e.map((function(e){var t=r.find((function(t){return t.id===e.id})),n=t.points,a=t.rank;return Object(I.a)(Object(I.a)({},e),{},{points:n,rank:a})}))}(n,t)))}),[])}var jt=(ct={},Object(s.a)(ct,T.FEMALE,(nt={},Object(s.a)(nt,R.SCHO,[2,2,2,2,3,3]),Object(s.a)(nt,R.PUSH,[40,45,50,55,60,65]),Object(s.a)(nt,R.PULL,[40,45,50,50,55,60]),nt)),Object(s.a)(ct,T.MALE,(at={},Object(s.a)(at,R.SCHO,[2,2,3,3,4,4]),Object(s.a)(at,R.PUSH,[45,50,60,65,70,75]),Object(s.a)(at,R.PULL,[45,50,55,60,65,70]),at)),ct),bt="kg",ft="percent",pt=(rt={},Object(s.a)(rt,R.SCHO,bt),Object(s.a)(rt,R.PUSH,ft),Object(s.a)(rt,R.PULL,ft),rt);var Ot=n(200);var vt=function(e){var t=et(),n=Object(r.useState)((function(){return function(){return!0}})),a=Object(Ce.a)(n,2),i=a[0],o=a[1],s=Object(r.useState)([]),l=Object(Ce.a)(s,2),u=l[0],d=l[1];return Object(r.useEffect)((function(){o((function(){return function(e){return u.every((function(t){return"function"!==typeof t||t(e)}))}}))}),[u,o]),[i,function(){return Object(c.jsx)("div",{className:t.filter,children:e.map((function(e,n){return Object(c.jsx)(Ot.a,{variant:"contained",className:t.filterGroup,children:Object.keys(e).map((function(t){var a=u[n]===e[t];return Object(c.jsx)($e.a,{color:a?"primary":"default",onClick:function(){return d((function(c){var r=Object(he.a)(c);return r[n]=a?void 0:e[t],r}))},children:t},t)}))},n)}))})}]};var mt=function(e,t){var n=Object(r.useState)(!0),a=Object(Ce.a)(n,2),c=a[0],i=a[1],o=Object(r.useRef)({id:0});return Object(r.useEffect)((function(){if(c){return function n(){t(),o.current.id=setTimeout((function(){return n()}),1e3*e)}(),function(){return clearTimeout(o.current.id)}}}),[c,e,t]),[c,i]},ht=n(195),gt=n(216),xt=n(208),yt=n(217);var St,Ct,wt=function(e){var t,n,a=e.event,i=e.competitor,o=Object(me.useDispatch)(),l=Xe(),u=null===(t=i.results)||void 0===t||null===(n=t[a.id])||void 0===n?void 0:n[_.GYMNASTICS],d=a.gymnastics[Object.values(L).find((function(e){return P[e].includes(lt(i.year))}))],j=d.split(", ").filter((function(e){return!!e})),b=Object(r.useState)(u||j.reduce((function(e,t){return Object(I.a)(Object(I.a)({},e),{},Object(s.a)({},t,0))}),{})),f=Object(Ce.a)(b,2),p=f[0],O=f[1];if(Object(r.useEffect)((function(){o(Oe({eventId:a.id,competitorId:i.id,discipline:_.GYMNASTICS,result:p}))}),[a.id,i.id,o,p]),!d.length)return null;var v=st(_.GYMNASTICS,p);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ze.a,{variant:"overline",paragraph:!0,className:l.marginTop,children:_.GYMNASTICS}),Object(c.jsxs)("div",{className:l.editor,children:[j.map((function(e){return Object(c.jsxs)(ht.a,{style:{overflow:"hidden",textOverflow:"ellipsis"},children:[Object(c.jsx)(gt.a,{id:"".concat(e,"-label"),children:e}),Object(c.jsxs)(xt.a,{labelId:"".concat(e,"-label"),id:"".concat(e),value:p[e],onChange:function(t){return O((function(n){var a=Object(I.a)({},n);return a[e]=t.target.value,a}))},children:[Object(c.jsx)(yt.a,{value:2,children:"2"}),Object(c.jsx)(yt.a,{value:1.5,children:"1,5"}),Object(c.jsx)(yt.a,{value:1,children:"1"}),Object(c.jsx)(yt.a,{value:.5,children:"0,5"}),Object(c.jsx)(yt.a,{value:0,children:"0"})]})]},e)})),Object(c.jsxs)("div",{className:l.gymnasticsResult,children:[Object(c.jsx)("span",{className:"material-icons ".concat(l.editorIcon),children:"play_arrow"}),Object(c.jsx)(ze.a,{color:"primary",display:"inline",className:l.editorPoints,children:v||"--"})]})]})]})},Nt="certificates",kt="protocol",It=[];var At=[(St={},Object(s.a)(St,T.FEMALE,(function(e){return e.gender===T.FEMALE})),Object(s.a)(St,T.MALE,(function(e){return e.gender===T.MALE})),St),(Ct={},Object(s.a)(Ct,L.A,(function(e){return P[L.A].includes(lt(e.year))})),Object(s.a)(Ct,L.B,(function(e){return P[L.B].includes(lt(e.year))})),Ct)];var Tt=function(){var e=Object(me.useDispatch)(),t=Object(me.useSelector)(xe),n=Object(me.useSelector)(ye),a=Object(me.useSelector)(Se),i=Xe(),o=Object(r.useState)([]),s=Object(Ce.a)(o,2),l=s[0],u=s[1],d=Object(r.useState)(0),j=Object(Ce.a)(d,2),b=j[0],f=j[1],p=vt(At),O=Object(Ce.a)(p,2),v=O[0],m=O[1],h=(null===t||void 0===t?void 0:t.competitorIds)||ge.ARRAY,g=Object(r.useCallback)((function(){return e(ce(h.filter((function(e){return e!==b}))))}),[e,b,h]);return mt(5,g),Object(r.useEffect)((function(){if(Array.isArray(n)){var e=dt(n,t.final?a:t.id).sort((function(e,t){return e.name.charCodeAt(0)-t.name.charCodeAt(0)}));u(e)}}),[t.id,n]),It=l,t.id?Object(c.jsxs)("div",{children:[Object(c.jsx)(m,{}),!!l.length&&l.filter(v).map((function(a,r){var o=b===a.id;return Object(c.jsx)(Je.a,{className:"".concat(i.card),elevation:3,onClick:function(){o||(b&&e(ie(n.find((function(e){return e.id===b})))),f(a.id))},children:Object(c.jsxs)(Ke.a,{children:[Object(c.jsxs)("div",{className:i.row,children:[Object(c.jsx)(ze.a,{variant:"overline",color:"textSecondary",display:"block",children:"".concat(a.year," | ").concat(a.gender).concat(a.weight[t.id]?" | ".concat(a.weight[t.id]," kg"):"")}),Object(c.jsxs)(ze.a,{variant:"overline",color:"textSecondary",display:"block",children:["Punkte ",a.points]})]}),Object(c.jsxs)("div",{className:i.row,children:[Object(c.jsx)(ze.a,{variant:"h6",color:"textPrimary",children:a.name}),Object(c.jsxs)(ze.a,{variant:"h6",color:"primary",children:["Platz ",a.rank]})]}),o&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:i.editor,children:[Object(c.jsx)("div",{className:i.editorEntry,children:Object(c.jsx)(ke.a,{id:"filled-weight",label:"K\xf6rpergewicht",type:"number",variant:"outlined",value:a.weight[t.id],onChange:function(n){return e(fe({eventId:t.id,competitorId:a.id,weight:n.target.value}))},margin:"dense"})}),Object.keys(t.disciplines).filter((function(e){return e!==_.GYMNASTICS})).map((function(n){var r;if(!t.disciplines[n])return null;var o=null===(r=a.results[t.id])||void 0===r?void 0:r[n],s=function(e,t,n,a){if(!pt[a])return 0;var c=lt(e),r=jt[t][a][E.indexOf(c)];switch(pt[a]){case bt:return r;case ft:return Math.round(n*r/100)}}(a.year,a.gender,a.weight[t.id],n);return Object(c.jsxs)("div",{className:i.editorEntry,children:[Object(c.jsx)(ke.a,{id:"filled-".concat(n),label:"".concat(n).concat(s?" ".concat(s," kg"):""),type:"number",variant:"filled",value:o,onChange:function(c){return e(Oe({eventId:t.id,competitorId:a.id,discipline:n,result:c.target.value}))},margin:"dense"}),Object(c.jsx)("span",{className:"material-icons ".concat(i.editorIcon),children:"play_arrow"}),Object(c.jsx)(ze.a,{color:"primary",display:"inline",className:i.editorPoints,children:o?st(n,o):"--"})]},n)}))]}),Object(c.jsx)(wt,{event:t,competitor:a}),Object(c.jsx)(Ve.a,{className:i.marginTop,children:Object(c.jsx)($e.a,{variant:"contained",color:"primary",onClick:function(){e(ie(n.find((function(e){return e.id===a.id})))),f(0)},children:"Fertig"})})]})]})},r)}))]}):null},Et=[{icon:Object(c.jsx)("span",{className:"material-icons",children:"event_note"}),name:"Protokoll",type:kt},{icon:Object(c.jsx)("span",{className:"material-icons",children:"people_alt"}),name:"Urkunden",type:Nt}];var Lt=function(){var e=Object(me.useDispatch)(),t=Object(me.useSelector)((function(e){return e.harbor.vw})),n=Object(me.useSelector)((function(e){return e.harbor.cw})),a=Object(me.useSelector)((function(e){return e.navigation.activeContent})),i=Object(r.useState)(!1),o=Object(Ce.a)(i,2),s=o[0],l=o[1],u=null,O="",v="";switch(a){case d:u=function(){return e(y(j))},O="add",v="primary";break;case j:u=function(){return e(y(d))},O="clear",v="secondary";break;case b:u=function(){return e(y(f))},O="add",v="primary";break;case f:u=function(){e(ie()),e(y(b))},O="clear",v="secondary";break;default:O="add",v="primary"}return Object(c.jsx)("footer",{className:Fe.a.BottomNavigation,style:{width:"".concat(n,"px"),margin:"0 ".concat((t-n)/2,"px")},children:Object(c.jsxs)("div",{className:Fe.a.Cta,children:[a!==p&&Object(c.jsx)(Ye.a,{color:v,"aria-label":"add",onClick:u,children:Object(c.jsx)("span",{className:"material-icons",children:O})}),a===p&&t>576&&Object(c.jsx)(He.a,{ariaLabel:"SpeedDial example",hidden:!1,icon:Object(c.jsx)(Be.a,{}),onClose:function(){return l(!1)},onOpen:function(){return l(!0)},open:s,direction:"up",children:Et.map((function(e){return Object(c.jsx)(qe.a,{icon:e.icon,tooltipTitle:e.name,onClick:function(){!function(e){var t,n={};switch(e){case Nt:n.competitors=It,t="".concat(A.requestService.baseUrl,"/tsc/print_certificates");break;case kt:n.competitors=It,t="".concat(A.requestService.baseUrl,"/tsc/print_protocol")}fetch(t,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(n)}).then((function(e){return e.blob()})).then((function(e){var t=URL.createObjectURL(new Blob([e],{type:"application/pdf"})),n=document.createElement("a");n.href=t,n.target="_blank",n.click(),setTimeout((function(){return URL.revokeObjectURL(t)}),100)})).catch((function(e){return console.error(e)}))}(e.type),l(!1)}},e.name)}))})]})})},Pt=n(155);var Rt=function(){var e=Object(me.useDispatch)(),t=Object(me.useSelector)((function(e){return e.events.all})),n=Object(me.useSelector)((function(e){return e.events.activeId})),a=Ze(),i=Object(r.useState)([]),o=Object(Ce.a)(i,2),s=o[0],l=o[1],u=Object(r.useState)(-1),d=Object(Ce.a)(u,2),b=d[0],f=d[1],O=Object(r.useCallback)((function(){return e(U())}),[e]);return mt(15,O),Object(r.useEffect)((function(){Object(A.isObject)(t)&&l(Object.values(t).sort((function(e,t){return new Date(e.date).getTime()-new Date(t.date).getTime()})))}),[t]),Object(c.jsx)("div",{children:!!s.length&&s.map((function(t,r){var i=t.id===n;return Object(c.jsx)(Je.a,{className:"".concat(a.card," ").concat(i&&a.cardActive),elevation:3,onClick:function(){e(B(t.id)),e(y(p))},children:Object(c.jsxs)(Ke.a,{children:[Object(c.jsxs)("div",{className:a.cardContent,children:[Object(c.jsxs)("div",{children:[t.final&&Object(c.jsx)(ze.a,{variant:"overline",color:"primary",display:"block",children:"Jahresabschluss ".concat(t.date.split("-")[0])}),Object(c.jsxs)(ze.a,{variant:"overline",color:"textSecondary",display:"block",children:[t.date.split("-").reverse().join(".")," / ",t.start," Uhr"]}),Object(c.jsx)(ze.a,{variant:"h6",color:"textPrimary",children:t.name})]}),Object(c.jsx)(Ve.a,{className:a.cardActions,children:b===r?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Pt.a,{className:i?a.contrastText:"",onClick:function(e){e.stopPropagation(),f(-1)},children:Object(c.jsx)("span",{className:"material-icons",children:"clear"})}),Object(c.jsx)($e.a,{variant:"contained",color:"secondary",onClick:function(n){n.stopPropagation(),e(W(t.id)),f(-1)},children:Object(c.jsx)("span",{className:"material-icons",children:"delete"})})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Pt.a,{className:i?a.contrastText:"",onClick:function(n){n.stopPropagation(),e(K(t.id)),e(y(j))},children:Object(c.jsx)("span",{className:"material-icons",children:"edit"})}),Object(c.jsx)(Pt.a,{className:i?a.contrastText:"",onClick:function(e){e.stopPropagation(),f(r)},children:Object(c.jsx)("span",{className:"material-icons",children:"delete"})})]})})]}),(t.place||t.host)&&Object(c.jsx)(ze.a,{variant:"caption",color:"textSecondary",display:"block",paragraph:!0,children:"".concat(t.place).concat(t.place&&t.host?" | ":"").concat(t.host)}),Object(c.jsx)(ze.a,{variant:"body1",children:Object.keys(t.disciplines).reduce((function(e,n){return t.disciplines[n]?"".concat(e).concat(e.length?", ":"").concat(n):e}),"")}),t.disciplines[_.GYMNASTICS]&&Object.keys(t.gymnastics).map((function(e){return Object(c.jsxs)(ze.a,{variant:"caption",color:"textSecondary",display:"block",children:[Object(c.jsxs)("span",{className:a.gymnasticsTag,children:["Turnen ",e,":"]})," ",t.gymnastics[e]]},e)}))]})},r)}))})},_t=n(205),Dt=n(206),Mt=n(207),Ut=n(212),Wt="dense";var Gt=function(){var e=Object(me.useDispatch)(),t=Object(me.useSelector)((function(e){return e.events.draft.id})),n=Object(me.useSelector)((function(e){return e.events.draft.name})),a=Object(me.useSelector)((function(e){return e.events.draft.date})),i=Object(me.useSelector)((function(e){return e.events.draft.place})),o=Object(me.useSelector)((function(e){return e.events.draft.host})),s=Object(me.useSelector)((function(e){return e.events.draft.start})),l=Object(me.useSelector)((function(e){return e.events.draft.final})),u=Object(me.useSelector)((function(e){return e.events.draft.disciplines})),d=Object(me.useSelector)((function(e){return e.events.draft.gymnastics})),j=Object(me.useSelector)((function(e){return e.events.draft.competitorIds})),f=Qe();Object(r.useEffect)((function(){return function(){return e(H())}}),[e]);var O=function(){e(G({id:t,name:n,date:a,place:i,host:o,start:s,final:l,disciplines:u,gymnastics:d,competitorIds:j})),e(y(0!==t?p:b))};return Object(c.jsx)(Je.a,{elevation:3,className:f.card,onKeyDown:function(e){"Enter"===e.key&&O()},children:Object(c.jsx)(Ke.a,{children:Object(c.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(c.jsxs)("div",{className:f.flexRow,children:[Object(c.jsx)(ke.a,{id:"filled-name",label:"Wettbewerb",variant:"filled",value:n,onChange:function(t){return e(z(t.target.value))},margin:Wt,fullWidth:!0}),Object(c.jsx)(_t.a,{control:Object(c.jsx)(Dt.a,{checked:l,onChange:function(){return e(X())},name:"Jahresabschluss",color:"primary",inputProps:{"aria-label":"primary checkbox"}}),label:"Jahresab.",labelPlacement:"top"})]}),Object(c.jsxs)("div",{className:f.flexRow,children:[Object(c.jsx)(ke.a,{id:"date",label:"Datum",type:"date",variant:"filled",value:a,onChange:function(t){return e(V(t.target.value))},margin:Wt,fullWidth:!0}),Object(c.jsx)("div",{className:f.spacer}),Object(c.jsx)(ke.a,{id:"time",label:"Beginn",type:"time",variant:"filled",value:s,onChange:function(t){return e(Q(t.target.value))},margin:Wt,fullWidth:!0,inputProps:{step:300}})]}),Object(c.jsxs)("div",{className:f.flexRow,children:[Object(c.jsx)(ke.a,{id:"filled-place",label:"Wettkampf Ort",variant:"filled",value:i,onChange:function(t){return e($(t.target.value))},margin:Wt,fullWidth:!0}),Object(c.jsx)("div",{className:f.spacer}),Object(c.jsx)(ke.a,{id:"filled-host",label:"Ausrichter",variant:"filled",value:o,onChange:function(t){return e(Z(t.target.value))},margin:Wt,fullWidth:!0})]}),Object(c.jsx)(Mt.a,{row:!0,children:Object.keys(u).map((function(t){return Object(c.jsx)(_t.a,{control:Object(c.jsx)(Ut.a,{checked:u[t],onChange:function(){return e(ee(t))},name:t,color:t===_.GYMNASTICS?"primary":"secondary"}),label:t},t)}))}),u[_.GYMNASTICS]&&Object.keys(d).map((function(t){var n=P[t];return Object(c.jsxs)("div",{className:f.marginTop,children:[Object(c.jsx)("h3",{children:"Turnen ".concat(t," (Jahrgang ").concat(ut(n[n.length-1])," - ").concat(ut(n[0]),")")}),Object(c.jsx)(ke.a,{id:"outlined-multiline-flexible",label:"\xdcbungen",multiline:!0,rowsMax:4,variant:"outlined",value:d[t],onChange:function(n){return e(te({group:t,gymnastics:n.target.value}))},margin:Wt,fullWidth:!0})]},t)})),Object(c.jsx)(Ve.a,{className:f.marginTop,children:Object(c.jsx)($e.a,{variant:"contained",color:"primary",onClick:O,children:"Fertig"})})]})})})};var Ft=function(){var e=Object(me.useDispatch)(),t=Object(me.useSelector)((function(e){return e.competitors.all})),n=Object(me.useSelector)(xe),a=n.competitorIds||ge.ARRAY,i=Ze(),o=Object(r.useState)([]),s=Object(Ce.a)(o,2),l=s[0],u=s[1],d=Object(r.useState)(-1),j=Object(Ce.a)(d,2),b=j[0],p=j[1],O=Object(r.useState)(!1),v=Object(Ce.a)(O,2),m=v[0],h=v[1],g=Object(r.useCallback)((function(){return e(ce())}),[e]);return mt(15,g),Object(r.useEffect)((function(){Object(A.isObject)(t)&&u(Object.values(t).sort((function(e,t){return e.name.charCodeAt(0)-t.name.charCodeAt(0)})))}),[t]),Object(r.useEffect)((function(){m&&(e(G(n)),h(!1))}),[e,n,m]),Object(c.jsx)("div",{children:!!l.length&&l.map((function(t,r){var o=!n.id,s=a.includes(t.id);return Object(c.jsx)(Je.a,{className:"".concat(i.card," ").concat(s&&i.cardActive),elevation:3,onClick:function(){o||(e(s?J(t.id):q(t.id)),h(!0))},children:Object(c.jsxs)(Ke.a,{children:[Object(c.jsxs)("div",{className:i.cardContent,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(ze.a,{variant:"overline",color:"textSecondary",display:"block",children:"".concat(t.year," | ").concat(t.gender)}),Object(c.jsx)(ze.a,{variant:"h6",color:"textPrimary",children:t.name})]}),Object(c.jsx)(Ve.a,{className:i.cardActions,children:b===r?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Pt.a,{className:s?i.contrastText:"",onClick:function(e){e.stopPropagation(),p(-1)},children:Object(c.jsx)("span",{className:"material-icons",children:"clear"})}),Object(c.jsx)($e.a,{variant:"contained",color:"secondary",onClick:function(n){n.stopPropagation(),e(re(t.id)),p(-1)},children:Object(c.jsx)("span",{className:"material-icons",children:"delete"})})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Pt.a,{className:s?i.contrastText:"",onClick:function(n){n.stopPropagation(),e(ue(t.id)),e(y(f))},children:Object(c.jsx)("span",{className:"material-icons",children:"edit"})}),Object(c.jsx)(Pt.a,{className:s?i.contrastText:"",onClick:function(e){e.stopPropagation(),p(r)},children:Object(c.jsx)("span",{className:"material-icons",children:"delete"})})]})})]}),Object(c.jsx)(ze.a,{variant:"caption",color:"textSecondary",display:"block",children:t.club||"Kein Verein"})]})},r)}))})},Yt="dense";var Ht=function(){var e=Object(me.useDispatch)(),t=Object(me.useSelector)((function(e){return e.competitors.draft.id})),n=Object(me.useSelector)((function(e){return e.competitors.draft.name})),a=Object(me.useSelector)((function(e){return e.competitors.draft.gender})),i=Object(me.useSelector)((function(e){return e.competitors.draft.year})),o=Object(me.useSelector)((function(e){return e.competitors.draft.weight})),s=Object(me.useSelector)((function(e){return e.competitors.draft.club})),l=Object(me.useSelector)((function(e){return e.competitors.draft.results})),u=Qe();Object(r.useEffect)((function(){return function(){return e(le())}}),[e]);var d=function(){e(ie({id:t,name:n,gender:a,year:i,weight:o,club:s,results:l})),e(y(b))};return Object(c.jsx)(Je.a,{elevation:3,className:u.card,onKeyDown:function(e){"Enter"===e.key&&d()},children:Object(c.jsx)(Ke.a,{children:Object(c.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(c.jsx)(ke.a,{id:"filled-name",label:"Name",variant:"filled",value:n,onChange:function(t){return e(de(t.target.value))},margin:Yt,fullWidth:!0}),Object(c.jsx)(ke.a,{id:"filled-club",label:"Verein",variant:"filled",value:s,onChange:function(t){return e(pe(t.target.value))},margin:Yt,fullWidth:!0}),Object(c.jsxs)("div",{className:u.gridRow,children:[Object(c.jsxs)(ht.a,{margin:Yt,children:[Object(c.jsx)(gt.a,{id:"demo-simple-select-label-gender",children:"Geschlecht"}),Object(c.jsx)(xt.a,{labelId:"demo-simple-select-label-gender",id:"demo-simple-select-gender",value:a,onChange:function(t){return e(je(t.target.value))},children:Object.values(T).map((function(e){return Object(c.jsx)(yt.a,{value:e,children:e},e)}))})]}),Object(c.jsxs)(ht.a,{margin:Yt,children:[Object(c.jsx)(gt.a,{id:"demo-simple-select-label-year",children:"Jahrgang"}),Object(c.jsx)(xt.a,{labelId:"demo-simple-select-label-year",id:"demo-simple-select-year",value:i,onChange:function(t){return e(be(t.target.value))},children:E.map((function(e){return ut(e)})).map((function(e){return Object(c.jsx)(yt.a,{value:e,children:e},e)}))})]})]}),Object(c.jsx)(Ve.a,{className:u.marginTop,children:Object(c.jsx)($e.a,{variant:"contained",color:"primary",onClick:d,children:"Fertig"})})]})})})};var Bt=function(){var e=Object(r.useState)(!1),t=Object(Ce.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){window.addEventListener("offline",(function(){return a(!0)})),window.addEventListener("online",(function(){return a(!1)}))}),[]),Object(c.jsx)(we.a,{open:n,onClose:function(){},"aria-labelledby":"form-dialog-title",children:Object(c.jsxs)(Ne.a,{children:[Object(c.jsx)(ze.a,{children:"Kein Internet"}),Object(c.jsx)("div",{style:{textAlign:"center"},children:Object(c.jsx)("span",{className:"material-icons",children:"perm_scan_wifi"})})]})})};function qt(e){switch(e){case d:return Object(c.jsx)(Rt,{});case j:return Object(c.jsx)(Gt,{});case b:return Object(c.jsx)(Ft,{});case f:return Object(c.jsx)(Ht,{});case p:return Object(c.jsx)(Tt,{});default:return Object(c.jsx)("div",{children:"unknown active content"})}}var Jt=function(){var e=Object(me.useSelector)((function(e){return e.harbor.vh})),t=Object(me.useSelector)(xe).name||"",n=Object(me.useSelector)((function(e){return e.navigation.activeContent}));return Object(r.useEffect)((function(){document.title=t||"TSC"}),[t]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Ie,{}),Object(c.jsx)(Bt,{}),Object(c.jsx)(A.Header,{height:Math.min(.14*e,110),bg:"white",css:{overflow:"hidden",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"},children:Object(c.jsx)(We,{})}),Object(c.jsxs)(A.Page,{children:[qt(n),Object(c.jsx)("div",{style:{height:"112px"}})]}),Object(c.jsx)(Lt,{})]})};A.requestService.setBaseUrl("https://wolke.glencoden.de");var Kt={global:{contentSize:{width:.95,height:1},maxContentWidth:640,bg:"#e5e5e5"},theme:{fonts:{body:"roboto, sans-serif"}},reducer:ve};o.a.render(Object(c.jsx)(A.Harbor,{options:Kt,children:Object(c.jsx)(Jt,{})}),document.getElementById("root"))},71:function(e,t,n){e.exports={BottomNavigation:"BottomNavigation_BottomNavigation__2CoWW",Cta:"BottomNavigation_Cta__1wAwD"}}},[[151,1,2]]]);
//# sourceMappingURL=main.e8174302.chunk.js.map