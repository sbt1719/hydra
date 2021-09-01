(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[573],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return c},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),d=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=d(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,g=s["".concat(u,".").concat(m)]||s[m]||p[m]||i;return r?t.createElement(g,o(o({ref:n},c),{},{components:r})):t.createElement(g,o({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3899:function(e,n,r){"use strict";r.d(n,{Z:function(){return u},T:function(){return d}});var t=r(2122),a=r(7294),i=r(6742),o=r(2263),l=r(907);function u(e){return a.createElement(i.Z,(0,t.Z)({},e,{to:(n=e.to,u=(0,l.zu)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(r=null==u?void 0:u.name)?r:"current"]+n),target:"_blank"}));var n,r,u}function d(e){var n,r=null!=(n=e.text)?n:"Example";return a.createElement(u,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+r+"-informational",alt:"Example"}))}},2323:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var t=r(2122),a=r(9756),i=(r(7294),r(3905)),o=r(3899),l=["components"],u={id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},d=void 0,c={unversionedId:"configure_hydra/workdir",id:"version-1.1/configure_hydra/workdir",isDocsHomePage:!1,title:"Customizing working directory pattern",description:"Below are a few examples of customizing output directory patterns.",source:"@site/versioned_docs/version-1.1/configure_hydra/workdir.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/workdir",permalink:"/docs/configure_hydra/workdir",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/configure_hydra/workdir.md",version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1630515999,formattedLastUpdatedAt:"9/1/2021",frontMatter:{id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},sidebar:"version-1.1/docs",previous:{title:"Customizing logging",permalink:"/docs/configure_hydra/logging"},next:{title:"Customizing Application's help",permalink:"/docs/configure_hydra/app_help"}},p=[{value:"Configuration for run",id:"configuration-for-run",children:[]},{value:"Configuration for multirun",id:"configuration-for-multirun",children:[]},{value:"Using <code>hydra.job.override_dirname</code>",id:"using-hydrajoboverride_dirname",children:[]}],s={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(o.T,{text:"Example application",to:"examples/configure_hydra/workdir",mdxType:"ExampleGithubLink"}),(0,i.kt)("p",null,"Below are a few examples of customizing output directory patterns."),(0,i.kt)("h3",{id:"configuration-for-run"},"Configuration for run"),(0,i.kt)("p",null,"Run output directory grouped by date:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n")),(0,i.kt)("p",null,"Run output directory grouped by job name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${hydra.job.name}/${now:%Y-%m-%d_%H-%M-%S}\n")),(0,i.kt)("p",null,"Run output directory can contain user configuration variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d_%H-%M-%S}/opt:${optimizer.type}\n")),(0,i.kt)("h3",{id:"configuration-for-multirun"},"Configuration for multirun"),(0,i.kt)("p",null,"We will run the application with same command but different configurations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python my_app.py --multirun a=a1,a2,a3 \n")),(0,i.kt)("p",null,"Default multirun dir configurations:"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--8"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: multirun/${now:%Y-%m-%d}/${now:%H-%M-%S}\n    subdir: ${hydra.job.num}\n\n"))),(0,i.kt)("div",{className:"col  col--4"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="workding dir created"',title:'"workding',dir:!0,'created"':!0},"$ tree my_app -d\nmy_app\n\u251c\u2500\u2500 0\n\u251c\u2500\u2500 1\n\u2514\u2500\u2500 2\n")))),(0,i.kt)("p",null,"Similar configuration patterns in run can be applied to config multirun dir as well."),(0,i.kt)("p",null,"For example, multirun output directory grouped by job name, and sub dir by job num:"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: ${hydra.job.name}\n    subdir: ${hydra.job.num}\n\n"))),(0,i.kt)("div",{className:"col  col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="workding dir created"',title:'"workding',dir:!0,'created"':!0},"$ tree my_app -d\nmy_app\n\u251c\u2500\u2500 0\n\u251c\u2500\u2500 1\n\u2514\u2500\u2500 2\n")))),(0,i.kt)("h3",{id:"using-hydrajoboverride_dirname"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"hydra.job.override_dirname")),(0,i.kt)(o.T,{text:"Example application",to:"examples/configure_hydra/job_override_dirname",mdxType:"ExampleGithubLink"}),(0,i.kt)("p",null,"This field is populated automatically using your command line arguments and is typically being used as a part of your\noutput directory pattern. It is meant to be used along with the configuration for working dir, especially\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra.sweep.subdir"),"."),(0,i.kt)("p",null,"If we run the example application with the following commandline overrides and configs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python my_app.py --multirun batch_size=32 learning_rate=0.1,0.01\n")),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: multirun\n    subdir: ${hydra.job.override_dirname}\n"))),(0,i.kt)("div",{className:"col  col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="working dir created"',title:'"working',dir:!0,'created"':!0},"$ tree multirun -d\nmultirun\n\u251c\u2500\u2500 batch_size=32,learning_rate=0.01\n\u2514\u2500\u2500 batch_size=32,learning_rate=0.1\n")))),(0,i.kt)("p",null,"You can further customized the output dir creation by configuring",(0,i.kt)("inlineCode",{parentName:"p"},"hydra.job.override_dirname"),"."),(0,i.kt)("p",null,"In particular, the separator char ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," and the item separator char ",(0,i.kt)("inlineCode",{parentName:"p"},",")," can be modified by overriding\n",(0,i.kt)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname.kv_sep")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname.item_sep"),".\nCommand line override keys can also be automatically excluded from the generated ",(0,i.kt)("inlineCode",{parentName:"p"},"override_dirname"),"."),(0,i.kt)("p",null,"An example of a case where the exclude is useful is a random seed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}/seed=${seed}\n  job:\n    config:\n      override_dirname:\n        exclude_keys:\n          - seed\n")),(0,i.kt)("p",null,"With this configuration, running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ python my_app.py --multirun  batch_size=32 learning_rate=0.1,0.01 seed=1,2\n")),(0,i.kt)("p",null,"Would result in a directory structure like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ tree multirun -d\nmultirun\n\u251c\u2500\u2500 batch_size=32,learning_rate=0.01\n\u2502\xa0\xa0 \u251c\u2500\u2500 seed=1\n\u2502\xa0\xa0 \u2514\u2500\u2500 seed=2\n\u2514\u2500\u2500 batch_size=32,learning_rate=0.1\n    \u251c\u2500\u2500 seed=1\n    \u2514\u2500\u2500 seed=2\n")))}m.isMDXComponent=!0}}]);