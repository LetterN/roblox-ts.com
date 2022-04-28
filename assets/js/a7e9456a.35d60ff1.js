"use strict";(self.webpackChunkroblox_ts_com=self.webpackChunkroblox_ts_com||[]).push([[556],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),A=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=A(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=A(n),m=r,y=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var A=2;A<i;A++)l[A]=n[A];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6463:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return A},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Using Existing Luau"},s=void 0,A={unversionedId:"guides/using-existing-luau",id:"guides/using-existing-luau",title:"Using Existing Luau",description:"roblox-ts lets you use existing Luau scripts in your TypeScript codebase. All you have to do is define the types in a type declaration file (.d.ts).",source:"@site/docs/guides/using-existing-luau.mdx",sourceDirName:"guides",slug:"/guides/using-existing-luau",permalink:"/docs/guides/using-existing-luau",editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/guides/using-existing-luau.mdx",tags:[],version:"current",frontMatter:{title:"Using Existing Luau"},sidebar:"docs",previous:{title:"Roact JSX",permalink:"/docs/guides/roact-jsx"},next:{title:"Luau Packages",permalink:"/docs/guides/luau-packages"}},u=[{value:"Creating Type Declaration Files",id:"creating-type-declaration-files",children:[],level:3},{value:"Modeling Module Return Values",id:"modeling-module-return-values",children:[],level:3},{value:"Typings for Custom Classes",id:"typings-for-custom-classes",children:[],level:3},{value:"Related Articles",id:"related-articles",children:[],level:3}],c={toc:u};function p(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"roblox-ts lets you use existing Luau scripts in your TypeScript codebase. All you have to do is define the types in a type declaration file (",(0,i.kt)("inlineCode",{parentName:"p"},".d.ts"),")."),(0,i.kt)("h3",{id:"creating-type-declaration-files"},"Creating Type Declaration Files"),(0,i.kt)("p",null,"roblox-ts will copy any non-compiled file (anything that isn't a ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".tsx")," file) into your ",(0,i.kt)("inlineCode",{parentName:"p"},"outDir")," (out). This lets you place ",(0,i.kt)("inlineCode",{parentName:"p"},".lua")," files in your ",(0,i.kt)("inlineCode",{parentName:"p"},"rootDir")," (src) and they will be copied into the ",(0,i.kt)("inlineCode",{parentName:"p"},"outDir")," (out) and then synced into Roblox Studio using Rojo."),(0,i.kt)("p",null,"To create a type declaration file (",(0,i.kt)("inlineCode",{parentName:"p"},".d.ts"),") for this ",(0,i.kt)("inlineCode",{parentName:"p"},".lua")," file, simply create a file next to it using the same name."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3753).Z})),(0,i.kt)("p",null,"As an exception, if the name of your ",(0,i.kt)("inlineCode",{parentName:"p"},".lua")," file is ",(0,i.kt)("inlineCode",{parentName:"p"},"init.lua"),", your type definition file needs to be named ",(0,i.kt)("inlineCode",{parentName:"p"},"index.d.ts"),"."),(0,i.kt)("h3",{id:"modeling-module-return-values"},"Modeling Module Return Values"),(0,i.kt)("p",null,"Luau scripts return a single value at the end in the form of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local Module = {}\n\n-- define Module members\n\nreturn Module\n")),(0,i.kt)("p",null,'To model this return value in TypeScript types, we can use an "Export Assignment" statement:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Module {\n    // define Module member types\n}\n\n// create a value from our type\ndeclare const Module: Module;\n\nexport = Module;\n")),(0,i.kt)("p",null,"And you could import it as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import Module from "./Module";\nprint(Module);\n')),(0,i.kt)("p",null,"If a module uses a table return containing static fields/functions, it may be preferrable to use normal exports."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local MyConstants = {}\n\nMyConstants.Foo = "Bar"\nMyConstants.Secret = "hunter2"\n\nreturn MyConstants\n')),(0,i.kt)("p",null,"Then your types could look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export declare const Foo: string;\nexport declare const Secret: string;\n")),(0,i.kt)("p",null,"And you could import them as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Foo, Secret } from "./MyConstants";\nprint(Foo, Secret);\n')),(0,i.kt)("h3",{id:"typings-for-custom-classes"},"Typings for Custom Classes"),(0,i.kt)("p",null,"A common way to describe custom OOP classes is with a ",(0,i.kt)("inlineCode",{parentName:"p"},"MyClass")," interface, ",(0,i.kt)("inlineCode",{parentName:"p"},"MyClassConstructor")," interface, and a ",(0,i.kt)("inlineCode",{parentName:"p"},"MyClass")," variable of type ",(0,i.kt)("inlineCode",{parentName:"p"},"MyClassConstructor"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface MyClass {\n    instanceProperty: string;\n    instanceMethod(): number;\n}\n\ninterface MyClassConstructor {\n    new (): MyClass;\n    staticProperty: string;\n    staticMethod(): number;\n}\n\ndeclare const MyClass: MyClassConstructor;\nexport = MyClass;\n")),(0,i.kt)("p",null,"Then in another file, you can use this as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"print(MyClass.staticProperty);\nprint(MyClass.staticMethod());\n\nconst myClass = new MyClass();\nprint(myClass.instanceProperty);\nprint(myClass.instanceMethod());\n")),(0,i.kt)("h3",{id:"related-articles"},"Related Articles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./lua-tuple"},(0,i.kt)("inlineCode",{parentName:"a"},"LuaTuple<T>"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./callbacks-vs-methods"},"Callbacks vs Methods"))))}p.isMDXComponent=!0},3753:function(e,t){t.Z="data:image/png;base64,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"}}]);