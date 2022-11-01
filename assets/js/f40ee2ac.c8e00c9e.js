"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[9814],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const o={version:1,submitted_by:"yelghali",published_date:"tbd",category:"cloud",tags:["cloud","serverless","kubernetes","role:software-engineer","role:cloud-engineer","size:medium"]},l="Scale Kubernetes workloads based on relevent demand metrics",s={unversionedId:"catalog/cloud/Scale Kubernetes workloads based on events",id:"catalog/cloud/Scale Kubernetes workloads based on events",title:"Scale Kubernetes workloads based on relevent demand metrics",description:"Description",source:"@site/docs/catalog/cloud/Scale Kubernetes workloads based on events.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/Scale Kubernetes workloads based on events",permalink:"/catalog/cloud/Scale Kubernetes workloads based on events",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/Scale Kubernetes workloads based on events.md",tags:[{label:"cloud",permalink:"/tags/cloud"},{label:"serverless",permalink:"/tags/serverless"},{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"role:software-engineer",permalink:"/tags/role-software-engineer"},{label:"role:cloud-engineer",permalink:"/tags/role-cloud-engineer"},{label:"size:medium",permalink:"/tags/size-medium"}],version:"current",frontMatter:{version:1,submitted_by:"yelghali",published_date:"tbd",category:"cloud",tags:["cloud","serverless","kubernetes","role:software-engineer","role:cloud-engineer","size:medium"]},sidebar:"tutorialSidebar",previous:{title:"Cloud",permalink:"/catalog/cloud/"},next:{title:"Use cloud native network security tools and controls",permalink:"/catalog/cloud/Use cloud native network security tools and controls"}},i={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scale-kubernetes-workloads-based-on-relevent-demand-metrics"},"Scale Kubernetes workloads based on relevent demand metrics"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"By default, Kubernetes scales workloads based on CPU and RAM utilization, in practice however, it is difficult to correlate your application's demand drivers with CPU and RAM utilization."),(0,a.kt)("p",null,"Scaling your workload based on relevant demand metrics that drive scaling of your applications, such as HTTP requests, queue length, and cloud alerting events can help reduce its resource utilization, hence its carbon emissions."),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Implement a custom scaler for your application, or use ",(0,a.kt)("a",{parentName:"p",href:"https://keda.sh"},"KEDA")," to help you build event-driven kubernetes applications, to allow scaling down to zero when there is no demand."),(0,a.kt)("p",null,"In addition to scaling kubernetes applications based on relevent scaling metrics (or events), cluster auto-scaling and bursting capabilities are used to scale infrastructure based on demand as well."),(0,a.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,a.kt)("p",null,"Regarding the SCI equation, scaling based on events will impact:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"M"),": By scaling the workloads based on demand and reducing resource utilization, we reduce the total embodied carbon emissions by the kubernetes cluster.")),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("p",null,"The metrics that drive application demand, and scaling needs, are known."),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"If your workloads have predictable usage patterns, you could implement scaling based on time as an alternative to optimize utilization and reduce carbon emissions."))}d.isMDXComponent=!0}}]);