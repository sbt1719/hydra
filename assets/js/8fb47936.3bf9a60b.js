(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(267)),o={id:"config_path_changes",title:"Config path changes",hide_title:!0},c={unversionedId:"upgrades/0.11_to_1.0/config_path_changes",id:"upgrades/0.11_to_1.0/config_path_changes",isDocsHomePage:!1,title:"Config path changes",description:"Config path changes",source:"@site/docs/upgrades/0.11_to_1.0/config_path_changes.md",slug:"/upgrades/0.11_to_1.0/config_path_changes",permalink:"/docs/next/upgrades/0.11_to_1.0/config_path_changes",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/0.11_to_1.0/config_path_changes.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1619718001,formattedLastUpdatedAt:"4/29/2021",sidebar:"docs",previous:{title:"Automatic schema-matching",permalink:"/docs/next/upgrades/1.0_to_1.1/automatic_schema_matching"},next:{title:"Adding an @package directive",permalink:"/docs/next/upgrades/0.11_to_1.0/adding_a_package_directive"}},p=[{value:"Config path changes",id:"config-path-changes",children:[]},{value:"Migration examples",id:"migration-examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"config-path-changes"},"Config path changes"),Object(i.b)("p",null,"Hydra 1.0 adds a new ",Object(i.b)("inlineCode",{parentName:"p"},"config_name")," parameter to ",Object(i.b)("inlineCode",{parentName:"p"},"@hydra.main()")," and changes the meaning of the ",Object(i.b)("inlineCode",{parentName:"p"},"config_path"),".\nPreviously, ",Object(i.b)("inlineCode",{parentName:"p"},"config_path")," encapsulated two things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Search path relative to the declaring python file."),Object(i.b)("li",{parentName:"ul"},"Optional config file (.yaml) to load.")),Object(i.b)("p",null,"Having both of those things in the same parameter does not work well if you consider configs that are not files\nsuch as Structured Configs. In addition, it prevents overriding just the ",Object(i.b)("inlineCode",{parentName:"p"},"config_name")," or just the ",Object(i.b)("inlineCode",{parentName:"p"},"config_path")),Object(i.b)("p",null,"A second change is that the ",Object(i.b)("inlineCode",{parentName:"p"},"config_name")," no longer requires a file extension. For configs files the ",Object(i.b)("inlineCode",{parentName:"p"},".yaml")," extension\nwill be added automatically when the file is loaded."),Object(i.b)("p",null,"This change is backward compatible, but support for the old style is deprecated and will be removed in the next major Hydra version."),Object(i.b)("h2",{id:"migration-examples"},"Migration examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 0.11"',title:'"Hydra','0.11"':!0},'@hydra.main(config_path="config.yaml")\n')),Object(i.b)("p",null,"Becomes: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 1.0"',title:'"Hydra','1.0"':!0},'@hydra.main(config_name="config")\n')),Object(i.b)("p",null,"And"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 0.11"',title:'"Hydra','0.11"':!0},'@hydra.main(config_path="conf/config.yaml")\n')),Object(i.b)("p",null,"Becomes:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 1.0"',title:'"Hydra','1.0"':!0},'@hydra.main(config_path="conf", config_name="config")\n')))}s.isMDXComponent=!0},267:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(o,".").concat(g)]||d[g]||u[g]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);