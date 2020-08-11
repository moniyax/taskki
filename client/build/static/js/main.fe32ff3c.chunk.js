(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{152:function(e,t,n){e.exports=n(263)},157:function(e,t,n){},263:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(57),o=n.n(s),c=(n(157),n(9)),i=n(7),u=n.n(i),l=n(11),m=n(13),d=n(27),p=n(120),f=n(18),v=function(e){var t=e.id,n=e.text;return f.a.post("/api/tasks",{json:{id:t,text:n}}).json()},b=n(83),g=[new b.b.Entity("tasks")],E=Object(d.b)({name:"tasks",initialState:{byId:{},ids:[],loading:!1,error:null},reducers:{getTasksStart:function(e){e.loading=!0,e.error=null},getTasksSuccess:function(e,t){var n=t.payload,a=n.tasksById,r=n.taskIds;e.byId=a,e.ids=r,e.loading=!1,e.error=null},getTasksFailure:function(e,t){e.loading=!1,e.error=t.payload},addTask:function(e,t){var n=t.payload,a=n.id,r=n.text;e.byId[a]={id:a,text:r,completed:!1},e.ids.push(a)},addTaskStart:function(e,t){var n=t.payload.id;e.byId[n].syncing=!0,e.byId[n].error=null},addTaskSuccess:function(e,t){var n=t.payload,a=n.id;e.byId[a]=Object(m.a)(Object(m.a)({},e.byId[a]),n),e.byId[a].syncing=!1,e.byId[a].error=null},addTaskFailure:function(e,t){var n=t.payload,a=n.id;e.byId[a].syncing=!1,e.byId[a].error=n}}}),k=E.actions,y=k.addTask,h=k.getTasksStart,w=k.getTasksSuccess,j=k.getTasksFailure,x=k.addTaskSuccess,S=E.reducer,I=n(116),O=n(40),T=n(117),U=Object(T.a)({form:"taskForm"})(Object(c.b)(null,(function(e){return{reset:function(){return e(Object(O.a)("taskForm"))}}}))((function(e){var t=e.handleSubmit,n=e.reset;return r.a.createElement("form",{onSubmit:t},r.a.createElement(I.a,{component:"textarea",name:"taskText",cols:" ",rows:" ",onKeyDown:function(e){return function(t){13===t.keyCode&&(t.preventDefault(),e(),n())}}(t)}))}))),N=n(8),F=function(e){var t=e.email,n=e.password;return f.a.post("/api/session",{json:{email:t,password:n}}).json()},q=function(e){var t=e.username,n=e.email,a=e.password;return f.a.post("/api/users",{json:{username:t,email:n,password:a}}).json()},R=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}},B=Object(d.b)({name:"auth",initialState:{},reducers:{signUpStart:function(e){e.pending=!0,e.signUpError=null},signUpSuccess:function(e,t){var n=t.payload;e.currentUser=n,e.pending=!1,e.signUpError=null},signUpFailure:function(e,t){e.pending=!1,e.signUpError=t.payload},signInStart:function(e){e.pending=!0,e.signInError=null},signInSuccess:function(e,t){var n=t.payload;e.currentUser=n,e.pending=!1,e.signInError=null},signInFailure:function(e,t){e.pending=!1,e.signInError=t.payload}}}),J=B.actions,P=J.signUpStart,L=J.signUpSuccess,A=J.signUpFailure,C=J.signInStart,D=J.signInSuccess,H=J.signInFailure,M=function(e){var t;return null===(t=e.auth.currentUser)||void 0===t?void 0:t.token},W=function(e){var t;return null===(t=e.auth.signInError)||void 0===t?void 0:t.messages[0]},K=function(e){var t;return null===(t=e.auth.signUpError)||void 0===t?void 0:t.messages[0]},$=B.reducer,z=Object(c.b)((function(e){return{token:M(e)}}))((function(e){var t=e.token,n=e.children;return t?r.a.createElement(r.a.Fragment,null,n):r.a.createElement(N.a,{to:"/signin"})})),G=Object(c.b)((function(e){var t,n=e.tasks;return{tasks:(t=n,t.ids.map((function(e){return t.byId[e]})))}}),(function(e){return{addTaskRequest:function(t){return e((n=t,function(){var e=Object(l.a)(u.a.mark((function e(t){var a,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n.text,r=Object(p.v4)(),t(y({id:r,text:a})),e.next=6,v({id:r,text:a});case 6:s=e.sent,t(x({id:s.id,text:s.text,offline:!1})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t(j()),console.error("addTaskFailure:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()));var n},getTasksRequest:function(){return e(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,r,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(h()),e.next=4,f.a.get("/api/tasks").json();case 4:n=e.sent,a=Object(b.a)(n,g),r=a.entities,s=a.result,o=r.tasks,t(w({tasksById:o,taskIds:s})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),t(j()),console.error("getTasksFailure:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.addTaskRequest,n=e.tasks,s=e.getTasksRequest;Object(a.useEffect)((function(){s()}),[s]);var o=Object(c.c)();return r.a.createElement(z,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){o({type:"logout"})}},"Log out"),r.a.createElement("div",{className:"tasks"},n.map((function(e){return r.a.createElement("div",{key:e.id},e.text)})),r.a.createElement(U,{onSubmit:function(e){var n=e.taskText;t({text:n})}}))))})),Q=function(){return r.a.createElement(z,null,r.a.createElement(G,null))},V=n(21),X=function(e){var t=e.input,n=e.label,a=e.type,s=e.meta,o=s.touched,c=s.error;return(r.a.createElement("div",null,r.a.createElement("label",null,n),r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,{type:a})),o&&c&&r.a.createElement("span",null,c))))},Y=Object(T.a)({form:"signIn",validate:function(e){var t={};return e.email||(t.email="Required"),e.password||(t.password="Required"),t}})((function(e){var t=e.handleSubmit;return(r.a.createElement("form",{className:"auth-form",onSubmit:t},r.a.createElement("div",{className:"field"},r.a.createElement(I.a,{name:"email",component:X,type:"email",label:"Email:"})),r.a.createElement("div",{className:"field"},r.a.createElement(I.a,{name:"password",component:X,type:"password",label:"Password:"})),r.a.createElement("input",{type:"submit",value:"Log in"})))})),Z=Object(c.b)((function(e){return{token:M(e),error:W(e)}}))((function(e){var t=e.token,n=e.error,a=Object(c.c)();return t?r.a.createElement(N.a,{to:"/"}):r.a.createElement("div",{className:"auth-box"},r.a.createElement("h2",null,"Taskki"),n&&r.a.createElement("div",null,n),r.a.createElement(Y,{onSubmit:function(e){var t=e.email,n=e.password;return a(function(e){var t=e.email,n=e.password;return(function(){var e=Object(l.a)(u.a.mark((function e(a){var r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(C()),e.next=4,F({email:t,password:n});case 4:r=e.sent,a(D(r)),R("user",r),e.next=17;break;case 9:if(e.prev=9,e.t0=e.catch(0),e.t0 instanceof f.a.HTTPError){e.next=13;break}throw e.t0;case 13:return e.next=15,e.t0.response.json();case 15:s=e.sent,a(H(s));case 17:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}({email:t,password:n}))}}),r.a.createElement(V.b,{to:"/signup"},"Sign Up"))})),_=function(e){var t=e.input,n=e.label,a=e.type,s=e.meta,o=s.touched,c=s.error;return(r.a.createElement("div",null,r.a.createElement("label",null,n),r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,{type:a})),o&&c&&r.a.createElement("span",null,c))))},ee=Object(T.a)({form:"signUp",validate:function(e){var t={};return e.username||(t.username="Required"),e.email||(t.email="Required"),e.password||(t.password="Required"),t}})((function(e){var t=e.handleSubmit;return(r.a.createElement("form",{className:"auth-form",onSubmit:t},r.a.createElement("div",{className:"field"},r.a.createElement(I.a,{name:"username",component:_,type:"text",label:"Username:"})),r.a.createElement("div",{className:"field"},r.a.createElement(I.a,{name:"email",component:_,type:"email",label:"Email:"})),r.a.createElement("div",{className:"field"},r.a.createElement(I.a,{name:"password",component:_,type:"password",label:"Password:"})),r.a.createElement("input",{type:"submit",value:"Sign Up"})))})),te=Object(c.b)((function(e){return{token:M(e),error:K(e)}}))((function(e){var t=e.token,n=e.error,a=Object(c.c)();return t?r.a.createElement(N.a,{to:"/"}):r.a.createElement("div",{className:"auth-box"},r.a.createElement("h2",null,"Taskki"),n&&r.a.createElement("div",null,n),r.a.createElement(ee,{onSubmit:function(e){var t=e.username,n=e.email,r=e.password;return a(function(e){var t=e.username,n=e.email,a=e.password;return(function(){var e=Object(l.a)(u.a.mark((function e(r){var s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(P()),e.next=4,q({username:t,email:n,password:a});case 4:s=e.sent,r(L(s)),R("user",s),e.next=17;break;case 9:if(e.prev=9,e.t0=e.catch(0),e.t0 instanceof f.a.HTTPError){e.next=13;break}throw e.t0;case 13:return e.next=15,e.t0.response.json();case 15:o=e.sent,r(A(o));case 17:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}({username:t,email:n,password:r}))}}),r.a.createElement(V.b,{to:"/signin"},"Log In"))}));var ne=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N.d,null,r.a.createElement(N.b,{path:"/signin",component:Z}),r.a.createElement(N.b,{path:"/signup",component:te}),r.a.createElement(N.b,{exact:!0,path:"/",component:Q})))},ae=n(48),re=n(6),se=n(118),oe=(n(262),Object(ae.a)(Object(d.c)()));var ce=Object(re.c)({tasks:S,form:se.a,auth:$}),ie=Object(d.a)({reducer:function(e,t){return"logout"===t.type&&(localStorage.removeItem("user"),e=void 0),ce(e,t)},preloadedState:{auth:{currentUser:function(e){try{var t=localStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(n){return}}("user")}},middleware:oe});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=n(265);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:ie},r.a.createElement(ue.a,{theme:{fonts:{body:"system-ui, sans-serif",heading:'"Avenir Next", sans-serif',monospace:"Menlo, monospace"},colors:{text:"#fff",background:"#363537",primary:"#33e"}}},r.a.createElement(V.a,null,r.a.createElement(ne,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[152,1,2]]]);
//# sourceMappingURL=main.fe32ff3c.chunk.js.map