(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{59:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(24),a=n(10),s=n(69),i=n(29),o=n(42),l=(n(50),n(60),n(61),o.a.initializeApp({apiKey:"AIzaSyCqG_1hm7AJN58pyBj_lbMecOtwP2NXbzQ",authDomain:"taxis-stackblitz.firebaseapp.com",projectId:"taxis-stackblitz",storageBucket:"taxis-stackblitz.appspot.com",messagingSenderId:"977311415632",appId:"1:977311415632:web:c4a419e65259ff87fa8055"})),u=o.a.firestore.FieldValue.serverTimestamp,d=l.firestore(),j=l.storage(),b=l.auth(),O=n(2),m=Object(c.createContext)(),x=function(e){var t=e.children,n=Object(c.useState)(null),r=Object(a.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)(!0),u=Object(a.a)(l,2),j=u[0],x=u[1],h=Object(c.useState)(""),p=Object(a.a)(h,2),f=p[0],v=p[1];return Object(c.useEffect)((function(){return b.onAuthStateChanged((function(e){o(e),x(!1)}))}),[]),Object(c.useEffect)((function(){var e=setTimeout((function(){return v("")}),5e3);return function(){return clearTimeout(e)}}),[f]),Object(O.jsx)(m.Provider,{value:{currentUser:s,register:function(e,t){return b.createUserWithEmailAndPassword(e,t)},login:function(e,t){return b.signInWithEmailAndPassword(e,t)},logout:function(){return b.signOut()},bidAuction:function(e,t){return d.collection("orders").doc(e,t).update({entregado:!0,deliver:t})},UStock:function(e,t,n,c,r){var a,s=c-t;return d.collection("items").doc(e).update((a={},Object(i.a)(a,n,s),Object(i.a)(a,"stock",r-t),a))},UTaken:function(e,t){return d.collection("orders").doc(e).update({taken:!0,recogerEn:t})},endAuction:function(e){return d.collection("auctions").doc(e).delete()},globalMsg:f},children:!j&&t})},h=n(20),p=function(e){var t,n,r,s,i,o,l,u,j=e.orden,b=Object(c.useContext)(m),x=b.currentUser,p=b.bidAuction,f=b.UStock,v=b.UTaken,g=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var t=d.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id}))})),s(t)}));return function(){return t()}}),[e]),{items:r}}("items").items,N=j.entregado?"entregando...":"Apartar para Entregar",y=j.date.toDate().toLocaleTimeString(),k=j.date.toDate().toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"}),w=Object(c.useState)(""),C=Object(a.a)(w,2),S=C[0],E=C[1];j.items.map((function(e){s=e.qty,i=e.id,o=e[S],l=e.stock,u=e.navojoa}));return Object(O.jsx)("div",{children:x&&Object(O.jsxs)("div",{className:" pl-5 m-1 p-3 my-3 bg-white mt-5",children:[Object(O.jsxs)("h6",{className:"mb-0",children:["Id-Orden: ",Object(O.jsx)("span",{className:"text-muted",children:j.id}),"  "]}),Object(O.jsxs)("p",{className:"mb-0",children:[" ",Object(O.jsx)("span",{className:"text-muted",children:"comprador:"})," ",j.buyer.name," "]}),Object(O.jsxs)("p",{className:"mb-0",children:[Object(O.jsx)("span",{className:"text-muted",children:"correo:"}),"  ",j.buyer.email," "]}),Object(O.jsxs)("p",{className:"mb-0",children:[Object(O.jsx)("span",{className:"text-muted",children:"telefono:"})," ",j.buyer.phone," "]}),Object(O.jsxs)("p",{className:"mb-0",children:[Object(O.jsx)("span",{className:"text-muted",children:"fecha:"}),"  ",k,", ",y]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{className:"text-muted",children:"direccion:"}),"  ",j.buyer.adress]}),j.items.map((function(e,t){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h6",{className:"mb-0",children:["Id-producto: ",Object(O.jsx)("span",{className:"text-muted",children:e.id})," "]}),Object(O.jsxs)("p",{className:"mb-0",children:[Object(O.jsx)("span",{className:"text-muted",children:"producto:"}),"  ",e.item]}),Object(O.jsxs)("p",{className:"mb-0",children:[Object(O.jsx)("span",{className:"text-muted",children:"precio:"}),"  ",e.price]}),Object(O.jsxs)("p",{className:"mb-0",children:[Object(O.jsx)("span",{className:"text-muted",children:"cantidad:"}),"  ",e.qty]}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{className:"text-muted",children:"Navojoa "}),u]})}),g.map((function(t){return console.log(t.id===e.id?r=t.pictureUrl[0]:null)})),Object(O.jsx)("img",{className:"col-4 mb-1",src:r,alt:""})]},t)})),Object(O.jsx)("br",{}),Object(O.jsxs)("p",{className:"border text-center",children:["Total a Pagar: $ "," ",Object(O.jsx)("span",{className:"text-white bg-dark fs-4 py-1 px-2 ",children:j.total})]}),Object(O.jsx)("button",{onClick:function(){return p(j.id,x.email)},className:j.entregado?"d-none":"btn btn-danger w-100",children:N}),Object(O.jsx)("div",{className:j.entregado?"mt-1":"d-none",children:Object(O.jsxs)("select",{className:j.taken?"d-none":"w-100 btn btn-primary",onChange:function(e){E(e.target.value)},value:S,children:[Object(O.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Elija Sucursal para Recoger Pedido"}),Object(O.jsx)("option",{value:"navojoa",children:"Navojoa"})]})}),Object(O.jsx)("div",{className:!S&&"d-none",children:Object(O.jsxs)("button",{onClick:function(){f(i,s,S,o,l),v(j.id,S),setTimeout((function(){E("")}),2e3)},className:(null===j||void 0===j?void 0:j.taken)?"btn btn-primary w-100 mt-3":"btn btn-danger w-100 mt-3",disabled:j.taken,children:["Aceptar Recoger en Sucursal "," ",null===j||void 0===j||null===(t=j.recogerEn)||void 0===t?void 0:t.toUpperCase()," "," ",(null===j||void 0===j?void 0:j.taken)&&"\u2713"]})}),Object(O.jsxs)("button",{className:j.taken?"btn btn-success w-100 mt-3":"d-none",disabled:!0,children:["Te Esperan en "," ",null===j||void 0===j||null===(n=j.recogerEn)||void 0===n?void 0:n.toUpperCase()]})]})})},f=n(66),v=n(21),g=n.n(v),N=n(25),y=function(e){var t=Object(c.useState)(0),n=Object(a.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(null),o=Object(a.a)(i,2),l=o[0],b=o[1];return Object(c.useState)((function(){var t=j.ref(e.itemImage.name),n=d.collection("auctions");t.put(e.itemImage).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;s(t)}),(function(e){console.log(e)}),Object(N.a)(g.a.mark((function c(){var r,a;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.getDownloadURL();case 2:return r=c.sent,a=u(),delete e.itemImage,c.next=7,n.add(Object(h.a)(Object(h.a)({},e),{},{createdAt:a,imgUrl:r}));case 7:b(!0);case 8:case"end":return c.stop()}}),c)}))))}),[e]),{progress:r,isCompleted:l}},k=function(e){var t=e.auction,n=e.setAuction,r=y(t),a=r.progress,s=r.isCompleted;return Object(c.useEffect)((function(){s&&n(null)}),[s,n]),Object(O.jsx)(f.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(a,"%")}})},w=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useContext)(m),o=i.currentUser,l=i.globalMsg,u=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var t=d.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id}))})),s(t)}));return function(){return t()}}),[e]),{docs:r}}("orders").docs,j=Object(c.useState)(!1),b=Object(a.a)(j,2),x=b[0],f=b[1],v=u.filter((function(e){return e.deliver===(null===o||void 0===o?void 0:o.email)})).filter((function(e){return!1===e.noDeliver})).filter((function(e){return"navojoa"===e.city})),g=u.filter((function(e){return!e.entregado})).filter((function(e){return!1===e.noDeliver})).filter((function(e){return"navojoa"===e.city}));return Object(O.jsxs)("div",{className:"border-transparent",children:[n&&Object(O.jsx)(k,{auction:n,setAuction:r}),Object(O.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:l&&Object(O.jsx)(s.a,{variant:"danger",children:l})}),Object(O.jsxs)("div",{className:"text-center mt-3",children:[Object(O.jsx)("button",{className:x?"btn btn-primary mx-1":"btn btn-light mx-1",onClick:function(e){return f(!0)},children:"Mis Entregas"}),Object(O.jsx)("button",{className:x?"btn btn-light":"btn btn-primary",onClick:function(e){return f(!1)},children:"Los Pedidos"})]}),x?Object(O.jsx)("div",{className:"container-fluid",children:v.map((function(e,t){return Object(O.jsx)(p,{orden:e},t)}))}):Object(O.jsx)("div",{className:"container-fluid",children:g.map((function(e,t){return Object(O.jsx)(p,{orden:e},t)}))})]})},C=n(67),S=n(68),E=n(65),A=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),o=Object(a.a)(i,2),l=o[0],u=o[1],d=Object(c.useRef)(),j=Object(c.useRef)(),b=Object(c.useContext)(m).login,x=function(){return r(!1)},h=function(){var e=Object(N.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),u(""),e.prev=2,e.next=5,b(d.current.value,j.current.value);case 5:x(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),u("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{onClick:function(){return r(!0)},className:"btn btn-dark mx-2",children:"Entrar"}),Object(O.jsx)(C.a,{centered:!0,show:n,onHide:x,children:Object(O.jsxs)("form",{onSubmit:h,children:[Object(O.jsx)(C.a.Header,{children:Object(O.jsx)(C.a.Title,{children:"Entrar"})}),Object(O.jsxs)(C.a.Body,{children:[l&&Object(O.jsx)(s.a,{variant:"danger",children:l}),Object(O.jsxs)(S.a.Group,{children:[Object(O.jsx)(S.a.Label,{children:"Email "}),Object(O.jsx)(S.a.Control,{type:"email",required:!0,ref:d})]}),Object(O.jsxs)(S.a.Group,{children:[Object(O.jsx)(S.a.Label,{children:"Password"}),Object(O.jsx)(S.a.Control,{type:"password",required:!0,ref:j})]})]}),Object(O.jsxs)(C.a.Footer,{children:[Object(O.jsx)(E.a,{variant:"secondary",onClick:x,children:"Cancelar"}),Object(O.jsx)(E.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},I=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),o=Object(a.a)(i,2),l=o[0],u=o[1],d=Object(c.useRef)(),j=Object(c.useRef)(),b=Object(c.useRef)(),x=Object(c.useContext)(m).register,h=function(){return r(!1)},p=function(){var e=Object(N.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u(""),j.current.value===b.current.value){e.next=4;break}return e.abrupt("return",u("Passwords does not match"));case 4:return e.prev=4,e.next=7,x(d.current.value,j.current.value);case 7:h(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),u(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{onClick:function(){return r(!0)},className:"btn btn-dark m-2",children:"Registro"}),Object(O.jsx)(C.a,{centered:!0,show:n,onHide:h,children:Object(O.jsxs)("form",{onSubmit:p,children:[Object(O.jsx)(C.a.Header,{children:Object(O.jsx)(C.a.Title,{children:"Registro"})}),Object(O.jsxs)(C.a.Body,{children:[l&&Object(O.jsx)(s.a,{variant:"danger",children:l}),Object(O.jsxs)(S.a.Group,{children:[Object(O.jsx)(S.a.Label,{children:"Email"}),Object(O.jsx)(S.a.Control,{type:"email",required:!0,ref:d})]}),Object(O.jsxs)(S.a.Group,{children:[Object(O.jsx)(S.a.Label,{children:"Password"}),Object(O.jsx)(S.a.Control,{type:"password",required:!0,ref:j})]}),Object(O.jsxs)(S.a.Group,{children:[Object(O.jsx)(S.a.Label,{children:"Confirmar Password"}),Object(O.jsx)(S.a.Control,{type:"password",required:!0,ref:b})]})]}),Object(O.jsxs)(C.a.Footer,{children:[Object(O.jsx)(E.a,{variant:"secondary",onClick:h,children:"Cancelar"}),Object(O.jsx)(E.a,{variant:"primary",type:"submit",children:"Registro"})]})]})})]})},U=function(){var e=Object(c.useContext)(m),t=e.currentUser,n=e.logout;return Object(O.jsxs)("nav",{className:"container navbar navbar-light ",children:[Object(O.jsx)("div",{className:"navbar-brand mb-4 w-100 text-center",children:Object(O.jsx)("h2",{children:"nexGym Entregas Navojoa"})}),Object(O.jsx)("div",{className:"d-flex flex-column w-100",children:t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:" btn-dark mx-2 disabled mb-2 p-2 text-center",children:t.email}),Object(O.jsx)("div",{onClick:function(){return n()},className:"btn btn-light mx-2",children:"SALIR"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(A,{}),Object(O.jsx)(I,{})]})})]})},R=function(){return Object(O.jsxs)(x,{children:[Object(O.jsx)(U,{}),Object(O.jsx)(w,{})]})};n(58);Object(r.render)(Object(O.jsx)(R,{}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.d2b7c6c8.chunk.js.map