/*! Built with http://stenciljs.com (es5) */

App.loadStyles("landing-page","landing-page main{display:flex;justify-content:center;flex-direction:column;align-items:center;margin-top:10em}landing-page #logo{width:4em;height:4em}landing-page #action-call{font-size:3.2em;text-align:center;width:16em;line-height:normal;margin-top:20px}landing-page button{margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:var(--button-shadow);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer}landing-page button:hover{box-shadow:var(--button-shadow);transform:translateY(1px)}landing-page #get-started{background:var(--primary-color);color:#fff}landing-page #learn-more{background:#fff;color:var(--primary-color)}landing-page #youtube-video{opacity:0;transition:opacity .3s,transform .3s cubic-bezier(.36,.66,.04,1);position:absolute;z-index:9999;pointer-events:none;display:flex;justify-content:center;left:0;width:100%}landing-page #youtube-video iframe{box-shadow:0 8px 16px rgba(0,0,0,.15),0 20px 40px rgba(0,0,0,.2);border-radius:8px}landing-page .youtube-show{opacity:1!important;transform:translatey(-30px)!important;pointer-events:auto!important}landing-page #background{height:100%;position:fixed;width:100%;z-index:8888;top:0;left:0;bottom:0;right:0;opacity:0;pointer-events:none;background-color:#00082d;transition:opacity .3s cubic-bezier(.36,.66,.04,1)}landing-page .background-show{opacity:.4!important;pointer-events:auto!important}landing-page #three-points{display:flex;justify-content:space-around;text-align:center;margin-top:3.2em;margin-bottom:2.8em}landing-page .point-card{margin:2.4em;position:relative}landing-page .point-card h2{margin-top:72px}landing-page .point-card p{color:#626177;font-weight:400;font-size:16px;letter-spacing:-.02em;line-height:30px}landing-page .point-card::before{position:absolute;background:url(assets/img/feature-icons.png) no-repeat;background-size:48px;height:48px;width:48px;content:\"\";top:0;left:calc(50% - 24px)}landing-page .point-card.performant::before{background-position:0 -48px}landing-page .point-card.future-proof::before{background-position:0 -96px}landing-page #launch-video,landing-page #mobile-video{display:flex;align-items:center;justify-content:center;line-height:4;transition:all .2s ease;cursor:pointer;text-decoration:none;outline:0}landing-page #launch-video:hover,landing-page #mobile-video:hover{opacity:.7}landing-page #launch-video img,landing-page #mobile-video img{height:1.2em}landing-page #launch-video span,landing-page #mobile-video span{font-size:14px;margin-left:8px;color:var(--primary-color);font-weight:500;transition:all .15s ease}landing-page #mobile-video{display:none}\@media screen and (max-width:740px){landing-page #action-call{width:auto}landing-page #launch-video{display:none}landing-page #youtube-video{display:none}landing-page #mobile-video{display:flex}landing-page #three-points{flex-direction:column;text-align:left}landing-page #three-points .point-card{margin:1em 2.4em}landing-page #three-points .point-card::before{left:0}}\nlanding-page.hydrated{visibility:inherit}","lazy-iframe","\nlazy-iframe.hydrated{visibility:inherit}","site-header","site-header{position:fixed;top:0;left:0;right:0;background-color:rgba(255,255,255,.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);z-index:99}site-header .logo{width:96px}site-header .logo-link a{margin:0}site-header .site-header{padding:20px 15px;max-width:1080px;margin:auto;display:flex;flex-direction:row;flex-wrap:nowrap;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}site-header a,site-header stencil-route-link a{font-size:14px;margin:8px 8px;margin-right:1.4em;color:#86869c;text-decoration:none;font-weight:500;letter-spacing:-.02em;text-decoration:none;transition:all .2s ease}site-header a:hover,site-header stencil-route-link a.link-active,site-header stencil-route-link a:hover{color:#2b2b38!important;text-decoration:none}site-header .pull-right{order:0;flex:1 1 auto;text-align:right}\@media screen and (max-width:450px){site-header img{padding-bottom:20px}site-header .pull-right{display:block;text-align:center}}\@media screen and (max-width:465px){site-header .button{display:none}}\@media screen and (min-width:450px){site-header .logo{height:27px}}\@media screen and (max-width:722px){site-header a,site-header stencil-route-link a{font-size:12px;margin:8px 12px}site-header .pull-right{justify-content:space-around;display:flex}site-header .site-header{flex-direction:column}site-header stencil-route-link{margin-right:unset}}\nsite-header.hydrated{visibility:inherit}","site-menu","site-menu .star-button{margin-bottom:-2px;width:120px;margin-top:26px}site-menu h4{font-size:16px;font-weight:700;margin-bottom:0}site-menu #menu-list{list-style-type:none;margin:0;padding:0;-webkit-padding-start:0}site-menu #menu-list ul{padding:0;color:#2d2d4c;font-size:15px;line-height:2em;margin:0 0 28px}site-menu #menu-list li{list-style:none;margin:0;text-indent:0;font-size:14px;font-weight:400}site-menu a{color:#484854;text-decoration:none}site-menu stencil-route-link a{color:#484854;text-decoration:none}site-menu stencil-route-link .link-active{font-weight:700;color:#5850ff;letter-spacing:-.013em}site-menu stencil-route-link:hover a:not(.link-active){color:#2f2f35!important;font-weight:500;letter-spacing:-.013em}\nsite-menu.hydrated{visibility:inherit}","stencil-site","*{box-sizing:border-box}stencil-site{height:100%;display:flex;flex-flow:column}.app{height:100%;max-width:1080px;margin:auto}#main-div{flex-grow:1;flex-shrink:0}::selection{background:#e7e7f2}::-moz-selection{background:#e7e7f2}body,html{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";width:100%;height:100%;padding:0;margin:0;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}h1,h2,h3,h4{color:#16161d}h1{font-size:28px;font-weight:700}h2{font-size:20px;font-weight:700}h2,h3{margin-top:48px;margin-bottom:8px}p,ul{color:#2d2d4c;font-size:15px;line-height:2em;margin:24px 0}stencil-route-link:hover{cursor:pointer}.wrapper{line-height:32px;min-height:100%;padding-top:60px;margin:15px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;align-items:flex-start}pre{word-break:break-all;word-wrap:break-word;display:block;white-space:pre-wrap;margin:24px 0 28px;padding:16px 24px;border-radius:4px;color:#abb2bf;background-color:#16161d}pre code{font-weight:500;display:block;overflow-x:auto;word-wrap:normal;white-space:pre;box-sizing:border-box;font-size:14px;line-height:20px}code{font-weight:400;font-family:\"Source Code Pro\",monospace;font-size:14px}.nextButton{background:var(--primary-color);color:#fff;text-decoration:none;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer;float:right;margin-right:5px}.nextButton:hover{text-decoration:none;transform:translateY(1px);box-shadow:0 2px 4px rgba(0,0,0,.04),0 1px 2px rgba(0,0,0,.16)}.backButton{color:var(--primary-color);background:#fff;text-decoration:none;float:left;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer;margin-bottom:15px;margin-left:5px}.backButton:hover{text-decoration:none;transform:translateY(1px);box-shadow:0 2px 4px rgba(0,0,0,.04),0 1px 2px rgba(0,0,0,.16)}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#c678dd}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#98c379}.hljs-built_in,.hljs-class .hljs-title{color:#e6c07b}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#d19a66}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#61aeee}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}footer{bottom:0;left:0;width:100%;background:#f8f8fc;height:8em;display:flex;justify-content:space-around;align-items:center;flex:0 0 8em;margin-top:32px}footer .svg-button{margin-left:16px;transition:all .15s ease}footer .svg-button:hover{opacity:.5}#open-source img{width:50%}#open-source p{margin-top:0;margin-bottom:0;color:#a5a4b8;font-size:10px}\@media screen and (max-width:355px){.wrapper{padding-top:100px}}\@media screen and (max-width:450px){.wrapper{padding-top:80px}site-header a{display:none}site-header stencil-route-link a{display:initial}}\@media screen and (max-width:590px){.wrapper{margin-right:0;margin-left:0;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.wrapper .pull-right{padding:0 15px;width:100%;min-height:100vh}.wrapper .pull-left{position:relative;padding:15px;width:100%;bottom:0;background-color:#16161d}.wrapper .pull-left *{color:#fff}}\@media screen and (min-width:590px){.wrapper .pull-left{min-width:250px;max-width:250px;position:-webkit-sticky;position:sticky;top:50px}.wrapper .pull-right{padding-left:96px;padding-right:32px;flex:1 1 auto;overflow:auto;min-height:100vh}}\nstencil-site.hydrated{visibility:inherit}");
App.loadComponents("tilxb3td",function(e,t,i,n){"use strict";var l=function(){function e(){document.title="Stencil"}return e.prototype.openYoutube=function(){var e=this.el.querySelector("#youtube-video"),t=this.el.querySelector("#background");e.classList.add("youtube-show"),t.classList.add("background-show")},e.prototype.closeBackground=function(){console.log("hello world");var e=this.el.querySelector("#youtube-video"),t=this.el.querySelector("#background");e.classList.remove("youtube-show"),t.classList.remove("background-show")},e.prototype.render=function(){var e=this;return t("div",null,t("div",{onClick:function(){e.closeBackground()},id:"background"}),t("div",{id:"youtube-video",onClick:function(){e.closeBackground()}},t("lazy-iframe",{src:"https://www.youtube.com/embed/UfD-k7aHkQE",title:"Ionic team at Polymer Summit video"})),t("main",null,t("img",{id:"logo",src:"/stencil-site/assets/img/logo.png",alt:"Stencil Logo"}),t("h1",{id:"action-call"},"魔法般的，可复用的 web component 编译器"),t("section",{id:"buttons"},t("stencil-route-link",{url:"/stencil-site/docs/getting-started"},t("button",{id:"get-started"},"现在开始")),t("stencil-route-link",{url:"/stencil-site/docs/intro"},t("button",{id:"learn-more"},"了解更多")),t("div",{onClick:function(){e.openYoutube()},id:"launch-video"},t("img",{src:"/stencil-site/assets/img/video-icon.png",alt:"Icon for Video"}),t("span",null,"Watch launch video")),t("a",{href:"https://youtu.be/UfD-k7aHkQE",rel:"noopener",id:"mobile-video"},t("img",{src:"/stencil-site/assets/img/video-icon.png",alt:"Icon for video link"}),t("span",null,"Watch launch video")))),t("section",{id:"three-points"},t("div",{class:"point-card simple"},t("h2",null,"简单"),t("p",null,"有意设计的小工具，简洁的 API，零配置，TypeScript 支持，一切就绪。")),t("div",{class:"point-card performant"},t("h2",null,"高效"),t("p",null,"gzip 压缩后仅 6kb 的运行时, 服务端渲染, 发挥 Web Components 原生潜力。")),t("div",{class:"point-card future-proof"},t("h2",null,"前沿"),t("p",null,"基于 100% 的 web 标准，构建多种多样的组件。 打破框架的约束。"))))},e}(),s=function(){function e(){}return e.prototype.componentDidLoad=function(){var e=this;"IntersectionObserver"in window?(this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&(e.handleIframe(),e.cleanup())}),this.io.observe(this.el.querySelector("iframe"))):this.handleIframe()},e.prototype.componentDidUnload=function(){this.cleanup()},e.prototype.handleIframe=function(){this.realSrc=this.src},e.prototype.cleanup=function(){this.io&&(this.io.disconnect(),this.io=null)},e.prototype.render=function(){return t("div",null,t("iframe",{frameBorder:"0",title:this.title,allowFullScreen:!0,width:"700",height:"450",src:this.realSrc}))},e}(),o=function(){function e(){}return e.prototype.render=function(){return t("div",{class:"site-header"},t("stencil-route-link",{url:"/stencil-site/",class:"logo-link"},t("img",{class:"logo",alt:"Stencil",src:"/stencil-site/assets/img/text-logo.svg"})),t("div",{class:"pull-right"},t("stencil-route-link",{urlMatch:"/stencil-site/docs",url:"/stencil-site/docs/intro"},"文档"),t("stencil-route-link",{url:"/stencil-site/demos",exact:!0},"Demos"),t("stencil-route-link",{url:"/stencil-site/pwa",exact:!0},"PWAs"),t("stencil-route-link",{url:"/stencil-site/resources",exact:!0},"资源"),t("a",{href:"https://github.com/ionic-team/stencil"},"GitHub")))},e}(),r=function(){function e(){}return e.prototype.render=function(){return t("div",null,t("iframe",{class:"star-button",src:"https://ghbtns.com/github-btn.html?user=ionic-team&repo=stencil&type=star&count=true",frameBorder:"0",scrolling:"0",width:"170px",height:"20px"}),t("ul",{id:"menu-list"},t("li",null,t("h4",null,"概要"),t("ul",null,t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/intro"},"介绍")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/getting-started"},"现在开始")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/browser-support"},"浏览器支持")),t("li",null,t("stencil-route-link",{url:"/stencil-site/pwa"},"PWAs")))),t("li",null,t("h4",null,"基础"),t("ul",null,t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/my-first-component"},"我的第一个组件")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/templating"},"使用 JSX")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/decorators"},"装饰器")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/events"},"事件")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/component-lifecycle"},"组件生命周期")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/forms"},"表单")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/handling-arrays"},"更新 Arrays 和 Objects")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/testing"},"单元测试")))),t("li",null,t("h4",null,"进阶"),t("ul",null,t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/stencil-config"},"Stencil 配置")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/prerendering"},"预渲染")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/server-side-rendering"},"服务端渲染")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/service-workers"},"Service Workers")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/shadow-dom"},"Shadow DOM")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/distribution"},"分发")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/framework-integration"},"框架集成")),t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/css-variables"},"CSS 变量")))),t("li",null,t("h4",null,"插件(Add-ons)"),t("ul",null,t("li",null,t("stencil-route-link",{url:"/stencil-site/docs/routing"},"路由")))),t("li",null,t("h4",null,"社区"),t("ul",null,t("li",null,t("a",{href:"https://join.slack.com/t/stencil-worldwide/shared_invite/enQtMjYwNjg5NDMzODQwLTdiNWZiNDMyMWRjZTBiMjIzMGFlOTZiZWVkNDVjNzc2ZTI5MzI2Y2VjZDgwYjczMjU3NWIxMDYzMzI2ZjY3NjM",title:"Stencil slack channel"},"Stencil on Slack")),t("li",null,t("a",{href:"https://twitter.com/stenciljs"},"Stencil on Twitter")),t("li",null,t("a",{href:"https://github.com/ionic-team/stencil"},"Stencil on GitHub"))))))},e}(),c=function(){function e(){}return e.prototype.render=function(){return[t("div",{id:"main-div"},t("site-header",null),t("div",{class:"app"},t("stencil-router",null,t("stencil-route",{url:"/stencil-site/",component:"landing-page",exact:!0}),t("stencil-route",{url:"/stencil-site/demos",component:"demos-page"}),t("stencil-route",{url:"/stencil-site/docs/:pageName",routeRender:function(e){return t("document-component",{pages:[{intro:"intro/index.html","browser-support":"intro/browsers.html","getting-started":"start/index.html","my-first-component":"basics/my-first-component.html",templating:"basics/templating.html",decorators:"basics/decorators.html",events:"basics/events.html","component-lifecycle":"basics/component-lifecycle.html","stencil-config":"basics/stencil-config.html",forms:"basics/forms.html","handling-arrays":"basics/handling-arrays.html",testing:"basics/testing.html",config:"compiler/config.html","server-side-rendering":"advanced/ssr/index.html",routing:"addons/stencil-router.html","service-workers":"advanced/service-worker/index.html",distribution:"advanced/distribution/index.html","framework-integration":"advanced/framework-integration/index.html",prerendering:"advanced/pre-rendering/index.html","shadow-dom":"advanced/shadow-dom/index.html","css-variables":"advanced/css-variables/index.html"}[e.match.params.pageName]]})}}),t("stencil-route",{url:"/stencil-site/resources",component:"resources-page"}),t("stencil-route",{url:"/stencil-site/pwa",component:"pwas-page"})))),t("footer",null,t("div",{id:"open-source"},t("a",{href:"http://ionicframework.com/",title:"IonicFramework.com",rel:"noopener"},t("img",{src:"/stencil-site/assets/img/ionic-os-logo.png",alt:"Ionic Open Source Logo"})),t("p",null,"Released under ",t("span",{id:"mit"},"MIT License")," | Copyright @ 2017")),t("div",{id:"footer-icons"},t("a",{class:"svg-button",id:"stencil-repo",href:"https://github.com/ionic-team/stencil",target:"_blank",rel:"noopener",title:"Open the stencil site repository on github"},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512"},t("path",{d:"M256 32C132.3 32 32 135 32 261.7c0 101.5 64.2 187.5 153.2 218l3.8.3c8.3 0 11.5-6 11.5-11.4l-.3-39c-8.4 1.8-16 2.6-22.6 2.6-43 0-53-33.5-53-33.5-10-26.5-24.8-33.6-24.8-33.6-19.5-13.6 0-14 1.4-14 22.6 2 34.4 23.8 34.4 23.8 11.2 19.6 26.2 25 39.6 25 10.5 0 20-3.3 25.6-6 2-14.7 7.8-24.8 14.2-30.6-49.7-5.8-102-25.5-102-113.5 0-25 8.7-45.6 23-61.6-2.3-5.7-10-29 2.2-60.7 0 0 1.6-.5 5-.5 8 0 26.4 3 56.6 24 18-5 37-7.5 56-7.6 19 0 38.3 2.6 56.2 7.7 30.2-21 48.5-24.2 56.6-24.2 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.2 23 36.7 23 61.7 0 88.2-52.4 107.6-102.3 113.3 8 7 15.2 21 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3 11.5 11.4 11.5 1.2 0 2.6 0 4-.4 89-30.4 153.2-116.5 153.2-218C480 135 379.7 32 256 32z"}))),t("a",{class:"svg-button",id:"stencil-twitter",href:"https://twitter.com/stenciljs",target:"_blank",rel:"noopener",title:"Open the stencil account on twitter"},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512"},t("path",{d:"M492 109.5c-17.4 7.7-36 13-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11-39.4 19.2-61.5 23.5-17.7-19-43-30.7-70.7-30.7-53.5 0-96.8 43.4-96.8 97 0 7.5.8 15 2.5 22-80.5-4-152-42.6-199.6-101.3-8.4 14.3-13.2 31-13.2 48.7C39.8 164 57 193.7 83 211c-16-.3-31-4.7-44-12v1.2c0 47 33.4 86 77.7 95-8 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48 66.5 90.5 67.3-33 26-75 41.6-120.3 41.6-7.8 0-15.5-.5-23-1.4C62.7 432 113.6 448 168 448 346.7 448 444 300.3 444 172.2c0-4.2 0-8.4-.3-12.5 19-13.7 35.3-30.7 48.3-50.2z"}))),t("a",{class:"svg-button",id:"ionic-forum",href:"https://stencil-worldwide.herokuapp.com",target:"_blank",rel:"noopener",title:"Join the stencil worldwide slack"},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512"},t("path",{d:"M213.6 236.2l64-21.4 20.7 61.8-64 21.4z"}),t("path",{d:"M213.6 236.2l64-21.4 20.7 61.8-64 21.4z"}),t("path",{d:"M476 190C426.3 25 355-13.4 190 36S-13.4 157 36 322s121 203.4 286 154 203.4-121 154-286zm-83.4 107l-31 10.5 10.6 32.2c4.2 13-2.7 27.2-15.7 31.5-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.5-7-23-17l-10.6-32-64 21.4L261 377c4.2 13-2.7 27.2-15.7 31.5-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.7-7-23-17l-11-32.3-31 10.3c-2.7.8-5.8 1.5-8.4 1.2-10-.5-19.6-7-23-17-4.2-13 2.7-27.2 15.7-31.5l31-10.4-20.6-61.7-31 10.4c-2.8.8-6 1.5-8.5 1.2-10-.5-19.6-7-23-17-4.2-13 2.7-27.2 15.7-31.5l31-10.4-11-32c-4-13 2.8-27.2 15.8-31.5 13-4.2 27.2 2.7 31.5 15.7l10.7 32.2 64-21.5-10.6-32.3c-4.2-13 2.7-27.2 15.7-31.5 13-4.2 27.3 2.7 31.6 15.7l10.7 32 31-10.3c13-4.2 27.3 2.7 31.6 15.7 4 13-2.8 27.2-15.8 31.5l-31 10.3 20.6 61.8 31-10.3c13-4.2 27.3 2.7 31.6 15.7 4.2 13.2-2.7 27.4-15.8 31.7z"})))))]},e}();e["landing-page"]=l,e["lazy-iframe"]=s,e["site-header"]=o,e["site-menu"]=r,e["stencil-site"]=c},["landing-page",[["el",7,0,1]],{}],["lazy-iframe",[["el",7,0,1],["realSrc",5,0,1],["src",1,1,2],["title",1,1,2]],{}],["site-header",0,{}],["site-menu",0,{}],["stencil-site",0,{}]);;