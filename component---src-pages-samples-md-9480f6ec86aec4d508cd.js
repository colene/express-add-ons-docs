"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6248],{53469:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return p},default:function(){return x}});var n,d=t(87462),r=t(63366),m=(t(15007),t(64983)),o=t(91515),l=["components"],p={},s=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),i={_frontmatter:p},u=o.Z;function x(e){var a=e.components,t=(0,r.Z)(e,l);return(0,m.mdx)(u,(0,d.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"code-samples"},"Code Samples"),(0,m.mdx)("p",null,"Find inspiration and great reference examples by checking out our ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/express-add-on-samples"},"code samples")," repo. A description of each sample and which features and technologies they use is available here for reference."),(0,m.mdx)(s,{slots:"text",variant:"info",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"In addition to these code samples, you should also be sure to check out the ",(0,m.mdx)("a",{parentName:"p",href:"./guides/getting_started/dev_tooling/#templates"},"Templates section")," in the ",(0,m.mdx)("strong",{parentName:"p"},"Development Tools")," page for the options available for creating a starter project based on your favorite development stack. "),(0,m.mdx)("h2",{id:"using-the-samples"},"Using the samples"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Clone ",(0,m.mdx)("a",{parentName:"li",href:"ttps://github.com/AdobeDocs/express-add-on-samples"},"the repo")," (or download the zip)."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"cd")," into the folder of a sample you want to try."),(0,m.mdx)("li",{parentName:"ul"},"Run ",(0,m.mdx)("inlineCode",{parentName:"li"},"npm install")," to install the dependencies."),(0,m.mdx)("li",{parentName:"ul"},"Run ",(0,m.mdx)("inlineCode",{parentName:"li"},"npm run build")," to build the source."),(0,m.mdx)("li",{parentName:"ul"},"Run ",(0,m.mdx)("inlineCode",{parentName:"li"},"npm run start")," to start to start the server with your bundled sample"),(0,m.mdx)("li",{parentName:"ul"},"Navigate to Adobe Express and load and use the locally running sample add-on with the add-on panel developer tools just as you would with your own.")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"NOTE:")," Before you run any samples, you must have previously run the ",(0,m.mdx)("inlineCode",{parentName:"p"},"npx @adobe/create-ccweb-add-on")," command to create your own add-on at least once to ensure the package is available and ready to use."),(0,m.mdx)("h2",{id:"get-started"},(0,m.mdx)("a",{parentName:"h2",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/samples/get-started"},"get-started")),(0,m.mdx)("p",null,"Demonstrates how to get started with add-on development with a simple app that greets a user after a name is entered."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Technologies Used:")," ",(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"HTML"),(0,m.mdx)("li",{parentName:"ul"},"JavaScript"),(0,m.mdx)("li",{parentName:"ul"},"CSS")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Note:")," No specific add-on SDK features are used in this sample, it is meant to run a simple JavaScript app that can be loaded and run in the add-ons panel."),(0,m.mdx)("h2",{id:"import-images-from-local"},(0,m.mdx)("a",{parentName:"h2",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/samples/import-images-from-local"},"import-images-from-local")),(0,m.mdx)("p",null,"Demonstrates how to use the add-on SDK's Import and Drag and Drop APIs to add images over click and drag and drop to a document."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Technologies Used:")," ",(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"JavaScript"),(0,m.mdx)("li",{parentName:"ul"},"CSS")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Features Leveraged:"),(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/app-document.md"},"Import Content")," to add the image to the document when the gif is clicked."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/addonsdk-app/#enabledragtodocument"},"Drag and Drop")," to support dragging and dropping images to the document.")),(0,m.mdx)("h2",{id:"import-images-using-oauth"},(0,m.mdx)("a",{parentName:"h2",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/samples/import-images-using-oauth"},"import-images-using-oauth")),(0,m.mdx)("p",null,"Demonstrates how to use the add-on SDK's OAuth API to allow its users to connect their Dropbox account (in addition to leveraging some others listed below). "),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Technologies Used:")," ",(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"React"),(0,m.mdx)("li",{parentName:"ul"},"React Spectrum"),(0,m.mdx)("li",{parentName:"ul"},"CSS"),(0,m.mdx)("li",{parentName:"ul"},"Webpack")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Features Leveraged:"),(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/app-oauth/"},"OAuth API's")," to authorize the user with the Dropbox service."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/app-document"},"Import Content")," to add images from the add-on to the document."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/addonsdk-app/#enabledragtodocument"},"Drag and Drop")," to support dragging and dropping images to the document."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/instance-clientStorage/"},"Client Storage")," to store the access_token in the IndexedDB store of the browser and reusing the same for the requests made to the Dropbox APIs.")),(0,m.mdx)("h2",{id:"use-client-storage"},(0,m.mdx)("a",{parentName:"h2",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/samples/use-client-storage"},"use-client-storage")),(0,m.mdx)("p",null,"Demonstrates how to use the Client Storage API to persist user generated data through a todo list."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Technologies Used:")," ",(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"TypeScript"),(0,m.mdx)("li",{parentName:"ul"},"CSS"),(0,m.mdx)("li",{parentName:"ul"},"Webpack")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Features Leveraged:"),(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/instance-clientStorage/"},"Client Storage")," to persist the todo items.")),(0,m.mdx)("h2",{id:"export-sample"},(0,m.mdx)("a",{parentName:"h2",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/samples/export-sample"},"export-sample")),(0,m.mdx)("p",null,"Demonstrates how to use the add-on SDK's to export renditions of content in various formats including jpeg, png, pdf and mp4."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Technologies Used:")," ",(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"JavaScript"),(0,m.mdx)("li",{parentName:"ul"},"Spectrum Web Components"),(0,m.mdx)("li",{parentName:"ul"},"Webpack")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Features Leveraged:"),(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/app-document"},"Export Content")," to generate renditions."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/app-document"},"Import Content")," to add the image to the document when the gif is clicked.")),(0,m.mdx)("h2",{id:"dialog-add-on"},(0,m.mdx)("a",{parentName:"h2",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/samples/dialog-add-on"},"dialog-add-on")),(0,m.mdx)("p",null,"Demonstrates how to use the Modal Dialog APIs to pop-up variations of modals from your add-ons"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Technologies Used:")," ",(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"React"),(0,m.mdx)("li",{parentName:"ul"},"React Spectrum"),(0,m.mdx)("li",{parentName:"ul"},"Webpack")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Features Leveraged:"),(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk-app/#showmodaldialog"},"Modal Dialogs")," to pop-up a variation of a modal reflecting the selections made from the add-ons panel UI.")),(0,m.mdx)("h2",{id:"pix"},(0,m.mdx)("a",{parentName:"h2",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/contributed/pix"},"pix")),(0,m.mdx)("p",null,"A react-based add-on that illustrates a very simple 16x16 pixel editor add-on. Users can drag the resulting pixel art on to the canvas, but they can also import the current page as pixel art (downsampled to 16x16)."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Technologies Used:")," ",(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"HTML Canvas"),(0,m.mdx)("li",{parentName:"ul"},"React"),(0,m.mdx)("li",{parentName:"ul"},"Spectrum Web Components"),(0,m.mdx)("li",{parentName:"ul"},"Webpack")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Features Leveraged:"),(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/addonsdk-app/#enabledragtodocument"},"Drag and Drop")," to add the dragged image to the document."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/app-document"},"Export Content")," to generate renditions."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/instance-clientStorage/"},"Client Storage")," to store the pixel art creations.")),(0,m.mdx)("h2",{id:"swc"},(0,m.mdx)("a",{parentName:"h2",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/contributed/swc"},"swc")),(0,m.mdx)("p",null,"Simple sample which illustrates how to use ",(0,m.mdx)("strong",{parentName:"p"},"Spectrum Web Components")," without React or any other framework."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Technologies Used:")," ",(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"HTML"),(0,m.mdx)("li",{parentName:"ul"},"CSS"),(0,m.mdx)("li",{parentName:"ul"},"JavaScript"),(0,m.mdx)("li",{parentName:"ul"},"Spectrum Web Components"),(0,m.mdx)("li",{parentName:"ul"},"Webpack")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Features Leveraged:"),(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/app-ui/"},"Application UI Theme")," to set the theme (only once the SDK is loaded to prevent any flash of unstyled content) and to listen and respond to theme changes.")),(0,m.mdx)("h2",{id:"dropbox"},(0,m.mdx)("a",{parentName:"h2",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/marketplace/dropbox"},"Dropbox")),(0,m.mdx)("p",null,"Allows users to connect to their Dropbox account. Once connected, they can fetch their images and videos from their account and add them to their Express pages."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Technologies Used:")," ",(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"React"),(0,m.mdx)("li",{parentName:"ul"},"React Spectrum"),(0,m.mdx)("li",{parentName:"ul"},"Webpack")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Features Leveraged:"),(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/app-oauth/"},"OAuth API's")," to authorize the user with the Dropbox service."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/addonsdk-app/#enabledragtodocument"},"Drag and Drop")," to support dragging and dropping images to the document."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/app-document.md"},"Import Content")," to add the image to the document when the gif is clicked.")),(0,m.mdx)("h2",{id:"giphy"},(0,m.mdx)("a",{parentName:"h2",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/marketplace/giphy"},"Giphy")),(0,m.mdx)("p",null,"Allows users to search for popular gifs and add them to the document."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Technologies Used:")," ",(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"JavaScript "),(0,m.mdx)("li",{parentName:"ul"},"Spectrum Web Components")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Features Leveraged:"),(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/addonsdk-app/#enabledragtodocument"},"Drag and Drop")," to support dragging and dropping images to the document."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/app-document.md"},"Import Content")," to add the image to the document when the gif is clicked.")),(0,m.mdx)("h2",{id:"qr-code"},(0,m.mdx)("a",{parentName:"h2",href:"https://github.com/AdobeDocs/express-add-on-samples/tree/main/marketplace/qrcode"},"QR Code")),(0,m.mdx)("p",null,"Allows users to search for popular gifs and add them to their Express pages."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Technologies Used:")," ",(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"JavaScript "),(0,m.mdx)("li",{parentName:"ul"},"Spectrum Web Components")),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Features Leveraged:"),(0,m.mdx)("br",null)),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/app-document.md"},"Import Content")," to add the image to the document when the gif is clicked."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./references/addonsdk/addonsdk-app/#enabledragtodocument"},"Drag and Drop")," to support dragging and dropping images to the document.")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-samples-md-9480f6ec86aec4d508cd.js.map