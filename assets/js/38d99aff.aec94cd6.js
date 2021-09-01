(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[966],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3899:function(e,t,n){"use strict";n.d(t,{Z:function(){return l},T:function(){return c}});var r=n(2122),a=n(7294),i=n(6742),o=n(2263),s=n(907);function l(e){return a.createElement(i.Z,(0,r.Z)({},e,{to:(t=e.to,l=(0,s.zu)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==l?void 0:l.name)?n:"current"]+t),target:"_blank"}));var t,n,l}function c(e){var t,n=null!=(t=e.text)?t:"Example";return a.createElement(l,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},1898:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(3899),s=["components"],l={id:"extending_configs",title:"Extending Configs"},c=void 0,d={unversionedId:"patterns/extending_configs",id:"version-1.1/patterns/extending_configs",isDocsHomePage:!1,title:"Extending Configs",description:"A common pattern is to extend an existing config, overriding and/or adding new config values to it.",source:"@site/versioned_docs/version-1.1/patterns/extending_configs.md",sourceDirName:"patterns",slug:"/patterns/extending_configs",permalink:"/docs/patterns/extending_configs",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/patterns/extending_configs.md",version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1630515999,formattedLastUpdatedAt:"9/1/2021",frontMatter:{id:"extending_configs",title:"Extending Configs"},sidebar:"version-1.1/docs",previous:{title:"Config Store API",permalink:"/docs/tutorials/structured_config/config_store"},next:{title:"Configuring Experiments",permalink:"/docs/patterns/configuring_experiments"}},p=[],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.T,{text:"Example application",to:"examples/patterns/extending_configs",mdxType:"ExampleGithubLink"}),(0,i.kt)("p",null,"A common pattern is to extend an existing config, overriding and/or adding new config values to it.\nThe extension is done by including the base configuration, and then overriding the chosen values in the current config."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This page assumes that you are familiar with the contents of ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/defaults_list"},"The Defaults List"),"."))),(0,i.kt)("h4",{id:"extending-a-config-from-the-same-config-group"},"Extending a config from the same config group:"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--4"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql \n\n\n\n\n\n"))),(0,i.kt)("div",{className:"col col--4"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0},"defaults:\n  - base_mysql\n\nuser: omry\npassword: secret\nport: 3307\nencoding: utf8\n"))),(0,i.kt)("div",{className:"col col--4"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/base_mysql.yaml"',title:'"db/base_mysql.yaml"'},"host: localhost\nport: 3306\nuser: ???\npassword: ???\n\n\n\n")))),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0},"db:\n  host: localhost   # from db/base_mysql\n  port: 3307        # overriden by db/mysql.yaml \n  user: omry        # populated by db/mysql.yaml\n  password: secret  # populated by db/mysql.yaml\n  encoding: utf8    # added by db/mysql.yaml\n")),(0,i.kt)("h4",{id:"extending-a-config-from-another-config-group"},"Extending a config from another config group:"),(0,i.kt)("p",null,"To extend a config from a different config group, include it using an absolute path (/), and override\nthe package to ",(0,i.kt)("em",{parentName:"p"},"_","here","_"),". (",(0,i.kt)("em",{parentName:"p"},"_","here","_")," is described in ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/overriding_packages#default-list-package-keywords"},"Packages"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0},"defaults:\n  - /db_schema/base_mysql@_here_\n")),(0,i.kt)("p",null,"It is otherwise identical to extending a config within the same config group."))}u.isMDXComponent=!0}}]);