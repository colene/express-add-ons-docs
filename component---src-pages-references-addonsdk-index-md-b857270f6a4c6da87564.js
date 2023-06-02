"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1261],{87955:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return u}});var l,d=a(87462),n=a(63366),r=(a(15007),a(64983)),o=a(91515),s=["components"],m={},p=(l="InlineAlert",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),i={_frontmatter:m},c=o.Z;function u(e){var t=e.components,a=(0,n.Z)(e,s);return(0,r.mdx)(c,(0,d.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(p,{slots:"text",variant:"info",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"The add-on developer documentation you are previewing is for the beta version of Adobe Express. ",(0,r.mdx)("a",{parentName:"p",href:"https://adobe.com/go/express-developer"},"Join the waitlist"),"."),(0,r.mdx)("br",null)," ",(0,r.mdx)("br",null),(0,r.mdx)("h1",{id:"addonsdk-api-reference"},"AddOnSdk API Reference"),(0,r.mdx)("h2",{id:"overview"},"Overview"),(0,r.mdx)("p",null,"This reference is provided to outline the interfaces, methods, properties and events that support the ",(0,r.mdx)("a",{parentName:"p",href:"#what-can-i-do-with-the-apis"},"add-on SDK API features"),". It begins with an introduction to the core ",(0,r.mdx)("inlineCode",{parentName:"p"},"AddOnSdk")," module, which provides access to the add-on development platform. Import this module to use it for accessing all of the API entities.  "),(0,r.mdx)(p,{slots:"header, text1, text2, text3, text4",variant:"success",mdxType:"InlineAlert"}),(0,r.mdx)("h1",{id:"sdk-vs-api"},"SDK vs API"),(0,r.mdx)("p",null,"The distinction between an SDK and an API can be a bit blurry and can depend on the specific context. However, here's a general overview of the differences between an SDK and an API:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"SDK (Software Development Kit) - a collection of software development tools and libraries that developers can use to create applications for a specific platform or system. An SDK typically includes an API, documentation, code samples, and other resources that developers need to build applications. ")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"API (Application Programming Interface) - a set of rules and protocols that developers can use to interact with a platform. "))),(0,r.mdx)("p",null,"In general, an SDK provides a more complete set of tools and resources for developers than an API alone. An SDK may include an API, but it also includes other tools and resources that can help developers build applications more easily. However, the terms SDK and API are often used interchangeably, and the specific definitions can vary depending on the context."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")," an ",(0,r.mdx)("inlineCode",{parentName:"p"},"interface")," can also be considered an ",(0,r.mdx)("inlineCode",{parentName:"p"},"object")," in terms of this reference. You can traverse the ",(0,r.mdx)("inlineCode",{parentName:"p"},"AddOnSdk")," interfaces/objects (ie: ",(0,r.mdx)("inlineCode",{parentName:"p"},"app"),",",(0,r.mdx)("inlineCode",{parentName:"p"},"instance"),") etc in the left navigation to learn more."),(0,r.mdx)("h2",{id:"what-features-does-the-sdk-support"},"What features does the SDK support?"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../../develop/"},"Importing Content")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../../develop/"},"Exporting Content")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../../develop/"},"Drag & Drop Behavior")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../../develop/"},"Authentication with OAuth 2.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../../develop/"},"Client-side Storage Access")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../../develop/"},"Modal Dialogs")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../../develop/"},"Locale Detection")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../../develop/"},"Theme Detection")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../../develop/"},"Access to the Manifest"))),(0,r.mdx)(p,{slots:"text",variant:"success",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"See the ",(0,r.mdx)("a",{parentName:"p",href:"../../develop/"},"Code Recipes")," for details and examples of how to add the features above."),(0,r.mdx)("h2",{id:"addonsdk-objects"},"AddOnSdk Objects"),(0,r.mdx)("table",{className:"spectrum-Table spectrum-Table--sizeM",style:{backgroundColor:"lightblue"}},(0,r.mdx)("tr",{className:"spectrum-Table-row"},(0,r.mdx)("td",{className:"spectrum-Table-headCell"},(0,r.mdx)("p",null,(0,r.mdx)("strong",null,"Attribute"))),(0,r.mdx)("td",{className:"spectrum-Table-headCell"},(0,r.mdx)("p",null,(0,r.mdx)("strong",null,"Name"))),(0,r.mdx)("td",{className:"spectrum-Table-headCell"},(0,r.mdx)("p",null,(0,r.mdx)("strong",null,"Type"))),(0,r.mdx)("td",{className:"spectrum-Table-headCell"},(0,r.mdx)("p",null,(0,r.mdx)("strong",null,"Description")))),(0,r.mdx)("tbody",{className:"spectrum-Table-body"},(0,r.mdx)("tr",{className:"spectrum-Table-row"},(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"readonly"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"AddOnSdk.app"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"object"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,"Provides access to the host application (Adobe Express)"))),(0,r.mdx)("tr",{className:"spectrum-Table-row"},(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"readonly"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"AddOnSdk.instance"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"object"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,"The currently running add-on instance."))),(0,r.mdx)("tr",{className:"spectrum-Table-row"},(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"readonly"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"AddOnSdk.ready"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"Promise"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,"Indicates the AddOnSdk object has been initialized and you can start accessing the APIs. Register a call back with [Promise.then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) or [await this promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)."))),(0,r.mdx)("tr",{className:"spectrum-Table-row"},(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"AddOnSdk.constants"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"object"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,"A set of constants used throughout the add-on SDK."))))),(0,r.mdx)("h2",{id:"addonsdk-properties"},"AddOnSdk Properties"),(0,r.mdx)("table",{className:"spectrum-Table spectrum-Table--sizeM",style:{backgroundColor:"lightblue"}},(0,r.mdx)("tr",{className:"spectrum-Table-row"},(0,r.mdx)("td",{className:"spectrum-Table-headCell"},(0,r.mdx)("p",null,(0,r.mdx)("strong",null,"Attribute"))),(0,r.mdx)("td",{className:"spectrum-Table-headCell"},(0,r.mdx)("p",null,(0,r.mdx)("strong",null,"Property"))),(0,r.mdx)("td",{className:"spectrum-Table-headCell"},(0,r.mdx)("p",null,(0,r.mdx)("strong",null,"Type"))),(0,r.mdx)("td",{className:"spectrum-Table-headCell"},(0,r.mdx)("p",null,(0,r.mdx)("strong",null,"Description")))),(0,r.mdx)("tbody",{className:"spectrum-Table-body"},(0,r.mdx)("tr",{className:"spectrum-Table-row"},(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"readonly"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"AddOnSdk.apiVersion"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,(0,r.mdx)("pre",null,"string"))),(0,r.mdx)("td",{className:"spectrum-Table-cell"},(0,r.mdx)("p",null,"Current version of the add-on SDK running."))))),(0,r.mdx)("h3",{id:"add-on-sdk-module-import"},"Add-on SDK Module Import"),(0,r.mdx)("p",null,"The add-on SDK is available as a hosted JavaScript module on the Adobe CDN. It's referenced with an ",(0,r.mdx)("inlineCode",{parentName:"p"},"import")," statement in either an HTML ",(0,r.mdx)("inlineCode",{parentName:"p"},"<script>")," tag or in the list of ",(0,r.mdx)("inlineCode",{parentName:"p"},"import")," statements in the JavaScript source. However, you don't need to worry about adding this reference if you used the CLI to create your add-on project, since ",(0,r.mdx)("strong",{parentName:"p"},"it will already be imported for you"),", and the location it was placed will depend on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"template")," you chose. The following sections show how it's imported into different file types for reference."),(0,r.mdx)("h4",{id:"import-into-html-file"},"Import into HTML file"),(0,r.mdx)("p",null,"To use the SDK from an HTML file, simply include a link to it in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"<script>")," tag with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"type=module")," attribute on it to ensure everything is initialized properly. "),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'<body>\n    Hello World!\n    <script type="module">\n        import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n        AddOnSdk.ready.then(async () => {\n            console.log("AddOnSdk is ready for use.");\n        });     \n    <\/script>\n</body>\n')),(0,r.mdx)(p,{slots:"text",variant:"success",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"TIP:")," Placing your ",(0,r.mdx)("inlineCode",{parentName:"p"},"<script>")," tag just before the closing ",(0,r.mdx)("inlineCode",{parentName:"p"},"<body>")," tag helps reduce the page loading time."),(0,r.mdx)("h4",{id:"import-into-javascript-file"},"Import into JavaScript file"),(0,r.mdx)("p",null,"The SDK can be referenced in ",(0,r.mdx)("inlineCode",{parentName:"p"},".js/.jsx")," source files by adding it to the list of imports as a default module reference, such as in the following:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n')),(0,r.mdx)("h4",{id:"import-into-typescript-file"},"Import into TypeScript file"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";\n\n')),(0,r.mdx)("p",null,"Note, if you created your add-on project with the CLI based on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"typescript")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"typescript-react")," templates, you will automatically get the following type definition generated in your project for you:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},'declare module "https://new.express.adobe.com/static/add-on-sdk/sdk.js" {\n    export * from "@adobe-ccwebext/ccweb-add-on-sdk-types";\n    export { default } from "@adobe-ccwebext/ccweb-add-on-sdk-types";\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-references-addonsdk-index-md-b857270f6a4c6da87564.js.map