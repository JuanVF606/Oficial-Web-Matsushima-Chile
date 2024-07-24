/*! For license information please see 332.29ae5877.chunk.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[332],{7282:(e,a,s)=>{"use strict";s.d(a,{A:()=>d});s(5043);var t=s(3216),r=s(5475);const o=s.p+"static/media/MatsushimaChile-Logo.280e0045fb9d25091a6c.png";var n=s(579);const c=[{to:"/",title:"Bienvenida"},{to:"/quienes-somos",title:"Nosotros"},{to:"/nuestros-dojos",title:"Dojos"},{to:"/actividades",title:"Actividades"},{to:"/galeria",title:"Galeria"},{to:"/noticias",title:"Noticias y Novedades"}],i=()=>{const e=(0,t.zy)();return(0,n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(r.N_,{className:"navbar-brand",to:"/",children:(0,n.jsx)("img",{src:o,alt:"IKO Matsushima Chile",className:"karate-logo"})}),(0,n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,n.jsx)("span",{className:"navbar-toggler-icon"})}),(0,n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:(0,n.jsx)("ul",{className:"navbar-nav ms-auto",children:c.map(((a,s)=>(0,n.jsx)("li",{className:"nav-item dropdown",children:(0,n.jsx)(r.N_,{className:"nav-link ".concat(e.pathname===a.to?"active":""),to:a.to,children:a.title})},s)))})})]})})},l=()=>(0,n.jsx)("footer",{className:"bg-dark text-white py-4",children:(0,n.jsx)("div",{className:"container text-center",children:(0,n.jsxs)("p",{className:"mb-0",children:["\xa9 ",(new Date).getFullYear()," IKO Matsushima Chile. All rights reserved."]})})}),d=e=>{let{children:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{}),(0,n.jsx)("main",{children:a}),(0,n.jsx)(l,{})]})}},7711:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>b});var t=s(5043),r=s(7282),o=s(9766);const n=s.p+"static/media/Hero_Nosotros.812c33ea81d543051d82.jpg",c=s.p+"static/media/SosaiOyama.43fc9b3f3f4605d50fd6.webp",i=s.p+"static/media/kanchoMatsushima.63a61aabb0025adcdb02.webp";var l=s(4282),d=s(579);const m=e=>{let{image:a,name:s,lifespan:t,description:r,link:o}=e;return(0,d.jsx)("div",{className:"col-lg-6 col-md-12 mb-4",children:(0,d.jsxs)("div",{className:"profile-card shadow rounded",children:[(0,d.jsx)("div",{className:"profile-image-container",children:(0,d.jsx)("img",{src:a,alt:s,className:"img-fluid rounded-circle profile-image"})}),(0,d.jsxs)("div",{className:"profile-info",children:[(0,d.jsxs)("h4",{className:"card-title-leader",children:[s,(0,d.jsx)("br",{}),t]}),(0,d.jsx)("p",{children:r}),(0,d.jsx)(l.A,{href:o,target:"_blank",className:"btn-primary",children:"M\xe1s informaci\xf3n"})]})]})})},u=()=>(0,d.jsxs)("section",{className:"about-section",children:[(0,d.jsx)("h2",{className:"section-heading text-center",children:"Nuestros L\xedderes"}),(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)(m,{image:c,name:"Sosai Masutatsu Oyama",lifespan:"(1923-1994)",description:"Sosai Masutatsu Oyama, conocido como Mas Oyama, fue un karateka surcoreano-japon\xe9s y el fundador del Kyokushin Karate. Su enfoque riguroso en el entrenamiento y su legado influyen en el karate moderno. Nacido en Corea y formado en Jap\xf3n, Oyama es c\xe9lebre por su fuerza excepcional y su innovador enfoque del combate. Fund\xf3 el Kyokushin Karate en Tokio en 1953, extendi\xe9ndose globalmente.",link:"https://www.masutatsuoyama.com/"}),(0,d.jsx)(m,{image:i,name:"Kancho Yoshikazu Matsushima",lifespan:"(1947-)",description:"Kancho Yoshikazu Matsushima es un destacado maestro de karate y l\xedder en el estilo Kyokushin Karate. Su dedicaci\xf3n ha sido clave para la expansi\xf3n global del Kyokushin. Tras la muerte de Mas Oyama, Matsushima asumi\xf3 el liderazgo para preservar y promover el Kyokushin. Su liderazgo ha fortalecido la comunidad y mantenido la excelencia t\xe9cnica. Se convierte en el presidente de IKO Matsushima, expandiendo su legado en todo el mundo.",link:"http://kyokushin-matsushima.jp/e/"})]})})]});var f=s(4732),x=s(1790),h=s(3003),p=s(6429);const N=e=>{let{dojos:a}=e;const[s,r]=(0,t.useState)(!0);if((0,t.useEffect)((()=>{if(!a)return;const e=setTimeout((()=>{r(!1)}),1e3);return()=>clearTimeout(e)}),[a]),!a)return null;const o=["Nacional","Norte","Centro","Sur"],n=a.filter((e=>"Si"===e.is_branch_chief||"Si"===e.is_dojoOperator)).sort(((e,a)=>o.indexOf(e.zona)-o.indexOf(a.zona)));return(0,d.jsxs)("section",{className:"BDMatsushima",children:[(0,d.jsx)("h3",{className:"section-heading text-center",children:"BranchChiefs y Dojo Operadores"}),(0,d.jsx)("p",{className:"text-center",children:"Escogidos por Kancho Matsushima para liderar y expandir el Kyokushin en nuestro pa\xeds."}),(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:n.map((e=>(0,d.jsxs)("div",{className:"col-md-4 mt-4",children:[(0,d.jsxs)("div",{className:"card profile-card-5",children:[(0,d.jsx)("div",{className:"card-img-block",children:s?(0,d.jsx)("div",{className:"skeleton-loading w-100",style:{height:"200px"}}):(0,d.jsx)("img",{className:"card-img-top",src:e.profile_image||p,alt:"".concat(e.cargo," ").concat(e.full_name),preload:"auto",height:250,onError:e=>{e.target.onerror=null,e.target.src=p}})}),(0,d.jsx)("div",{className:"card-body pt-0",children:s?(0,d.jsx)("div",{className:"skeleton-loading w-100 mb-2",style:{height:"20px"}}):(0,d.jsx)("h5",{className:"card-title text-center",children:"".concat(e.cargo," ").concat(e.full_name)})})]}),!s&&(0,d.jsx)("p",{className:"mt-1 w-100 float-left text-center",children:(0,d.jsxs)("strong",{children:["Si"===e.is_branch_chief&&"No"===e.is_dojoOperator&&"Branch Chief","No"===e.is_branch_chief&&"Si"===e.is_dojoOperator&&"Dojo Operador","Si"===e.is_branch_chief&&"Si"===e.is_dojoOperator&&"Branch Chief y Dojo Operador"]})})]},e.id)))})})]})};const j={get_dojos:x.J},g=(0,h.Ng)((e=>({dojos:e.dojos.dojo_list})),j)((function(e){let{get_dojos:a,dojos:s}=e;return(0,t.useEffect)((()=>{(async()=>{try{await a()}catch(e){console.log(e)}})()}),[a]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(N,{dojos:s})})})),b=()=>(0,d.jsxs)(r.A,{children:[(0,d.jsx)(o.A,{title:"Acerca de Nosotros",subtitle:"Descubre nuestra historia y nuestros l\xedderes",heroImage:n}),(0,d.jsx)(u,{}),(0,d.jsx)(f.A,{title:"Nuestros Directores"}),(0,d.jsx)(g,{})]})},9766:(e,a,s)=>{"use strict";s.d(a,{A:()=>r});s(5043);var t=s(579);const r=e=>{let{title:a,subtitle:s,heroImage:r}=e;return(0,t.jsx)("section",{className:"hero d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden text-white",style:{backgroundImage:"url(".concat(r,")"),backgroundSize:"cover",backgroundPosition:"center",minHeight:"10vh",color:"black",backgroundAttachment:"fixed"},children:(0,t.jsx)("div",{className:"hero-overlay bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center py-5 px-4",children:(0,t.jsxs)("div",{className:"text-center mb-5",children:[(0,t.jsx)("h2",{className:"display-3 fw-bold mb-4 text-shadow",children:a}),(0,t.jsx)("p",{className:"lead mb-4 text-shadow",children:s})]})})})}},4732:(e,a,s)=>{"use strict";s.d(a,{A:()=>u});var t=s(5043),r=s(3003),o=s(3519),n=s(1072),c=s(8602),i=s(8258),l=s(1790),d=s(6429),m=s(579);const u=(0,r.Ng)((e=>{var a;return{dojos:null===(a=e.dojos)||void 0===a?void 0:a.dojo_list}}),{get_dojos:l.J})((e=>{let{get_dojos:a,dojos:s,title:r}=e;const[l,u]=(0,t.useState)(null),f=(s||[]).filter((e=>"Si"===e.is_Director&"published"===e.status)).sort(((e,a)=>{const s={Nacional:1,Norte:2,Centro:3,Sur:4};return s[e.zona]-s[a.zona]}));return(0,t.useEffect)((()=>{(async()=>{try{await a()}catch(l){u("La organizaci\xf3n no cuenta con directores asignados")}})()}),[a]),(0,m.jsx)("section",{className:"py-5 text-center position-relative overflow-hidden NationalDirectors",children:(0,m.jsx)(o.A,{fluid:!0,className:"px-5",children:(0,m.jsxs)(n.A,{className:"align-items-center",children:[(0,m.jsx)(c.A,{md:12,lg:12,className:"text-md-start mb-4",children:(0,m.jsx)("h2",{className:"display-5 mb-4 text-primary fw-bold",children:r})}),(0,m.jsx)(c.A,{md:12,children:(0,m.jsx)(n.A,{className:"g-4 justify-content-center",children:f.length>0?f.map((e=>(0,m.jsx)(c.A,{xs:12,sm:6,md:4,lg:3,children:(0,m.jsxs)(i.A,{className:"border-0 shadow-lg rounded-4 overflow-hidden director-card",children:[(0,m.jsx)(i.A.Img,{variant:"top",src:e.profile_image,alt:"".concat(e.cargo," ").concat(e.full_name),className:"img-fluid rounded-circle border border-4 border-primary mx-auto mt-3 director-img",onError:e=>{e.target.onerror=null,e.target.src=d}}),(0,m.jsxs)(i.A.Body,{className:"p-4",children:[(0,m.jsxs)(i.A.Title,{className:"fw-bold mb-2 text-primary",children:[e.cargo," ",e.full_name]}),(0,m.jsx)(i.A.Subtitle,{className:"text-muted mb-2",children:"Nacional"===e.zona?"Director Nacional":"Director Zona ".concat(e.zona)}),(0,m.jsx)(i.A.Text,{className:"text-muted"})]})]})},e.id))):(0,m.jsx)(c.A,{children:(0,m.jsx)("div",{className:"alert alert-warning text-center",role:"alert",children:l||"No hay directores disponibles en este momento"})})})})]})})})}))},1790:(e,a,s)=>{"use strict";s.d(a,{J:()=>o});var t=s(6213),r=s(3212);const o=()=>async e=>{const a={headers:{Accept:"application/json"}};try{const s=await t.A.get("http://localhost:8000/api/Dojos/list",a);200===s.status?e({type:r.qz,payload:s.data}):e({type:r.Dg})}catch(s){e({type:r.Dg})}}},4140:(e,a,s)=>{"use strict";s.d(a,{Am:()=>n});var t=s(5043),r=s(579);const o=["as","disabled"];function n(e){let{tagName:a,disabled:s,href:t,target:r,rel:o,role:n,onClick:c,tabIndex:i=0,type:l}=e;a||(a=null!=t||null!=r||null!=o?"a":"button");const d={tagName:a};if("button"===a)return[{type:l||"button",disabled:s},d];const m=e=>{(s||"a"===a&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),s?e.stopPropagation():null==c||c(e)};return"a"===a&&(t||(t="#"),s&&(t=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:s?void 0:i,href:t,target:"a"===a?r:void 0,"aria-disabled":s||void 0,rel:"a"===a?o:void 0,onClick:m,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),m(e))}},d]}const c=t.forwardRef(((e,a)=>{let{as:s,disabled:t}=e,c=function(e,a){if(null==e)return{};var s,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)s=o[t],a.indexOf(s)>=0||(r[s]=e[s]);return r}(e,o);const[i,{tagName:l}]=n(Object.assign({tagName:s,disabled:t},c));return(0,r.jsx)(l,Object.assign({},c,i,{ref:a}))}));c.displayName="Button"},4282:(e,a,s)=>{"use strict";s.d(a,{A:()=>d});var t=s(8139),r=s.n(t),o=s(5043),n=s(4140),c=s(7852),i=s(579);const l=o.forwardRef(((e,a)=>{let{as:s,bsPrefix:t,variant:o="primary",size:l,active:d=!1,disabled:m=!1,className:u,...f}=e;const x=(0,c.oU)(t,"btn"),[h,{tagName:p}]=(0,n.Am)({tagName:s,disabled:m,...f}),N=p;return(0,i.jsx)(N,{...h,...f,ref:a,disabled:m,className:r()(u,x,d&&"active",o&&"".concat(x,"-").concat(o),l&&"".concat(x,"-").concat(l),f.href&&m&&"disabled")})}));l.displayName="Button";const d=l},8258:(e,a,s)=>{"use strict";s.d(a,{A:()=>z});var t=s(8139),r=s.n(t),o=s(5043),n=s(7852),c=s(579);const i=o.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:o="div",...i}=e;return t=(0,n.oU)(t,"card-body"),(0,c.jsx)(o,{ref:a,className:r()(s,t),...i})}));i.displayName="CardBody";const l=i,d=o.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:o="div",...i}=e;return t=(0,n.oU)(t,"card-footer"),(0,c.jsx)(o,{ref:a,className:r()(s,t),...i})}));d.displayName="CardFooter";const m=d,u=o.createContext(null);u.displayName="CardHeaderContext";const f=u,x=o.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,as:i="div",...l}=e;const d=(0,n.oU)(s,"card-header"),m=(0,o.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,c.jsx)(f.Provider,{value:m,children:(0,c.jsx)(i,{ref:a,...l,className:r()(t,d)})})}));x.displayName="CardHeader";const h=x,p=o.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,variant:o,as:i="img",...l}=e;const d=(0,n.oU)(s,"card-img");return(0,c.jsx)(i,{ref:a,className:r()(o?"".concat(d,"-").concat(o):d,t),...l})}));p.displayName="CardImg";const N=p,j=o.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:o="div",...i}=e;return t=(0,n.oU)(t,"card-img-overlay"),(0,c.jsx)(o,{ref:a,className:r()(s,t),...i})}));j.displayName="CardImgOverlay";const g=j,b=o.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:o="a",...i}=e;return t=(0,n.oU)(t,"card-link"),(0,c.jsx)(o,{ref:a,className:r()(s,t),...i})}));b.displayName="CardLink";const v=b;var y=s(4488);const w=(0,y.A)("h6"),k=o.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:o=w,...i}=e;return t=(0,n.oU)(t,"card-subtitle"),(0,c.jsx)(o,{ref:a,className:r()(s,t),...i})}));k.displayName="CardSubtitle";const A=k,C=o.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:o="p",...i}=e;return t=(0,n.oU)(t,"card-text"),(0,c.jsx)(o,{ref:a,className:r()(s,t),...i})}));C.displayName="CardText";const _=C,O=(0,y.A)("h5"),S=o.forwardRef(((e,a)=>{let{className:s,bsPrefix:t,as:o=O,...i}=e;return t=(0,n.oU)(t,"card-title"),(0,c.jsx)(o,{ref:a,className:r()(s,t),...i})}));S.displayName="CardTitle";const P=S,D=o.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,bg:o,text:i,border:d,body:m=!1,children:u,as:f="div",...x}=e;const h=(0,n.oU)(s,"card");return(0,c.jsx)(f,{ref:a,...x,className:r()(t,h,o&&"bg-".concat(o),i&&"text-".concat(i),d&&"border-".concat(d)),children:m?(0,c.jsx)(l,{children:u}):u})}));D.displayName="Card";const z=Object.assign(D,{Img:N,Title:P,Subtitle:A,Body:l,Link:v,Text:_,Header:h,Footer:m,ImgOverlay:g})},8602:(e,a,s)=>{"use strict";s.d(a,{A:()=>l});var t=s(8139),r=s.n(t),o=s(5043),n=s(7852),c=s(579);const i=o.forwardRef(((e,a)=>{const[{className:s,...t},{as:o="div",bsPrefix:i,spans:l}]=function(e){let{as:a,bsPrefix:s,className:t,...o}=e;s=(0,n.oU)(s,"col");const c=(0,n.gy)(),i=(0,n.Jm)(),l=[],d=[];return c.forEach((e=>{const a=o[e];let t,r,n;delete o[e],"object"===typeof a&&null!=a?({span:t,offset:r,order:n}=a):t=a;const c=e!==i?"-".concat(e):"";t&&l.push(!0===t?"".concat(s).concat(c):"".concat(s).concat(c,"-").concat(t)),null!=n&&d.push("order".concat(c,"-").concat(n)),null!=r&&d.push("offset".concat(c,"-").concat(r))})),[{...o,className:r()(t,...l,...d)},{as:a,bsPrefix:s,spans:l}]}(e);return(0,c.jsx)(o,{...t,ref:a,className:r()(s,!l.length&&i)})}));i.displayName="Col";const l=i},3519:(e,a,s)=>{"use strict";s.d(a,{A:()=>l});var t=s(8139),r=s.n(t),o=s(5043),n=s(7852),c=s(579);const i=o.forwardRef(((e,a)=>{let{bsPrefix:s,fluid:t=!1,as:o="div",className:i,...l}=e;const d=(0,n.oU)(s,"container"),m="string"===typeof t?"-".concat(t):"-fluid";return(0,c.jsx)(o,{ref:a,...l,className:r()(i,t?"".concat(d).concat(m):d)})}));i.displayName="Container";const l=i},1072:(e,a,s)=>{"use strict";s.d(a,{A:()=>l});var t=s(8139),r=s.n(t),o=s(5043),n=s(7852),c=s(579);const i=o.forwardRef(((e,a)=>{let{bsPrefix:s,className:t,as:o="div",...i}=e;const l=(0,n.oU)(s,"row"),d=(0,n.gy)(),m=(0,n.Jm)(),u="".concat(l,"-cols"),f=[];return d.forEach((e=>{const a=i[e];let s;delete i[e],null!=a&&"object"===typeof a?({cols:s}=a):s=a;const t=e!==m?"-".concat(e):"";null!=s&&f.push("".concat(u).concat(t,"-").concat(s))})),(0,c.jsx)(o,{ref:a,...i,className:r()(t,l,...f)})}));i.displayName="Row";const l=i},7852:(e,a,s)=>{"use strict";s.d(a,{Jm:()=>m,Wz:()=>u,gy:()=>d,oU:()=>l});var t=s(5043);s(579);const r=["xxl","xl","lg","md","sm","xs"],o="xs",n=t.createContext({prefixes:{},breakpoints:r,minBreakpoint:o}),{Consumer:c,Provider:i}=n;function l(e,a){const{prefixes:s}=(0,t.useContext)(n);return e||s[a]||a}function d(){const{breakpoints:e}=(0,t.useContext)(n);return e}function m(){const{minBreakpoint:e}=(0,t.useContext)(n);return e}function u(){const{dir:e}=(0,t.useContext)(n);return"rtl"===e}},4488:(e,a,s)=>{"use strict";s.d(a,{A:()=>c});var t=s(5043),r=s(8139),o=s.n(r),n=s(579);const c=e=>t.forwardRef(((a,s)=>(0,n.jsx)("div",{...a,ref:s,className:o()(a.className,e)})))},6429:(e,a,s)=>{"use strict";e.exports=s.p+"static/media/logo.d5ff9840e7e4b91dba10.jpg"},8139:(e,a)=>{var s;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(e=n(e,o(s)))}return e}function o(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var a="";for(var s in e)t.call(e,s)&&e[s]&&(a=n(a,s));return a}function n(e,a){return a?e?e+" "+a:e+a:e}e.exports?(r.default=r,e.exports=r):void 0===(s=function(){return r}.apply(a,[]))||(e.exports=s)}()}}]);
//# sourceMappingURL=332.29ae5877.chunk.js.map