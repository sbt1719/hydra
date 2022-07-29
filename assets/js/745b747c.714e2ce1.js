"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3835],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return s},mdx:function(){return g},useMDXComponents:function(){return m},withMDXComponents:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){return function(n){var t=m(n.components);return r.createElement(e,i({},n,{components:t}))}},m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(t),s=a,f=p["".concat(o,".").concat(s)]||p[s]||u[s]||i;return t?r.createElement(f,d(d({ref:n},c),{},{components:t})):r.createElement(f,d({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},53492:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],d={id:"adding_a_package_directive",title:"Adding an @package directive"},l=void 0,c={unversionedId:"upgrades/0.11_to_1.0/adding_a_package_directive",id:"version-1.0/upgrades/0.11_to_1.0/adding_a_package_directive",title:"Adding an @package directive",description:"Hydra 1.0 introduces the concept of a config package. A package is the common parent",source:"@site/versioned_docs/version-1.0/upgrades/0.11_to_1.0/adding_a_package_directive.md",sourceDirName:"upgrades/0.11_to_1.0",slug:"/upgrades/0.11_to_1.0/adding_a_package_directive",permalink:"/docs/1.0/upgrades/0.11_to_1.0/adding_a_package_directive",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/upgrades/0.11_to_1.0/adding_a_package_directive.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha10",lastUpdatedAt:1659070165,formattedLastUpdatedAt:"7/29/2022",frontMatter:{id:"adding_a_package_directive",title:"Adding an @package directive"},sidebar:"version-1.0/docs",previous:{title:"Config path changes",permalink:"/docs/1.0/upgrades/0.11_to_1.0/config_path_changes"},next:{title:"strict flag mode deprecation",permalink:"/docs/1.0/upgrades/0.11_to_1.0/strict_mode_flag_deprecated"}},p=[{value:"Upgrade instructions:",id:"upgrade-instructions",children:[{value:"Recommended (~10 seconds per config file):",id:"recommended-10-seconds-per-config-file",children:[],level:3},{value:"Alternative (not recommended):",id:"alternative-not-recommended",children:[],level:3},{value:"Example for <code>case 1</code>:",id:"example-for-case-1",children:[{value:"Before",id:"before",children:[],level:4},{value:"After",id:"after",children:[],level:4}],level:3},{value:"Example for <code>case 2</code>:",id:"example-for-case-2",children:[],level:3}],level:2}],m={toc:p};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Hydra 1.0 introduces the concept of a config ",(0,i.mdx)("inlineCode",{parentName:"p"},"package"),". A ",(0,i.mdx)("inlineCode",{parentName:"p"},"package")," is the common parent\npath of all nodes in the config file."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"In Hydra 0.11, there was an implicit default of ",(0,i.mdx)("inlineCode",{parentName:"li"},"_global_"),' ("")'),(0,i.mdx)("li",{parentName:"ul"},"In Hydra 1.1 the default will be ",(0,i.mdx)("inlineCode",{parentName:"li"},"_group_")," (the name of the config group)."),(0,i.mdx)("li",{parentName:"ul"},"Hydra 1.0 maintains the implicit default of ",(0,i.mdx)("inlineCode",{parentName:"li"},"_global_")," and issues a warning for\nany config group file without a ",(0,i.mdx)("inlineCode",{parentName:"li"},"@package")," directive.")),(0,i.mdx)("p",null,"By adding an explicit ",(0,i.mdx)("inlineCode",{parentName:"p"},"@package")," to these configs now, you guarantee that your configs\nwill not break when you upgrade to Hydra 1.1."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"@package")," directive is described in details ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.0/advanced/overriding_packages"},"here"),".  "),(0,i.mdx)("h2",{id:"upgrade-instructions"},"Upgrade instructions:"),(0,i.mdx)("h3",{id:"recommended-10-seconds-per-config-file"},"Recommended (~10 seconds per config file):"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Case 1"),": For config files where the common parent path matches the config group name:  "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Add ",(0,i.mdx)("inlineCode",{parentName:"li"},"# @package _group_")," to the top of every config group file"),(0,i.mdx)("li",{parentName:"ul"},"Remove the common parent path config file like in the example below.")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Case 2"),": For files without a common parent path:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Add ",(0,i.mdx)("inlineCode",{parentName:"li"},"# @package _global_"),".")),(0,i.mdx)("h3",{id:"alternative-not-recommended"},"Alternative (not recommended):"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"If you do not want to restructure the config at this time use ",(0,i.mdx)("inlineCode",{parentName:"li"},"Case 2")," for all your config files.")),(0,i.mdx)("h3",{id:"example-for-case-1"},"Example for ",(0,i.mdx)("inlineCode",{parentName:"h3"},"case 1"),":"),(0,i.mdx)("h4",{id:"before"},"Before"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"db:\n  driver: mysql\n  host: localhost\n  port: 3306\n")),(0,i.mdx)("h4",{id:"after"},"After"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"# @package _group_\ndriver: mysql\nhost: localhost\nport: 3306\n")),(0,i.mdx)("p",null,"The interpretations of the before and after files are identical."),(0,i.mdx)("h3",{id:"example-for-case-2"},"Example for ",(0,i.mdx)("inlineCode",{parentName:"h3"},"case 2"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="env/prod.yaml"',title:'"env/prod.yaml"'},"# @package _global_\ndb:\n  driver: mysql\n  host: 10.0.0.11\n  port: 3306\n\nwebserver:\n  host: 10.0.0.11\n  port: 443\n")))}s.isMDXComponent=!0}}]);