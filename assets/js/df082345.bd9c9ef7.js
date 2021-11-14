(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return j})),n.d(t,"metadata",(function(){return O})),n.d(t,"toc",(function(){return h})),n.d(t,"default",(function(){return v}));var a=n(3),r=n(7),o=n(0),i=n.n(o),c=n(104),l=n(119),b=n(106),s=n(96),u=n.n(s);var p=37,m=39;var d=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,r=e.values,c=e.groupId,s=e.className,d=Object(l.a)(),f=d.tabGroupChoices,j=d.setTabGroupChoices,O=Object(o.useState)(a),h=O[0],g=O[1],v=o.Children.toArray(e.children),N=[];if(null!=c){var y=f[c];null!=y&&y!==h&&r.some((function(e){return e.value===y}))&&g(y)}var x=function(e){var t=e.target,n=N.indexOf(t),a=v[n].props.value;g(a),null!=c&&(j(c,a),setTimeout((function(){var e,n,a,r,o,i,c,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,c=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u.a.tabItemActive),setTimeout((function(){return t.classList.remove(u.a.tabItemActive)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case m:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case p:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":n},s)},r.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(b.a)("tabs__item",u.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:x,onClick:x},n)}))),t?Object(o.cloneElement)(v.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))};var f=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},j={title:"Roact JSX"},O={unversionedId:"guides/roact-jsx",id:"guides/roact-jsx",isDocsHomePage:!1,title:"Roact JSX",description:"The following guide assumes that you are already familiar with Roact.",source:"@site/docs/guides/roact-jsx.mdx",slug:"/guides/roact-jsx",permalink:"/docs/guides/roact-jsx",editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/guides/roact-jsx.mdx",version:"current",sidebar:"docs",previous:{title:"LuaTuple<T>",permalink:"/docs/guides/lua-tuple"},next:{title:"Using Existing Luau",permalink:"/docs/guides/using-existing-luau"}},h=[{value:"Introduction",id:"introduction",children:[]},{value:"Tag Names",id:"tag-names",children:[]},{value:"Special Attributes",id:"special-attributes",children:[{value:"<code>Key</code> Attribute",id:"key-attribute",children:[]},{value:"<code>Ref</code> Attribute",id:"ref-attribute",children:[]},{value:"<code>Change</code> Attribute",id:"change-attribute",children:[]},{value:"<code>Event</code> Attribute",id:"event-attribute",children:[]}]},{value:"Spreading into Attributes",id:"spreading-into-attributes",children:[]},{value:"Spreading into Children",id:"spreading-into-children",children:[]},{value:"Using Values as Children",id:"using-values-as-children",children:[]},{value:"Fragments",id:"fragments",children:[]}],g={toc:h};function v(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"The following guide assumes that you are already familiar with Roact. ",Object(c.b)("br",null),"\nPlease refer to the ",Object(c.b)("a",{parentName:"p",href:"https://roblox.github.io/roact/"},"Roact documentation")," for more information."))),Object(c.b)("h2",{id:"introduction"},"Introduction"),Object(c.b)("p",null,'While roblox-ts allows you to use Roact just like you would in Luau, it also supports a "JSX" shorthand form.'),Object(c.b)(d,{defaultValue:"tsx",values:[{label:"JSX",value:"tsx"},{label:"Normal",value:"ts"}],mdxType:"Tabs"},Object(c.b)(f,{value:"tsx",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst element = (\n    <frame Size={new UDim2(1, 0, 1, 0)}>\n        <frame Key="Child" Size={new UDim2(1, 0, 1, 0)} />\n    </frame>\n);\n'))),Object(c.b)(f,{value:"ts",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},'import Roact from "@rbxts/roact";\n\nconst element = Roact.createElement(\n    "Frame",\n    {\n        Size: new UDim2(1, 0, 1, 0),\n    },\n    {\n        Child: Roact.createElement("Frame", {\n            Size: new UDim2(1, 0, 1, 0),\n        }),\n    }\n);\n')))),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://reactjs.org/docs/introducing-jsx.html"},"You can learn more about JSX here.")),Object(c.b)("h2",{id:"tag-names"},"Tag Names"),Object(c.b)("p",null,'The "tag name" in JSX is the expression after the initial ',Object(c.b)("inlineCode",{parentName:"p"},"<")," character. ",Object(c.b)("br",null),"\nFor example, ",Object(c.b)("inlineCode",{parentName:"p"},"frame")," is the tag name of ",Object(c.b)("inlineCode",{parentName:"p"},"<frame />"),"."),Object(c.b)("p",null,"You can use any Roblox UI class (host components) as a built-in JSX tag name by converting the name to lowercase."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Frame")," \u2192 ",Object(c.b)("inlineCode",{parentName:"li"},"frame")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"UIListLayout")," \u2192 ",Object(c.b)("inlineCode",{parentName:"li"},"uilistlayout")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ViewportFrame")," \u2192 ",Object(c.b)("inlineCode",{parentName:"li"},"viewportframe")),Object(c.b)("li",{parentName:"ul"},"etc.")),Object(c.b)("p",null,"Tag names can also be custom class components or functional components."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Custom components must use PascalCase.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\ninterface MyComponentProps {\n    value: string;\n}\n\nfunction MyComponent(props: MyComponentProps) {\n    return <textlabel Text={props.value} />;\n}\n\nconst element = <MyComponent value="foobar" />;\n')),Object(c.b)("p",null,"Tag names can also be a property access expression to use components which are nested inside of objects or namespaces."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\ninterface MyComponentProps {\n    value: string;\n}\n\nfunction MyComponent(props: MyComponentProps) {\n    return <textlabel Text={props.value} />;\n}\n\nconst Components = {\n    MyComponent: MyComponent,\n};\n\nconst element = <Components.MyComponent value="foobar" />;\n')),Object(c.b)("h2",{id:"special-attributes"},"Special Attributes"),Object(c.b)("h3",{id:"key-attribute"},Object(c.b)("inlineCode",{parentName:"h3"},"Key")," Attribute"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Key")," attribute controls what your UI Instance will be named in the DataModel. This is the same as the ",Object(c.b)("inlineCode",{parentName:"p"},'"Child"')," key in this Luau example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lua"},'Roact.createElement("Frame", {\n    Child = Roact.createElement("Frame", {}),\n})\n')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst element = (\n    <frame>\n        <frame Key="Child" />\n    </frame>\n);\n')),Object(c.b)("p",null,"If an element is given the ",Object(c.b)("inlineCode",{parentName:"p"},"Key")," attribute and it ",Object(c.b)("strong",{parentName:"p"},"not")," a child of another element, it will be wrapped in a ",Object(c.b)("inlineCode",{parentName:"p"},"Roact.Fragment"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst element = <frame Key="Child" />;\n')),Object(c.b)("h3",{id:"ref-attribute"},Object(c.b)("inlineCode",{parentName:"h3"},"Ref")," Attribute"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Ref")," attribute directly maps to the ",Object(c.b)("inlineCode",{parentName:"p"},"[Roact.Ref]")," key in Luau."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst ref = Roact.createRef<Frame>();\nconst element = <frame Ref={ref} />;\n')),Object(c.b)("h3",{id:"change-attribute"},Object(c.b)("inlineCode",{parentName:"h3"},"Change")," Attribute"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Change")," attribute takes an object which maps property name -> changed function. The changed function value will be given a reference ",Object(c.b)("inlineCode",{parentName:"p"},"rbx")," to the rendered UI instance."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note the double curly braces ",Object(c.b)("inlineCode",{parentName:"strong"},"{{")," and ",Object(c.b)("inlineCode",{parentName:"strong"},"}}"),".")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst element = (\n    <frame\n        Change={{\n            Position: (rbx) => print(`${rbx.GetFullName()} changed Position!`),\n        }}\n    />\n);\n')),Object(c.b)("h3",{id:"event-attribute"},Object(c.b)("inlineCode",{parentName:"h3"},"Event")," Attribute"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Event")," attribute takes an object which maps property name -> event connection function. The event connection function value will be given a reference ",Object(c.b)("inlineCode",{parentName:"p"},"rbx")," to the rendered UI instance followed by the rest of the event arguments."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note the double curly braces ",Object(c.b)("inlineCode",{parentName:"strong"},"{{")," and ",Object(c.b)("inlineCode",{parentName:"strong"},"}}"),".")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst element = (\n    <textbutton\n        Event={{\n            MouseButton1Down: (rbx, x, y) =>\n                print(`${rbx.GetFullName()} was clicked at (${x}, ${y})`),\n        }}\n    />\n);\n')),Object(c.b)("h2",{id:"spreading-into-attributes"},"Spreading into Attributes"),Object(c.b)("p",null,"You can spread objects into attributes using the form ",Object(c.b)("inlineCode",{parentName:"p"},"{...exp}")," where ",Object(c.b)("inlineCode",{parentName:"p"},"exp")," is an object. ",Object(c.b)("br",null),"\nThis is useful for creating reusable preset lists of properties."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst MyStyle: Partial<WritableInstanceProperties<Frame>> = {\n    BackgroundColor3: new Color3(0, 0, 0),\n    BackgroundTransparency: 0.5,\n};\n\nconst element = <frame {...MyStyle} />;\n')),Object(c.b)("h2",{id:"spreading-into-children"},"Spreading into Children"),Object(c.b)("p",null,"You can spread arrays into children using the form ",Object(c.b)("inlineCode",{parentName:"p"},"{...exp}")," where ",Object(c.b)("inlineCode",{parentName:"p"},"exp")," is a ",Object(c.b)("inlineCode",{parentName:"p"},"ReadonlyArray<T>"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst listItems = new Array<Roact.Element>();\nfor (let i = 0; i < 10; i++) {\n    listItems.push(<textbutton Text={`Button ${i}`} />);\n}\n\nconst element = <frame>{...listItems}</frame>;\n')),Object(c.b)("h2",{id:"using-values-as-children"},"Using Values as Children"),Object(c.b)("p",null,"You can use values for children using the form ",Object(c.b)("inlineCode",{parentName:"p"},"{exp}"),". This is useful for programmatically creating children. The allowed values are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Roact.Element")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ReadonlyArray<T>")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ReadonlyMap<K, V>")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"boolean")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"undefined"))),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"boolean")," and ",Object(c.b)("inlineCode",{parentName:"p"},"undefined")," values do not actually get put into the children props, but allowing the values here is useful for creating conditional children values."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nlet condition = false;\n\nconst element = (\n    <frame>\n        {condition && <frame />}\n        {condition ? <frame /> : undefined}\n    </frame>\n);\n')),Object(c.b)("h2",{id:"fragments"},"Fragments"),Object(c.b)("p",null,"To create a Fragment with JSX you can either use the tag name ",Object(c.b)("inlineCode",{parentName:"p"},"Roact.Fragment")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst fragment = <Roact.Fragment></Roact.Fragment>;\n')),Object(c.b)("p",null,"Or, you can use the shorthand form:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst fragment = <></>;\n')))}v.isMDXComponent=!0},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},106:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},119:function(e,t,n){"use strict";var a=n(0),r=n(120);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},120:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r}}]);