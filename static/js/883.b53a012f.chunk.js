"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[883],{7282:(e,s,a)=>{a.d(s,{A:()=>c});a(5043);var t=a(3216),i=a(5475);const l=a.p+"static/media/MatsushimaChile-Logo.280e0045fb9d25091a6c.png";var r=a(579);const n=[{to:"/",title:"Bienvenida"},{to:"/quienes-somos",title:"Nosotros"},{to:"/nuestros-dojos",title:"Dojos"},{to:"/actividades",title:"Actividades"},{to:"/galeria",title:"Galeria"},{to:"/noticias",title:"Noticias y Novedades"}],o=()=>{const e=(0,t.zy)();return(0,r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(i.N_,{className:"navbar-brand",to:"/",children:(0,r.jsx)("img",{src:l,alt:"IKO Matsushima Chile",className:"karate-logo"})}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:(0,r.jsx)("ul",{className:"navbar-nav ms-auto",children:n.map(((s,a)=>(0,r.jsx)("li",{className:"nav-item dropdown",children:(0,r.jsx)(i.N_,{className:"nav-link ".concat(e.pathname===s.to?"active":""),to:s.to,children:s.title})},a)))})})]})})},d=()=>(0,r.jsx)("footer",{className:"bg-dark text-white py-4",children:(0,r.jsx)("div",{className:"container text-center",children:(0,r.jsxs)("p",{className:"mb-0",children:["\xa9 ",(new Date).getFullYear()," IKO Matsushima Chile. All rights reserved."]})})}),c=e=>{let{children:s}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)("main",{children:s}),(0,r.jsx)(d,{})]})}},1666:(e,s,a)=>{a.r(s),a.d(s,{default:()=>f});var t=a(5043),i=a(7282),l=a(9766);const r=a.p+"static/media/Hero_Galeria.8e6b4c98357f56f3ec37.jpg";var n=a(3003),o=a(6213);const d={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL;o.A.defaults.baseURL=d,o.A.defaults.headers.common["Content-Type"]="application/json";const c=o.A;var m=a(2477);const h=()=>async e=>{try{const s=await c.get("http://localhost:8000/api/gallery/galleries/");e({type:m.Zh,payload:s.data})}catch(s){e({type:m.Y5,payload:{error:"Error al obtener la lista de galer\xedas"}})}};var x=a(3519),g=a(1072),v=a(8602),j=a(8258),u=a(4282),p=a(5751),b=a(3058),y=a(579);const A=(0,n.Ng)((e=>({galleryData:e.gallery})),(e=>({get_gallery_list:()=>e(h())})))((e=>{let{galleryData:s,get_gallery_list:a}=e;const[i,l]=(0,t.useState)(!1),[r,n]=(0,t.useState)(null);(0,t.useEffect)((()=>{a()}),[a]);const o=e=>{n(e),l(!0)},d=Array.isArray(null===s||void 0===s?void 0:s.galleries)?s.galleries:[];return(0,y.jsxs)(x.A,{className:"py-5",children:[(0,y.jsx)("h2",{className:"text-center mb-4",children:"Revive nuestros Momentos"}),s.loading?(0,y.jsx)("p",{children:"Loading..."}):s.error?(0,y.jsx)("p",{children:s.error}):(0,y.jsx)(g.A,{children:d.map((e=>(0,y.jsx)(v.A,{xs:12,sm:6,md:4,lg:3,className:"mb-4",children:(0,y.jsxs)(j.A,{className:"gallery-card",children:[e.additional_items.length>0&&e.additional_items[0].is_video?(0,y.jsxs)("video",{className:"card-img-top",controls:!0,children:[(0,y.jsx)("source",{src:e.additional_items[0].url,type:"video/mp4"}),"Your browser does not support the video tag."]}):(0,y.jsx)("img",{src:e.thumbnail,className:"card-img-top",alt:e.title,onClick:()=>o(e),style:{cursor:"pointer"},loading:"lazy-loading"}),(0,y.jsxs)(j.A.Body,{children:[(0,y.jsx)(j.A.Title,{children:e.title}),(0,y.jsx)(j.A.Text,{children:e.description}),(0,y.jsxs)(u.A,{variant:"primary",onClick:()=>o(e),children:["Ver ",(null===e||void 0===e?void 0:e.additional_items.length)>0&&e.additional_items[0].is_video?"Video":"M\xe1s"]})]})]})},e.id)))}),r&&(0,y.jsxs)(p.A,{show:i,onHide:()=>l(!1),size:"lg",centered:!0,children:[(0,y.jsx)(p.A.Header,{closeButton:!0,children:(0,y.jsx)(p.A.Title,{children:r.title})}),(0,y.jsx)(p.A.Body,{children:r.additional_items.length>0&&r.additional_items[0].is_video?(0,y.jsxs)("video",{className:"w-100",controls:!0,children:[(0,y.jsx)("source",{src:r.additional_items[0].url,type:"video/mp4"}),"Your browser does not support the video tag."]}):(0,y.jsx)(b.A,{children:r.additional_items.map(((e,s)=>(0,y.jsx)(b.A.Item,{children:(0,y.jsx)("img",{className:"d-block w-100",src:e.url,alt:"Imagen ".concat(s+1)})},s)))})})]})]})}));var N=a(1719);const _=(0,n.Ng)((e=>({galleryData:e.gallery})),(e=>({get_gallery_list:()=>e(h())})))((e=>{let{galleryData:s,get_gallery_list:a}=e;const[i,l]=(0,t.useState)(!1),[r,n]=(0,t.useState)(null);(0,t.useEffect)((()=>{a()}),[a]);const o=e=>{n(e),l(!0)};return(0,y.jsxs)(x.A,{className:"py-5",children:[(0,y.jsx)("h2",{className:"text-center mb-4",children:"Revive nuestros Momentos"}),s.loading?(0,y.jsx)("p",{children:"Loading..."}):s.error?(0,y.jsx)(N.A,{variant:"danger",className:"text-center",children:s.error}):(0,y.jsx)(g.A,{children:null===s||void 0===s?void 0:s.galleries.map((e=>(0,y.jsx)(v.A,{xs:12,sm:6,md:4,lg:3,className:"mb-4",children:(0,y.jsxs)(j.A,{className:"gallery-card",children:[e.additional_items.length>0&&e.additional_items[0].is_video?(0,y.jsxs)("video",{className:"card-img-top",controls:!0,children:[(0,y.jsx)("source",{src:e.additional_items[0].url,type:"video/mp4"}),"Your browser does not support the video tag."]}):(0,y.jsx)("img",{src:e.thumbnail,className:"card-img-top",alt:e.title,onClick:()=>o(e),style:{cursor:"pointer"}}),(0,y.jsxs)(j.A.Body,{children:[(0,y.jsx)(j.A.Title,{children:e.title}),(0,y.jsx)(j.A.Text,{children:e.description}),(0,y.jsxs)(u.A,{variant:"primary",onClick:()=>o(e),children:["Ver ",(null===e||void 0===e?void 0:e.additional_items.length)>0&&e.additional_items[0].is_video?"Video":"M\xe1s"]})]})]})},e.id)))}),r&&(0,y.jsxs)(p.A,{show:i,onHide:()=>l(!1),size:"lg",centered:!0,children:[(0,y.jsx)(p.A.Header,{closeButton:!0,children:(0,y.jsx)(p.A.Title,{children:r.title})}),(0,y.jsx)(p.A.Body,{children:r.additional_items.length>0&&r.additional_items[0].is_video?(0,y.jsxs)("video",{className:"w-100",controls:!0,children:[(0,y.jsx)("source",{src:r.additional_items[0].url,type:"video/mp4"}),"Your browser does not support the video tag."]}):(0,y.jsx)(b.A,{children:r.additional_items.map(((e,s)=>(0,y.jsx)(b.A.Item,{children:(0,y.jsx)("img",{className:"d-block w-100",src:e.url,alt:"Imagen ".concat(s+1)})},s)))})})]})]})})),f=()=>(0,y.jsxs)(i.A,{children:[(0,y.jsx)(l.A,{title:"Revive los mejores momentos",subtitle:"De nuestra participaci\xf3n en las Actividades",heroImage:r}),(0,y.jsx)(A,{items:_})]})},9766:(e,s,a)=>{a.d(s,{A:()=>i});a(5043);var t=a(579);const i=e=>{let{title:s,subtitle:a,heroImage:i}=e;return(0,t.jsx)("section",{className:"hero d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden text-white",style:{backgroundImage:"url(".concat(i,")"),backgroundSize:"cover",backgroundPosition:"center",minHeight:"10vh",color:"black",backgroundAttachment:"fixed"},children:(0,t.jsx)("div",{className:"hero-overlay bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center py-5 px-4",children:(0,t.jsxs)("div",{className:"text-center mb-5",children:[(0,t.jsx)("h2",{className:"display-3 fw-bold mb-4 text-shadow",children:s}),(0,t.jsx)("p",{className:"lead mb-4 text-shadow",children:a})]})})})}}}]);
//# sourceMappingURL=883.b53a012f.chunk.js.map