(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{242:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(8),a=(t(0),t(267)),l={id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},i={unversionedId:"plugins/colorlog",id:"version-1.0/plugins/colorlog",isDocsHomePage:!1,title:"Colorlog plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/colorlog.md",slug:"/plugins/colorlog",permalink:"/docs/plugins/colorlog",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/plugins/colorlog.md",version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1619718001,formattedLastUpdatedAt:"4/29/2021",sidebar_label:"Colorlog plugin",sidebar:"version-1.0/docs",previous:{title:"Customizing Application's help",permalink:"/docs/configure_hydra/app_help"},next:{title:"Joblib Launcher plugin",permalink:"/docs/plugins/joblib_launcher"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:c};function s(e){var r=e.components,l=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,l,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://pypi.org/project/hydra-colorlog/"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-colorlog",alt:"PyPI"})),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-colorlog",alt:"PyPI - License"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-colorlog",alt:"PyPI - Python Version"}),"\n",Object(a.b)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-colorlog"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-colorlog.svg",alt:"PyPI - Downloads"})),"\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_colorlog/example"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})),"\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_colorlog"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"}))),Object(a.b)("p",null,"Adds ",Object(a.b)("a",{class:"external",href:"https://github.com/borntyping/python-colorlog",target:"_blank"},"colorlog")," colored logs for ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/hydra_logging"),"."),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra_colorlog --upgrade\n")),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("p",null,"Override ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",Object(a.b)("inlineCode",{parentName:"p"},"hydra/hydra_logging")," your config:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/job_logging: colorlog\n  - hydra/hydra_logging: colorlog\n")),Object(a.b)("p",null,"See included ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_colorlog/example"},"example"),"."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Colored log output",src:t(285).default})))}s.isMDXComponent=!0},267:function(e,r,t){"use strict";t.d(r,"a",(function(){return g})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},g=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(t),u=n,d=g["".concat(l,".").concat(u)]||g[u]||b[u]||a;return t?o.a.createElement(d,i(i({ref:r},p),{},{components:t})):o.a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},285:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/colorlog-b20147697b9d16362f62a5d0bb58347f.png"}}]);