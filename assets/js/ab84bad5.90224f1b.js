"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[1375],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(7462),i=(n(7294),n(4137));const a={version:1,submitted_by:"markus-ntt-seidl",published_date:"TBD",category:"web",tags:["web","compute","role:web-developer","size:small"]},o="Minimize main thread work",l={unversionedId:"catalog/web/minimize-main-thread-work",id:"catalog/web/minimize-main-thread-work",title:"Minimize main thread work",description:"Description",source:"@site/docs/catalog/web/minimize-main-thread-work.md",sourceDirName:"catalog/web",slug:"/catalog/web/minimize-main-thread-work",permalink:"/catalog/web/minimize-main-thread-work",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/patterns/edit/main/docs/catalog/web/minimize-main-thread-work.md",tags:[{label:"web",permalink:"/tags/web"},{label:"compute",permalink:"/tags/compute"},{label:"role:web-developer",permalink:"/tags/role-web-developer"},{label:"size:small",permalink:"/tags/size-small"}],version:"current",frontMatter:{version:1,submitted_by:"markus-ntt-seidl",published_date:"TBD",category:"web",tags:["web","compute","role:web-developer","size:small"]},sidebar:"tutorialSidebar",previous:{title:"Minify web assets",permalink:"/catalog/web/minify-web-assets"},next:{title:"Optimize image size",permalink:"/catalog/web/properly-sized-images"}},s={},m=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],c={toc:m};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"minimize-main-thread-work"},"Minimize main thread work"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Web browsers traditionally consist of a main rendering thread that handles most of the updates on the web page and the execution of JavaScript. JavaScript is executed on the main thread to simplify JavaScript implementations so the JavaScript programmer doesn't have to deal with any multi-threading programming patterns.\nWhen doing long running JavaScript computations it is running single threaded. In contrast all CPUs nowadays have multiple cores which have to be powered on while being underutilized."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"For long running JavaScript computations (e.g. computations that run longer than a few 100 ms) try to use WebWorkers and run them in another thread while keeping the main rendering thread free. Consider moving the JavaScript computation to efficient server implementations that use optimized algorithms."),(0,i.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,i.kt)("p",null,"Concerning the SCI equation, minimize main thread work will impact as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"E"),": CPU resources can be used more efficiently which reduces the electricity required and reduces the carbon intensity")),(0,i.kt)("h2",{id:"assumptions"},"Assumptions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An assumption is made that the code in question can be moved of the main rendering thread")),(0,i.kt)("h2",{id:"considerations"},"Considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consider moving the workload to a efficient server implementation")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/mainthread-work-breakdown/"},"Main thread work breakdown")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.debugbear.com/docs/metrics/total-blocking-time#whats-a-good-total-blocking-time"},"What is a good Total Blocking Time"))))}p.isMDXComponent=!0}}]);