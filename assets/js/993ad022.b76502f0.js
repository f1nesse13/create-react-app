/*! For license information please see 993ad022.b76502f0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7835],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7174:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(2784),n(3905)),s=["components"],i={id:"adding-a-sass-stylesheet",title:"Adding a Sass Stylesheet",sidebar_label:"Adding Sass Stylesheets"},l=void 0,p={unversionedId:"adding-a-sass-stylesheet",id:"adding-a-sass-stylesheet",title:"Adding a Sass Stylesheet",description:"Note: this feature is available with react-scripts@2.0.0 and higher.",source:"@site/../docs/adding-a-sass-stylesheet.md",sourceDirName:".",slug:"/adding-a-sass-stylesheet",permalink:"/docs/adding-a-sass-stylesheet",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/adding-a-sass-stylesheet.md",tags:[],version:"current",lastUpdatedBy:"Dan Abramov",lastUpdatedAt:1625672679,formattedLastUpdatedAt:"7/7/2021",frontMatter:{id:"adding-a-sass-stylesheet",title:"Adding a Sass Stylesheet",sidebar_label:"Adding Sass Stylesheets"},sidebar:"docs",previous:{title:"Adding CSS Modules",permalink:"/docs/adding-a-css-modules-stylesheet"},next:{title:"Adding CSS Reset",permalink:"/docs/adding-css-reset"}},c=[],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),(0,a.kt)("p",null,"Generally, we recommend that you don\u2019t reuse the same CSS classes across different components. For example, instead of using a ",(0,a.kt)("inlineCode",{parentName:"p"},".Button")," CSS class in ",(0,a.kt)("inlineCode",{parentName:"p"},"<AcceptButton>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<RejectButton>")," components, we recommend creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Button>")," component with its own ",(0,a.kt)("inlineCode",{parentName:"p"},".Button")," styles, that both ",(0,a.kt)("inlineCode",{parentName:"p"},"<AcceptButton>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<RejectButton>")," can render (but ",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/composition-vs-inheritance.html"},"not inherit"),")."),(0,a.kt)("p",null,"Following this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition. You can, however, integrate a CSS preprocessor if you find it valuable."),(0,a.kt)("p",null,"To use Sass, first install ",(0,a.kt)("inlineCode",{parentName:"p"},"sass"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install sass\n# or\n$ yarn add sass\n")),(0,a.kt)("p",null,"Now you can rename ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.css")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.scss")," and update ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.js")," to import ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.scss"),".\nThis file and any other file will be automatically compiled if imported with the extension ",(0,a.kt)("inlineCode",{parentName:"p"},".scss")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".sass"),"."),(0,a.kt)("p",null,"To share variables between Sass files, you can use Sass's ",(0,a.kt)("a",{parentName:"p",href:"https://sass-lang.com/documentation/at-rules/use"},(0,a.kt)("inlineCode",{parentName:"a"},"@use")," rule"),". For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.scss")," and other component style files could include ",(0,a.kt)("inlineCode",{parentName:"p"},'@use "./shared.scss";')," with variable definitions."),(0,a.kt)("p",null,"This will allow you to do imports like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"@use 'styles/_colors.scss'; // assuming a styles directory under src/\n@use '~nprogress/nprogress'; // loading a css file from the nprogress node module\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," You can prefix paths with ",(0,a.kt)("inlineCode",{parentName:"p"},"~"),", as displayed above, to resolve modules from ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),".")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sass")," also supports the ",(0,a.kt)("inlineCode",{parentName:"p"},"SASS_PATH")," variable."),(0,a.kt)("p",null,"To use imports relative to a path you specify, you can add a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/blob/main/docusaurus/docs/adding-custom-environment-variables.md#adding-development-environment-variables-in-env"},(0,a.kt)("inlineCode",{parentName:"a"},".env")," file")," at the project root with the path specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"SASS_PATH")," environment variable. To specify more directories you can add them to ",(0,a.kt)("inlineCode",{parentName:"p"},"SASS_PATH")," separated by a ",(0,a.kt)("inlineCode",{parentName:"p"},":")," like ",(0,a.kt)("inlineCode",{parentName:"p"},"path1:path2:path3"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," For the Windows operating system, separate your paths by semicolons."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"SASS_PATH=path1;path2;path3\n"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Tip:")," You can opt into using this feature with ",(0,a.kt)("a",{parentName:"p",href:"/docs/adding-a-css-modules-stylesheet"},"CSS modules")," too!")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," If you're using Flow, override the ",(0,a.kt)("a",{parentName:"p",href:"https://flow.org/en/docs/config/options/#toc-module-file-ext-string"},"module.file_ext")," setting in your ",(0,a.kt)("inlineCode",{parentName:"p"},".flowconfig")," so it'll recognize ",(0,a.kt)("inlineCode",{parentName:"p"},".sass")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".scss")," files. You will also need to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"module.file_ext")," default settings for ",(0,a.kt)("inlineCode",{parentName:"p"},".js"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".jsx"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".mjs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".json")," files."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"[options]\nmodule.file_ext=.js\nmodule.file_ext=.jsx\nmodule.file_ext=.mjs\nmodule.file_ext=.json\nmodule.file_ext=.sass\nmodule.file_ext=.scss\n"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," LibSass and the packages built on top of it, including Node Sass, are ",(0,a.kt)("a",{parentName:"p",href:"https://sass-lang.com/blog/libsass-is-deprecated"},"deprecated"),".\nIf you're a user of Node Sass, you can migrate to Dart Sass by replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"node-sass")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file with ",(0,a.kt)("inlineCode",{parentName:"p"},"sass")," or by running the following commands:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm uninstall node-sass\n$ npm install sass\n# or\n$ yarn remove node-sass\n$ yarn add sass\n"))))}d.isMDXComponent=!0},7320:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var s,i,l=o(e),p=1;p<arguments.length;p++){for(var c in s=Object(arguments[p]))n.call(s,c)&&(l[c]=s[c]);if(t){i=t(s);for(var u=0;u<i.length;u++)r.call(s,i[u])&&(l[i[u]]=s[i[u]])}}return l}},3426:function(e,t,n){var r=n(7320),o=60103,a=60106;var s=60109,i=60110,l=60112;var p=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),s=u("react.provider"),i=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),c=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=h.prototype;var g=b.prototype=new k;g.constructor=b,r(g,h.prototype),g.isPureReactComponent=!0;var v={current:null},N=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,a={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)N.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var p=Array(l),c=0;c<l;c++)p[c]=arguments[c+2];a.children=p}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:s,ref:i,props:a,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return s=s(l=e),e=""===r?"."+O(l,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),_(s,t,n,"",(function(e){return e}))):null!=s&&(j(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var c=r+O(i=e[p],p);l+=_(i,t,n,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),p=0;!(i=e.next()).done;)l+=_(i=i.value,t,n,c=r+O(i,p++),s);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function x(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function A(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function q(){var e=P.current;if(null===e)throw Error(f(321));return e}},2784:function(e,t,n){n(3426)}}]);