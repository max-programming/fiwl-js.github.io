(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(105)),i={id:"app_unit",title:"app.unit"},p={unversionedId:"reference-env/app_unit",id:"reference-env/app_unit",isDocsHomePage:!1,title:"app.unit",description:"Unit conversion utility. This help us convert unit (as example dp to px) easily.",source:"@site/docs\\reference-env\\app_unit.md",slug:"/reference-env/app_unit",permalink:"/docs/reference-env/app_unit",editUrl:"https://github.com/fiwl-js/fiwl-js.github.io/edit/master/docs/reference-env/app_unit.md",version:"current",sidebar:"docs",previous:{title:"app.display",permalink:"/docs/reference-env/app_display"},next:{title:"app.unit.Types",permalink:"/docs/reference-env/app_unit_types"}},o=[{value:"Constants",id:"constants",children:[]},{value:"Methods",id:"methods",children:[{value:"convert",id:"convert",children:[]},{value:"resolve",id:"resolve",children:[]}]}],l={rightToc:o};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Unit conversion utility. This help us convert unit (as example ",Object(c.a)("inlineCode",{parentName:"p"},"dp")," to ",Object(c.a)("inlineCode",{parentName:"p"},"px"),") easily."),Object(c.a)("h2",{id:"constants"},"Constants"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"app_unit_types"}),"Types")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Unit constants. We use this for parameters of ",Object(c.a)("inlineCode",{parentName:"td"},"app.unit.convert"))))),Object(c.a)("h2",{id:"methods"},"Methods"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Name"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Return Type"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#convert"}),"convert")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Scale a number based on two units.")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#resolve"}),"resolve")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Resolve unit suffix of a string then convert it to px.")))),Object(c.a)("hr",null),Object(c.a)("h3",{id:"convert"},"convert"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"app.unit.convert(value, fromUnit, toUnit?);\n")),Object(c.a)("p",null,"Scale a number based on two units. If ",Object(c.a)("inlineCode",{parentName:"p"},"toUnit")," ignored, then destination unit assumed as ",Object(c.a)("inlineCode",{parentName:"p"},"px"),"."),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Parameters:")),Object(c.a)("ol",null,Object(c.a)("li",{parentName:"ol"},"value: (",Object(c.a)("em",{parentName:"li"},"number")," type) a Number to be converted"),Object(c.a)("li",{parentName:"ol"},"fromUnit: (",Object(c.a)("em",{parentName:"li"},"number")," type) Unit of value. Use ",Object(c.a)("inlineCode",{parentName:"li"},"app.unit.Types.*")," for this parameter."),Object(c.a)("li",{parentName:"ol"},"toUnit: (",Object(c.a)("em",{parentName:"li"},"number")," type, Optional) Unit of result. Use ",Object(c.a)("inlineCode",{parentName:"li"},"app.unit.Types.*")," for this parameter.")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Return:")," number"),Object(c.a)("hr",null),Object(c.a)("h3",{id:"resolve"},"resolve"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"app.unit.resolve(value, percentFactor?);\n")),Object(c.a)("p",null,"Resolve unit suffix of a string then convert it to px. However, if the value is number then returns that value."),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Parameters:")),Object(c.a)("ol",null,Object(c.a)("li",{parentName:"ol"},"value: (",Object(c.a)("em",{parentName:"li"},"string")," or ",Object(c.a)("em",{parentName:"li"},"number")," type) a String that contains number with unit or just a plain number."),Object(c.a)("li",{parentName:"ol"},"percentFactor: (",Object(c.a)("em",{parentName:"li"},"number")," type, Optional) This parameter tells ",Object(c.a)("inlineCode",{parentName:"li"},'"100%"')," is equals what pixels. If ignored, then ",Object(c.a)("inlineCode",{parentName:"li"},'"100%" == "100px"'),".")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Return:")," number"))}b.isMDXComponent=!0},105:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,O=s["".concat(i,".").concat(m)]||s[m]||u[m]||c;return a?r.a.createElement(O,p(p({ref:t},l),{},{components:a})):r.a.createElement(O,p({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);