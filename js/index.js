(() => { var e = { 2: () => { var e = { "www.click2houston.com": "kprc", "www.ksat.com": "ksat", "www.clickondetroit.com": "wdiv", "www.clickorlando.com": "wkmg", "www.news4jax.com": "wjxt", "www.local10.com": "wplg", "www.wsls.com": "wsls", "www.gmg-local.com": "wdiv", "gmg-kprc-sandbox.cdn.arcpublishing.com": "kprc", "gmg-ksat-sandbox.cdn.arcpublishing.com": "ksat", "gmg-wdiv-sandbox.cdn.arcpublishing.com": "wdiv", "gmg-wjxt-sandbox.cdn.arcpublishing.com": "wjxt", "gmg-wkmg-sandbox.cdn.arcpublishing.com": "wkmg", "gmg-wplg-sandbox.cdn.arcpublishing.com": "wplg", "gmg-wsls-sandbox.cdn.arcpublishing.com": "wsls", "sandbox.gmg.arcpublishing.com": "wdiv" }, o = function (e, o) { var n = new CustomEvent(e); "function" == typeof Event ? n = new Event(e) : (n = document.createEvent("Event")).initEvent(e, !0, !0), n.detail = o, document.dispatchEvent(n) }, n = function (o) { var n = "support@grahamdigital.com", t = window.location.host; t in e && (n = { kprc: '<a href="https://www.click2houston.com/contact">www.click2houston.com/contact</a>', ksat: '<a href="mailto:contactus@ksat.com">contactus@ksat.com</a>', wdiv: '<a href="mailto:clickondetroit@wdiv.com">clickondetroit@wdiv.com</a>', wjxt: '<a href="mailto:webteam@news4jax.com">webteam@news4jax.com</a>', wkmg: '<a href="mailto:webstaff@wkmg.com">webstaff@wkmg.com</a>', wplg: '<a href="mailto:wplgwebstaff@wplg.com">wplgwebstaff@wplg.com</a>', wsls: '<a href="mailto:news@wsls.com">news@wsls.com</a>' }[e[t]]); var a = document.querySelector(".gmg_alert"); if ("login_banned" === o.error_key && 1 === o.isPermanent) a && (a.innerHTML = "<p>Your account has been suspended for violating our comment guidelines. If you believe this suspension was made in error, please contact us at <a href='mailto:".concat(n, "'>").concat(n, "</a></p>"), a.classList.add("error")); else if ("login_banned" === o.error_key && 0 === o.isPermanent) { var c = new Date(o.endDate); a && (a.innerHTML = "<p>Your account has been temporarily suspended for violating our comment guidelines.</p><p>The suspension will end on <i>".concat(c.toLocaleDateString(), " at ").concat(c.toLocaleTimeString(), "</i>.</p><p>If you believe this suspension was made in error, please contact us at ").concat(n, "</p>"), a.classList.add("error")) } }; window.vfAsyncInit = function () { o("vf_loaded"), window.vf.$subscribe("login", "failure", n), window.vf.$subscribe("authentication", "required", (function () { console.log("[VF] Authentication required"), o("gmg_open_login_modal", { source: "viafoura" }), setTimeout((function () { window.viafoura.$publish("tray", "close") }), 0) })), window.vf.$subscribe("authentication", "logout", (function () { o("gmg_logout") })), window.viafoura.$subscribe("comment-thread", "loaded", (function () { var e = sessionStorage.getItem("gm_".concat(window.location.href, "_comment")); e && (document.querySelector("textarea.vf-content").value = atob(e)) })), window.dataLayer = window.dataLayer || [], window.vf.$subscribe("comment", "created", (function () { window.dataLayer.push({ event: "clickEvent", gaCategory: "NTG user", gaAction: "comment added", gaLabel: document.querySelector("link[rel='canonical']") ? document.querySelector("link[rel='canonical']").getAttribute("href") : window.location.href }), sessionStorage.removeItem("gm_".concat(window.location.href, "_comment")) })), window.vf.$subscribe("comment-reply", "posted", (function () { window.dataLayer.push({ event: "clickEvent", gaCategory: "NTG user", gaAction: "comment added", gaLabel: document.querySelector("link[rel='canonical']") ? document.querySelector("link[rel='canonical']").getAttribute("href") : window.location.href }) })), window.vf.$subscribe("share", "clicked", (function (e) { window.dataLayer.push({ event: "clickEvent", gaCategory: "NTG social", gaAction: "social share", gaLabel: e }) })), window.vf.$subscribe("topics", "loaded", (function (e) { localStorage.setItem("topic_subscriptions", JSON.stringify(e)), o("vf_topics_ready") })) } } }, o = {}; function n(t) { var a = o[t]; if (void 0 !== a) return a.exports; var c = o[t] = { exports: {} }; return e[t](c, c.exports, n), c.exports } n.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, (() => { "use strict"; n.r({}) })(), n(2) })();