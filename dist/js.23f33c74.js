parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nTyN":[function(require,module,exports) {
module.exports="/github-alt-light.1202ce91.svg";
},{}],"WfHv":[function(require,module,exports) {
module.exports="/github-alt.c5cbed85.svg";
},{}],"IqGy":[function(require,module,exports) {
module.exports="/external-link-light.e89896a1.svg";
},{}],"DoMw":[function(require,module,exports) {
module.exports="/external-link-alt.e5a5d58f.svg";
},{}],"QvaY":[function(require,module,exports) {
var t=document.getElementById("theme-switch"),e=document.querySelectorAll("[data-theme]"),n=localStorage.getItem("current-theme"),r=function(){document.documentElement.classList.add("transition"),window.setTimeout(function(){document.documentElement.classList.remove("transition")},1e3)};n||(localStorage.setItem("current-theme","light"),n=localStorage.getItem("current-theme")),"dark"===n&&e.forEach(function(t){r(),t.setAttribute("data-theme","dark")}),t.addEventListener("click",function(){var t=localStorage.getItem("current-theme");"light"===t?(localStorage.setItem("current-theme","dark"),e.forEach(function(t){r(),t.setAttribute("data-theme","dark")})):"dark"===t&&(localStorage.setItem("current-theme","light"),e.forEach(function(t){r(),t.setAttribute("data-theme","light")}))}),window.hideShowMenu=function(){var t=document.querySelector("#open-navbar1");"none"===t.style.display?(r(),t.style.display="block"):(r(),t.style.display="none")},window.githubMouseOver=function(t){t.target.src=require("../img/icons/github-alt-light.svg")},window.githubMouseOut=function(t){t.target.src=require("../img/icons/github-alt.svg")},window.externalLinkMouseOver=function(t){t.target.src=require("../img/icons/external-link-light.svg")},window.externalLinkMouseOut=function(t){t.target.src=require("../img/icons/external-link-alt.svg")};
},{"../img/icons/github-alt-light.svg":"nTyN","../img/icons/github-alt.svg":"WfHv","../img/icons/external-link-light.svg":"IqGy","../img/icons/external-link-alt.svg":"DoMw"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.23f33c74.js.map