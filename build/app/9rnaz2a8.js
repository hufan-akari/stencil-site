/*! Built with http://stenciljs.com */
App.loadComponents("9rnaz2a8",function(e,t,n,o,i){var r=function(){function e(){this.demos=[{title:"IonicHN",description:"Hacker News PWA built with @stencil/core and @ionic/core",url:"https://corehacker-10883.firebaseapp.com/"},{title:"StencilNews",description:"Demo of how you could use @stencil/core to build a fast, modern News PWA",url:"https://stencilnews.firebaseapp.com/"}]}return e.prototype.render=function(){return t("div",0,t("h1",0,n("Demos")),t("h4",0,n("Awesome demos of apps built using Stencil and Ionic")),this.demos.map(function(e){return[t("h4",0,e.title),t("p",0,e.description),t("p",0,t("a",{a:{target:"_blank"},p:{href:e.url}},n("Demo")))]}))},e}(),c=function(){function e(){}return e.prototype.render=function(){return t("div",0,this.pages.map(function(e){return t("app-marked",{p:{doc:e}})}))},e}();e["DEMOS-PAGE"]=r,e["DOCUMENT-COMPONENT"]=c},["DEMOS-PAGE",[["demos",5]],{}],["DOCUMENT-COMPONENT",[["pages",1]],{}]);