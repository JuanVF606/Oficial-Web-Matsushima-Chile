"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[301],{7282:(e,t,a)=>{a.d(t,{A:()=>d});a(5043);var s=a(3216),c=a(5475);const i=a.p+"static/media/MatsushimaChile-Logo.280e0045fb9d25091a6c.png";var l=a(579);const n=[{to:"/",title:"Bienvenida"},{to:"/quienes-somos",title:"Nosotros"},{to:"/nuestros-dojos",title:"Dojos"},{to:"/actividades",title:"Actividades"},{to:"/galeria",title:"Galeria"},{to:"/noticias",title:"Noticias y Novedades"}],r=()=>{const e=(0,s.zy)();return(0,l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(c.N_,{className:"navbar-brand",to:"/",children:(0,l.jsx)("img",{src:i,alt:"IKO Matsushima Chile",className:"karate-logo"})}),(0,l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,l.jsx)("span",{className:"navbar-toggler-icon"})}),(0,l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:(0,l.jsx)("ul",{className:"navbar-nav ms-auto",children:n.map(((t,a)=>(0,l.jsx)("li",{className:"nav-item dropdown",children:(0,l.jsx)(c.N_,{className:"nav-link ".concat(e.pathname===t.to?"active":""),to:t.to,children:t.title})},a)))})})]})})},o=()=>(0,l.jsx)("footer",{className:"bg-dark text-white py-4",children:(0,l.jsx)("div",{className:"container text-center",children:(0,l.jsxs)("p",{className:"mb-0",children:["\xa9 ",(new Date).getFullYear()," IKO Matsushima Chile. All rights reserved."]})})}),d=e=>{let{children:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{}),(0,l.jsx)("main",{children:t}),(0,l.jsx)(o,{})]})}},4759:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(5043),c=a(7282),i=a(9766),l=a(5429),n=a(2872),r=a(3003),o=a(9972),d=a(822),h=a(3216),m=a(3308),g=a(579);const p=(0,r.Ng)((e=>({categories:e.categories.categories,posts:e.actividades.activity_list_category,count:e.actividades.count,next:e.actividades.next,previous:e.actividades.previous})),{get_categories:o.S,get_actividades_list_category:d.Rs,get_actividades_list_category_page:d.bj})((e=>{let{get_categories:t,categories:a,get_actividades_list_category:r,get_actividades_list_category_page:o,posts:d,count:p,next:v,previous:x}=e;const{slug:u}=(0,h.g)();return(0,s.useEffect)((()=>{(async()=>{try{await t(),u?await r(u):await r()}catch(e){}})()}),[t,r,u]),(0,g.jsxs)(c.A,{children:[(0,g.jsx)(i.A,{title:"Revisa nuestras actividades",subtitle:"y enterate sobre nuestros examenes de grado, seminarios, torneos y mucho m\xe1s...",heroImage:n}),(0,g.jsxs)("div",{className:"mt-5 bg-light",children:[(0,g.jsx)(l.A,{categories:a&&a}),(0,g.jsx)(m.A,{categories:a,post:d&&d,count:p,get_activities_by_page:o&&o})]})]})}))},9766:(e,t,a)=>{a.d(t,{A:()=>c});a(5043);var s=a(579);const c=e=>{let{title:t,subtitle:a,heroImage:c}=e;return(0,s.jsx)("section",{className:"hero d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden text-white",style:{backgroundImage:"url(".concat(c,")"),backgroundSize:"cover",backgroundPosition:"center",minHeight:"10vh",color:"black",backgroundAttachment:"fixed"},children:(0,s.jsx)("div",{className:"hero-overlay bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center py-5 px-4",children:(0,s.jsxs)("div",{className:"text-center mb-5",children:[(0,s.jsx)("h2",{className:"display-3 fw-bold mb-4 text-shadow",children:t}),(0,s.jsx)("p",{className:"lead mb-4 text-shadow",children:a})]})})})}},9379:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(5043),c=a(7491),i=(a(8421),a(579));const l=function(e){let{list_page:t,count:a}=e;const[l,n]=(0,s.useState)(1),[r]=(0,s.useState)(3),[o,d]=(0,s.useState)(1);(0,s.useEffect)((()=>{const e=Math.ceil(a/r);d(e<1?1:e)}),[a,r]);const h=[];for(let s=1;s<=o;s++)h.push((0,i.jsx)(c.A.Item,{active:s===l,onClick:()=>{return n(e=s),void t(e);var e},children:s},s));return(0,i.jsx)("div",{className:"d-flex justify-content-center",children:(0,i.jsxs)(c.A,{className:"border-top px-4",children:[(0,i.jsx)(c.A.Prev,{onClick:()=>{const e=l-1;e>=1&&(n(e),t(e))},disabled:1===l}),h,(0,i.jsx)(c.A.Next,{onClick:()=>{const e=l+1;e<=o&&(n(e),t(e))},disabled:l===o})]})})}},3308:(e,t,a)=>{a.d(t,{A:()=>g});var s=a(5043),c=a(9379),i=a(6178),l=a.n(i);function n(e,t){let{title:a,titleId:c,...i}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":c},i),a?s.createElement("title",{id:c},a):null,s.createElement("path",{fillRule:"evenodd",d:"M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}const r=s.forwardRef(n);var o=a(5751),d=a(5475),h=a(579);function m(e){let{posts:t}=e;const[a,c]=(0,s.useState)(null),i=e=>{c(e===a?null:e)},l=()=>{c(null)};return(0,h.jsxs)(h.Fragment,{children:[t&&t.length>0?(0,h.jsx)("div",{className:"container mt-5",children:(0,h.jsx)("div",{className:"row justify-content-center align-items-center",children:t.map(((e,t)=>(0,h.jsx)("div",{className:"col-md-4 mb-4",children:(0,h.jsxs)("div",{className:"card card-custom rounded bg-white border-0 shadow-sm",children:[(0,h.jsxs)("div",{className:"card-image-container",onClick:()=>i(t),children:[(0,h.jsx)("img",{src:e.thumbnail,className:"card-img-top img-fluid",alt:e.title}),a===t&&(0,h.jsx)("div",{className:"card-icon-overlay",onClick:l,children:(0,h.jsx)(r,{width:"24",height:"24",className:"text-white"})})]}),(0,h.jsxs)("div",{className:"card-body",children:[(0,h.jsx)("h5",{className:"card-title text-center",children:e.title}),(0,h.jsx)("hr",{}),(0,h.jsx)("p",{className:"card-text text-secondary",children:e.description.length>80?e.description.slice(0,90)+"...":e.description}),(0,h.jsx)(d.N_,{onClick:()=>i(t),className:"btn btn-primary btn-sm btn-block text-white",children:"Leer m\xe1s"})]}),(0,h.jsx)("div",{className:"card-footer text-center",children:(0,h.jsx)("small",{className:"text-muted",children:e.category.name})})]})},t)))})}):(0,h.jsx)("div",{className:"alert alert-warning text-center",role:"alert",children:"No hay actividades para mostrar"}),null!==a&&(0,h.jsxs)(o.A,{show:null!==a,onHide:l,centered:!0,backdrop:"static",keyboard:!1,children:[(0,h.jsx)(o.A.Header,{closeButton:!0,children:(0,h.jsx)(o.A.Title,{children:t[a].title})}),(0,h.jsxs)(o.A.Body,{children:[(0,h.jsx)("img",{src:t[a].thumbnail,className:"img-fluid",alt:t[a].title}),(0,h.jsx)("p",{className:"mt-3 text-center",children:t[a].description})]})]})]})}l().locale("es");const g=e=>{let{next:t,previous:a,post:i,count:l,get_actividades_list_page:n}=e;return(0,h.jsx)(h.Fragment,{children:i&&i.length>0?(0,h.jsxs)(s.Fragment,{children:[(0,h.jsx)("div",{className:"mt-5",children:(0,h.jsx)(m,{posts:i&&i})}),(0,h.jsx)(c.A,{list_page:n&&n,count:l&&l,handleNextPage:(e,t)=>{e.preventDefault(),n(t),window.scrollTo(0,0)},handlePreviousPage:(e,t)=>{e.preventDefault(),n(t),window.scrollTo(0,0)}})]}):(0,h.jsx)("div",{className:"alert alert-warning text-center bg-red",role:"alert",children:"No hay actividades para mostrar"})})}},5429:(e,t,a)=>{a.d(t,{A:()=>l});a(5043);var s=a(3216),c=a(5475),i=a(579);function l(e){let{categories:t}=e;const a=(0,s.zy)();return(0,i.jsxs)("div",{className:"category-controls text-center mb-5",children:[(0,i.jsx)(c.N_,{to:"/actividades",className:"category-link ".concat("/actividades"===a.pathname?"active-category selected-category":""),children:"Todo"}),t&&t.map(((e,t)=>(0,i.jsx)(c.N_,{to:"/actividades/categoria/".concat(e.slug),className:"category-link ".concat(a.pathname==="/actividades/categoria/".concat(e.slug)?"active-category selected-category":""),"data-filter":e.id,children:e.name},t)))]})}},822:(e,t,a)=>{a.d(t,{IU:()=>l,Rs:()=>n,bj:()=>r,k7:()=>i});var s=a(6213),c=a(2192);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return async t=>{t({type:c.cd});try{const a=e?"http://localhost:8000/api/actividades/list?limit=".concat(e):"http://localhost:8000/api/actividades/list",i=await s.A.get(a),l=i.data.results.posts.sort(((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime()));t({type:c.GQ,payload:{...i.data,results:{...i.data.results,posts:l}}})}catch(a){console.error("Error fetching actividades list:",a.message),t({type:c.JK,error:"Failed to fetch actividades list. Please try again later."})}finally{t({type:c.ks})}}},l=e=>async t=>{const a={headers:{Accept:"application/json"}};try{const i=await s.A.get("http://localhost:8000/api/actividades/list?p=".concat(e),a);200===i.status?t({type:c.GQ,payload:i.data}):t({type:c.JK})}catch(i){t({type:c.JK})}},n=e=>async t=>{const a={headers:{Accept:"application/json"}};try{const i=await s.A.get("http://localhost:8000/api/actividades/by_category?slug=".concat(e),a);200===i.status?t({type:c.xG,payload:i.data}):t({type:c.sQ})}catch(i){t({type:c.sQ})}},r=(e,t)=>async a=>{const i={headers:{Accept:"application/json"}};try{const l=await s.A.get("http://localhost:8000/api/actividades/by_category?slug=".concat(e,"&p=").concat(t),i);200===l.status?a({type:c.xG,payload:l.data}):a({type:c.sQ})}catch(l){a({type:c.sQ})}}},9972:(e,t,a)=>{a.d(t,{S:()=>i});var s=a(6213),c=a(1519);const i=()=>async e=>{const t={headers:{Accept:"application/json"}};try{const a=await s.A.get("http://localhost:8000/api/category/list",t);200===a.status?e({type:c.m,payload:a.data}):e({type:c.v})}catch(a){e({type:c.v})}}},7491:(e,t,a)=>{a.d(t,{A:()=>y});var s=a(8139),c=a.n(s),i=a(5043),l=a(7852),n=a(2673),r=a(579);const o=i.forwardRef(((e,t)=>{let{active:a=!1,disabled:s=!1,className:i,style:l,activeLabel:o="(current)",children:d,linkStyle:h,linkClassName:m,as:g=n.A,...p}=e;const v=a||s?"span":g;return(0,r.jsx)("li",{ref:t,style:l,className:c()(i,"page-item",{active:a,disabled:s}),children:(0,r.jsxs)(v,{className:c()("page-link",m),style:h,...p,children:[d,a&&o&&(0,r.jsx)("span",{className:"visually-hidden",children:o})]})})}));o.displayName="PageItem";const d=o;function h(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;const s=i.forwardRef(((e,s)=>{let{children:c,...i}=e;return(0,r.jsxs)(o,{...i,ref:s,children:[(0,r.jsx)("span",{"aria-hidden":"true",children:c||t}),(0,r.jsx)("span",{className:"visually-hidden",children:a})]})}));return s.displayName=e,s}const m=h("First","\xab"),g=h("Prev","\u2039","Previous"),p=h("Ellipsis","\u2026","More"),v=h("Next","\u203a"),x=h("Last","\xbb"),u=i.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,size:i,...n}=e;const o=(0,l.oU)(a,"pagination");return(0,r.jsx)("ul",{ref:t,...n,className:c()(s,o,i&&"".concat(o,"-").concat(i))})}));u.displayName="Pagination";const y=Object.assign(u,{First:m,Prev:g,Ellipsis:p,Item:d,Next:v,Last:x})},8421:()=>{},2872:(e,t,a)=>{e.exports=a.p+"static/media/Hero_Actividades.143eb3b0ffe9d818ff92.jpg"}}]);
//# sourceMappingURL=301.0ab483d7.chunk.js.map