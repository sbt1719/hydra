(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7040],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4246:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],c={id:"write_protect_config_node",title:"Read-only config"},l=void 0,s={unversionedId:"patterns/write_protect_config_node",id:"version-1.0/patterns/write_protect_config_node",isDocsHomePage:!1,title:"Read-only config",description:"Example application",source:"@site/versioned_docs/version-1.0/patterns/write_protect_config_node.md",sourceDirName:"patterns",slug:"/patterns/write_protect_config_node",permalink:"/docs/1.0/patterns/write_protect_config_node",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/patterns/write_protect_config_node.md",version:"1.0",lastUpdatedBy:"Jasha10",lastUpdatedAt:1630515999,formattedLastUpdatedAt:"9/1/2021",frontMatter:{id:"write_protect_config_node",title:"Read-only config"},sidebar:"version-1.0/docs",previous:{title:"Specializing configuration",permalink:"/docs/1.0/patterns/specializing_config"},next:{title:"Introduction",permalink:"/docs/1.0/configure_hydra/intro"}},p=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/patterns/write_protect_config_node"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,i.kt)("h3",{id:"problem"},"Problem"),(0,i.kt)("p",null,"Sometimes you want to prevent a config node from being changed accidentally."),(0,i.kt)("h3",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Structured Configs can enable it by passing ",(0,i.kt)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html#frozen"},"frozen=True")," in the dataclass definition.\nUsing Structured Configs, you can annotate a dataclass as frozen. This is recursive and applies to all child nodes."),(0,i.kt)("p",null,"This will prevent modifications via code, command line overrides and config composition."),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="frozen.py" {1}',title:'"frozen.py"',"{1}":!0},'@dataclass(frozen=True)\nclass SerialPort:\n    baud_rate: int = 19200\n    data_bits: int = 8\n    stop_bits: int = 1\n\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=SerialPort)\n\n\n@hydra.main(config_name="config")\ndef my_app(cfg: SerialPort) -> None:\n    print(cfg)\n\n\nif __name__ == "__main__":\n    my_app()\n'))),(0,i.kt)("div",{className:"col  col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="Output"',script:!0,title:'"Output"'},"$ python frozen.py data_bits=10\nError merging override data_bits=10\nCannot change read-only config container\n    full_key: data_bits\n    reference_type=Optional[SerialPort]\n    object_type=SerialPort\n")))),(0,i.kt)("div",{class:"alert alert--warning",role:"alert"},(0,i.kt)("strong",null,"NOTE"),": A crafty user can find many ways around this. this is just making it harder to change things accidentally."))}u.isMDXComponent=!0}}]);