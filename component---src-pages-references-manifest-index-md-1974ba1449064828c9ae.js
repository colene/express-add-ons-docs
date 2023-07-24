"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6094],{29414:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return s}});var a=n(87462),d=n(63366),r=(n(15007),n(64983)),m=n(91515),i=["components"],l={},p={_frontmatter:l},o=m.Z;function s(e){var t=e.components,n=(0,d.Z)(e,i);return(0,r.mdx)(o,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"manifest-schema-reference"},"Manifest Schema Reference"),(0,r.mdx)("h2",{id:"introduction"},"Introduction"),(0,r.mdx)("p",null,"Each add-on bundle contains a ",(0,r.mdx)("inlineCode",{parentName:"p"},"manifest.json")," file at the root level which defines the metadata for your add-on and how it should behave. This guide outlines the latest manifest version available, which is version 2. "),(0,r.mdx)("h3",{id:"sample-manifestjson"},"Sample manifest.json"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "testId": "addon-sample",\n    "name": "Add-on Sample",\n    "version": "1.0.0",\n    "manifestVersion": 2,\n    "requirements": {\n        "apps": [\n            {\n                "name": "Express",\n                "apiVersion": 1\n            }\n        ],\n        "experimentalApis": true,\n        "supportsTouch": false\n    },\n    "entryPoints": [\n        {\n            "type": "panel",\n            "id": "panel1",\n            "main": "index.html",\n            "permissions": {\n                "sandbox": ["allow-popups", "allow-presentation", "allow-downloads"],\n                "oauth": ["www.dropbox.com"]\n            }\n        }\n    ]\n}\n')),(0,r.mdx)("h2",{id:"manifest-properties"},"Manifest Properties"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")," The ",(0,r.mdx)("strong",{parentName:"p"},"?")," denotes the key is optional. "),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"testId?")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Used to uniquely identify an add-on among other add-ons during a ",(0,r.mdx)("strong",{parentName:"td"},"development workflows only"),". This is auto-generated and inserted into the manifest by the CLI when an add-on is created. This is mandatory in the development workflow and ignored in add-ons submitted to the marketplace.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name?")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Add-on name ",(0,r.mdx)("strong",{parentName:"td"},"for development workflow only"),". The name provided in the UI during submission is used in all other workflows.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"version")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:"right"},'Add-on version in "major.minor.patch" format (e.g. "1.2.0")')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"manifestVersion")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"number")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Version of the manifest schema (e.g. 2).")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#requirements"},(0,r.mdx)("inlineCode",{parentName:"a"},"requirements"))),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"object")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Specify the apps the add-on is applicable for.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#entrypoints"},(0,r.mdx)("inlineCode",{parentName:"a"},"entryPoints"))),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"object []")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"An entry point for your add-on. ",(0,r.mdx)("strong",{parentName:"td"},"At least one is required."))))),(0,r.mdx)("h2",{id:"requirements"},"requirements"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#requirementsapps"},(0,r.mdx)("inlineCode",{parentName:"a"},"apps"))),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"object []")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Add-on authors can specify the apps that the add-on is intended for.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"experimentalApis?")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Add-ons can opt to use experimental apis by specifying this flag. This flag is ",(0,r.mdx)("strong",{parentName:"td"},"only allowed during development")," and needs to be removed during submission.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"supportsTouch?")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Whether the add-on supports touch-only devices. If not specified, the default value assumed is ",(0,r.mdx)("inlineCode",{parentName:"td"},"false"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"renditionPreview?")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Ensure premium content preview is properly handled for free users when add-ons create renditions.")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:"),(0,r.mdx)("br",null)),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"requirements": {\n    "apps": [  \n    {  \n        "name": "Express", \n        "apiVersion": 1,\n        "supportedDeviceClass": ["desktop"]\n    }, \n    {…}],\n    "experimentalApis": true,\n    "supportsTouch": false\n} \n')),(0,r.mdx)("h3",{id:"requirementsapps"},"requirements.apps"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Currently supported values: ",(0,r.mdx)("inlineCode",{parentName:"td"},'"Express"'))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"apiVersion")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"number")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"API version that the add-on uses. Currently supported values: 1")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#requirementsappssupporteddeviceclass"},(0,r.mdx)("inlineCode",{parentName:"a"},"supportedDeviceClass?"))),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string []")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Supported platforms by the add-on. If not specified, the default value assumed is: ",(0,r.mdx)("inlineCode",{parentName:"td"},'["desktop"]'),".")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:"),(0,r.mdx)("br",null)),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"apps": [\n    {\n        "name": "Express",\n        "apiVersion": 1,\n        "supportedDeviceClass": ["desktop"]\n    }\n],\n')),(0,r.mdx)("h4",{id:"requirementsappssupporteddeviceclass"},"requirements.apps.supportedDeviceClass"),(0,r.mdx)("p",null,"The following platform values are currently supported in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"supportedDeviceClass")," key."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Platform"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"desktop")),(0,r.mdx)("td",{parentName:"tr",align:null},"Browser on desktop.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"mobile")),(0,r.mdx)("td",{parentName:"tr",align:null},"Browser on mobile and tablet devices.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"app")),(0,r.mdx)("td",{parentName:"tr",align:null},"Native app on mobile and tablet devices.")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")," ",(0,r.mdx)("em",{parentName:"p"},"The beta version of Adobe Express is currently not yet supported on mobile or tablet devices.")),(0,r.mdx)("h2",{id:"entrypoints"},"entryPoints"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"type")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"The type of the entry point. Currently supported values: ",(0,r.mdx)("inlineCode",{parentName:"td"},'"panel"'),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"id")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Identifier for the entry point. Must be unique within the add-on.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"main")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"Main file for this entry point when launched.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"script")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"File containing the JavaScript code to use with the ",(0,r.mdx)("a",{parentName:"td",href:"../scriptruntime/"},"script runtime APIs"),". ",(0,r.mdx)("strong",{parentName:"td"},"Currently experimental only, and requires the ",(0,r.mdx)("a",{parentName:"strong",href:"#entrypoints"},(0,r.mdx)("inlineCode",{parentName:"a"},"experimentalApis"))," flag to be set."))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#entrypointspermissions"},(0,r.mdx)("inlineCode",{parentName:"a"},"permissions"))),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"object")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"The permissions defined for this entry point.")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:"),(0,r.mdx)("br",null)),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"entryPoints": [\n    {\n        "type": "panel",\n        "id": "panel1",\n        "main": "index.html",\n        "permissions": {\n            "sandbox": ["allow-popups", "allow-presentation", "allow-downloads"],\n            "oauth": ["www.dropbox.com"]\n        }\n    }\n]\n')),(0,r.mdx)("h3",{id:"entrypointspermissions"},"entrypoints.permissions"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#entrypointspermissionssandbox"},(0,r.mdx)("inlineCode",{parentName:"a"},"sandbox?"))),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string []")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"List of iframe sandbox permissions.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"oauth?")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string []")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"List of 3rd party auth server domains for which OAuth workflow may be requested.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"clipboard?")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string []")),(0,r.mdx)("td",{parentName:"tr",align:"right"},"The allowed values for the list of clipboard permissions. Currently, ",(0,r.mdx)("inlineCode",{parentName:"td"},"clipboard-write")," is supported and allows an add-on to write arbitrary data to the clipboard.")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:"),(0,r.mdx)("br",null)),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"permissions" : {\n    "sandbox": [" allow-popups ", "allow-downloads"],\n    "oauth" : [“...”, “...”], \n    "clipboard": ["clipboard-write"]\n}\n')),(0,r.mdx)("h4",{id:"entrypointspermissionssandbox"},"entrypoints.permissions.sandbox"),(0,r.mdx)("p",null,"The following permission values are currently supported in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"sandbox")," key."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Permission"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"allow-popups")),(0,r.mdx)("td",{parentName:"tr",align:null},"Allows popups (such as ",(0,r.mdx)("inlineCode",{parentName:"td"},"window.open()"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},'target="_blank"'),", or ",(0,r.mdx)("inlineCode",{parentName:"td"},"showModalDialog()"),"). ",(0,r.mdx)("strong",{parentName:"td"},"Note: If this permission is not set and you're using popups, the popup will silently fail to open."))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"allow-popups-to-escape-sandbox")),(0,r.mdx)("td",{parentName:"tr",align:null},"Allows a sandboxed document to open new windows without forcing the sandboxing flags upon them")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"allow-presentation")),(0,r.mdx)("td",{parentName:"tr",align:null},"Lets the add-on start a ",(0,r.mdx)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest"},"presentation session"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"allow-downloads")),(0,r.mdx)("td",{parentName:"tr",align:null},"Allows downloading files through an ","<","a",">"," or ","<","area",">"," element with the download attribute, as well as through the navigation that leads to a download of a file.")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:"),(0,r.mdx)("br",null)),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"permissions" : {\n    "sandbox": ["allow-popups ", "allow-downloads"],    \n}\n')),(0,r.mdx)("h2",{id:"notes"},"Notes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Files within the add-on bundle can refer to each other via relative paths.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Changes to your add-on manifest currently require a reload, but you can simply use the ",(0,r.mdx)("strong",{parentName:"p"},"Refresh")," button from the ",(0,r.mdx)("strong",{parentName:"p"},"Add-on Development")," panel to force the add-on to reload and pick up your manifest changes."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/4684f2874e8086cd0854486f534affe5/5530d/refresh-btn.webp 320w","/express-add-ons-docs/static/4684f2874e8086cd0854486f534affe5/0c8fb/refresh-btn.webp 640w","/express-add-ons-docs/static/4684f2874e8086cd0854486f534affe5/94b1e/refresh-btn.webp 1280w","/express-add-ons-docs/static/4684f2874e8086cd0854486f534affe5/0b34d/refresh-btn.webp 1920w","/express-add-ons-docs/static/4684f2874e8086cd0854486f534affe5/d5269/refresh-btn.webp 2560w","/express-add-ons-docs/static/4684f2874e8086cd0854486f534affe5/cede2/refresh-btn.webp 2965w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/express-add-ons-docs/static/4684f2874e8086cd0854486f534affe5/dd4a7/refresh-btn.png 320w","/express-add-ons-docs/static/4684f2874e8086cd0854486f534affe5/0f09e/refresh-btn.png 640w","/express-add-ons-docs/static/4684f2874e8086cd0854486f534affe5/bbbf7/refresh-btn.png 1280w","/express-add-ons-docs/static/4684f2874e8086cd0854486f534affe5/ac7a9/refresh-btn.png 1920w","/express-add-ons-docs/static/4684f2874e8086cd0854486f534affe5/c7a69/refresh-btn.png 2560w","/express-add-ons-docs/static/4684f2874e8086cd0854486f534affe5/a409c/refresh-btn.png 2965w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/express-add-ons-docs/static/4684f2874e8086cd0854486f534affe5/bbbf7/refresh-btn.png",alt:"refresh button for manifest changes",title:"refresh button for manifest changes",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-references-manifest-index-md-1974ba1449064828c9ae.js.map