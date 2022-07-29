"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[463],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return s},MDXProvider:function(){return c},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return m}});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},r.apply(this,arguments)}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),m=function(e){return function(n){var a=p(n.components);return t.createElement(e,r({},n,{components:a}))}},p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return a?t.createElement(h,o(o({ref:n},s),{},{components:a})):t.createElement(h,o({ref:n},s))}));function g(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},93899:function(e,n,a){a.d(n,{Z:function(){return d},T:function(){return s}});var t=a(87462),i=a(67294),r=a(39960),l=a(52263),o=a(80907);function d(e){return i.createElement(r.default,(0,t.Z)({},e,{to:(n=e.to,d=(0,o.useActiveVersion)(),(0,l.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(a=null==d?void 0:d.name)?a:"current"]+n),target:"_blank"}));var n,a,d}function s(e){var n,a=null!=(n=e.text)?n:"Example (Click Here)";return i.createElement(d,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+a+"-informational",alt:"Example (Click Here)"}))}},93605:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var t=a(87462),i=a(63366),r=(a(67294),a(3905)),l=a(93899),o=["components"],d={id:"basic",hide_title:!0,sidebar_label:"Basic Override syntax"},s=void 0,m={unversionedId:"advanced/override_grammar/basic",id:"version-1.1/advanced/override_grammar/basic",title:"basic",description:"Basic Override syntax",source:"@site/versioned_docs/version-1.1/advanced/override_grammar/basic.md",sourceDirName:"advanced/override_grammar",slug:"/advanced/override_grammar/basic",permalink:"/docs/1.1/advanced/override_grammar/basic",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/override_grammar/basic.md",tags:[],version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1659070165,formattedLastUpdatedAt:"7/29/2022",frontMatter:{id:"basic",hide_title:!0,sidebar_label:"Basic Override syntax"},sidebar:"version-1.1/docs",previous:{title:"Hydra's command line flags",permalink:"/docs/1.1/advanced/hydra-command-line-flags"},next:{title:"Extended Override syntax",permalink:"/docs/1.1/advanced/override_grammar/extended"}},p=[{value:"Basic Override syntax",id:"basic-override-syntax",children:[],level:2},{value:"Basic examples",id:"basic-examples",children:[{value:"Modifying the Config Object",id:"modifying-the-config-object",children:[],level:3},{value:"Modifying the Defaults List",id:"modifying-the-defaults-list",children:[],level:3}],level:2},{value:"Grammar",id:"grammar",children:[],level:2},{value:"Elements",id:"elements",children:[{value:"Key",id:"key",children:[],level:3},{value:"Quoted values",id:"quoted-values",children:[],level:3},{value:"Whitespaces in unquoted values",id:"whitespaces-in-unquoted-values",children:[],level:3},{value:"Escaped characters in unquoted values",id:"escaped-characters-in-unquoted-values",children:[],level:3},{value:"Primitives",id:"primitives",children:[],level:3}],level:2},{value:"Dictionaries and Lists",id:"dictionaries-and-lists",children:[{value:"Lists",id:"lists",children:[],level:3},{value:"Dictionaries",id:"dictionaries",children:[],level:3},{value:"Sweeper syntax",id:"sweeper-syntax",children:[],level:3},{value:"Functions",id:"functions",children:[],level:3}],level:2},{value:"Working with your shell",id:"working-with-your-shell",children:[{value:"Bash",id:"bash",children:[],level:3},{value:"Other shells",id:"other-shells",children:[],level:3}],level:2}],c={toc:p};function u(e){var n=e.components,a=(0,i.Z)(e,o);return(0,r.mdx)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"basic-override-syntax"},"Basic Override syntax"),(0,r.mdx)("p",null,"You can manipulate your configuration with overrides (via the command line or the Compose API). This includes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Modifying the ",(0,r.mdx)("inlineCode",{parentName:"li"},"Defaults List")),(0,r.mdx)("li",{parentName:"ul"},"Modifying the config object")),(0,r.mdx)("p",null,"Overrides matching a config group are modifying the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Defaults List"),";\nThe rest are manipulating the config object."),(0,r.mdx)("h2",{id:"basic-examples"},"Basic examples"),(0,r.mdx)("h3",{id:"modifying-the-config-object"},"Modifying the Config Object"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Overriding a config value : ",(0,r.mdx)("inlineCode",{parentName:"li"},"foo.bar=value")),(0,r.mdx)("li",{parentName:"ul"},"Appending a config value : ",(0,r.mdx)("inlineCode",{parentName:"li"},"+foo.bar=value")),(0,r.mdx)("li",{parentName:"ul"},"Appending or overriding a config value : ",(0,r.mdx)("inlineCode",{parentName:"li"},"++foo.bar=value")),(0,r.mdx)("li",{parentName:"ul"},"Removing a config value : ",(0,r.mdx)("inlineCode",{parentName:"li"},"~foo.bar"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"~foo.bar=value"))),(0,r.mdx)("h3",{id:"modifying-the-defaults-list"},"Modifying the Defaults List"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Overriding selected Option: ",(0,r.mdx)("inlineCode",{parentName:"li"},"db=mysql")),(0,r.mdx)("li",{parentName:"ul"},"Appending to Defaults List: ",(0,r.mdx)("inlineCode",{parentName:"li"},"+db=mysql")),(0,r.mdx)("li",{parentName:"ul"},"Deleting from Defaults List: ",(0,r.mdx)("inlineCode",{parentName:"li"},"~db"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"~db=mysql"))),(0,r.mdx)("h2",{id:"grammar"},"Grammar"),(0,r.mdx)("p",null,"Hydra supports a rich ",(0,r.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-specific_language"},"DSL")," in the command line.\nBelow are the parser rules from grammar. You can see the full ",(0,r.mdx)(l.Z,{to:"hydra/grammar/OverrideLexer.g4",mdxType:"GithubLink"},"Lexer")," and ",(0,r.mdx)(l.Z,{to:"hydra/grammar/OverrideParser.g4",mdxType:"GithubLink"},"Parser")," definitions on GitHub."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-antlr4",metastring:'title="OverrideParser.g4"',title:'"OverrideParser.g4"'},"// High-level command-line override.\n\noverride: (\n      key EQUAL value?                           // key=value, key= (for empty value)\n    | TILDE key (EQUAL value?)?                  // ~key | ~key=value\n    | PLUS PLUS? key EQUAL value?                // +key= | +key=value | ++key=value\n) EOF;\n\n// Key:\nkey : packageOrGroup (AT package)?;              // key | group@pkg\n\npackageOrGroup: package | ID (SLASH ID)+;        // db, hydra/launcher\npackage: ( | ID | KEY_SPECIAL | DOT_PATH);       // db, $db, hydra.launcher, or the empty (for _global_ package)\n\n// Elements (that may be swept over).\n\nvalue: element | simpleChoiceSweep;\n\nelement:\n      primitive\n    | listContainer\n    | dictContainer\n    | function\n;\n\nsimpleChoiceSweep:\n      element (COMMA element)+                   // value1,value2,value3\n;\n\n// Functions.\n\nargName: ID EQUAL;\nfunction: ID POPEN (argName? element (COMMA argName? element )* )? PCLOSE;\n\n// Data structures.\n\nlistContainer: BRACKET_OPEN                      // [], [1,2,3], [a,b,[1,2]]\n    (element(COMMA element)*)?\nBRACKET_CLOSE;\n\ndictContainer: BRACE_OPEN (dictKeyValuePair (COMMA dictKeyValuePair)*)? BRACE_CLOSE;  // {}, {a:10,b:20}\ndictKeyValuePair: dictKey COLON element;\n\n// Primitive types.\n\nprimitive:\n      QUOTED_VALUE                               // 'hello world', \"hello world\"\n    | (   ID                                     // foo_10\n        | NULL                                   // null, NULL\n        | INT                                    // 0, 10, -20, 1_000_000\n        | FLOAT                                  // 3.14, -20.0, 1e-1, -10e3\n        | BOOL                                   // true, TrUe, false, False\n        | INTERPOLATION                          // ${foo.bar}, ${oc.env:USER,me}\n        | UNQUOTED_CHAR                          // /, -, \\, +, ., $, %, *, @, ?\n        | COLON                                  // :\n        | ESC                                    // \\\\, \\(, \\), \\[, \\], \\{, \\}, \\:, \\=, \\ , \\\\t, \\,\n        | WS                                     // whitespaces\n    )+;\n\n// Same as `primitive` except that `COLON` and `INTERPOLATION` are not allowed.\ndictKey:\n    (   ID                                     // foo_10\n      | NULL                                   // null, NULL\n      | INT                                    // 0, 10, -20, 1_000_000\n      | FLOAT                                  // 3.14, -20.0, 1e-1, -10e3\n      | BOOL                                   // true, TrUe, false, False\n      | UNQUOTED_CHAR                          // /, -, \\, +, ., $, %, *, @, ?\n      | ESC                                    // \\\\, \\(, \\), \\[, \\], \\{, \\}, \\:, \\=, \\ , \\\\t, \\,\n      | WS                                     // whitespaces\n    )+;\n")),(0,r.mdx)("h2",{id:"elements"},"Elements"),(0,r.mdx)("h3",{id:"key"},"Key"),(0,r.mdx)("p",null,"Key is the component before the =. A few examples:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"foo.bar           # A config key\nhydra/launcher    # A config group\ngroup@pkg         # A config group assigned to the package pkg\ngroup@pkg1:pkg2   # A config group changing the package from pkg1 to pkg2\n")),(0,r.mdx)("h3",{id:"quoted-values"},"Quoted values"),(0,r.mdx)("p",null,"Hydra supports both double quotes and single quoted values.\nQuoted strings can accept any value between the quotes, but some characters need escaping:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"to include a single quote in a single quoted string, use ",(0,r.mdx)("inlineCode",{parentName:"li"},"\\'")," (for double quotes in a double quoted string, use ",(0,r.mdx)("inlineCode",{parentName:"li"},'\\"'),")"),(0,r.mdx)("li",{parentName:"ul"},"any sequence of ",(0,r.mdx)("inlineCode",{parentName:"li"},"\\")," characters preceding a quote (either an escaped quote as described in the previous point, or the closing quote)\nmust be escaped by doubling the number of ",(0,r.mdx)("inlineCode",{parentName:"li"},"\\"))),(0,r.mdx)("div",{className:"row"},(0,r.mdx)("div",{className:"col col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Double quotes"',title:'"Double','quotes"':!0},'"hello there"\n"escaped \\"double quote\\""\n"the path is C:\\\\\\"some folder\\"\\\\"\n"1,2,3"\n"{a:10} ${xyz}"\n"\'single quoted string\'"\n'))),(0,r.mdx)("div",{className:"col  col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Single quotes"',title:'"Single','quotes"':!0},"'hello there'\n'escaped \\'single quote\\''\n'the path is C:\\\\\\'some folder\\'\\\\'\n'1,2,3'\n'{a:10} ${xyz}'\n'\"double quoted string\"'\n")))),(0,r.mdx)("p",null,"It may be necessary to use multiple pairs of quotes to prevent your\nshell from consuming quotation marks before they are passed to hydra."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py '+foo=\"{a: 10}\"'\nfoo: '{a: 10}'\n\n$ python my_app.py '+foo={a: 10}'\nfoo:\n  a: 10\n\n$ python my_app.py +foo={a: 10}  # Two strings are passed to Hydra: `+foo={a:` and `10}`. This is an error.\nno viable alternative at input '{a:'.\n...\n")),(0,r.mdx)("p",null,"Here are some best practices around quoting in CLI overrides:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Quote the whole key=value pair with single quotes, as in the first two\nexamples above. These quotes are for the benefit of the shell."),(0,r.mdx)("li",{parentName:"ul"},"Do not quote keys."),(0,r.mdx)("li",{parentName:"ul"},"Only quote values if they contain a space. It will work if you always quote\nvalues, but it will turn numbers/dicts/lists into strings (as in the first\nexample above)."),(0,r.mdx)("li",{parentName:"ul"},"When you are quoting values, use double quotes to avoid collision with the\nouter single quoted consumed by the shell.")),(0,r.mdx)("h3",{id:"whitespaces-in-unquoted-values"},"Whitespaces in unquoted values"),(0,r.mdx)("p",null,"Unquoted Override values can contain non leading or trailing whitespaces.\nFor example, ",(0,r.mdx)("inlineCode",{parentName:"p"},"msg=hello world")," is a legal override (key is ",(0,r.mdx)("inlineCode",{parentName:"p"},"msg")," and value is the string ",(0,r.mdx)("inlineCode",{parentName:"p"},"hello world"),").\nNormally, your shell will interpret values with whitespaces as being multiple parameters (",(0,r.mdx)("inlineCode",{parentName:"p"},"key=a b")," would be interpreted as ",(0,r.mdx)("inlineCode",{parentName:"p"},"key=a")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"b"),").\nTo prevent this you can quote them with a single quote. For example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'msg=hello world'\n")),(0,r.mdx)("p",null,"Note that trailing and leading whitespace are ignored, the above is equivalent to:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'msg=    hello world    '\n")),(0,r.mdx)("h3",{id:"escaped-characters-in-unquoted-values"},"Escaped characters in unquoted values"),(0,r.mdx)("p",null,"Hydra's parser considers some characters to be illegal in unquoted strings.\nThese otherwise special characters may be included in unquoted values by escaping them with a ",(0,r.mdx)("inlineCode",{parentName:"p"},"\\"),".\nThese characters are: ",(0,r.mdx)("inlineCode",{parentName:"p"},"\\()[]{}:=, \\t")," (the last two ones being the whitespace and tab characters)."),(0,r.mdx)("p",null,"As an example, in the following ",(0,r.mdx)("inlineCode",{parentName:"p"},"dir")," is set to the string ",(0,r.mdx)("inlineCode",{parentName:"p"},"job{a=1,b=2,c=3}"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'dir=job\\{a\\=1\\,b\\=2\\,c\\=3\\}'\n")),(0,r.mdx)("p",null,"As an alternative to escaping special characters with a backslash, the value containing the special character may be quoted:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'dir=A[B'    # parser error\n$ python my_app.py 'dir=\"A[B\"'  # ok\n$ python my_app.py 'dir=A\\[B'   # ok\n")),(0,r.mdx)("h3",{id:"primitives"},"Primitives"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"id")," : oompa10, loompa_12"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"null"),": null"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"int"),": 10, -20, 0, 1_000_000."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"float"),": 3.14, -10e6, inf, -inf, nan."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"bool"),": true, false"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"dot_path"),": foo.bar"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"interpolation"),": ${foo.bar}, ${oc.env:USER,me}")),(0,r.mdx)("p",null,"Constants (null, true, false, inf, nan) are case-insensitive."),(0,r.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"Always single-quote interpolations in the shell, to prevent replacement with shell variables:"),(0,r.mdx)("pre",{parentName:"div"},(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'dir=/root/${name}'\n")),(0,r.mdx)("p",{parentName:"div"},"In addition, more complex interpolations containing special characters may require being passed within a quoted value\n(note the extra double quotes surrounding the interpolation):"),(0,r.mdx)("pre",{parentName:"div"},(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"$ python my_app.py 'dir=\"${get_dir: {root: /root, name: ${name}}}\"'\n")))),(0,r.mdx)("h2",{id:"dictionaries-and-lists"},"Dictionaries and Lists"),(0,r.mdx)("h3",{id:"lists"},"Lists"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"foo=[1,2,3]\nnested=[a,[b,[c]]]\n")),(0,r.mdx)("h3",{id:"dictionaries"},"Dictionaries"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"foo={a:10,b:20}\nnested={a:10,b:{c:30,d:40}}\n")),(0,r.mdx)("p",null,"Dictionaries are merged, not assigned. The following example illustrates the point:"),(0,r.mdx)("div",{className:"row"},(0,r.mdx)("div",{className:"col col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Input config"',title:'"Input','config"':!0},"db:\n  driver: mysql\n  user: ???\n  pass: ???\n"))),(0,r.mdx)("div",{className:"col  col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db={user:root,pass:1234}"',title:'"db'},"db:\n  driver: mysql\n  user: root\n  pass: 1234\n")))),(0,r.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"Always single-quote overrides that contains dicts and lists in the shell."))),(0,r.mdx)("h3",{id:"sweeper-syntax"},"Sweeper syntax"),(0,r.mdx)("p",null,"A choice sweep is comma separated list with two or more elements:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'key=a,b                       # Simple sweep: ChoiceSweep(a, b)\nkey="a,b","c,d"               # Elements can be quoted strings, ChoiceSweep("a,b", "c,d")\nkey=[a,b],[c,d]               # Elements can be real lists, ChoiceSweep([a,b], [c,d])\nkey={a:10, b:20},{c:30,d:40}  # And dictionaries: ChoiceSweep({a:10, b:20}, {c:30,d:40})\n')),(0,r.mdx)("p",null,"More sweeping options are described in the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/1.1/advanced/override_grammar/extended"},"Extended Grammar page"),"."),(0,r.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"You may need to quote your choice sweep in the shell."))),(0,r.mdx)("h3",{id:"functions"},"Functions"),(0,r.mdx)("p",null,"Hydra supports several functions in the command line.\nSee the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/1.1/advanced/override_grammar/extended"},"Extended Grammar page")," for more information."),(0,r.mdx)("h2",{id:"working-with-your-shell"},"Working with your shell"),(0,r.mdx)("p",null,"All shells interprets command line inputs and may change what is passed to the process.\nA good way to determine what the shell is doing to your command is to ",(0,r.mdx)("inlineCode",{parentName:"p"},"echo")," it."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# bash output\n$ echo foo_{a:10,b:20} ${HOME} [b,c]*\nfoo_a:10 foo_b:20 /home/omry build_helpers\n$ echo 'foo_{a:10,b:20}' '${HOME}' '[b,c]*'\nfoo_{a:10,b:20} ${HOME} [b,c]*\n")),(0,r.mdx)("p",null,"If in doubt, quote a command line element with a ",(0,r.mdx)("strong",{parentName:"p"},"single quote")," (",(0,r.mdx)("inlineCode",{parentName:"p"},"'"),")."),(0,r.mdx)("p",null,"If you want to pass quotes to Hydra in a shell quoted string, it's best to pass double quotes."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ echo \'"hello world"\'\n"hello world"\n')),(0,r.mdx)("p",null,"You can use some shell specific commands to change their behavior, but the cost will be that their behavior will change."),(0,r.mdx)("h3",{id:"bash"},"Bash"),(0,r.mdx)("p",null,"You can disable braces expansion, filename generation (globing) and hist expansion. Please note that this will change\nyour shell behavior for the current session."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ set +o braceexpand -o noglob +o histexpand\n$ echo key1={a:10,b:20} key2=${HOME} key=[b]*\nkey1={a:10,b:20} key2=/home/omry key=[b]*\n# does not help with () though:\n$ echo key=choice(a,b,c)\nbash: syntax error near unexpected token '('\n$ echo 'key=choice(a,b,c)'\nkey=choice(a,b,c)\n")),(0,r.mdx)("h3",{id:"other-shells"},"Other shells"),(0,r.mdx)("p",null,"Send a PR to add information about your favorite shell here."))}u.isMDXComponent=!0}}]);