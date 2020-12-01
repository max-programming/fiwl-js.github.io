(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(a),u=n,g=b["".concat(c,".").concat(u)]||b[u]||p[u]||r;return a?i.a.createElement(g,o(o({ref:t},l),{},{components:a})):i.a.createElement(g,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<r;l++)c[l]=a[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},107:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=a(22),i=a(109);function r(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,c=r.forcePrependBaseUrl,o=void 0!==c&&c,s=r.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(o)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+d:d}(r,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},109:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}))},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(105)),c=a(107),o={id:"stage",title:"Arranging the Stage"},s={unversionedId:"guide/stage",id:"guide/stage",isDocsHomePage:!1,title:"Arranging the Stage",description:"In HTML, we have pages. Meanwhile in FIWL, we use Stage as it's an app, not a document. Every stage contains layout and logic. In this documentation, we will more focused on layout. For the logic part, see Scripts & Events.",source:"@site/docs/guide/stage.md",slug:"/guide/stage",permalink:"/docs/guide/stage",editUrl:"https://github.com/fiwl-js/fiwl-js.github.io/edit/master/docs/guide/stage.md",version:"current",sidebar:"docs",previous:{title:"Configuring Manifest",permalink:"/docs/guide/manifest"},next:{title:"Scripts & Events",permalink:"/docs/guide/script_event"}},l=[{value:"Layout Principle",id:"layout-principle",children:[]},{value:"Managing Size and Position",id:"managing-size-and-position",children:[{value:"Alignment",id:"alignment",children:[]},{value:"Absolute Values",id:"absolute-values",children:[]},{value:"Relative Values",id:"relative-values",children:[]},{value:"Sizing",id:"sizing",children:[]},{value:"Padding, Margin, and Spacing",id:"padding-margin-and-spacing",children:[]}]},{value:"Passive and Interactive Stage",id:"passive-and-interactive-stage",children:[]}],d={rightToc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"In HTML, we have pages. Meanwhile in FIWL, we use Stage as it's an app, not a document. Every stage contains layout and logic. In this documentation, we will more focused on layout. For the logic part, see ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/guide/script_event"}),"Scripts & Events"),"."),Object(r.a)("h2",{id:"layout-principle"},"Layout Principle"),Object(r.a)("object",{type:"image/svg+xml",data:Object(c.a)("img/docs/guide/stage-1.svg")}),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"DisplayObject")," is the most primitive widget class and ",Object(r.a)("strong",{parentName:"p"},"Layout")," is also primitive but with ability to store another widget instances. Just like normal class, both ",Object(r.a)("strong",{parentName:"p"},"DisplayObject")," and ",Object(r.a)("strong",{parentName:"p"},"Layout")," can be extended. All widgets has ",Object(r.a)("inlineCode",{parentName:"p"},".container")," property, it points current Layout. Layout also has ",Object(r.a)("inlineCode",{parentName:"p"},".contents")," property to points all widgets inside that Layout. So, bi-directional access is completely legal here via script or event tag."),Object(r.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Widgets' name are ",Object(r.a)("strong",{parentName:"p"},"case-sensitive"),". As example ",Object(r.a)("inlineCode",{parentName:"p"},"SeriesLayout")," and ",Object(r.a)("inlineCode",{parentName:"p"},"serieslayout")," are two different things!"))),Object(r.a)("h2",{id:"managing-size-and-position"},"Managing Size and Position"),Object(r.a)("p",null,"Every layout widget has ability to control its contents' size and position. We also have control to adjust every widget including layout itself."),Object(r.a)("h3",{id:"alignment"},"Alignment"),Object(r.a)("p",null,"To adjust position, we could set ",Object(r.a)("inlineCode",{parentName:"p"},"alignContents")," on layout, or ",Object(r.a)("inlineCode",{parentName:"p"},"alignSelf")," on several widgets with these values:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},'"left"')),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},'"right"')),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},'"top"')),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},'"bottom"')),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},'"center"')),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},'"center-x"')," (for horizontal center)"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("inlineCode",{parentName:"li"},'"center-y"')," (for vertical center)")),Object(r.a)("p",null,"These values can be combined, as example ",Object(r.a)("inlineCode",{parentName:"p"},'"right|bottom"')," and ",Object(r.a)("inlineCode",{parentName:"p"},'"center-x|top"'),"."),Object(r.a)("h3",{id:"absolute-values"},"Absolute Values"),Object(r.a)("p",null,"Both position and size could be either ",Object(r.a)("strong",{parentName:"p"},"absolutely")," or ",Object(r.a)("strong",{parentName:"p"},"relatively")," adjusted in numeric way. For absolute values, they won't be multiplied by container as illustration below."),Object(r.a)("object",{type:"image/svg+xml",data:Object(c.a)("img/docs/guide/stage-2.svg")}),Object(r.a)("p",null,"Similar to Android, ",Object(r.a)("inlineCode",{parentName:"p"},"dp")," unit is de-facto standard except text size. For text size, use ",Object(r.a)("inlineCode",{parentName:"p"},"sp")," to allow browser resize the text only. However, there are another units to use as explained below."),Object(r.a)("table",null,Object(r.a)("thead",{parentName:"table"},Object(r.a)("tr",{parentName:"thead"},Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Unit"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Acronym of"),Object(r.a)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Explanation"))),Object(r.a)("tbody",{parentName:"table"},Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.a)("inlineCode",{parentName:"td"},"dp")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Density-Independent Pixels"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Smartphones have more dense screen than desktop. With this unit, the desired widget will looks the same on both smartphone and desktop eventhough density difference.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.a)("inlineCode",{parentName:"td"},"sp")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Scaled Points (scaled pt)"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Same as ",Object(r.a)("inlineCode",{parentName:"td"},"dp")," but specialized for text size.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.a)("inlineCode",{parentName:"td"},"px")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pixels"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Exact pixels, no matter how dense the screen. This causes desired widget on smartphone drawn a lot smaller.")),Object(r.a)("tr",{parentName:"tbody"},Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.a)("inlineCode",{parentName:"td"},"pt")),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Points"),Object(r.a)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Same as ",Object(r.a)("inlineCode",{parentName:"td"},"px")," but specialized for text size.")))),Object(r.a)("h3",{id:"relative-values"},"Relative Values"),Object(r.a)("p",null,"For relative values, they represent how much percent of container's specific value. As result, if you set width relative as illustrated below, it will resize as big as container's space."),Object(r.a)("object",{type:"image/svg+xml",data:Object(c.a)("img/docs/guide/stage-3.svg")}),Object(r.a)("p",null,"Keep in mind that number beside of ",Object(r.a)("inlineCode",{parentName:"p"},"%")," represent how much empty space that can be filled. For sizing (width and height), only works if there are more than one widgets with relative value. If there is only one, then it will simply fill as big as container's empty space."),Object(r.a)("h3",{id:"sizing"},"Sizing"),Object(r.a)("p",null,"Special for sizing widgets (width and height), we can ask any widget to grow as big as its container or shrink as small as its contents. This illustration below demonstrate widget with ",Object(r.a)("inlineCode",{parentName:"p"},'width="content"'),"."),Object(r.a)("object",{type:"image/svg+xml",data:Object(c.a)("img/docs/guide/stage-4.svg")}),Object(r.a)("p",null,"and This is another illustration of widget with ",Object(r.a)("inlineCode",{parentName:"p"},'width="container"'),"."),Object(r.a)("object",{type:"image/svg+xml",data:Object(c.a)("img/docs/guide/stage-5.svg")}),Object(r.a)("p",null,"If you confused why there are empty spaces, then hold tight! we will learn padding, margin, and spacing."),Object(r.a)("object",{type:"image/svg+xml",data:Object(c.a)("img/docs/guide/stage-6.svg")}),Object(r.a)("h3",{id:"padding-margin-and-spacing"},"Padding, Margin, and Spacing"),Object(r.a)("p",null,"Similar to HTML, we could apply margin and padding to widgets. But how about spacing? Here's the explanations:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"margin"),Object(r.a)("br",null)," Outer empty space. If ",Object(r.a)("inlineCode",{parentName:"li"},"backgroundColor")," set, this empty space won't affected."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"padding"),Object(r.a)("br",null)," Inner empty space. Can be affected by ",Object(r.a)("inlineCode",{parentName:"li"},"backgroundColor"),"."),Object(r.a)("li",{parentName:"ul"},Object(r.a)("strong",{parentName:"li"},"spacing"),Object(r.a)("br",null)," Same as padding, but located between ",Object(r.a)("strong",{parentName:"li"},"SerialLayout"),"'s contents.")),Object(r.a)("h2",{id:"passive-and-interactive-stage"},"Passive and Interactive Stage"),Object(r.a)("object",{type:"image/svg+xml",data:Object(c.a)("img/docs/guide/stage-7.svg")}),Object(r.a)("p",null,"Unlike HTML's page, stage is a stateful object. Currently working stage is an interactive stage, whereas previously visited stages are passive stages and they are stored in a ",Object(r.a)("strong",{parentName:"p"},"backstack"),". This backstack makes swapping stage a lot faster rather than re-download everything. Behind the scene, interactive stage posesses a passive stage for storing all stateful properties. When user navigate to another stage, FIWL only remove the interactive stage and keep the passive one. Thus, no data migration needed unlike typical MVC-based frameworks."),Object(r.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"Passive and Interactive stage are two different instance. Interactive stage only contains property setters, getters, and interactive widgets. Whereas passive stage is actually stores stage and all widget instances property."))),Object(r.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"When you define a new property in a widget, it won't be an interactive property. Thus, it won't be stored on the passive instance and cannot automatically trigger update."))))}p.isMDXComponent=!0}}]);