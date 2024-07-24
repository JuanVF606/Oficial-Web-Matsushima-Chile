/*! For license information please see 308.1c087b49.chunk.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[308],{4140:(e,t,r)=>{"use strict";r.d(t,{Am:()=>o});var n=r(5043),a=r(579);const s=["as","disabled"];function o(e){let{tagName:t,disabled:r,href:n,target:a,rel:s,role:o,onClick:c,tabIndex:i=0,type:l}=e;t||(t=null!=n||null!=a||null!=s?"a":"button");const u={tagName:t};if("button"===t)return[{type:l||"button",disabled:r},u];const d=e=>{(r||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==c||c(e)};return"a"===t&&(n||(n="#"),r&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:r?void 0:i,href:n,target:"a"===t?a:void 0,"aria-disabled":r||void 0,rel:"a"===t?s:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},u]}const c=n.forwardRef(((e,t)=>{let{as:r,disabled:n}=e,c=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,s);const[i,{tagName:l}]=o(Object.assign({tagName:r,disabled:n},c));return(0,a.jsx)(l,Object.assign({},c,i,{ref:t}))}));c.displayName="Button"},2740:e=>{"use strict";e.exports=function(e,t,r,n,a,s,o,c){if(!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,a,s,o,c],u=0;(i=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw i.framesToPop=1,i}}},1719:(e,t,r)=>{"use strict";r.d(t,{A:()=>y});var n=r(8139),a=r.n(n),s=r(5043),o=r(1969),c=r(1456),i=r(7852),l=r(4488),u=r(579);const d=(0,l.A)("h4");d.displayName="DivStyledAsH4";const f=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:s=d,...o}=e;return n=(0,i.oU)(n,"alert-heading"),(0,u.jsx)(s,{ref:t,className:a()(r,n),...o})}));f.displayName="AlertHeading";const m=f;var p=r(2673);const v=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:s=p.A,...o}=e;return n=(0,i.oU)(n,"alert-link"),(0,u.jsx)(s,{ref:t,className:a()(r,n),...o})}));v.displayName="AlertLink";const x=v;var h=r(8072),b=r(5632);const N=s.forwardRef(((e,t)=>{const{bsPrefix:r,show:n=!0,closeLabel:s="Close alert",closeVariant:l,className:d,children:f,variant:m="primary",onClose:p,dismissible:v,transition:x=h.A,...N}=(0,o.Zw)(e,{show:"onClose"}),y=(0,i.oU)(r,"alert"),g=(0,c.A)((e=>{p&&p(!1,e)})),j=!0===x?h.A:x,C=(0,u.jsxs)("div",{role:"alert",...j?void 0:N,ref:t,className:a()(d,y,m&&"".concat(y,"-").concat(m),v&&"".concat(y,"-dismissible")),children:[v&&(0,u.jsx)(b.A,{onClick:g,"aria-label":s,variant:l}),f]});return j?(0,u.jsx)(j,{unmountOnExit:!0,...N,ref:void 0,in:n,children:C}):n?C:null}));N.displayName="Alert";const y=Object.assign(N,{Link:x,Heading:m})},4282:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n=r(8139),a=r.n(n),s=r(5043),o=r(4140),c=r(7852),i=r(579);const l=s.forwardRef(((e,t)=>{let{as:r,bsPrefix:n,variant:s="primary",size:l,active:u=!1,disabled:d=!1,className:f,...m}=e;const p=(0,c.oU)(n,"btn"),[v,{tagName:x}]=(0,o.Am)({tagName:r,disabled:d,...m}),h=x;return(0,i.jsx)(h,{...v,...m,ref:t,disabled:d,className:a()(f,p,u&&"active",s&&"".concat(p,"-").concat(s),l&&"".concat(p,"-").concat(l),m.href&&d&&"disabled")})}));l.displayName="Button";const u=l},8258:(e,t,r)=>{"use strict";r.d(t,{A:()=>I});var n=r(8139),a=r.n(n),s=r(5043),o=r(7852),c=r(579);const i=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:s="div",...i}=e;return n=(0,o.oU)(n,"card-body"),(0,c.jsx)(s,{ref:t,className:a()(r,n),...i})}));i.displayName="CardBody";const l=i,u=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:s="div",...i}=e;return n=(0,o.oU)(n,"card-footer"),(0,c.jsx)(s,{ref:t,className:a()(r,n),...i})}));u.displayName="CardFooter";const d=u,f=s.createContext(null);f.displayName="CardHeaderContext";const m=f,p=s.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,as:i="div",...l}=e;const u=(0,o.oU)(r,"card-header"),d=(0,s.useMemo)((()=>({cardHeaderBsPrefix:u})),[u]);return(0,c.jsx)(m.Provider,{value:d,children:(0,c.jsx)(i,{ref:t,...l,className:a()(n,u)})})}));p.displayName="CardHeader";const v=p,x=s.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,variant:s,as:i="img",...l}=e;const u=(0,o.oU)(r,"card-img");return(0,c.jsx)(i,{ref:t,className:a()(s?"".concat(u,"-").concat(s):u,n),...l})}));x.displayName="CardImg";const h=x,b=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:s="div",...i}=e;return n=(0,o.oU)(n,"card-img-overlay"),(0,c.jsx)(s,{ref:t,className:a()(r,n),...i})}));b.displayName="CardImgOverlay";const N=b,y=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:s="a",...i}=e;return n=(0,o.oU)(n,"card-link"),(0,c.jsx)(s,{ref:t,className:a()(r,n),...i})}));y.displayName="CardLink";const g=y;var j=r(4488);const C=(0,j.A)("h6"),w=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:s=C,...i}=e;return n=(0,o.oU)(n,"card-subtitle"),(0,c.jsx)(s,{ref:t,className:a()(r,n),...i})}));w.displayName="CardSubtitle";const A=w,k=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:s="p",...i}=e;return n=(0,o.oU)(n,"card-text"),(0,c.jsx)(s,{ref:t,className:a()(r,n),...i})}));k.displayName="CardText";const P=k,S=(0,j.A)("h5"),R=s.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:s=S,...i}=e;return n=(0,o.oU)(n,"card-title"),(0,c.jsx)(s,{ref:t,className:a()(r,n),...i})}));R.displayName="CardTitle";const U=R,E=s.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,bg:s,text:i,border:u,body:d=!1,children:f,as:m="div",...p}=e;const v=(0,o.oU)(r,"card");return(0,c.jsx)(m,{ref:t,...p,className:a()(n,v,s&&"bg-".concat(s),i&&"text-".concat(i),u&&"border-".concat(u)),children:d?(0,c.jsx)(l,{children:f}):f})}));E.displayName="Card";const I=Object.assign(E,{Img:h,Title:U,Subtitle:A,Body:l,Link:g,Text:P,Header:v,Footer:d,ImgOverlay:N})},3058:(e,t,r)=>{"use strict";r.d(t,{A:()=>P});var n=r(1456),a=r(5043);const s=function(e,t){const r=(0,a.useRef)(!0);(0,a.useEffect)((()=>{if(!r.current)return e();r.current=!1}),t)};var o=r(8232),c=r(6723),i=r(9109);const l=2**31-1;function u(e,t,r){const n=r-Date.now();e.current=n<=l?setTimeout(t,n):setTimeout((()=>u(e,t,r)),l)}function d(){const e=(0,c.A)(),t=(0,a.useRef)();return(0,i.A)((()=>clearTimeout(t.current))),(0,a.useMemo)((()=>{const r=()=>clearTimeout(t.current);return{set:function(n){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e()&&(r(),a<=l?t.current=setTimeout(n,a):u(t,n,Date.now()+a))},clear:r,handleRef:t}}),[])}var f=r(2673),m=r(8139),p=r.n(m),v=r(1969),x=r(7852),h=r(579);const b=a.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:a="div",...s}=e;return n=(0,x.oU)(n,"carousel-caption"),(0,h.jsx)(a,{ref:t,className:p()(r,n),...s})}));b.displayName="CarouselCaption";const N=b,y=a.forwardRef(((e,t)=>{let{as:r="div",bsPrefix:n,className:a,...s}=e;const o=p()(a,(0,x.oU)(n,"carousel-item"));return(0,h.jsx)(r,{ref:t,...s,className:o})}));y.displayName="CarouselItem";const g=y;var j=r(2663),C=r(3492),w=r(2643),A=r(865);const k=a.forwardRef(((e,t)=>{let{defaultActiveIndex:r=0,...c}=e;const{as:i="div",bsPrefix:l,slide:u=!0,fade:m=!1,controls:b=!0,indicators:N=!0,indicatorLabels:y=[],activeIndex:g,onSelect:k,onSlide:P,onSlid:S,interval:R=5e3,keyboard:U=!0,onKeyDown:E,pause:I="hover",onMouseOver:O,onMouseOut:T,wrap:D=!0,touch:M=!0,onTouchStart:L,onTouchMove:_,onTouchEnd:B,prevIcon:H=(0,h.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:F="Previous",nextIcon:J=(0,h.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:V="Next",variant:W,className:z,children:K,...Z}=(0,v.Zw)({defaultActiveIndex:r,...c},{activeIndex:"onSelect"}),X=(0,x.oU)(l,"carousel"),q=(0,x.Wz)(),G=(0,a.useRef)(null),[Q,Y]=(0,a.useState)("next"),[$,ee]=(0,a.useState)(!1),[te,re]=(0,a.useState)(!1),[ne,ae]=(0,a.useState)(g||0);(0,a.useEffect)((()=>{te||g===ne||(G.current?Y(G.current):Y((g||0)>ne?"next":"prev"),u&&re(!0),ae(g||0))}),[g,te,ne,u]),(0,a.useEffect)((()=>{G.current&&(G.current=null)}));let se,oe=0;(0,j.jJ)(K,((e,t)=>{++oe,t===g&&(se=e.props.interval)}));const ce=(0,o.A)(se),ie=(0,a.useCallback)((e=>{if(te)return;let t=ne-1;if(t<0){if(!D)return;t=oe-1}G.current="prev",null==k||k(t,e)}),[te,ne,k,D,oe]),le=(0,n.A)((e=>{if(te)return;let t=ne+1;if(t>=oe){if(!D)return;t=0}G.current="next",null==k||k(t,e)})),ue=(0,a.useRef)();(0,a.useImperativeHandle)(t,(()=>({element:ue.current,prev:ie,next:le})));const de=(0,n.A)((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ue.current)&&(q?ie():le())})),fe="next"===Q?"start":"end";s((()=>{u||(null==P||P(ne,fe),null==S||S(ne,fe))}),[ne]);const me="".concat(X,"-item-").concat(Q),pe="".concat(X,"-item-").concat(fe),ve=(0,a.useCallback)((e=>{(0,w.A)(e),null==P||P(ne,fe)}),[P,ne,fe]),xe=(0,a.useCallback)((()=>{re(!1),null==S||S(ne,fe)}),[S,ne,fe]),he=(0,a.useCallback)((e=>{if(U&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(q?le(e):ie(e));case"ArrowRight":return e.preventDefault(),void(q?ie(e):le(e))}null==E||E(e)}),[U,E,ie,le,q]),be=(0,a.useCallback)((e=>{"hover"===I&&ee(!0),null==O||O(e)}),[I,O]),Ne=(0,a.useCallback)((e=>{ee(!1),null==T||T(e)}),[T]),ye=(0,a.useRef)(0),ge=(0,a.useRef)(0),je=d(),Ce=(0,a.useCallback)((e=>{ye.current=e.touches[0].clientX,ge.current=0,"hover"===I&&ee(!0),null==L||L(e)}),[I,L]),we=(0,a.useCallback)((e=>{e.touches&&e.touches.length>1?ge.current=0:ge.current=e.touches[0].clientX-ye.current,null==_||_(e)}),[_]),Ae=(0,a.useCallback)((e=>{if(M){const t=ge.current;Math.abs(t)>40&&(t>0?ie(e):le(e))}"hover"===I&&je.set((()=>{ee(!1)}),R||void 0),null==B||B(e)}),[M,I,ie,le,je,R,B]),ke=null!=R&&!$&&!te,Pe=(0,a.useRef)();(0,a.useEffect)((()=>{var e,t;if(!ke)return;const r=q?ie:le;return Pe.current=window.setInterval(document.visibilityState?de:r,null!=(e=null!=(t=ce.current)?t:R)?e:void 0),()=>{null!==Pe.current&&clearInterval(Pe.current)}}),[ke,ie,le,ce,R,de,q]);const Se=(0,a.useMemo)((()=>N&&Array.from({length:oe},((e,t)=>e=>{null==k||k(t,e)}))),[N,oe,k]);return(0,h.jsxs)(i,{ref:ue,...Z,onKeyDown:he,onMouseOver:be,onMouseOut:Ne,onTouchStart:Ce,onTouchMove:we,onTouchEnd:Ae,className:p()(z,X,u&&"slide",m&&"".concat(X,"-fade"),W&&"".concat(X,"-").concat(W)),children:[N&&(0,h.jsx)("div",{className:"".concat(X,"-indicators"),children:(0,j.Tj)(K,((e,t)=>(0,h.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=y&&y.length?y[t]:"Slide ".concat(t+1),className:t===ne?"active":void 0,onClick:Se?Se[t]:void 0,"aria-current":t===ne},t)))}),(0,h.jsx)("div",{className:"".concat(X,"-inner"),children:(0,j.Tj)(K,((e,t)=>{const r=t===ne;return u?(0,h.jsx)(A.A,{in:r,onEnter:r?ve:void 0,onEntered:r?xe:void 0,addEndListener:C.A,children:(t,n)=>a.cloneElement(e,{...n,className:p()(e.props.className,r&&"entered"!==t&&me,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&pe)})}):a.cloneElement(e,{className:p()(e.props.className,r&&"active")})}))}),b&&(0,h.jsxs)(h.Fragment,{children:[(D||0!==g)&&(0,h.jsxs)(f.A,{className:"".concat(X,"-control-prev"),onClick:ie,children:[H,F&&(0,h.jsx)("span",{className:"visually-hidden",children:F})]}),(D||g!==oe-1)&&(0,h.jsxs)(f.A,{className:"".concat(X,"-control-next"),onClick:le,children:[J,V&&(0,h.jsx)("span",{className:"visually-hidden",children:V})]})]})]})}));k.displayName="Carousel";const P=Object.assign(k,{Caption:N,Item:g})},8602:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(8139),a=r.n(n),s=r(5043),o=r(7852),c=r(579);const i=s.forwardRef(((e,t)=>{const[{className:r,...n},{as:s="div",bsPrefix:i,spans:l}]=function(e){let{as:t,bsPrefix:r,className:n,...s}=e;r=(0,o.oU)(r,"col");const c=(0,o.gy)(),i=(0,o.Jm)(),l=[],u=[];return c.forEach((e=>{const t=s[e];let n,a,o;delete s[e],"object"===typeof t&&null!=t?({span:n,offset:a,order:o}=t):n=t;const c=e!==i?"-".concat(e):"";n&&l.push(!0===n?"".concat(r).concat(c):"".concat(r).concat(c,"-").concat(n)),null!=o&&u.push("order".concat(c,"-").concat(o)),null!=a&&u.push("offset".concat(c,"-").concat(a))})),[{...s,className:a()(n,...l,...u)},{as:t,bsPrefix:r,spans:l}]}(e);return(0,c.jsx)(s,{...n,ref:t,className:a()(r,!l.length&&i)})}));i.displayName="Col";const l=i},3519:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(8139),a=r.n(n),s=r(5043),o=r(7852),c=r(579);const i=s.forwardRef(((e,t)=>{let{bsPrefix:r,fluid:n=!1,as:s="div",className:i,...l}=e;const u=(0,o.oU)(r,"container"),d="string"===typeof n?"-".concat(n):"-fluid";return(0,c.jsx)(s,{ref:t,...l,className:a()(i,n?"".concat(u).concat(d):u)})}));i.displayName="Container";const l=i},2663:(e,t,r)=>{"use strict";r.d(t,{Tj:()=>a,jJ:()=>s,mf:()=>o});var n=r(5043);function a(e,t){let r=0;return n.Children.map(e,(e=>n.isValidElement(e)?t(e,r++):e))}function s(e,t){let r=0;n.Children.forEach(e,(e=>{n.isValidElement(e)&&t(e,r++)}))}function o(e,t){return n.Children.toArray(e).some((e=>n.isValidElement(e)&&e.type===t))}},1072:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(8139),a=r.n(n),s=r(5043),o=r(7852),c=r(579);const i=s.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,as:s="div",...i}=e;const l=(0,o.oU)(r,"row"),u=(0,o.gy)(),d=(0,o.Jm)(),f="".concat(l,"-cols"),m=[];return u.forEach((e=>{const t=i[e];let r;delete i[e],null!=t&&"object"===typeof t?({cols:r}=t):r=t;const n=e!==d?"-".concat(e):"";null!=r&&m.push("".concat(f).concat(n,"-").concat(r))})),(0,c.jsx)(s,{ref:t,...i,className:a()(n,l,...m)})}));i.displayName="Row";const l=i},7852:(e,t,r)=>{"use strict";r.d(t,{Jm:()=>d,Wz:()=>f,gy:()=>u,oU:()=>l});var n=r(5043);r(579);const a=["xxl","xl","lg","md","sm","xs"],s="xs",o=n.createContext({prefixes:{},breakpoints:a,minBreakpoint:s}),{Consumer:c,Provider:i}=o;function l(e,t){const{prefixes:r}=(0,n.useContext)(o);return e||r[t]||t}function u(){const{breakpoints:e}=(0,n.useContext)(o);return e}function d(){const{minBreakpoint:e}=(0,n.useContext)(o);return e}function f(){const{dir:e}=(0,n.useContext)(o);return"rtl"===e}},1969:(e,t,r)=>{"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(null,arguments)}r.d(t,{Zw:()=>i});var a=r(8587),s=r(5043);r(2740);function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function i(e,t){return Object.keys(t).reduce((function(r,i){var l,u=r,d=u[o(i)],f=u[i],m=(0,a.A)(u,[o(i),i].map(c)),p=t[i],v=function(e,t,r){var n=(0,s.useRef)(void 0!==e),a=(0,s.useState)(t),o=a[0],c=a[1],i=void 0!==e,l=n.current;return n.current=i,!i&&l&&o!==t&&c(t),[i?e:o,(0,s.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];r&&r.apply(void 0,[e].concat(n)),c(e)}),[r])]}(f,d,e[p]),x=v[0],h=v[1];return n({},m,((l={})[i]=x,l[p]=h,l))}),e)}function l(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function u(e){this.setState(function(t){var r=this.constructor.getDerivedStateFromProps(e,t);return null!==r&&void 0!==r?r:null}.bind(this))}function d(e,t){try{var r=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,n)}finally{this.props=r,this.state=n}}l.__suppressDeprecationWarning=!0,u.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0},8139:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,s(r)))}return e}function s(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=o(t,r));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=308.1c087b49.chunk.js.map