(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[775],{2524:function(e,t,s){Promise.resolve().then(s.bind(s,9521))},9521:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var a=s(9268),n=s(6006),r=s(6008),c=s(703),l=s(6936),o=s(4734),i=()=>{let[e,t]=(0,n.useState)(""),[s,i]=(0,n.useState)(""),[u,d]=(0,n.useState)(""),m=(0,r.useRouter)(),p=async()=>{""==e?alert("Name cannot be Empty"):""==s?alert("Email cannot be Empty"):""==u&&alert("password cannot be Empty");try{await (0,o.Xb)(c.I8,s,u)}catch(e){alert("Email already in use")}b()},b=async()=>{try{await (0,o.e5)(c.I8,s,u),h(),m.push("/todolist")}catch(e){console.log(e)}},h=async()=>{await (0,l.pl)((0,l.JU)(c.db,"users",c.I8.currentUser.uid),{userName:e,photoURL:c.I8.currentUser.photoURL})};return(0,a.jsx)("div",{className:"h-screen grid content-center bg-neutral-200 sm:bg-white",children:(0,a.jsxs)("div",{className:"RegisterPageBody",children:[(0,a.jsx)("h1",{className:"text-left text-2xl pb-2 font-bold",children:"ToDoList | REGISTER"}),(0,a.jsxs)("label",{className:"block text-sm",children:[(0,a.jsx)("span",{className:"block text-sm",children:"Full Name"}),(0,a.jsx)("input",{onChange:e=>t(e.target.value),className:"RegisterPageInput",type:"text",required:!0})]}),(0,a.jsxs)("label",{className:"block text-sm",children:[(0,a.jsx)("span",{className:"block text-sm",children:"Email"}),(0,a.jsx)("input",{onChange:e=>i(e.target.value),className:"RegisterPageInput",type:"text",required:!0})]}),(0,a.jsxs)("label",{className:"block text-sm",children:[(0,a.jsx)("span",{className:"block text-sm",children:"Password"}),(0,a.jsx)("input",{onChange:e=>d(e.target.value),className:"RegisterPageInput",type:"password",required:!0})]}),(0,a.jsx)("button",{className:"RegisterPageButton",onClick:p,children:"Register"})]})})}},703:function(e,t,s){"use strict";s.d(t,{Cw:function(){return u},I8:function(){return o},db:function(){return d},gD:function(){return i},tO:function(){return m}});var a=s(1313),n=s(4734),r=s(6936),c=s(4202);let l=(0,a.ZF)({apiKey:"AIzaSyDsrU9m7qNCzTT6Df30pAGqjwad8DrMOKo",authDomain:"todolist-5c55b.firebaseapp.com",projectId:"todolist-5c55b",storageBucket:"todolist-5c55b.appspot.com",messagingSenderId:"39215304269",appId:"1:39215304269:web:f34406029d24b6ead31604"}),o=(0,n.v0)(l),i=new n.hJ,u=new n._O,d=(0,r.ad)(l),m=(0,c.cF)(l)}},function(e){e.O(0,[613,104,568,667,488,744],function(){return e(e.s=2524)}),_N_E=e.O()}]);