(function (e) { function t(t) { for (var a, r, n = t[0], l = t[1], m = t[2], u = 0, d = []; u < n.length; u++)r = n[u], Object.prototype.hasOwnProperty.call(o, r) && o[r] && d.push(o[r][0]), o[r] = 0; for (a in l)Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]); c && c(t); while (d.length)d.shift()(); return i.push.apply(i, m || []), s(); } function s() { for (var e, t = 0; t < i.length; t++) { for (var s = i[t], a = !0, r = 1; r < s.length; r++) { const l = s[r]; o[l] !== 0 && (a = !1); }a && (i.splice(t--, 1), e = n(n.s = s[0])); } return e; } const a = {}; var o = { app: 0 }; var i = []; function r(e) { return `${n.p}js/${{ about: 'about' }[e] || e}.${{ about: 'c3589a6a' }[e]}.js`; } function n(t) { if (a[t]) return a[t].exports; const s = a[t] = { i: t, l: !1, exports: {} }; return e[t].call(s.exports, s, s.exports, n), s.l = !0, s.exports; }n.e = function (e) { const t = []; let s = o[e]; if (s !== 0) if (s)t.push(s[2]); else { const a = new Promise((((t, a) => { s = o[e] = [t, a]; }))); t.push(s[2] = a); let i; const l = document.createElement('script'); l.charset = 'utf-8', l.timeout = 120, n.nc && l.setAttribute('nonce', n.nc), l.src = r(e); const m = new Error(); i = function (t) { l.onerror = l.onload = null, clearTimeout(u); const s = o[e]; if (s !== 0) { if (s) { const a = t && (t.type === 'load' ? 'missing' : t.type); const i = t && t.target && t.target.src; m.message = `Loading chunk ${e} failed.\n(${a}: ${i})`, m.name = 'ChunkLoadError', m.type = a, m.request = i, s[1](m); }o[e] = void 0; } }; var u = setTimeout((() => { i({ type: 'timeout', target: l }); }), 12e4); l.onerror = l.onload = i, document.head.appendChild(l); } return Promise.all(t); }, n.m = e, n.c = a, n.d = function (e, t, s) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s }); }, n.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const s = Object.create(null); if (n.r(s), Object.defineProperty(s, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const a in e)n.d(s, a, ((t) => e[t]).bind(null, a)); return s; }, n.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return n.d(t, 'a', t), t; }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n.p = '/', n.oe = function (e) { throw console.error(e), e; }; let l = window.webpackJsonp = window.webpackJsonp || []; const m = l.push.bind(l); l.push = t, l = l.slice(); for (let u = 0; u < l.length; u++)t(l[u]); var c = m; i.push([0, 'chunk-vendors']), s(); }({
  0(e, t, s) { e.exports = s('56d7'); },
  '56d7': function (e, t, s) {
    s.r(t); const a = s('2b0e'); const o = function () {
      const e = this; const t = e.$createElement; const s = e._self._c || t; return s('div', { attrs: { id: 'app' } }, [s('header', [s('div', { staticClass: 'inner-header' }, [s('nav', [s('ul', [e._m(0), e.isHome ? e._e() : s('li', [s('a', { attrs: { href: '/' } }, [e._v('mensagens')])]), e.isInfo ? e._e() : s('li', [s('a', { attrs: { href: '/#/info' } }, [e._v('informações')])])])])]), e.marquee ? s('div', { staticClass: 'marquee' }, [s('p', { on: { click(t) { e.marqueeInput = !e.marqueeInput; } } }, [e._v('⌨')]), s('span', e._l(e.marquees, ((t) => s('span', { key: t.id }, [t.has_url === 'true' || !0 === t.has_url ? s('a', { attrs: { href: t.href, target: '_blank', rel: 'noreferrer' } }, [e._v(` ${e._s(t.content)}; `)]) : s('span', [e._v(` ${e._s(t.content)}; `)])]))), 0), s('p', { on: { click(t) { e.marquee = !e.marquee; } } }, [e._v('✖')])]) : e._e(), s('transition', { attrs: { name: 'fadeForm' } }, [e.marqueeInput ? s('form', { attrs: { id: 'marqueeForm' }, on: { submit(t) { return t.preventDefault(), e.addMarquee(); } } }, [s('div', { staticClass: 'marquee-form-top' }, [s('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.marqueeMessage.content, expression: 'marqueeMessage.content',
        }],
        attrs: {
          type: 'text', placeholder: 'Proibido mais de 50 chars neste fórum cristão', name: 'marqueeInput', required: '', maxlength: '50',
        },
        domProps: { value: e.marqueeMessage.content },
        on: { input(t) { t.target.composing || e.$set(e.marqueeMessage, 'content', t.target.value); } },
      }), s('input', { attrs: { type: 'submit', value: 'Enviar' } })]), s('div', { staticClass: 'marquee-form-bottom' }, [s('label', { attrs: { for: 'marqueeCheckUrl' } }, [e._v(' tem link? '), s('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.marqueeMessage.has_url, expression: 'marqueeMessage.has_url',
        }],
        attrs: { type: 'checkbox', id: 'marqueeCheckUrl', name: 'marqueeCheckUrl' },
        domProps: { checked: Array.isArray(e.marqueeMessage.has_url) ? e._i(e.marqueeMessage.has_url, null) > -1 : e.marqueeMessage.has_url },
        on: { change(t) { const s = e.marqueeMessage.has_url; const a = t.target; const o = !!a.checked; if (Array.isArray(s)) { const i = null; const r = e._i(s, i); a.checked ? r < 0 && e.$set(e.marqueeMessage, 'has_url', s.concat([i])) : r > -1 && e.$set(e.marqueeMessage, 'has_url', s.slice(0, r).concat(s.slice(r + 1))); } else e.$set(e.marqueeMessage, 'has_url', o); } },
      })]), s('transition', { attrs: { name: 'fade' } }, [e.marqueeMessage.has_url ? s('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.marqueeMessage.href, expression: 'marqueeMessage.href',
        }],
        attrs: {
          type: 'url', name: 'marqueeUrl', placeholder: 'https://www.htmhell.dev/', required: '',
        },
        domProps: { value: e.marqueeMessage.href },
        on: { input(t) { t.target.composing || e.$set(e.marqueeMessage, 'href', t.target.value); } },
      }) : e._e()])], 1), e.error ? s('div', { staticClass: 'alert-error' }, [s('span', { on: { click(t) { e.error = ''; } } }, [e._v('x')]), s('h4', [e._v('Erro!')]), s('p', [e._v(e._s(e.error))])]) : e._e()]) : e._e()])], 1), s('router-view', { staticClass: 'container', attrs: { auth: this.auth } })], 1);
    }; const i = [function () { const e = this; const t = e.$createElement; const a = e._self._c || t; return a('li', [a('h1', [e._v('gchan')]), a('img', { attrs: { src: s('a669'), alt: 'gchan logo' } })]); }]; const r = 'gchan.com.br'; window.location.host === r && window.location.protocol !== 'https:' && (window.location.protocol = 'https:'); const n = 'https://gchan-message-board.herokuapp.com/marquee'; const l = {
      name: 'App',
      data: () => ({
        janitor: !1,
        marquees: [],
        marquee: !0,
        marqueeInput: !1,
        marqueeMessage: { content: '', has_url: !1, href: '' },
        error: '',
        username: '',
        password: '',
        SERVERurl: 'https://gchan-message-board.herokuapp.com',
        showOptions: '',
        auth: { loggedIn: '', username: '', id: '' },
        loginFlash: {
          type: '', header: '', text: '', message: '',
        },
      }),
      methods: {
        ajaxGtmRequest() { const e = document.createElement('script'); e.type = 'text/javascript'; const t = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n      })(window,document,'script','dataLayer','GTM-K57247W');"; try { e.appendChild(document.createTextNode(t)), document.head.appendChild(e); } catch (s) { e.text = t, document.head.appendChild(e); } },
        getCookieValue(e) { const t = document.cookie.match(`(^|;)\\s*${e}\\s*=\\s*([^;]+)`); return t ? t.pop() : ''; },
        checkCookies() {
          const e = this.getCookieValue('cookie_consent_variable'); if (console.log(e), e !== '')e === 'true' && this.ajaxGtmRequest(); else {
            const e = new Date();
            const t = new Date(e.getTime() + 31536e6).toGMTString(); document.cookie = `cookie_consent_variable=true;expires=${t};path=/;Secure`, this.ajaxGtmRequest();
          }
        },
        async login() {
          fetch(`${this.SERVERurl}/login`, {
            method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, credentials: 'include', body: `email=${this.username}&password=${this.password}`,
          }).then((e) => e.json()).then((e) => { e.id && e.name && e.email && e.password ? (this.auth.loggedIn = !0, this.auth.username = e.name, this.auth.id = e.id, this.loginFlash.type = 'success', this.loginFlash.header = 'Parabéns!', this.loginFlash.link = '/', this.loginFlash.text = 'Login realizado com sucesso!\nVocê já pode postar.\n', this.username = '', this.password = '') : e.message && (this.loginFlash.type = 'error', this.loginFlash.header = 'Oh não!', this.loginFlash.text = `${e.message}\nTente novamente!\n`); });
        },
        checkLogin() { fetch(`${this.SERVERurl}/login`, { method: 'GET', credentials: 'include' }).then((e) => e.json()).then((e) => { e.id && e.name && e.email && e.password ? (this.auth.loggedIn = !0, this.auth.username = e.name, this.auth.id = e.id) : this.auth.loggedIn = ''; }); },
        logOut() { fetch(`${this.SERVERurl}/logout`, { method: 'DELETE', credentials: 'include' }).then((e) => e.json()).then((e) => { e.login || (this.auth.loggedIn = !1, this.auth.username = '', this.auth.id = ''); }); },
        showMarqueeOpts() { document.querySelector('.marquee').classList.toggle('has-opts'); },
        clearMarqueeForm() { this.marqueeMessage.content = '', this.marqueeMessage.has_url = '', this.marqueeMessage.href = ''; },
        addMarquee() { console.log('lol?'); const e = document.querySelector('#marqueeForm input[type="submit"]'); e.disabled = !0, fetch(n, { method: 'POST', body: JSON.stringify(this.marqueeMessage), headers: { 'content-type': 'application/json' } }).then((e) => e.json()).then((t) => { console.log(t), t.error ? t.origin === 'psql' && t.code === '23505' && (this.error = 'Aviso duplicado!\ngit gud e pense em algo novo antes de enviar ᕦ(ò_óˇ)ᕤ') : (this.error = '', this.marqueeInput = !1, this.marquees.unshift(JSON.parse(t)), this.clearMarqueeForm()), e.disabled = !1; }); },
        handleMarqueeResize() { const e = document.querySelector('.marquee > span'); window.innerWidth > 979 ? (e.removeEventListener('click', this.showMarqueeOpts), e.addEventListener('mouseover', this.showMarqueeOpts), e.addEventListener('mouseout', this.showMarqueeOpts)) : (e.addEventListener('click', this.showMarqueeOpts), e.removeEventListener('mouseover', this.showMarqueeOpts), e.removeEventListener('mouseout', this.showMarqueeOpts)); },
        focusForm() { document.querySelector('#register form #name').focus(); },
      },
      beforeMount() { this.checkLogin(); },
      mounted() { this.checkCookies(), fetch(n).then((e) => e.json()).then((e) => { this.marquees = e.results; }); },
      computed: { isHome() { return this.$route.name === 'Home'; }, isInfo() { return this.$route.name === 'Info'; } },
      metaInfo() { return { title: 'gchan: special ed da internet', meta: [{ name: 'description', content: 'gchan: poste o que estiver pensando ou trabalhando.reaja ao que os outros estão falando. um lugar para amigos' }, { property: 'og:title', content: 'gchan: special ed da internet' }, { property: 'og:site_name', content: 'gchan' }, { property: 'og:type', content: 'website' }, { property: 'og:image', content: 'https://gchan.com.br/gchan_embbed.jpg' }, { name: 'robots', content: 'index,follow' }, { name: 'twitter:card', content: 'summary' }, { name: 'twitter:site', content: 'https://gchan.com.br' }, { name: 'twitter:creator', content: '@gchan_board' }, { name: 'twitter:description', content: 'gchan: poste o que estiver pensando ou trabalhando.reaja ao que os outros estão falando. um lugar para amigos' }, { name: 'twitter:title', content: 'gchan: special ed da internet' }, { name: 'twitter:image', content: 'https://gchan.com.br/gchan_twitter.jpg' }] }; },
    }; const m = l; const u = s('2877'); const c = Object(u.a)(m, o, i, !1, null, null, null); const d = c.exports; const p = s('8c4f'); const g = s('58ca'); const h = function () {
      const e = this; const t = e.$createElement; const a = e._self._c || t; return a('div', [a('section', { staticClass: 'create-thread' }, [a('form', { on: { submit(t) { return t.preventDefault(), e.addMessage(); } } }, [e.error ? a('div', { staticClass: 'alert-error' }, [a('span', { on: { click(t) { e.error = ''; } } }, [e._v('x')]), a('h4', [e._v('Erro!')]), a('p', [e._v(e._s(e.error))])]) : e._e(), a('div', { staticClass: 'form-group' }, [a('label', { attrs: { for: 'username' } }, [e._v('Usuário')]), a('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.message.username, expression: 'message.username',
        }],
        staticClass: 'form-control',
        attrs: {
          type: 'text', id: 'username', 'aria-describedby': 'usernameHelp', placeholder: 'anônimo', maxlength: '30', required: '',
        },
        domProps: { value: e.message.username },
        on: { focus(t) { return e.clearName(t); }, focusout(t) { return e.checkForName(t); }, input(t) { t.target.composing || e.$set(e.message, 'username', t.target.value); } },
      }), e.auth.id ? a('small', { staticClass: 'form-text text-muted', attrs: { id: 'usernameHelp' } }, [e._v(' anonimato é para os fracos ')]) : a('small', { staticClass: 'form-text text-muted', attrs: { id: 'usernameHelp' } }, [e._v(` ${e._s(e.smallUsernamePhrase)} `)])]), a('div', { staticClass: 'form-group' }, [a('div', { staticClass: 'form-subject' }, [a('label', { attrs: { for: 'tem-assunto' } }, [e._v('colocar assunto?')]), a('input', { attrs: { type: 'checkbox', name: 'tem-assunto', id: 'tem-assunto' }, on: { change: e.toggleSubject } })]), !0 === this.hasSubject ? a('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.message.subject, expression: 'message.subject',
        }],
        staticClass: 'form-control',
        attrs: {
          type: 'text', id: 'subject', placeholder: 'assunto', maxlength: '50', required: '',
        },
        domProps: { value: e.message.subject },
        on: { input(t) { t.target.composing || e.$set(e.message, 'subject', t.target.value); } },
      }) : e._e()]), a('div', { staticClass: 'form-group' }, [a('label', { attrs: { for: 'message' } }, [e._v('Mensagem')]), a('textarea', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.message.message, expression: 'message.message',
        }],
        staticClass: 'form-control',
        attrs: {
          id: 'message', rows: '5', placeholder: 'mensagem', required: '', maxlength: '250',
        },
        domProps: { value: e.message.message },
        on: { input(t) { t.target.composing || e.$set(e.message, 'message', t.target.value); } },
      })]), a('div', { staticClass: 'form-group' }, [e._m(0), a('input', {
        attrs: {
          type: 'file', name: 'uploadIMG', id: 'uploadIMG', disabled: !0 === this.optUpload,
        },
        on: { change(t) { return e.handleUpload(t); } },
      })]), a('div', { staticClass: 'form-group' }, [this.optUpload ? a('label', { staticClass: 'upload-concluido', attrs: { for: 'imageURL' } }, [e._v('Upload Concluído!')]) : a('label', { attrs: { for: 'imageURL' } }, [e._v(' ou: digite a URL de uma imagem/gif/vídeo')]), a('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.message.imageURL, expression: 'message.imageURL',
        }],
        staticClass: 'form-control',
        attrs: {
          type: 'url', id: 'imageURL', placeholder: 'https://~', readonly: !0 === this.optUpload,
        },
        domProps: { value: e.message.imageURL },
        on: { input(t) { t.target.composing || e.$set(e.message, 'imageURL', t.target.value); } },
      }), a('transition', { attrs: { name: 'fade' } }, [a('div', { staticClass: 'searchgifstuffs' }, [this.optUpload ? e._e() : a('label', { attrs: { for: 'giphyURL' } }, [e._v('ou: Busque um gif')]), this.optUpload ? e._e() : a('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.message.giphyURL, expression: 'message.giphyURL',
        }],
        staticClass: 'form-control',
        attrs: { type: 'text', id: 'giphyURL', placeholder: 'cats' },
        domProps: { value: e.message.giphyURL },
        on: { keyup: e.searchGif, input(t) { t.target.composing || e.$set(e.message, 'giphyURL', t.target.value); } },
      }), this.optUpload ? e._e() : a('div', { staticClass: 'gif-search-toggle', attrs: { 'data-toggle': 'buttons' } }, [a('input', {
        attrs: {
          type: 'radio', name: 'options', id: 'option1', autocomplete: 'off', checked: '', value: 'giphy',
        },
        on: { change: e.searchGif },
      }), a('label', { staticClass: 'btn btn-primary', attrs: { for: 'option1' } }, [e._v(' Giphy ')]), a('input', {
        attrs: {
          type: 'radio', name: 'options', id: 'option2', autocomplete: 'off', value: 'gfycat',
        },
        on: { change: e.searchGif },
      }), a('label', { staticClass: 'btn btn-primary', attrs: { for: 'option2' } }, [e._v(' gfycat ')])])])])], 1), a('button', { staticClass: 'btn btn-primary', attrs: { type: 'submit' } }, [e._v('Enviar')])]), e.isPreviewing ? a('div', { staticClass: 'imagePreview' }, [this.optUpload ? a('button', { attrs: { type: 'button' }, on: { click(t) { return e.removeUpload(t); } } }, [e._v('Cancelar')]) : e._e(), e.isPreviewing === 'image' ? a('img', { attrs: { src: '', id: 'imageToUpload', alt: 'pré-visualização de imagem para upload' } }) : e.isPreviewing === 'video' ? a('video', {
        attrs: {
          id: 'videoToUpload', src: '', autoplay: 'true', loop: 'true', muted: 'true', playsinline: 'true',
        },
        domProps: { muted: !0 },
      }) : a('p', [e._v('Formato não suportado! ::(')])]) : e._e(), e.isGifBeingSearched ? a('div', { staticClass: 'gifBoxWrapper' }, [e.emptyGifResults ? a('div', { staticClass: 'emptyGifResults' }, [a('img', { staticClass: 'emptyGifResultsImg', attrs: { src: 'http://via.placeholder.com/480?text=nenhum gif :(' } })]) : e._e(), e.emptyGifResults === '' ? a('div', { staticClass: 'gifBox' }, [e._l(e.uniqueGifs, ((t) => a('div', { key: t.id, staticClass: 'gifBoxGif' }, [a('img', { staticClass: 'gif-thumb', attrs: { 'data-original': t.originalUrl, src: t.thumbUrl }, on: { click: e.selectGif } })]))), a('div', { staticClass: 'gif-attribute' }, [this.apiRoute === 'giphy' ? a('a', { attrs: { href: 'https://giphy.com/', title: 'Visitar giphy.com', target: '_blank' } }, [a('img', { attrs: { src: s('9110'), alt: 'Powered by GIPHY' } })]) : e._e()]), a('div', { staticClass: 'paginate-arrows' }, [e.hasPag ? a('ul', { staticClass: 'pagination' }, [a('div', e._l(e.numPages, ((t) => a('li', {
        key: t, staticClass: 'page-item', class: { active: e.currPage == t }, on: { click: e.paginateGif },
      }, [a('p', { staticClass: 'page-link' }, [e._v(e._s(t))])]))), 0)]) : e._e()])], 2) : e._e()]) : e._e()]), e._l(e.messages, ((t) => a('Message', {
        key: t.id,
        attrs: {
          message: t, auth: e.auth, replies: t.replies, replyCount: t.replyCount,
        },
        on: { replyMessage: e.replyMessage, adcQuote: e.adcQuote, update(e) { t = e; } },
      }))), [a('ReplyBox', { attrs: { messageToReplyTo: this.messageToReplyTo, allowedUploadVideoFormats: this.allowedUploadVideoFormats, quotesToAdd: this.quotesToAdd }, on: { closeReply: this.closeReply, addReplyToThread: this.addReplyToThread } })]], 2);
    }; const f = [function () { const e = this; const t = e.$createElement; const s = e._self._c || t; return s('label', { attrs: { for: 'uploadIMG' } }, [e._v(' Envie uma imagem/gif/vídeo '), s('span', { staticClass: 'badge beta', attrs: { title: 'Erros podem ocorrer ¯\\_(ツ)_/¯' } }, [e._v(' BETA ')])]); }]; const v = function () {
      const e = this; const t = e.$createElement; const s = e._self._c || t; return e.messageToReplyTo ? s('div', { ref: 'replybox', attrs: { id: 'replybox' } }, [e.error ? s('div', { staticClass: 'alert-error' }, [s('span', { on: { click(t) { e.error = ''; } } }, [e._v('x')]), s('h4', [e._v('Erro!')]), s('p', [e._v(e._s(e.error))])]) : e._e(), s('div', { attrs: { id: 'replybox-head' } }, [s('span', { ref: 'dragSpan', staticClass: 'noselect', on: { mousedown: e.dragMouseDown } }, [e._v(` responder ao post #${e._s(e.messageToReplyTo)} `)]), s('button', { staticClass: 'close', attrs: { type: 'button' }, on: { click: this.closeReply } }, [e._v(' x ')])]), s('form', { attrs: { id: 'replyForm' }, on: { submit(t) { return t.preventDefault(), e.addReply(); } } }, [s('div', { staticClass: 'form-group' }, [s('label', { attrs: { for: 'username' } }, [e._v('Usuário')]), s('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.replyMessage.username, expression: 'replyMessage.username',
        }],
        staticClass: 'form-control',
        attrs: {
          type: 'text', id: 'username', 'aria-describedby': 'usernameHelp', placeholder: 'Anonymous', maxlength: '30', required: '',
        },
        domProps: { value: e.replyMessage.username },
        on: { input(t) { t.target.composing || e.$set(e.replyMessage, 'username', t.target.value); } },
      })]), s('div', { staticClass: 'form-group' }, [s('label', { attrs: { for: 'message' } }, [e._v('Mensagem')]), s('textarea', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.replyMessage.content, expression: 'replyMessage.content',
        }],
        staticClass: 'form-control',
        attrs: {
          id: 'message', rows: '5', maxlength: '250', required: '',
        },
        domProps: { value: e.replyMessage.content },
        on: { input(t) { t.target.composing || e.$set(e.replyMessage, 'content', t.target.value); } },
      })]), s('div', { staticClass: 'form-group' }, [e._m(0), s('input', {
        attrs: {
          type: 'file', name: 'replyIMG', id: 'replyIMG', disabled: !0 === this.optUpload,
        },
        on: { change(t) { return e.handleUpload(t); } },
      })]), s('div', { staticClass: 'form-group' }, [this.optUpload ? s('label', { staticClass: 'upload-concluido', attrs: { for: 'imageURL' } }, [e._v('Upload Concluído!')]) : s('label', { attrs: { for: 'imageURL' } }, [e._v(' ou: digite a URL de uma imagem/gif/vídeo')]), s('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.replyMessage.imageURL, expression: 'replyMessage.imageURL',
        }],
        staticClass: 'form-control',
        attrs: {
          type: 'url', id: 'imageURL', placeholder: 'https://~', readonly: !0 === this.optUpload,
        },
        domProps: { value: e.replyMessage.imageURL },
        on: { input(t) { t.target.composing || e.$set(e.replyMessage, 'imageURL', t.target.value); } },
      })]), s('button', { staticClass: 'btn btn-primary', attrs: { type: 'submit' } }, [e._v('Enviar')])])]) : e._e();
    }; const y = [function () { const e = this; const t = e.$createElement; const s = e._self._c || t; return s('label', { attrs: { for: 'replyIMG' } }, [e._v(' Envie uma imagem/gif/vídeo '), s('span', { staticClass: 'badge beta', attrs: { title: 'Erros podem ocorrer ¯\\_(ツ)_/¯' } }, [e._v(' BETA ')])]); }]; const b = 'https://gchan-message-board.herokuapp.com/replies'; const w = 'https://gchan-message-board.herokuapp.com/gifupload'; const A = 'https://gchan-message-board.herokuapp.com/videoupload'; const q = {
      name: 'ReplyBox',
      props: ['messageToReplyTo', 'allowedUploadVideoFormats', 'quotesToAdd'],
      data: () => ({
        replyTo: { message_id: '' },
        positions: {
          clientX: void 0, clientY: void 0, movementX: 0, movementY: 0, boundsFlag: '', boundsHorzFlag: '', boundsVertFlag: '', dragging: !1,
        },
        replyMessage: {
          username: 'anônimo', content: '', imageURL: '', message_id: '', user_id: 0,
        },
        error: '',
        optUpload: !1,
      }),
      watch: { messageToReplyTo(e) { e !== '' && setTimeout(() => document.querySelector('#replyForm #username').focus(), 100); }, quotesToAdd(e) { if (e !== '') { let t = document.querySelector('#replybox textarea#message'); if (t)t.value += `>>${e}\n`, t.focus(); else { const s = document.querySelector(`[data-quoteid="${e}"]`); document.querySelector(`[data-replyto="${s.closest('ul').children[0].id}"]`).click(), setTimeout(() => { t = document.querySelector('#replybox textarea#message'), t.value += `>>${e}\n`, t.focus(); }, 200); } } } },
      methods: {
        dragMouseDown(e) { e.preventDefault(); const t = e.target.getBoundingClientRect(); this.positions.dragging = !0, this.positions.clickedLeft = e.pageX - t.left, this.positions.clickedTop = e.clientY - t.top, this.positions.clientX = e.clientX, this.positions.clientY = e.clientY, document.onmousemove = this.elementDrag, document.onmouseup = this.closeDragElement; }, elementDrag(e) { if (e.preventDefault(), this.positions.dragging) { document.body.classList.add('isdragging'); const t = this.$refs.replybox.getBoundingClientRect(); if (t.top > 0 || (this.positions.boundsVertFlag = 'top'), t.top < window.innerHeight - t.height || (this.positions.boundsVertFlag = 'bottom'), t.left > 0 || (this.positions.boundsHorzFlag = 'left'), t.left < window.innerWidth - t.width || (this.positions.boundsHorzFlag = 'right'), this.positions.boundsHorzFlag === '') this.$refs.replybox.style.left = `${e.clientX - this.positions.clickedLeft}px`, this.$refs.replybox.getBoundingClientRect().left < 0 ? this.$refs.replybox.style.left = '1px' : this.$refs.replybox.getBoundingClientRect().left > window.innerWidth && (this.$refs.replybox.style.left = `${window.innerWidth - 1}px`); else switch (this.positions.boundsHorzFlag) { case 'left': e.clientX > t.width / 3 ? (this.positions.clickedLeft > t.width / 3 - 50 || (this.positions.clickedLeft = t.width / 3 - 50), this.positions.boundsHorzFlag = '') : this.$refs.replybox.style.left = '1px'; break; case 'right': e.clientX < window.innerWidth - t.width / 2 ? (this.positions.clickedLeft = 0.5 * t.width + 50, this.positions.boundsHorzFlag = '') : this.$refs.replybox.style.left = `${window.innerWidth - t.width - 1}px`; break; default: this.positions.boundsHorzFlag = ''; } if (this.positions.boundsVertFlag === '') this.$refs.replybox.style.top = `${e.clientY - this.positions.clickedTop - 17}px`; else switch (this.positions.boundsVertFlag) { case 'top': e.clientY > 25 ? this.positions.boundsVertFlag = '' : this.$refs.replybox.style.top = '1px'; break; case 'bottom': e.clientY < window.innerHeight - t.height ? this.positions.boundsVertFlag = '' : this.$refs.replybox.style.top = `${window.innerHeight - t.height - 1}px`; break; default: this.positions.boundsVertFlag = ''; } } }, closeDragElement() { this.positions.dragging = !1, document.onmouseup = null, document.onmousemove = null, document.body.classList.remove('isdragging'); }, isInSpan(e) { const t = this.$refs.dragSpan.getBoundingClientRect(); return e.clientX > t.left && e.clientX < t.right && e.clientY > t.top && e.clientY < t.bottom; }, isInViewport(e) { const t = e.getBoundingClientRect(); return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth); }, closeReply() { this.$emit('closeReply'); }, addReplyToThread(e) { this.$emit('addReplyToThread', e); }, clearReplyForm() { this.replyMessage.message_id = '', this.replyMessage.username = 'anônimo', this.replyMessage.content = '', this.replyMessage.imageURL = '', this.replyMessage.user_id = 0, document.querySelector('#replyIMG').value = '', this.optUpload = !1; }, addReply() { const e = document.querySelector('#replybox form button[type="submit"]'); e.disabled = !0, this.replyMessage.message_id = this.messageToReplyTo, fetch(b, { method: 'POST', body: JSON.stringify(this.replyMessage), headers: { 'content-type': 'application/json' } }).then((e) => e.json()).then((t) => { const s = t; if (s.details) { const e = s.details.map((e) => e.message).join('.'); this.error = e; } else s.error ? s.origin === 'psql' && s.code === '23505' && (this.error = 'Mensagem duplicada!\ngit gud e altere algum dos campos antes de enviar ᕦ(ò_óˇ)ᕤ') : (this.error = '', this.addReplyToThread(s), this.clearReplyForm(), this.closeReply()); e.disabled = !1; }); }, async handleUpload(e) { const t = e.target.files[0]; t.type.startsWith('image/') ? await this.uploadToImgur('image', t) : t.type.startsWith('video/') ? this.allowedUploadVideoFormats.includes(t.type) ? await this.uploadToImgur('video', t) : this.error = `\n            Formato de vídeo não aceito!\n\n            Funciona apenas com os formatos abaixo:\n\n            ${this.allowedUploadVideoFormats.join(', ')}\n          ` : this.error = '\n          Aceitamos apenas imagens,\n\n          gifs e vídeos!\n        '; }, async postImgGif(e, t) { const s = document.querySelector('#replyForm button'); return fetch(t, { method: 'POST', body: e, redirect: 'follow' }).then((e) => e.json()).then((e) => { e.status === 200 && !0 === e.success ? (this.replyMessage.imageURL = e.data.link, this.optUpload = !0) : e.status === 500 && !1 === e.success ? this.error = '\n              Erro no servidor de upload! :(\n\n              Tente subir sua imagem em outro lugar\n\n              e poste usando o link!\n\n              (https://postimages.org/,\n\n              https://imgur.com/upload,\n\n              https://giphy.com/upload,\n etc)\n              ' : this.error = '\n              Aceitamos apenas imagens no formato\n\n              JPEG, PNG, GIF, APNG e TIFF!\n              ', s.disabled = !1; }); }, async uploadToImgur(e, t) { const s = document.querySelector('#replyForm button'); s.disabled = !0; const a = new FormData(); e === 'image' ? (a.append('image', t), await this.postImgGif(a, w)) : (a.append('video', t), fetch(A, { method: 'POST', body: a, redirect: 'follow' }).then((e) => e.json()).then((e) => { e.status === 200 && !0 === e.success ? (this.replyMessage.imageURL = e.data.link, s.disabled = !1, this.optUpload = !0) : console.log('handle video upload error'); })); },
      },
    }; const _ = q; const U = Object(u.a)(_, v, y, !1, null, null, null); const R = U.exports; const k = function () {
      const e = this; const t = e.$createElement; const a = e._self._c || t; return a('ul', { staticClass: 'list-unstyled d-flex flex-column align-items-center' }, [a('li', { staticClass: 'media', attrs: { id: e.message.id } }, [e.message.imageurl ? a('img', {
        staticClass: 'img-thumbnail',
        attrs: {
          loading: 'lazy', 'data-src': e.message.imageurl, alt: e.message.subject, src: e.message.imageurl,
        },
        on: { click(t) { return e.fullSize(t); }, error(t) { return e.createVideo(t, e.message.id); }, load(t) { return e.preventVideo(t); } },
      }) : a('img', { staticClass: 'img-thumbnail placeholder', attrs: { loading: 'lazy', src: 'https://gchan-message-board.herokuapp.com/placeholders', alt: 'post sem imagem' } }), a('div', { staticClass: 'align-self-center media-body' }, [e.messageFlash.header && e.messageFlash.messageID === e.message.id ? a('div', { staticClass: 'flash', class: e.messageFlash.type }, [a('button', { staticClass: 'flash-btn', attrs: { type: 'button' }, on: { click(t) { e.messageFlash.header = ''; } } }, [e._v('x')]), a('strong', [e._v(e._s(e.messageFlash.header))]), e._v(` ${e._s(e.messageFlash.text)} `), a('a', { attrs: { href: e.messageFlash.link } }, [e._v(e._s(e.messageFlash.message))]), a('div', { staticClass: 'opt-btns' }, [a('button', { attrs: { type: 'button' }, on: { click(t) { return e.handleMessage(e.message.id, 'delete', t); } } }, [e._v(' Deletar ')])])]) : e._e(), a('div', { staticClass: 'edit_tab', attrs: { 'data-message-id': e.message.id } }, [a('p', { staticClass: 'mt-0 mb-1 name' }, [e._v(`por: ${e._s(e.message.username)}`)]), e.message.user_id === e.auth.id ? a('button', { staticClass: 'delete', attrs: { type: 'button' }, on: { click(t) { return e.deleteMessage(t); } } }, [e._v('deletar')]) : e._e(), e.message.user_id === e.auth.id ? a('button', { staticClass: 'edit', attrs: { type: 'button' }, on: { click(t) { return e.editMessage(t); } } }, [e._v('editar')]) : e._e(), (e.message.user_id, e.auth.id, e._e()), a('button', { staticClass: 'reply', attrs: { type: 'button', 'data-replyTo': e.message.id }, on: { click(t) { return e.replyMessage(t); } } }, [e._v('responder')]), e.replyCount && e.replyCount > 2 && e.isHome ? a('button', { staticClass: 'link', attrs: { type: 'button' } }, [a('a', { attrs: { href: `/#/post/${e.message.id}` } }, [e._v(' ver respostas ')])]) : e._e()]), e.isHome && e.replyCount && e.replyCount > 2 ? a('div', { staticClass: 'reply_count' }, [a('small', [e._v(`Este post possui ${e._s(e.replyCount)} respostas!`)])]) : e._e(), a('p', { staticClass: 'mt-0 mb-1 subject' }, [a('span', { staticClass: 'id' }, [e._v(`#${e._s(e.message.id)} / `)]), e.message.subject ? a('span', [e._v(e._s(e.message.subject))]) : a('span', { staticClass: 'id' }, [e._v('gchan post')])]), a('p', [e._v(e._s(e.message.message))]), a('br'), a('small', [e._v(e._s(e.message.created))]), a('br'), e.message.gif_origin == 'giphy' ? a('img', { staticClass: 'gif_origin', attrs: { alt: 'powered by GIPHY', src: s('ff09') } }) : e._e()])]), e._l(e.replies, ((t) => a('li', { key: t.id, staticClass: 'media reply-item' }, [t.imageurl ? a('img', {
        staticClass: 'img-thumbnail',
        attrs: {
          loading: 'lazy', 'data-src': t.imageurl, src: t.imageurl, alt: '',
        },
        on: { click(t) { return e.fullSize(t); }, error(t) { return e.createVideo(t, !1); }, load(t) { return e.preventVideo(t); } },
      }) : e._e(), a('div', { staticClass: 'align-self-center media-body' }, [a('div', { staticClass: 'edit_tab' }, [a('p', { staticClass: 'mt-0 mb-1' }, [e._v(e._s(t.username))]), a('button', { staticClass: 'link link-reply', attrs: { type: 'button', 'data-quoteid': t.id, title: 'citar esta resposta' }, on: { click(t) { return e.adcQuote(t); } } }, [e._v(` #${e._s(t.id)} `)])]), a('p', [e._v(e._s(t.content))]), a('br'), a('small', [e._v(e._s(t.created))]), a('br')])]))), a('hr')], 2);
    }; const x = []; const C = 'https://gchan-message-board.herokuapp.com/'; const M = {
      name: 'Message',
      props: {
        message: {}, replies: {}, replyCount: Number, auth: {},
      },
      data: () => ({
        replyObserver: null,
        messageFlash: {
          type: '', header: '', text: '', message: '', messageID: '',
        },
      }),
      watch: { message() {} },
      methods: {
        handleMessage(e, t, s) {
          let a; let o; let i; let r; let n; switch (s.target.disabled = !0, t) { case 'delete': a = 'DELETE', o = JSON.stringify(''), i = { 'content-type': 'text/plain' }, r = `message/${e}`, n = (e) => this.messages.filter((t) => t.id !== e); break; default: a = 'POST', i = { 'content-type': 'application/json' }; }fetch(`${C}${r}`, {
            method: a, headers: i, body: o, credentials: 'include',
          }).then((e) => e.json()).then((t) => { t ? this.messages = n(e) : (s.target.disabled = !1, this.msgFlash('error', e, 'Ocorreu um erro!', 'Tente deletar sua mensagem novamente.', 'Atualizar a página pode resolver o problema!')); });
        },
        hasAudio(e) { return e.mozHasAudio || Boolean(e.webkitAudioDecodedByteCount) || Boolean(e.audioTracks && e.audioTracks.length); },
        async createVideo(e, t) { const s = e.target; const a = t ? document.getElementById(t) : s.parentElement; const o = document.createElement('div'); o.className = 'video-wrap'; const i = document.createElement('video'); const r = document.createElement('button'); r.innerHTML = '<img src="https://gchan.com.br/volume-off.png" alt="Volume">', r.className = 'volume', r.type = 'button', i.classList.add('img-thumbnail'), i.src = s.src, i.autoplay = !0, i.loop = !0, i.muted = !0, i.playsInline = !0, o.appendChild(i), o.appendChild(r), a.insertBefore(o, s), s.style.display = 'none', s.error = null, i.addEventListener('loadeddata', (e) => { this.hasAudio(e.target) ? r.addEventListener('click', (e) => { let t; e.target.tagName === 'BUTTON' ? [t] = e.target.children : t = e.target, i.muted = !i.muted, i.muted ? t.src = 'https://gchan.com.br/volume-off.png' : t.src = 'https://gchan.com.br/volume-high.png'; }) : r.classList.add('no-audio'); }), i.addEventListener('click', (e) => { this.fullSizeDiv(e.target.parentElement), this.fullSize(e); }), i.onerror = function (e) { const t = e.target.parentElement.parentElement; const s = t.querySelector('div.video-wrap'); const a = t.querySelector('img.img-thumbnail'); a.src = 'https://gchan-message-board.herokuapp.com/placeholders', a.style.display = 'initial', a.classList.add('placeholder'), a.onclick = null, e.target.remove(), s.remove(); }; },
        preventVideo(e) { const t = e.target; const s = t.previousElementSibling; s && s.tagName === 'VIDEO' && (t.previousElementSibling.remove(), t.style.display = 'initial'); },
        fullSizeDiv(e) { e.classList.toggle('fullsize'); },
        fullSize(e) { e.target.classList.toggle('fullsize'); },
        replyMessage(e) { this.$emit('replyMessage', e.target.getAttribute('data-replyto')); },
        adcQuote(e) { this.$emit('adcQuote', e.target.getAttribute('data-quoteid')); },
        update(e) { console.log(e); },
      },
      computed: { isHome() { return this.$route.name === 'Home'; }, filteredReplies() { return this.replies ? this.replies.slice(Math.max(this.replies.length - 2, 1)) : this.replies; } },
    }; const F = M; const P = Object(u.a)(F, k, x, !1, null, null, null); const L = P.exports; const T = 'https://gchan-message-board.herokuapp.com/messages/'; const S = 'https://gchan-message-board.herokuapp.com/replies'; const E = 'https://gchan-message-board.herokuapp.com/gifupload'; const I = 'https://gchan-message-board.herokuapp.com/videoupload'; const j = {
      name: 'Home',
      components: { ReplyBox: R, Message: L },
      props: { auth: { default: () => ({ username: '', loggedIn: '', id: '' }), type: Object } },
      data: () => ({
        optUpload: '',
        messages: [],
        replyObserver: null,
        messageToReplyTo: '',
        quotesToAdd: '',
        gifsPerPage: 4,
        currPage: 1,
        numPages: 5,
        error: '',
        apiRoute: 'giphy',
        isGifBeingSearched: '',
        emptyGifResults: '',
        hasPag: '',
        gifs: [],
        hasSubject: !1,
        message: {
          username: 'anônimo', subject: '', message: '', imageURL: '', user_id: 0, gif_origin: 'none',
        },
        isPreviewing: '',
        allowedUploadVideoFormats: ['video/mp4', 'video/webm', 'video/x-matroska', 'video/quicktime', 'video/x-flv', 'video/x-msvideo', 'video/x-ms-wmv', 'video/mpeg'],
        offset: 0,
        messagesBatchSize: 15,
      }),
      watch: { isGifBeingSearched(e) { e !== '' && (this.isPreviewing = ''); }, isPreviewing(e) { e !== '' && (this.isGifBeingSearched = ''); } },
      computed: { reversedMessages() { return this.messages.slice().reverse(); }, uniqueGifs() { const e = []; const t = new Map(); return this.gifs.forEach((s) => { t.has(s.id) || (t.set(s.id, !0), e.push({ id: s.id, thumbUrl: s.thumbUrl, originalUrl: s.originalUrl })); }), e; }, smallUsernamePhrase() { const e = [{ quote: 'o que é que há, pois, num nome?', reference: 'https://pt.wikipedia.org/wiki/William_Shakespeare' }, { quote: 'remember: no use for a name', reference: 'https://www.youtube.com/watch?v=mEdd1NHnwIE' }, { quote: 'o homem é menos ele mesmo quando fala de sua pessoa', reference: 'https://pt.wikipedia.org/wiki/Oscar_Wilde' }, { quote: 'o anonimato é a fama do futuro', reference: 'https://pt.wikipedia.org/wiki/John_Boyle' }, { quote: 'a vingança nunca é plena, mata a alma e a envenena', reference: 'https://pt.wikiquote.org/wiki/Seu_Madruga' }, { quote: 'Ski-bi dibby dib yo da dub dub', reference: 'https://www.youtube.com/watch?v=Hy8kmNEo1i8' }, { quote: "Baby don't hurt me", reference: 'watsalov' }]; return e[Math.floor(e.length * Math.random())].quote; } },
      mounted() { this.replyObserver = new IntersectionObserver(this.onElementObserved, { threshold: 0 }), this.lazyLoadObserver = new IntersectionObserver(this.setNextBatch, { threshold: 0 }), fetch(`${T}${this.offset}`).then((e) => e.json()).then((e) => { this.messages = e.results; }).then(() => { document.querySelectorAll('.list-unstyled li.media').forEach((e, t) => { this.replyObserver.observe(e), t === this.messagesBatchSize - 1 && (this.offset += 15, e.setAttribute('data-offset', this.offset), this.lazyLoadObserver.observe(e)); }); }); },
      methods: {
        setNextBatch(e) { e.forEach((e) => { e.isIntersecting && (this.lazyLoadObserver.unobserve(e.target), fetch(`${T}${this.offset}`).then((e) => e.json()).then((e) => { e.results && e.results.forEach((e) => { this.messages.push(e); }); }).then(() => { const e = document.querySelector('div.container').children; for (let t = 0; t < this.messagesBatchSize; t += 1) { if (!e[t + this.offset]) return void console.log('chegou no fim! yey'); this.replyObserver.observe(e[t + this.offset].children[0]), t === this.messagesBatchSize - 1 && (this.lazyLoadObserver.observe(e[t + this.offset].children[0]), this.offset += 15, e[t].setAttribute('data-offset', this.offset)); } })); }); },
        toggleSubject() { this.hasSubject = !this.hasSubject; },
        clearName(e) { e.target.value === 'anônimo' && (e.target.value = ''); },
        checkForName(e) { e.target.value === '' && (e.target.value = 'anônimo'); },
        isMyPost() { return !0; },
        clearMsgForm() { this.message.username = 'anônimo', this.message.subject = '', this.message.message = '', this.message.imageURL = '', this.message.user_id = 0, this.isPreviewing = '', this.isGifBeingSearched = '', document.querySelector('#uploadIMG').value = '', this.optUpload = ''; },
        addMessage() { const e = document.querySelector('.create-thread > form > button[type=submit]'); e.disabled = !0, this.auth.username && (this.message.username = this.auth.username, this.message.user_id = parseInt(this.auth.id, 10)), /giphy/.test(this.message.imageURL) ? this.message.gif_origin = 'giphy' : /gfycat/.test(this.message.imageURL) ? this.message.gif_origin = 'gfycat' : /tenor/.test(this.message.imageURL) ? this.message.gif_origin = 'tenor' : /imgur/.test(this.message.imageURL) ? this.message.gif_origin = 'imgur' : this.message.gif_origin = 'outro', fetch(T, { method: 'POST', body: JSON.stringify(this.message), headers: { 'content-type': 'application/json' } }).then((e) => e.json()).then((t) => { if (t.details) { const e = t.details.map((e) => e.message).join('.'); this.error = e; } else if (t.error)t.origin === 'psql' && t.code === '23505' && (this.error = 'Mensagem duplicada!\ngit gud e altere algum dos campos antes de enviar ᕦ(ò_óˇ)ᕤ'); else { this.error = ''; const e = JSON.parse(t); e.isNew = !0, this.messages.unshift(e), this.clearMsgForm(); }e.disabled = !1; }); },
        deleteMessage(e) { const t = e.target.parentElement.getAttribute('data-message-id'); this.msgFlash('error', t, 'Deletar mensagem', 'Tem certa que deseja deletar esta mensagem? ):', 'ela não ofendeu ninguém'); },
        editMessage() { alert('o dev é burro e ainda não adicionou este método (づ´• ﹏ •`)づ'); },
        reactMessage() { alert('o dev é burro e ainda não adicionou este método (づ´• ﹏ •`)づ'); },
        replyMessage(e) { this.messageToReplyTo = e; },
        adcQuote(e) { this.quotesToAdd = e; },
        closeReply() { this.messageToReplyTo = ''; },
        addReplyToThread(e) { let t; t = typeof e === 'string' ? JSON.parse(e) : e; const s = this.messages.findIndex((e) => parseInt(e.id, 10) === parseInt(t.message_id, 10)); void 0 === this.messages[s].replies && (this.messages[s].replies = []), this.messages[s].replies.push(t); },
        onElementObserved(e) { e.forEach((e) => { e.isIntersecting && (this.replyObserver.unobserve(e.target), fetch(`${S}/${e.target.id}`).then((e) => e.json()).then((t) => { if (t.error) return; const s = this.messages.findIndex((t) => parseInt(t.id, 10) === parseInt(e.target.id, 10)); this.$set(this.messages[s], 'replyCount', t.length), t.length > 2 ? this.$set(this.messages[s], 'replies', t.slice(Math.max(t.length - 2, 1))) : this.$set(this.messages[s], 'replies', t); })); }); },
        msgFlash(e, t, s, a, o) { this.messageFlash.type = e, this.messageFlash.header = s, this.messageFlash.text = a, this.messageFlash.message = o, this.messageFlash.messageID = parseInt(t, 10); },
        searchGif(e) { let t; switch (e.target.id === 'giphyURL' ? (t = e.target.value, this.isGifBeingSearched = t === '' ? '' : 1) : t = document.querySelector('#giphyURL').value, this.hasPag = t === '' ? '' : '1', document.querySelector("input[type='radio']:checked").value) { default: this.apiRoute = 'giphy', fetch(`https://api.giphy.com/v1/gifs/search?api_key=5KnNW5U9nJ2Xjnas3lugKxMIXVdCsrqF&q=${t}&limit=${this.gifsPerPage}&offset=${(this.currPage - 1) * this.gifsPerPage}`).then((e) => e.json()).then((e) => { const t = e.data; t.length === 0 ? this.emptyGifResults = 1 : this.emptyGifResults = '', this.gifs = [], t.forEach((e) => { this.gifs.push({ id: e.id, thumbUrl: e.images.preview_webp.url, originalUrl: e.images.original.webp }); }); }).catch(() => { this.emptyGifResults = 1; }); break; case 'gfycat': this.apiRoute = 'gfycat', fetch(`https://api.gfycat.com/v1/gfycats/search?count=${this.gifsPerPage * this.numPages}&search_text='${t}`).then((e) => e.json()).then((e) => { const t = e.gfycats; this.gfycatCursor = e.cursor, t.length === 0 ? this.emptyGifResults = 1 : this.emptyGifResults = ''; const s = (this.currPage - 1) * this.gifsPerPage; const a = s + this.gifsPerPage; this.gifs = []; let o = 0; t.forEach((e) => { o >= s && o < a && this.gifs.push({ id: e.gfyId, thumbUrl: e.max1mbGif, originalUrl: e.webpUrl }), o += 1; }); }).catch((e) => { console.error(e), this.emptyGifResults = 1; }); break; } },
        selectGif(e) { const t = e.target.getAttribute('data-original'); document.querySelector('#imageURL').value = t, this.message.imageURL = t; },
        paginateGif(e) { this.currPage = e.target.innerText, this.searchGif(e); },
        fullSize(e) { e.target.classList.toggle('fullsize'); },
        createVideo(e) { const t = e.target; const s = document.createElement('video'); s.classList.add('img-thumbnail'), s.src = t.src, s.autoplay = !0, s.loop = !0, s.muted = !0, s.playsInline = !0, t.parentElement.insertBefore(s, t), t.style.display = 'none', t.error = null, s.addEventListener('click', (e) => { this.fullSize(e); }), s.onerror = function (e) { e.target.parentElement.querySelector('.img-thumbnail').src = 'http://via.placeholder.com/300?text=erro ao carregar url  :('; }; },
        preventVideo(e) { const t = e.target; const s = t.previousElementSibling; s && s.tagName === 'VIDEO' && (t.previousElementSibling.remove(), t.style.display = 'initial'); },
        sleep(e) { return new Promise((t) => setTimeout(t, e)); },
        async uploadToImgur(e, t) { document.querySelector('.imagePreview').children[0].classList.add('uploading'); const s = document.querySelector('.create-thread > form > button[type=submit]'); let a; s.disabled = !0; const o = new FormData(); e === 'image' ? (o.append('image', t), a = E) : (o.append('video', t), a = I); const i = { method: 'POST', body: o, redirect: 'follow' }; fetch(a, i).then((e) => e.json()).then(async (e) => { const t = document.querySelector('.imagePreview'); const a = t.children[0]; if (e.status === 200 && !0 === e.success) { this.message.imageURL = e.data.link, this.gif_origin = 'imgur', this.optUpload = !0, await this.sleep(100), e.data.type.startsWith('video/') ? a.innerHTML = `\n                <source src="${e.data.link}"\n                type="${e.data.type}">\n              ` : a.src = e.data.link, a.classList.remove('uploading'); const s = t.querySelector('button'); s.setAttribute('data-deletehash', e.data.deletehash); } else e.status === 500 && !1 === e.success ? (this.error = '\n              Erro no servidor de upload! :(\n\n              Tente subir sua imagem em outro lugar\n\n              e poste usando o link!\n\n              (https://postimages.org/,\n\n              https://imgur.com/upload,\n\n              https://giphy.com/upload,\n etc)\n              ', this.isPreviewing = '') : (this.error = '\n              Aceitamos apenas imagens no formato\n\n              JPEG, PNG, GIF, APNG e TIFF!\n            ', this.isPreviewing = ''); s.disabled = !1; }).catch((e) => console.log('error', e)); },
        readAsDataURL(e, t) {
          return new Promise((s) => {
            const a = new FileReader(); a.onload = function () {
              const o = t; return o.src = a.result, s({
                data: a.result, name: e.name, size: e.size, type: e.type,
              });
            }, a.readAsDataURL(e);
          });
        },
        async handleUpload(e) { let t; const s = e.target.files[0]; const a = document.querySelector('#uploadIMG'); if (s.type.startsWith('image/')) this.isPreviewing = 'image', await this.sleep(100), t = document.querySelector('.imagePreview'), await this.readAsDataURL(s, t.children[0]), await this.uploadToImgur('image', s); else if (s.type.startsWith('video/')) if (this.allowedUploadVideoFormats.includes(s.type)) { this.isPreviewing = 'video', await this.sleep(100), t = document.querySelector('.imagePreview'); const e = URL.createObjectURL(s); t.children[0].src = e, await this.uploadToImgur('video', s); } else this.error = `\n            Formato de vídeo não aceito!\n\n            Funciona apenas com os formatos abaixo:\n\n            ${this.allowedUploadVideoFormats.join(', ')}\n          `, a.value = ''; else this.error = '\n          Aceitamos apenas imagens,\n\n          gifs e vídeos!\n        ', a.value = ''; },
        removeUpload(e) { const t = e.target.getAttribute('data-deletehash').trim(); fetch(`https://gchan-message-board.herokuapp.com/imgur/${t}`, { method: 'DELETE', headers: { Authorization: 'Client-ID 3435e574a9859d1' }, redirect: 'follow' }).then((e) => e.json()).then((e) => { !0 === e.data && !0 === e.success && (this.optUpload = !1, this.isPreviewing = '', this.message.imageURL = '', document.querySelector('input[name=uploadIMG]').value = ''); }); },
      },
    }; const O = j; const B = Object(u.a)(O, h, f, !1, null, null, null); const z = B.exports; const G = function () {
      const e = this; const t = e.$createElement; const a = e._self._c || t; return a('div', { staticClass: 'about' }, [a('h1', [e._v('Bem-vindo ao gchan!')]), a('img', { attrs: { src: s('ec3c'), alt: 'poste no gchan' } }), a('section', { attrs: { id: 'cookies' } }, [a('div', { attrs: { id: 'cookies-text' } }, [e._m(0), a('p', [e._v('você pode alterar suas preferências abaixo.')]), a('form', [a('select', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.cookie_consent_computed, expression: 'cookie_consent_computed',
        }],
        attrs: { name: 'cookie-consent', id: 'cookie-consent' },
        on: { change: [function (t) { const s = Array.prototype.filter.call(t.target.options, ((e) => e.selected)).map(((e) => { const t = '_value' in e ? e._value : e.value; return t; })); e.cookie_consent_computed = t.target.multiple ? s : s[0]; }, function (t) { return e.selectCookieConsent(t); }] },
      }, [a('option', { attrs: { value: 'true' } }, [e._v('aceito a coleta de dados')]), a('option', { attrs: { value: 'false' } }, [e._v('recuso a coleta de dados')])])])])])]);
    }; const N = [function () { const e = this; const t = e.$createElement; const s = e._self._c || t; return s('p', [e._v('o '), s('b', [e._v('gchan')]), e._v(' usa o '), s('a', { attrs: { href: 'https://twitter.com/googleanalytics', target: '_blank', rel: 'noreferrer' } }, [e._v('google analytics')]), e._v(' para contabilizar os acessos e as ações mais frequentes realizadas no site.'), s('br'), e._v(' Fique à vontade para bloquear a coleta dos dados. ')]); }]; const H = {
      name: 'Info',
      props: { auth: { default: () => ({ username: '', loggedIn: '' }), type: Object } },
      data: () => ({
        SERVERurl: 'https://gchan-message-board.herokuapp.com',
        show_pwd_checked: '',
        name: '',
        email: '',
        password: '',
        signUpFlash: {
          type: '', header: '', text: '', message: '',
        },
      }),
      mounted() {},
      computed: { cookie_consent_computed: { get() { const e = document.cookie.match('(^|;)\\s*cookie_consent_variable\\s*=\\s*([^;]+)'); return e ? e.pop() : 'true'; }, set() {} } },
      methods: {
        selectCookieConsent(e) { const t = window.location.hostname; const s = new Date((new Date()).getTime() + 31536e6).toGMTString(); const a = e.target.selectedOptions[0].value; if (a === 'false') { const e = new Date(0).toGMTString(); document.cookie = `_gat_UA-182341584-1=;expires=${e};domain=.${t};path=/`, document.cookie = `_ga=;expires=${e};domain=.${t};path=/`, document.cookie = `_gid=;expires=${e};domain=.${t};path=/`; }document.cookie = `cookie_consent_variable=${a};expires=${s};path=/;Secure`; },
        showPassword() { const e = document.querySelector('#password'); const t = e.getAttribute('type'); t === 'password' ? e.setAttribute('type', 'text') : e.setAttribute('type', 'password'); },
        register(e) { fetch(`${this.SERVERurl}/register`, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: `name=${this.name}&email=${this.email}&password=${this.password}` }).then((e) => e.json()).then((t) => { t ? t === 'success' ? (e.target.reset(), this.signUpFlash.type = 'success', this.signUpFlash.header = 'Bem vindo!', this.signUpFlash.text = `Cadastro realizado com sucesso, ${this.username}!\nRealizando login...\n`, this.signUpFlash.message = 'Aguarde...', this.login()) : console.log(t) : (this.signUpFlash.type = 'error', this.signUpFlash.header = 'Oh não!', this.signUpFlash.link = '#contact', this.signUpFlash.text = 'Ocorreu um erro ao realizar seu cadastro.\nAtualize a página ou \n', this.signUpFlash.message = 'entre em contato.'); }); },
        async login() {
          fetch(`${this.SERVERurl}/login`, {
            method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, credentials: 'include', body: `email=${this.email}&password=${this.password}`,
          }).then((e) => e.json()).then((e) => { e.id && e.name && e.email && e.password ? (this.auth.loggedIn = !0, this.auth.username = e.name, this.signUpFlash.type = 'success', this.signUpFlash.header = 'Parabéns!', this.signUpFlash.link = '/', this.signUpFlash.text = 'Login realizado com sucesso!\nVocê já pode postar.\n', this.signUpFlash.message = 'Ir para as postagens!', this.username = '', this.password = '') : e.message && (this.signUpFlash.type = 'error', this.signUpFlash.header = 'Oh não!', this.signUpFlash.text = `${e.message}\nTente novamente!\n`); });
        },
      },
    }; const V = H; const D = Object(u.a)(V, G, N, !1, null, null, null); const Y = D.exports; const J = function () { const e = this; const t = e.$createElement; const s = e._self._c || t; return s('section', [s('Message', { key: e.message.id, attrs: { message: e.message, auth: e.auth, replies: e.message.replies }, on: { replyMessage: e.replyMessage, update(t) { e.message = t; } } }), [s('ReplyBox', { attrs: { messageToReplyTo: this.messageToReplyTo, allowedUploadVideoFormats: this.allowedUploadVideoFormats }, on: { closeReply: this.closeReply, addReplyToThread: this.addReplyToThread } })]], 2); }; const W = []; const Z = 'https://gchan-message-board.herokuapp.com/message/'; const $ = 'https://gchan-message-board.herokuapp.com/replies'; const X = {
      name: 'Post', components: { ReplyBox: R, Message: L }, props: { id: { type: Number, required: !0 }, auth: { default: () => ({ username: '', loggedIn: '', id: '' }), type: Object } }, data: () => ({ message: '', messageToReplyTo: '', allowedUploadVideoFormats: ['video/mp4', 'video/webm', 'video/x-matroska', 'video/quicktime', 'video/x-flv', 'video/x-msvideo', 'video/x-ms-wmv', 'video/mpeg'] }), mounted() { fetch(`${Z}${this.id}`).then((e) => e.json()).then((e) => { e.results ? (this.message = e.results.shift(), fetch(`${$}/${this.id}`).then((e) => e.json()).then((e) => { e.error || this.$set(this.message, 'replies', e); })) : window.location.href = 'https://gchan.com.br/'; }); }, methods: { replyMessage(e) { this.messageToReplyTo = e; }, closeReply() { this.messageToReplyTo = ''; }, addReplyToThread(e) { let t; t = typeof e === 'string' ? JSON.parse(e) : e, this.message.replies.push(t); } }, metaInfo() { return { title: this.message.subject || `gchan post ${this.message.id}`, meta: [{ name: 'description', content: this.message.message }, { property: 'og:title', content: this.message.subject || `gchan post ${this.message.id}` }, { property: 'og:site_name', content: 'gchan' }, { property: 'og:description', content: this.message.message }, { property: 'og:type', content: 'post' }, { property: 'og:url', content: `https://gchan.com.br/#/post/${this.message.id}` }, { property: 'og:image', content: this.message.imageurl }, { name: 'twitter:card', content: 'summary' }, { name: 'twitter:site', content: 'https://gchan.com.br' }, { name: 'twitter:creator', content: '@gchan_board' }, { name: 'twitter:description', content: this.message.message }, { name: 'twitter:title', content: this.message.subject || `gchan post ${this.message.id}` }, { name: 'twitter:image', content: this.message.imageurl }] }; },
    }; const K = X; const Q = Object(u.a)(K, J, W, !1, null, null, null); const ee = Q.exports; const te = function () {
      const e = this; const t = e.$createElement; const s = e._self._c || t; return s('div', [s('section', { staticClass: 'create-thread' }, [s('form', { on: { submit(t) { return t.preventDefault(), e.addMessage(); } } }, [e.error ? s('div', { staticClass: 'alert-error' }, [s('span', { on: { click(t) { e.error = ''; } } }, [e._v('x')]), s('h4', [e._v('Erro!')]), s('p', [e._v(e._s(e.error))])]) : e._e(), s('div', { staticClass: 'form-group' }, [s('label', { attrs: { for: 'username' } }, [e._v('Usuário')]), s('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.message.username, expression: 'message.username',
        }],
        staticClass: 'form-control',
        attrs: {
          type: 'text', id: 'username', 'aria-describedby': 'usernameHelp', placeholder: 'anônimo', maxlength: '30', required: '',
        },
        domProps: { value: e.message.username },
        on: { focus(t) { return e.clearName(t); }, focusout(t) { return e.checkForName(t); }, input(t) { t.target.composing || e.$set(e.message, 'username', t.target.value); } },
      }), e.auth.id ? s('small', { staticClass: 'form-text text-muted', attrs: { id: 'usernameHelp' } }, [e._v(' anonimato é para os fracos ')]) : s('small', { staticClass: 'form-text text-muted', attrs: { id: 'usernameHelp' } }, [e._v(` ${e._s(e.smallUsernamePhrase)} `)])]), s('div', { staticClass: 'form-group' }, [s('div', { staticClass: 'form-subject' }, [s('label', { attrs: { for: 'tem-assunto' } }, [e._v('colocar assunto?')]), s('input', { attrs: { type: 'checkbox', name: 'tem-assunto', id: 'tem-assunto' }, on: { change: e.toggleSubject } })]), !0 === this.hasSubject ? s('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.message.subject, expression: 'message.subject',
        }],
        staticClass: 'form-control',
        attrs: {
          type: 'text', id: 'subject', placeholder: 'assunto', maxlength: '50', required: '',
        },
        domProps: { value: e.message.subject },
        on: { input(t) { t.target.composing || e.$set(e.message, 'subject', t.target.value); } },
      }) : e._e()]), s('div', { staticClass: 'form-group' }, [s('label', { attrs: { for: 'message' } }, [e._v('Mensagem')]), s('textarea', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.message.message, expression: 'message.message',
        }],
        staticClass: 'form-control',
        attrs: {
          id: 'message', rows: '5', placeholder: 'mensagem', required: '', maxlength: '250',
        },
        domProps: { value: e.message.message },
        on: { input(t) { t.target.composing || e.$set(e.message, 'message', t.target.value); } },
      })]), s('div', { staticClass: 'form-group' }, [this.optUpload ? e._e() : s('label', { attrs: { for: 'imageURL' } }, [e._v(' URL da imagem/gif/vídeo')]), s('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: e.message.imageURL, expression: 'message.imageURL',
        }],
        staticClass: 'form-control',
        attrs: {
          type: 'url', id: 'imageURL', placeholder: 'https://~', readonly: !0 === this.optUpload, disabled: this.$route.query.mediaUrl,
        },
        domProps: { value: e.message.imageURL },
        on: { input(t) { t.target.composing || e.$set(e.message, 'imageURL', t.target.value); } },
      })]), s('button', { staticClass: 'btn btn-primary', attrs: { type: 'submit' } }, [e._v('Enviar')])]), this.$route.query.mediaUrl ? s('div', { staticClass: 'imagePreview' }, [this.$route.query.type === 'image' ? s('img', { attrs: { src: this.$route.query.mediaUrl, id: 'imageToUpload', alt: 'pré-visualização de imagem para upload' } }) : this.$route.query.type === 'video' ? s('div', { staticClass: 'video-wrap' }, [s('video', {
        staticClass: 'videoPreview',
        attrs: {
          id: 'videoToUpload', src: this.$route.query.mediaUrl, autoplay: 'true', loop: 'true', muted: 'true', playsinline: 'true',
        },
        domProps: { muted: !0 },
      }), s('button', { staticClass: 'volume', attrs: { type: 'button' }, on: { click: e.toggleAudioOnClick } }, [s('img', { attrs: { src: 'https://gchan.com.br/volume-off.png', alt: 'Volume' } })])]) : s('p', [e._v('Formato não suportado! ::(')])]) : e._e()])]);
    }; const se = []; const ae = 'https://gchan-message-board.herokuapp.com/messages/'; const oe = {
      name: 'Home',
      props: { auth: { default: () => ({ username: '', loggedIn: '', id: '' }), type: Object } },
      data: () => ({
        optUpload: '',
        messages: [],
        replyObserver: null,
        messageToReplyTo: '',
        quotesToAdd: '',
        gifsPerPage: 4,
        currPage: 1,
        numPages: 5,
        error: '',
        apiRoute: 'giphy',
        isGifBeingSearched: '',
        emptyGifResults: '',
        hasPag: '',
        gifs: [],
        hasSubject: !1,
        message: {
          username: 'anônimo', subject: '', message: '', imageURL: '', user_id: 0, gif_origin: 'none',
        },
        isPreviewing: '',
        allowedUploadVideoFormats: ['video/mp4', 'video/webm', 'video/x-matroska', 'video/quicktime', 'video/x-flv', 'video/x-msvideo', 'video/x-ms-wmv', 'video/mpeg'],
        offset: 0,
        messagesBatchSize: 15,
      }),
      computed: { smallUsernamePhrase() { const e = [{ quote: 'o que é que há, pois, num nome?', reference: 'https://pt.wikipedia.org/wiki/William_Shakespeare' }, { quote: 'remember: no use for a name', reference: 'https://www.youtube.com/watch?v=mEdd1NHnwIE' }, { quote: 'o homem é menos ele mesmo quando fala de sua pessoa', reference: 'https://pt.wikipedia.org/wiki/Oscar_Wilde' }, { quote: 'o anonimato é a fama do futuro', reference: 'https://pt.wikipedia.org/wiki/John_Boyle' }, { quote: 'a vingança nunca é plena, mata a alma e a envenena', reference: 'https://pt.wikiquote.org/wiki/Seu_Madruga' }, { quote: 'Ski-bi dibby dib yo da dub dub', reference: 'https://www.youtube.com/watch?v=Hy8kmNEo1i8' }, { quote: "Baby don't hurt me", reference: 'watsalov' }]; return e[Math.floor(e.length * Math.random())].quote; } },
      mounted() { this.$route.query.mediaUrl && (this.message.imageURL = this.$route.query.mediaUrl); },
      methods: {
        hasAudio(e) { return e.mozHasAudio || Boolean(e.webkitAudioDecodedByteCount) || Boolean(e.audioTracks && e.audioTracks.length); },
        toggleAudioOnClick(e) { const t = e.target; let s; let a; t.tagName === 'BUTTON' ? (s = t.previousElementSibling, a = t.children.shift()) : t.tagName === 'IMG' && (s = t.parentElement.previousElementSibling, a = t), console.log(s), s.muted = !s.muted, s.muted ? a.src = 'https://gchan.com.br/volume-off.png' : a.src = 'https://gchan.com.br/volume-high.png'; },
        toggleSubject() { this.hasSubject = !this.hasSubject; },
        clearName(e) { e.target.value === 'anônimo' && (e.target.value = ''); },
        checkForName(e) { e.target.value === '' && (e.target.value = 'anônimo'); },
        isMyPost() { return !0; },
        addMessage() { const e = document.querySelector('.create-thread > form > button[type=submit]'); e.disabled = !0, this.auth.username && (this.message.username = this.auth.username, this.message.user_id = parseInt(this.auth.id, 10)), /giphy/.test(this.message.imageURL) ? this.message.gif_origin = 'giphy' : /gfycat/.test(this.message.imageURL) ? this.message.gif_origin = 'gfycat' : /tenor/.test(this.message.imageURL) ? this.message.gif_origin = 'tenor' : /imgur/.test(this.message.imageURL) ? this.message.gif_origin = 'imgur' : this.message.gif_origin = 'outro', fetch(ae, { method: 'POST', body: JSON.stringify(this.message), headers: { 'content-type': 'application/json' } }).then((e) => e.json()).then((t) => { if (t.details) { const e = t.details.map((e) => e.message).join('.'); this.error = e; } else t.error ? t.origin === 'psql' && t.code === '23505' && (this.error = 'Mensagem duplicada!\ngit gud e altere algum dos campos antes de enviar ᕦ(ò_óˇ)ᕤ') : window.location.href = '/'; e.disabled = !1; }); },
        createVideo(e) { const t = e.target; const s = document.createElement('video'); s.classList.add('img-thumbnail'), s.src = t.src, s.autoplay = !0, s.loop = !0, s.muted = !0, s.playsInline = !0, t.parentElement.insertBefore(s, t), t.style.display = 'none', t.error = null, s.addEventListener('click', (e) => { this.fullSize(e); }), s.onerror = function (e) { e.target.parentElement.querySelector('.img-thumbnail').src = 'http://via.placeholder.com/300?text=erro ao carregar url  :('; }; },
        preventVideo(e) { const t = e.target; const s = t.previousElementSibling; s && s.tagName === 'VIDEO' && (t.previousElementSibling.remove(), t.style.display = 'initial'); },
        sleep(e) { return new Promise((t) => setTimeout(t, e)); },
        readAsDataURL(e, t) {
          return new Promise((s) => {
            const a = new FileReader(); a.onload = function () {
              const o = t; return o.src = a.result, s({
                data: a.result, name: e.name, size: e.size, type: e.type,
              });
            }, a.readAsDataURL(e);
          });
        },
      },
    }; const ie = oe; const re = Object(u.a)(ie, te, se, !1, null, null, null); const ne = re.exports; a.a.use(p.a), a.a.use(g.a); const le = [{ path: '/', name: 'Home', component: z }, { path: '/about', name: 'About', component() { return s.e('about').then(s.bind(null, 'f820')); } }, { path: '/info', name: 'Info', component: Y }, {
      path: '/post/:id', name: 'Post', component: ee, props: (e) => { const t = Number.parseInt(e.params.id, 10); return { id: t }; },
    }, { path: '/new', name: 'New post', component: ne }]; const me = new p.a({ routes: le }); const ue = me; a.a.config.productionTip = !1, new a.a({ router: ue, render(e) { return e(d); } }).$mount('#app');
  },
  9110(e, t) { e.exports = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAWCAYAAACFbNPBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABRdJREFUeNrsW6+X2zgQdu8FhMXQbAPDmmNhG1jWwGX1sWXNf7A5dqxZVtbAY7dlYedlgSoLdJmhw8xy1nuf3ptTNZLl2N5Nq3lvXhNZHo2k+eZXtm/O53MU6OpoDp5q4xk4UFckARL4ajitOT/bqax5U3NseH/DvNNkjomkLrual4y+meGdzLI/0/wNnnH73ljkbSx6Nzrz34KLuAqSkULU/KXmG8fcSc0PmD/vWS+py4ea/635qea4x7VSZvzBEElVlH3wlPUDBYBcDzjetjDeIdOt9wBJXyT38sg82xnGtszcR59zCQB5/fSEqNCG1gPreuvjnVvQpuYTs+5K2/etYd53yGhMI09PplMJ1mlWc4LPOZjKqWouDPILPFMUg+X42BLClaykgY5TRobSKcFauvzK82wqonfC7FmtxclPLZHjEeDJSNGeEsP4g/GsbenZkMJMGFDuegJIiT3+w0SMDDaysaRWZV8A4TyDIKFVXvidwZALzCmAdGkUf2mGIuXvaz6Q8Ts82+JClo4Qm1q8sHDMySHnHWPwB1xA5Xk2e+xZnslnAhL5/R7ythaPqdMJ5yC0dQT0X8MIujZS/exjnIcO4LdRvyTv8itSOj2l3ODuJpemVm0Aogx9T76/g+FK4zrCUMZQRBBPs4SRfMa8BaLMkcxR/x7IBSRYs3TkmwWJHoKsPca6K+hYMvuIDIa/I3oswJHhPdfZKAeSYkzJXZELr5gi84bxlMJyR9uB0qkSa31hwNRn/ZPiPnUgfGTmf/NNrdoCpNLSpb/hsWJc6NgQBTKML4jB6ACZkUgS4/CnxOB1T++6uFzz/Esi17QPLqJQD30PvQ9MmNZlZoiAKrVSXaUFScuO5AxcHtvkINIGOb/osRaJLXdgq1POHYBTGvwnD0CVQwDEdkCcQUcEFDE+FwZQCJJLZ+S5aGA4Nm+VMHovDYCwgeYArz9l9phoxprA+AsSeWZk3crR9YkbAHfKFKNDddfWFlD2TVvch2v/f16iz6gFIKhhLcilTZlUJTIUpwLpxoy8d8D3Ofl8NMhzAYT+wkyL/NwBkMwBkNJhuGND7RJjvCKAuCPRt/I8/9MLdtOaev2vA+qUwpYmXadWXQFEXTrN7xMDIGba9yMByAzvFhinxfixYeHKRY4xKZRNBbkPzRwpHpWZkAbDkqx/JB2rY4v7mkSvn7YDrpU7Uq300gVGLRTaWcLqHIZPvePYYPAlAQONAAeSp7c1IgF5CeqGpIOLUJGtSe0SEcDHhohTeZy1iVYkNcsYo7h5IXA06RSdLCnPvIUT2DIAeewi1Rt1jGYFknutQzWG8RdaFJlpwFEdq5hJrzivsGfSuicYVApgV0y9YOpCpVqaptIiW8RKteh1ST7OvbfWAJIZUtChAXKCJ9823BfXgMg6rKnKLoSMPAFQOOY8QTHarSkADmFIs/LoxzZuRrpdtu4U10UqDUY2J7WNKwIUzLqZ5dBzRsbBEAULD4B8Nxj7LcCeMilwX38P9czoKMi9/3TkA5CmOXsWNeuBV4xMYemEiRY66u+59rFvcY4+9YyPfOmVTb8zfIAXpoY5RbTsq05ZRr8gjaJAr5lUpDClHTKyfAxH1C+FP1Z8/SSjwrcL3l+HIwwA+ZmpRHrj+/uCrF9+j4b50S6kWIFeHCQrACV11BrPSM12TDPh2bFWkzlNSTQcsz3LWzYQ8i428Cb8n/SrpWn0/1/uyxAtuqcAkECBLPSfAAMAD0//f+CYk/8AAAAASUVORK5CYII='; },
  a669(e, t, s) { e.exports = `${s.p}img/sham.e93e9eaa.png`; },
  ec3c(e, t, s) { e.exports = `${s.p}img/gchan_hero.fbf14c4e.jpg`; },
  ff09(e, t) { e.exports = 'data:image/png;base64,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'; },
}));
// # sourceMappingURL=app.5e56b57b.js.map
