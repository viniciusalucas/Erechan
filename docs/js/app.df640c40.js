(function(e){function t(t){for(var a,o,r=t[0],l=t[1],c=t[2],g=0,m=[];g<r.length;g++)o=r[g],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},i={app:0},n=[];function o(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"89b511c6"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(e){var t=[],s=i[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,a){s=i[e]=[t,a]}));t.push(s[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(e);var c=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(g);var s=i[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,s[1](c)}i[e]=void 0}};var g=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/g/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var g=0;g<l.length;g++)t(l[g]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"19c6":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPBSURBVHgB5ZuNUeMwEIXXzBUQKjhRAaED0wFXAaEC6IBQAVABpoLjKsAdwFVgUwHp4J3WkoNiEv9qZXvum1nCxEmkfV5r15IckTAAlH6JtZ1qU9YW9tUl17axr3+1vbNFUZTT3NBOx9rutWUYTqbtiX+Tpozu4ELbLfw4XSfGCiaqpoHj+CfCkdk2FY2J7sB1YMf3CbGi0LDy2l4xHTKEigbd0CXGPeuH4D7dkCQw193UuSUJYFLRXHgin2Bezpf4EQHzdL5kmAiYxzXfRL8xASbHhyKDKZ8Xtu0L+K0oL7s6z3k+VKrLYB2v9GEBfyKwL6qt/wTZer7KRU0/Yvjjta3zKwSkoS8L+OVboRRVGlT6hZVSFI5jfc+/OXSwSaSOcDsnbntHlQ/wYKEoLMtDB1BzefSEx5qdKIicxhSFP/tMru2sGgUwA+ObQH92osCNgJjCO0+2zbfybNvrPiYZ55mdKHAjIKNxBBiDXEfACf9TRIBVXNH/g7I+by+BbpWSH3Jtj9qutJ2RyQYckcf2vZxk+RpgEa7w4YpsjRZVGUw1mkEOvuQpsp3JSB6e5//VZZ4fJkzbVXD9UD+oJg97hJ0/ryt4ar4nyTmPAdIC5GTOfFfnqc93OrJkAU5Jlpe+y1uQXw1SLIAiWZ6pP9LZ6WcE4QLIprbOwJTCnyRLLh4BNWlINXzV943QPtQRjUPaYlwIUpyNJUDtuICvPQXijCXAS8PxmALBAuQUlqRFfpdZ3vpOMQhKFxtVmsKfCzNFYdiEjgC+D08bPnNN4fhgAT4oHGmLz8QUjncWQPqGw+Wx7iDCT8wUAqQUBg7/JrFDT8y8F2UqwswHXmkBkkMHA5W+LsW8YFkH/CF50objIUpfl5T/lAI0FSaDG5tK6etQpONCAJuacpJjMqWvZZuO3VJ4yH17E7URxtERHYBkuCv/cQV4IJmqsE3puxdbFfomJ2c82gpgO/lI/hkSWRICPLvjUXV5nFMRp8QFeWLgjJDv9cGczOx0Xr6xcztso+COPII9219awneEivxy12qCFn73AcfUAZjV4Xv4p/3iD/xuksrQIgpgHL+BzHJYt01StkM+9wplsJEA4+jS/j6f6d+Q35F2Q32AWcicO2sagv6BBPMlIR9gniIk5BPMS4SEJMA8xoQ1SQKTqqb6yMyKQgD57StdecUYj9DB5PIM4yH/oFQLETga1oGFKDdbebtpG4wVQjoissk5vg+Yff4J/D08/QCh7TJSU05bYAanpbXyEfqmx+d5tYrXENJI+PH5f1ZN7Y8l+29QAAAAAElFTkSuQmCC"},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("header",[a("div",{staticClass:"inner-header"},[a("nav",[a("ul",[e._m(0),e.isHome?e._e():a("li",[a("a",{attrs:{href:"/g"}},[e._v("mensagens")])]),e.isInfo?e._e():a("li",[a("a",{attrs:{href:"/g#/info"}},[e._v("info/minha conta")])]),a("li",[e.auth.loggedIn?e._e():a("button",{on:{click:function(t){e.janitor=!e.janitor}}},[e._v("login")]),e.auth.loggedIn?a("button",{on:{click:function(t){return e.logOut()}}},[e._v("logout")]):e._e()])])])]),e.janitor?a("div",{staticClass:"janitor-login"},[e.auth.loggedIn?e._e():a("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("div",{staticClass:"fields"},[a("div",{staticClass:"login-wrapper"},[a("label",{attrs:{for:"janitor-login"}},[e._v("email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"email",name:"janitor-login",id:"janitor-login",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),a("div",{staticClass:"pwd-wrapper"},[a("label",{attrs:{for:"janitor-pass"}},[e._v("pass:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"janitor-pass",id:"janitor-pass",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),a("div",{staticClass:"btns"},[a("button",{attrs:{type:"submit"}},[e._v("entrar")]),e.showOptions?a("button",{attrs:{type:"button"}},[e._v("recuperar senha")]):e._e(),e.showOptions&&!this.auth.loggedIn?a("a",{attrs:{href:"/g#/info"}},[e._v("criar conta")]):e._e(),a("div",{staticClass:"img-wrapper",attrs:{title:"Informações"},on:{click:function(t){e.showOptions=!e.showOptions}}},[a("img",{attrs:{src:s("19c6"),alt:"Registro/Alterar senha"}})])])]),e.loginFlash.header?a("div",{staticClass:"flash",class:e.loginFlash.type},[a("button",{staticClass:"flash-btn",attrs:{type:"button"},on:{click:function(t){e.loginFlash.header=""}}},[e._v("x")]),a("strong",[e._v(e._s(e.loginFlash.header))]),e._v(" "+e._s(e.loginFlash.text)+" "),a("a",{attrs:{href:e.loginFlash.link}},[e._v(e._s(e.loginFlash.message))])]):e._e()]):e._e()]),a("router-view",{staticClass:"container",attrs:{auth:this.auth}})],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("p",[e._v("gchan")]),a("img",{attrs:{src:s("a669")}})])}],o={name:"App",data:()=>({janitor:!1,username:"",password:"",SERVERurl:"https://gchan-message-board.herokuapp.com",showOptions:"",auth:{loggedIn:"",username:"",id:""},loginFlash:{type:"",header:"",text:"",message:""}}),methods:{ajaxGtmRequest(){const e=document.createElement("script");e.type="text/javascript";const t="(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n      })(window,document,'script','dataLayer','GTM-K57247W');";try{e.appendChild(document.createTextNode(t)),document.head.appendChild(e)}catch(s){e.text=t,document.head.appendChild(e)}},getCookieValue(e){const t=document.cookie.match(`(^|;)\\s*${e}\\s*=\\s*([^;]+)`);return t?t.pop():""},checkCookies(){const e=this.getCookieValue("cookie_consent_variable");if(""!==e)this.cookie_consent=e;else{const e=new Date,t=new Date(e.getTime()+31536e6).toGMTString();document.cookie="cookie_consent_variable=true;expires="+t,this.cookie_consent=!0}return window.ua_consent=e,this.ajaxGtmRequest(),e},async login(){fetch(this.SERVERurl+"/login",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},credentials:"include",body:`email=${this.username}&password=${this.password}`}).then(e=>e.json()).then(e=>{e.id&&e.name&&e.email&&e.password?(this.auth.loggedIn=!0,this.auth.username=e.name,this.auth.id=e.id,this.loginFlash.type="success",this.loginFlash.header="Parabéns!",this.loginFlash.link="/g",this.loginFlash.text="Login realizado com sucesso!\nVocê já pode postar.\n",this.username="",this.password=""):e.message&&(this.loginFlash.type="error",this.loginFlash.header="Oh não!",this.loginFlash.text=e.message+"\nTente novamente!\n")})},checkLogin(){fetch(this.SERVERurl+"/login",{method:"GET",credentials:"include"}).then(e=>e.json()).then(e=>{e.id&&e.name&&e.email&&e.password?(this.auth.loggedIn=!0,this.auth.username=e.name,this.auth.id=e.id):this.auth.loggedIn=""})},logOut(){fetch(this.SERVERurl+"/logout",{method:"DELETE",credentials:"include"}).then(e=>e.json()).then(e=>{e.login||(this.auth.loggedIn=!1,this.auth.username="",this.auth.id="")})}},beforeMount(){this.checkLogin()},mounted(){this.checkCookies()},computed:{isHome(){return"Home"===this.$route.name},isInfo(){return"Info"===this.$route.name}}},r=o,l=s("2877"),c=Object(l["a"])(r,i,n,!1,null,null,null),g=c.exports,u=s("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{staticClass:"create-thread"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.addMessage()}}},[e.error?a("div",{staticClass:"alert-error"},[a("span",{on:{click:function(t){e.error=""}}},[e._v("x")]),a("h4",[e._v("Erro!")]),a("p",[e._v(e._s(e.error))])]):e._e(),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[e._v("Usuário")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"username","aria-describedby":"usernameHelp",placeholder:"Anonymous",required:""},domProps:{value:e.username}}),e.auth.id?a("small",{staticClass:"form-text text-muted",attrs:{id:"usernameHelp"}},[e._v(" anonimato é para os fracos ")]):a("small",{staticClass:"form-text text-muted",attrs:{id:"usernameHelp"}},[e._v(" remember: no use for a name ")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"subject"}},[e._v("Assunto")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.message.subject,expression:"message.subject"}],staticClass:"form-control",attrs:{type:"text",id:"subject",placeholder:"subject",required:""},domProps:{value:e.message.subject},on:{input:function(t){t.target.composing||e.$set(e.message,"subject",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[e._v("Mensagem")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message.message,expression:"message.message"}],staticClass:"form-control",attrs:{id:"message",rows:"5"},domProps:{value:e.message.message},on:{input:function(t){t.target.composing||e.$set(e.message,"message",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"imageURL"}},[e._v("image URL")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.message.imageURL,expression:"message.imageURL"}],staticClass:"form-control",attrs:{type:"url",id:"imageURL",placeholder:"https://~"},domProps:{value:e.message.imageURL},on:{input:function(t){t.target.composing||e.$set(e.message,"imageURL",t.target.value)}}}),a("div",{staticClass:"gif-search-toggle",attrs:{"data-toggle":"buttons"}},[a("input",{attrs:{type:"radio",name:"options",id:"option1",autocomplete:"off",checked:"",value:"giphy"},on:{change:e.searchGif}}),a("label",{staticClass:"btn btn-primary",attrs:{for:"option1"}},[e._v("Giphy")]),a("input",{attrs:{type:"radio",name:"options",id:"option2",autocomplete:"off",value:"gfycat"},on:{change:e.searchGif}}),a("label",{staticClass:"btn btn-primary",attrs:{for:"option2"}},[e._v("gfycat")])]),a("label",{attrs:{for:"giphy-search"}},[e._v("Busque um gif")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.message.giphyURL,expression:"message.giphyURL"}],staticClass:"form-control",attrs:{type:"text",id:"giphyURL",placeholder:"cats"},domProps:{value:e.message.giphyURL},on:{keyup:e.searchGif,input:function(t){t.target.composing||e.$set(e.message,"giphyURL",t.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Enviar")])]),e.isGifBeingSearched?a("div",{staticClass:"gifBoxWrapper"},[e.emptyGifResults?a("div",{staticClass:"emptyGifResults"},[a("img",{staticClass:"emptyGifResultsImg",attrs:{src:"http://via.placeholder.com/480?text=nenhum gif :("}})]):e._e(),""===e.emptyGifResults?a("div",{staticClass:"gifBox"},[e._l(e.uniqueGifs,(function(t){return a("div",{key:t.id,staticClass:"gifBoxGif"},[a("img",{staticClass:"gif-thumb",attrs:{"data-original":t.originalUrl,src:t.thumbUrl},on:{click:e.selectGif}})])})),a("div",{staticClass:"gif-attribute"},["giphy"===this.apiRoute?a("a",{attrs:{href:"https://giphy.com/",title:"Visitar giphy.com",target:"_blank"}},[a("img",{attrs:{src:s("9110"),alt:"Powered by GIPHY"}})]):e._e()])],2):e._e(),a("div",{staticClass:"paginate-arrows"},[e.hasPag?a("ul",{staticClass:"pagination"},[a("div",e._l(e.numPages,(function(t){return a("li",{key:t,staticClass:"page-item",class:{active:e.currPage==t},on:{click:e.paginateGif}},[a("p",{staticClass:"page-link"},[e._v(e._s(t))])])})),0)]):e._e()])]):e._e()]),e._l(e.reversedMessages,(function(t){return a("div",{key:t._id,staticClass:"list-unstyled d-flex flex-column align-items-center"},[a("li",{staticClass:"media"},[t.imageurl?a("img",{staticClass:"img-thumbnail",attrs:{loading:"lazy","data-src":t.imageurl,alt:t.subject,src:t.imageurl},on:{error:function(t){return e.createVideo(t)},load:function(t){return e.preventVideo(t)}}}):a("img",{staticClass:"img-thumbnail",attrs:{loading:"lazy",src:"http://via.placeholder.com/300?text=:("}}),a("div",{staticClass:"align-self-center media-body"},[e.messageFlash.header&&e.messageFlash.messageID===t.id?a("div",{staticClass:"flash",class:e.messageFlash.type},[a("button",{staticClass:"flash-btn",attrs:{type:"button"},on:{click:function(t){e.messageFlash.header=""}}},[e._v("x")]),a("strong",[e._v(e._s(e.messageFlash.header))]),e._v(" "+e._s(e.messageFlash.text)+" "),a("a",{attrs:{href:e.messageFlash.link}},[e._v(e._s(e.messageFlash.message))]),a("div",{staticClass:"opt-btns"},[a("button",{attrs:{type:"button"},on:{click:function(s){return e.handleMessage(t.id,"delete",s)}}},[e._v(" Deletar ")])])]):e._e(),a("div",{staticClass:"edit_tab",attrs:{"data-message-id":t.id}},[a("h4",{staticClass:"mt-0 mb-1"},[e._v(e._s(t.username))]),t.user_id===e.auth.id?a("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(t){return e.deleteMessage(t)}}},[e._v("deletar")]):e._e(),t.user_id===e.auth.id?a("button",{staticClass:"edit",attrs:{type:"button"},on:{click:function(t){return e.editMessage(t)}}},[e._v("editar")]):e._e(),t.user_id!==e.auth.id?a("button",{staticClass:"react",attrs:{type:"button"},on:{click:function(t){return e.reactMessage(t)}}},[e._v("reagir")]):e._e()]),a("h5",{staticClass:"mt-0 mb-1"},[e._v(e._s(t.subject))]),e._v(" "+e._s(t.message)+" "),a("br"),a("small",[e._v(e._s(t.created))]),a("br"),"giphy"==t.gif_origin?a("img",{staticClass:"gif_origin",attrs:{alt:"powered by GIPHY",src:s("ff09")}}):e._e()])]),a("hr")])}))],2)},d=[];const h="https://gchan-message-board.herokuapp.com/messages",p="https://gchan-message-board.herokuapp.com/";var A={name:"Home",props:{auth:{default:()=>({username:"",loggedIn:"",id:""}),type:Object}},data:()=>({gifsPerPage:4,currPage:1,numPages:5,error:"",apiRoute:"giphy",isGifBeingSearched:"",emptyGifResults:"",hasPag:"",messages:[],gifs:[],message:{username:"Anonymous",subject:"",message:"",imageURL:"",user_id:0,gif_origin:"none"},messageFlash:{type:"",header:"",text:"",message:"",messageID:""}}),computed:{reversedMessages(){return this.messages.slice().reverse()},uniqueGifs(){const e=[],t=new Map;return this.gifs.forEach(s=>{t.has(s.id)||(t.set(s.id,!0),e.push({id:s.id,thumbUrl:s.thumbUrl,originalUrl:s.originalUrl}))}),e},username(){return this.auth.username||this.message.username}},mounted(){fetch(h).then(e=>e.json()).then(e=>{this.messages=e.results})},methods:{isMyPost(){return!0},clearMsgForm(){this.message.username="Anonymous",this.message.subject="",this.message.message="",this.message.imageURL="",this.message.user_id=0},addMessage(){const e=document.querySelector(".create-thread > form > button[type=submit]");e.disabled=!0,this.auth.username&&(this.message.username=this.auth.username,this.message.user_id=parseInt(this.auth.id,10)),/giphy/.test(this.message.imageURL)?this.message.gif_origin="giphy":/gfycat/.test(this.message.imageURL)?this.message.gif_origin="gfycat":/tenor/.test(this.message.imageURL)&&(this.message.gif_origin="tenor"),fetch(h,{method:"POST",body:JSON.stringify(this.message),headers:{"content-type":"application/json"}}).then(e=>e.json()).then(t=>{if(console.log(t),t.details){const e=t.details.map(e=>e.message).join(".");this.error=e}else t.error?"psql"===t.origin&&"23505"===t.code&&(this.error="Mensagem duplicada!\ngit gud e altere algum dos campos antes de enviar ᕦ(ò_óˇ)ᕤ"):(this.error="",this.messages.push(JSON.parse(t)),this.clearMsgForm());e.disabled=!1})},deleteMessage(e){const t=e.target.parentElement.getAttribute("data-message-id");this.msgFlash("error",t,"Deletar mensagem","Tem certa que deseja deletar esta mensagem? ):","ela não ofendeu ninguém")},editMessage(){alert("o dev é burro e ainda não adicionou este método (づ´• ﹏ •`)づ")},reactMessage(){alert("o dev é burro e ainda não adicionou este método (づ´• ﹏ •`)づ")},handleMessage(e,t,s){let a,i,n,o,r;switch(s.target.disabled=!0,t){case"delete":a="DELETE",i=JSON.stringify(""),n={"content-type":"text/plain"},o="message/"+e,r=e=>this.messages.filter(t=>t.id!==e);break;default:a="POST",n={"content-type":"application/json"}}fetch(`${p}${o}`,{method:a,headers:n,body:i,credentials:"include"}).then(e=>e.json()).then(t=>{t?this.messages=r(e):(s.target.disabled=!1,this.msgFlash("error",e,"Ocorreu um erro!","Tente deletar sua mensagem novamente.","Atualizar a página pode resolver o problema!"))})},msgFlash(e,t,s,a,i){this.messageFlash.type=e,this.messageFlash.header=s,this.messageFlash.text=a,this.messageFlash.message=i,this.messageFlash.messageID=parseInt(t,10)},searchGif(e){let t;switch("giphyURL"===e.target.id?(t=e.target.value,this.isGifBeingSearched=""===t?"":1):t=document.querySelector("#giphyURL").value,this.hasPag=""===t?"":"1",document.querySelector("input[type='radio']:checked").value){default:this.apiRoute="giphy",fetch(`https://api.giphy.com/v1/gifs/search?api_key=5KnNW5U9nJ2Xjnas3lugKxMIXVdCsrqF&q=${t}&limit=${this.gifsPerPage}&offset=${(this.currPage-1)*this.gifsPerPage}`).then(e=>e.json()).then(e=>{const t=e.data;0===t.length?this.emptyGifResults=1:this.emptyGifResults="",this.gifs=[],t.forEach(e=>{this.gifs.push({id:e.id,thumbUrl:e.images.preview_webp.url,originalUrl:e.images.original.webp})})}).catch(e=>{console.log(e),this.emptyGifResults=1});break;case"gfycat":this.apiRoute="gfycat",fetch(`https://api.gfycat.com/v1/gfycats/search?count=${this.gifsPerPage*this.numPages}&search_text='${t}`).then(e=>e.json()).then(e=>{const t=e.gfycats;this.gfycatCursor=e.cursor,0===t.length?this.emptyGifResults=1:this.emptyGifResults="";const s=(this.currPage-1)*this.gifsPerPage,a=s+this.gifsPerPage;this.gifs=[];let i=0;t.forEach(e=>{i>=s&&i<a&&this.gifs.push({id:e.gfyId,thumbUrl:e.max1mbGif,originalUrl:e.webpUrl}),i+=1})}).catch(e=>{console.error(e),this.emptyGifResults=1});break}},selectGif(e){const t=e.target.getAttribute("data-original");document.querySelector("#imageURL").value=t,this.message.imageURL=t},paginateGif(e){this.currPage=e.target.innerText,this.searchGif(e)},createVideo(e){const t=e.target,s=document.createElement("video");s.src=t.src,s.autoplay=!0,s.loop=!0,s.muted=!0,s.playsInline=!0,t.parentElement.insertBefore(s,t),t.style.display="none",t.error=null,s.onerror=function(e){e.target.parentElement.querySelector(".img-thumbnail").src="http://via.placeholder.com/300?text=erro ao carregar url  :("}},preventVideo(e){const t=e.target,s=t.previousElementSibling;s&&"VIDEO"===s.tagName&&(t.previousElementSibling.remove(),t.style.display="initial")}}},f=A,v=Object(l["a"])(f,m,d,!1,null,null,null),b=v.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("informações gerais.")]),a("section",{attrs:{id:"cookies"}},[a("div",{attrs:{id:"cookies-text"}},[a("p",[e._v("nosso site coleta dados anônimos, como as páginas mais visitadas e as ações mais frequentes realizadas no site.")]),a("p",[e._v("você pode alterar suas preferências abaixo.")]),a("form",[a("h2",[e._v("Sobre o envio de dados anônimos de uso:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.cookie_consent_computed,expression:"cookie_consent_computed"}],attrs:{name:"cookie-consent",id:"cookie-consent"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.cookie_consent_computed=t.target.multiple?s:s[0]},function(t){return e.selectCookieConsent(t)}]}},[a("option",{attrs:{value:"true"}},[e._v("aceito a coleta de dados")]),a("option",{attrs:{value:"false"}},[e._v("recuso a coleta de dados")])])])])]),a("section",{attrs:{id:"register"}},[e.auth.loggedIn?e._e():a("h3",[e._v("Criar uma conta")]),e.auth.loggedIn?a("h3",[e._v("Bem vindo, "+e._s(e.auth.username))]):e._e(),e.auth.loggedIn?e._e():a("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[a("label",{attrs:{for:"name"}},[e._v("nome")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",id:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("label",{attrs:{for:"email"}},[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",id:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("div",{staticClass:"pwd-wrapper"},[a("label",{attrs:{for:"password"}},[e._v("senha")]),a("div",{staticClass:"img-wrapper"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("div",{staticClass:"img",attrs:{title:"Mostrar senha"},on:{click:function(t){return e.showPassword(t)}}},[a("img",{staticClass:"active",attrs:{src:s("9864"),alt:"Mostrar senha"}}),a("img",{attrs:{src:s("ec66"),alt:"Esconder senha"}})])]),a("input",{attrs:{type:"submit",value:"Enviar"}})])]),e.signUpFlash.header?a("div",{staticClass:"flash",class:e.signUpFlash.type},[a("button",{staticClass:"flash-btn",attrs:{type:"button"},on:{click:function(t){e.signUpFlash.header=""}}},[e._v("x")]),a("strong",[e._v(e._s(e.signUpFlash.header))]),e._v(" "+e._s(e.signUpFlash.text)+" "),a("a",{attrs:{href:e.signUpFlash.link}},[e._v(e._s(e.signUpFlash.message))])]):e._e()])])},C=[],w={name:"Info",props:{auth:{default:()=>({username:"",loggedIn:""}),type:Object}},data:()=>({cookie_consent:window.ua_consent,SERVERurl:"https://gchan-message-board.herokuapp.com",name:"",email:"",password:"",signUpFlash:{type:"",header:"",text:"",message:""}}),mounted(){},computed:{cookie_consent_computed:{get(){const e=document.cookie.match("(^|;)\\s*cookie_consent_variable\\s*=\\s*([^;]+)");return e?e.pop():"true"},set(){}}},methods:{selectCookieConsent(e){const t=new Date,s=new Date(t.getTime()+31536e6).toGMTString();this.cookie_consent=e.target.selectedOptions[0].value,"false"===this.cookie_consent&&(document.cookie="_gat_UA-182341584-1=;expires="+new Date(0).toGMTString(),document.cookie="_ga=;expires="+new Date(0).toGMTString(),document.cookie="_gid=;expires="+new Date(0).toGMTString()),document.cookie=`cookie_consent_variable=${e.target.value};expires=${s}`},showPassword(e){const t=e.target.children;t[0].classList.toggle("active"),t[1].classList.toggle("active");const s=e.target.previousElementSibling,a=s.getAttribute("type");"password"===a?(s.setAttribute("type","text"),e.target.title="Esconder senha"):(s.setAttribute("type","password"),e.target.title="Mostrar senha")},register(e){fetch(this.SERVERurl+"/register",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`name=${this.name}&email=${this.email}&password=${this.password}`}).then(e=>e.json()).then(t=>{t?"success"===t?(e.target.reset(),this.signUpFlash.type="success",this.signUpFlash.header="Bem vindo!",this.signUpFlash.text=`Cadastro realizado com sucesso, ${this.username}!\nRealizando login...\n`,this.signUpFlash.message="Aguarde...",this.login()):console.log(t):(this.signUpFlash.type="error",this.signUpFlash.header="Oh não!",this.signUpFlash.link="#contact",this.signUpFlash.text="Ocorreu um erro ao realizar seu cadastro.\nAtualize a página ou \n",this.signUpFlash.message="entre em contato.")})},async login(){fetch(this.SERVERurl+"/login",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},credentials:"include",body:`email=${this.email}&password=${this.password}`}).then(e=>e.json()).then(e=>{e.id&&e.name&&e.email&&e.password?(this.auth.loggedIn=!0,this.auth.username=e.name,this.signUpFlash.type="success",this.signUpFlash.header="Parabéns!",this.signUpFlash.link="/g",this.signUpFlash.text="Login realizado com sucesso!\nVocê já pode postar.\n",this.signUpFlash.message="Ir para as postagens!",this.username="",this.password=""):e.message&&(this.signUpFlash.type="error",this.signUpFlash.header="Oh não!",this.signUpFlash.text=e.message+"\nTente novamente!\n")})}}},U=w,R=Object(l["a"])(U,y,C,!1,null,null,null),F=R.exports;a["a"].use(u["a"]);const x=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/info",name:"Info",component:F}],I=new u["a"]({routes:x});var E=I;a["a"].config.productionTip=!1,new a["a"]({router:E,render(e){return e(g)}}).$mount("#app")},9110:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAWCAYAAACFbNPBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABRdJREFUeNrsW6+X2zgQdu8FhMXQbAPDmmNhG1jWwGX1sWXNf7A5dqxZVtbAY7dlYedlgSoLdJmhw8xy1nuf3ptTNZLl2N5Nq3lvXhNZHo2k+eZXtm/O53MU6OpoDp5q4xk4UFckARL4ajitOT/bqax5U3NseH/DvNNkjomkLrual4y+meGdzLI/0/wNnnH73ljkbSx6Nzrz34KLuAqSkULU/KXmG8fcSc0PmD/vWS+py4ea/635qea4x7VSZvzBEElVlH3wlPUDBYBcDzjetjDeIdOt9wBJXyT38sg82xnGtszcR59zCQB5/fSEqNCG1gPreuvjnVvQpuYTs+5K2/etYd53yGhMI09PplMJ1mlWc4LPOZjKqWouDPILPFMUg+X42BLClaykgY5TRobSKcFauvzK82wqonfC7FmtxclPLZHjEeDJSNGeEsP4g/GsbenZkMJMGFDuegJIiT3+w0SMDDaysaRWZV8A4TyDIKFVXvidwZALzCmAdGkUf2mGIuXvaz6Q8Ts82+JClo4Qm1q8sHDMySHnHWPwB1xA5Xk2e+xZnslnAhL5/R7ythaPqdMJ5yC0dQT0X8MIujZS/exjnIcO4LdRvyTv8itSOj2l3ODuJpemVm0Aogx9T76/g+FK4zrCUMZQRBBPs4SRfMa8BaLMkcxR/x7IBSRYs3TkmwWJHoKsPca6K+hYMvuIDIa/I3oswJHhPdfZKAeSYkzJXZELr5gi84bxlMJyR9uB0qkSa31hwNRn/ZPiPnUgfGTmf/NNrdoCpNLSpb/hsWJc6NgQBTKML4jB6ACZkUgS4/CnxOB1T++6uFzz/Esi17QPLqJQD30PvQ9MmNZlZoiAKrVSXaUFScuO5AxcHtvkINIGOb/osRaJLXdgq1POHYBTGvwnD0CVQwDEdkCcQUcEFDE+FwZQCJJLZ+S5aGA4Nm+VMHovDYCwgeYArz9l9phoxprA+AsSeWZk3crR9YkbAHfKFKNDddfWFlD2TVvch2v/f16iz6gFIKhhLcilTZlUJTIUpwLpxoy8d8D3Ofl8NMhzAYT+wkyL/NwBkMwBkNJhuGND7RJjvCKAuCPRt/I8/9MLdtOaev2vA+qUwpYmXadWXQFEXTrN7xMDIGba9yMByAzvFhinxfixYeHKRY4xKZRNBbkPzRwpHpWZkAbDkqx/JB2rY4v7mkSvn7YDrpU7Uq300gVGLRTaWcLqHIZPvePYYPAlAQONAAeSp7c1IgF5CeqGpIOLUJGtSe0SEcDHhohTeZy1iVYkNcsYo7h5IXA06RSdLCnPvIUT2DIAeewi1Rt1jGYFknutQzWG8RdaFJlpwFEdq5hJrzivsGfSuicYVApgV0y9YOpCpVqaptIiW8RKteh1ST7OvbfWAJIZUtChAXKCJ9823BfXgMg6rKnKLoSMPAFQOOY8QTHarSkADmFIs/LoxzZuRrpdtu4U10UqDUY2J7WNKwIUzLqZ5dBzRsbBEAULD4B8Nxj7LcCeMilwX38P9czoKMi9/3TkA5CmOXsWNeuBV4xMYemEiRY66u+59rFvcY4+9YyPfOmVTb8zfIAXpoY5RbTsq05ZRr8gjaJAr5lUpDClHTKyfAxH1C+FP1Z8/SSjwrcL3l+HIwwA+ZmpRHrj+/uCrF9+j4b50S6kWIFeHCQrACV11BrPSM12TDPh2bFWkzlNSTQcsz3LWzYQ8i428Cb8n/SrpWn0/1/uyxAtuqcAkECBLPSfAAMAD0//f+CYk/8AAAAASUVORK5CYII="},9864:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMHSURBVHgB7VXLkdpAEJVY4AAcRARmIwBHsFJRxfdgiACIADYCIAIgAiAC4MSvKMsRrIjA2gisC58qfn5PHm1p5cXL+rrqKmlmenr69W96JMknn3z67CRLH6TpdKrKspzCNBkIBBLuvcvlYuH7gc/I5/P6LfpuMkCAVgBYEiA62GvwzPP5bFEGewr4CXwpzB9s5bKsn06nNowx/8sAAFfv7u4qVAyg4X6/74bD4QR4quSJgOM9APVisWgsFosU5g3IVGDI4Joh8jWPAdIEKBW3AWzEYrE61lUoUzAaUJzCniI8ZRTG4CcwVzFnZNoYdaGyxaiQByMGbqyAezEajZT5fN4B+AjCk91uVw4Ggw+RSOQJ6xYAJ5vN5h7j0AEX3jP8JXj5CDnum9DRAeh3bKsArYKvYd1cLpcd4vxlALxOEAjTBEEgfIlGoz+hNA7eI73K5XKNcrls0QumxBM4JRQKdRhmRKHHlDigcGpEAaTv6/F4jBOHeC8GQKACi59wqLfdbmsAHmFexZZGUFFcazca5C8eAxgJdbVafWGK6AiNyWaz91ivGQ2kUhHRGHJNI4IEZ44IRqtFuCcE9uj/xd9sNmvwRrDapRsJoC2ASQJUc68ZgRZDlclkaLXEQvGC87qJ4qKXlLsGbqbT6WcWKOQNrxHSn1S+rCFTDrCqsVZZGCg4emZ5tSJ3OuV4O0SD8ebfvglUKObfRBpeEdIxJoZThHSaEbALhQV3OBzirF5UatN9UNM0C8XYg1yfh6GIeayJhmTiG1OMCnH/66wFXl+3Dp7DXh/nSq8M91rJwmBu3upiyD/5bEraW01FgHdxrlwoFMYenbwJaxS5fZOuGuA6xOZR8TYPGNGFEXV6Lfq+Bbkk3wfRMWvOO0CvnQbGG4ba6npx3mvF7Gx94bXd2eg5+VDINpsUoia9Q+Ma0DsHmDKsBYy1a+/BzY8RwOh1SaTGfvFEC2bbVWgkGlGS+QeP0dDB7733Kn7oORa55COjirCzmp22aoD/jCLWkWfdnWeffPLJp3/Rb+iuLGtkumTgAAAAAElFTkSuQmCC"},a669:function(e,t,s){e.exports=s.p+"img/sham.e93e9eaa.png"},ec66:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHjSURBVHgB7VXtdYMwDBSdgA3iDcoGZYPSCcIGsEHaCUIngEzQbgCdIHQC0gmaDVwpnIPjmCT0b7j37mELWSd/imjGjBn3joAmQmsd8ydiPjKV83vP/GK2QRA0dANuSgCiS2YCkYb5zdyhLwiRkCT3BJv4vXEyO/pPAiycQlgxN8wC7ZjOV8DMvmHBlsdKIjnGV9cScYVjZg1KO2SumB3zF3b5Gki7hF3DL2UqsDK2a8IitEbA3BEWFLCl+hwyJoJgjf5RFPYO8UOfuHH4gEiGICKayD/Hv/IkUeNfglh2TIW4ZjWUHWzpzLpmbnW/jwT7p5NAqf1YQExbvq+26Ekf4p21fNIuHDFJoLTaWz2OhZvApSTIMcrA1LM9xy3Q/aEcQ2f5b0fiKKsfPVB/fw8nnfors6dzNOIn4nhgNh4fGfeC9jOzdR14rGzjElrSbw9Z6OF6FWivPNmbJQzRl5tQ6+GQmfOSafeQ0fGGldi+kMZgnYPSE6T2Bbf+Z9iKxBNThKuL4iMzTh17ARGZdY6VWFvJxXQ66xXsOU2FHh6VDkLKshd6eC1LJBM6wubVVGMaU4pRRn0xaggVj/qDt6OhEEl9EN8Ifu/XquKkcoyZRDQUoxAkJPQDYSlIe5oxY8aMG/AHbLQva8fsdQcAAAAASUVORK5CYII="},ff09:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.df640c40.js.map