(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=b(a),d=n,O=m["".concat(i,".").concat(d)]||m[d]||l[d]||c;return a?r.a.createElement(O,o(o({ref:t},s),{},{components:a})):r.a.createElement(O,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(105)),i={id:"app_manifest",title:"app.manifest"},o={unversionedId:"reference-env/app_manifest",id:"reference-env/app_manifest",isDocsHomePage:!1,title:"app.manifest",description:"Access to app's manifest. To configure the manifest, follow this guide.",source:"@site/docs/reference-env/app_manifest.md",slug:"/reference-env/app_manifest",permalink:"/docs/reference-env/app_manifest",editUrl:"https://github.com/fiwl-js/fiwl-js.github.io/edit/master/docs/reference-env/app_manifest.md",version:"current",sidebar:"docs",previous:{title:"app.net",permalink:"/docs/reference-env/app_net"},next:{title:"app.res",permalink:"/docs/reference-env/app_res"}},p=[{value:"Constants",id:"constants",children:[]}],s={rightToc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Access to app's manifest. To configure the manifest, follow ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/guide/manifest"}),"this guide"),"."),Object(c.a)("h2",{id:"constants"},"Constants"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("strong",{parentName:"td"},"name")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Name of your Application. Default: ",Object(c.a)("inlineCode",{parentName:"td"},'"Blank App"'))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("strong",{parentName:"td"},"icon")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL that references app's icon. Targeted icon must SVG. Default: ",Object(c.a)("inlineCode",{parentName:"td"},'""'))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("strong",{parentName:"td"},"splash")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL that references app's splash icon. Targeted splash icon must SVG. Default: ",Object(c.a)("inlineCode",{parentName:"td"},'""'))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("strong",{parentName:"td"},"description")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Description of your Application. Default: ",Object(c.a)("inlineCode",{parentName:"td"},'"This is a FIWL-based web app"'))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("strong",{parentName:"td"},"metadata")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Key-value pairings which tell SEO some information. Default: ",Object(c.a)("inlineCode",{parentName:"td"},"{}"))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("strong",{parentName:"td"},"stages")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"List of objects that inform available stages. See ",Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/docs/guide/manifest#stages"}),"guide")," for schema.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("strong",{parentName:"td"},"widgets")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Key-value pairings which inform available widget modules. See ",Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"/docs/guide/manifest#widgets"}),"guide"),".")))))}b.isMDXComponent=!0}}]);