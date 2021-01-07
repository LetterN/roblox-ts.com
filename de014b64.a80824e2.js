(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),o=(n(0),n(88)),a={id:"indexing-children",title:"Indexing Children"},c={unversionedId:"guides/indexing-children",id:"guides/indexing-children",isDocsHomePage:!1,title:"Indexing Children",description:'New roblox-ts users often ask, "How can I index a child in the game like game.Workspace.Zombie?"',source:"@site/docs/guides/indexing-children.mdx",slug:"/guides/indexing-children",permalink:"/docs/guides/indexing-children",editUrl:"https://github.com/roblox-ts/roblox-ts.github.io/blob/master/docs/guides/indexing-children.mdx",version:"current",sidebar:"docs",previous:{title:"Callbacks vs Methods",permalink:"/docs/guides/callbacks-vs-methods"},next:{title:"LuaTuple<T>",permalink:"/docs/guides/lua-tuple"}},l=[{value:"Creating <code>services.d.ts</code>",id:"creating-servicesdts",children:[]},{value:"&quot;rbxts-object-to-tree&quot; plugin by Validark",id:"rbxts-object-to-tree-plugin-by-validark",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'New roblox-ts users often ask, "How can I index a child in the game like ',Object(o.b)("inlineCode",{parentName:"p"},"game.Workspace.Zombie"),'?"'),Object(o.b)("p",null,"The problem here is that you are making an assumption that ",Object(o.b)("inlineCode",{parentName:"p"},"Zombie")," is something that exists inside ",Object(o.b)("inlineCode",{parentName:"p"},"Workspace"),". In Roblox, if you try to index the child of an instance that does not exist, it results in an error. Even if roblox-ts allowed you to do this, ",Object(o.b)("inlineCode",{parentName:"p"},"Zombie")," would be of type ",Object(o.b)("inlineCode",{parentName:"p"},"Instance")," which is not particularly helpful!"),Object(o.b)("h3",{id:"creating-servicesdts"},"Creating ",Object(o.b)("inlineCode",{parentName:"h3"},"services.d.ts")),Object(o.b)("p",null,"The simplest solution to this problem is to extend the types of your services to describe the state of your DataModel."),Object(o.b)("p",null,'We can do this through "ambient type declarations". An ambient type definition file is a ',Object(o.b)("inlineCode",{parentName:"p"},".d.ts")," file which contains no imports or exports. This file becomes global and the types can be used anywhere in your code."),Object(o.b)("p",null,"We can name this file anything and put it anywhere in ",Object(o.b)("inlineCode",{parentName:"p"},"src"),", but for this example we'll stick to ",Object(o.b)("inlineCode",{parentName:"p"},"src/services.d.ts"),"."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"interface Workspace extends Instance {\n    Zombie: Model;\n}\n")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://roblox-ts.com/playground/#code/KYDwDg9gTgLgBAbwL4G4BQATYBjANgQymDgHNcIAjfXRNOeuASwDsZgoAzfbYgdWgDWAZzDdioNswxC4ASWZCY+Zj1oN1cAFoQAthUbAAXHACyELLnTqkaG2mwQF8AF679xALyl8O4ADp+KGFRHj9tPQN0MCgWGAAKVwjgAEp0IA"}),"playground-friendly example")),Object(o.b)("p",null,"If you want to define children inside of Zombie, you can do this with an intersection object type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"interface Workspace extends Instance {\n    Zombie: Model & {\n        Humanoid: Humanoid;\n    };\n}\n")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://roblox-ts.com/playground/#code/KYDwDg9gTgLgBAbwL4G4BQATYBjANgQymDgHNcIAjfXRNASAEsA7GYKAM322IHVoBrAM5guxUKyYZBcAJJNBMfE2606dAFoQAthQbAAXHACyELDQBkqtQAkArlqUQGGQ3YdMnGdGtT0kafzRsCHl4AAt7R2c4AF5SfC1gADo+KCERbiTNHT0ktyivNDAoZhgACgj3TwBKdCA"}),"playground-friendly example")),Object(o.b)("h3",{id:"rbxts-object-to-tree-plugin-by-validark"},'"rbxts-object-to-tree" plugin by Validark'),Object(o.b)("p",null,"Writing out long ",Object(o.b)("inlineCode",{parentName:"p"},"services.d.ts")," files is tedious! And a mismatch between your type definition files and actual game could be dangerous."),Object(o.b)("p",null,'Luckily, there\'s an existing plugin by Validark called "rbxts-object-to-tree" that you can use to automatically generate these typings.'),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.roblox.com/library/3379119778/rbxts-object-to-tree"}),"https://www.roblox.com/library/3379119778/rbxts-object-to-tree")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Simply select the service you want to generate typings for in the Explorer pane.")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/0JZNhRX.png",alt:null}))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},'Click "TS types" and "GENERATE"')),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/kqZlRbe.png",alt:null}))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Your type definition file will be created in Lighting and you can copy that over into ",Object(o.b)("inlineCode",{parentName:"li"},"src/services.d.ts"))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/TLlAF3g.png",alt:null}))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'interface ReplicatedStorage extends Instance {\n    Zombie: Model & {\n        ["Left Leg"]: Part;\n        Humanoid: Humanoid;\n        ["Right Leg"]: Part;\n        Head: Part & {\n            Mesh: SpecialMesh;\n            Face: Decal;\n        };\n        Torso: Part;\n        HumanoidRootPart: Part;\n        ["Right Arm"]: Part;\n        ["Left Arm"]: Part;\n        ["Body Colors"]: BodyColors;\n    };\n}\n')),Object(o.b)("p",null,"io-serve?"))}b.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,m=p["".concat(a,".").concat(u)]||p[u]||d[u]||o;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);