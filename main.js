(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-35",headers:{authorization:"9abf0ed7-c756-4a46-9d33-7ba85115d0f4","Content-Type":"application/json"}},t=document.querySelector("#card-template").content;function n(n,r,o,c,a,i,u,s,l){var d=t.querySelector(".card").cloneNode(!0),p=d.querySelector(".card__like-button"),f=d.querySelector(".card__like-count"),_=d.querySelector(".card__delete-button"),m=d.querySelector(".card__image"),y=d.querySelector(".card__title");return m.src=r,m.alt=o,y.textContent=n,f.textContent=c,i===u?_.addEventListener("click",(function(){return function(t,n){(function(t){return fetch("".concat(e.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))})(n).then((function(){t.remove()})).catch((function(e){console.log(e)}))}(d,s)})):_.remove(),l&&p.classList.add("card__like-button_is-active"),p.addEventListener("click",(function(){var t=p.classList.contains("card__like-button_is-active");!function(t,n,r){(function(t,n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:n?"DELETE":"PUT",headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))})(n,r).then((function(e){var n=t.querySelector(".card__like-button");t.querySelector(".card__like-count").textContent=e.likes.length,r?n.classList.remove("card__like-button_is-active"):n.classList.add("card__like-button_is-active")})).catch((function(e){console.log(e)}))}(d,s,t)})),m.addEventListener("click",a),d}function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}function c(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&o(t)}}var a=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},i=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){var r=e.querySelector(".".concat(n.id,"-error"));n.classList.remove(t.inputErrorClass),r.classList.remove(t.errorClass),r.textContent=""})),r.classList.add(t.inactiveButtonClass),r.disabled=!0};function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var s,l={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},d=document.querySelector(".places__list"),p=document.querySelector(".profile__edit-button"),f=document.querySelector(".profile__image-overlay"),_=document.querySelector(".profile__add-button"),m=document.querySelectorAll(".popup"),y=document.querySelector(".profile__title"),v=document.querySelector(".profile__description"),h=document.querySelector(".profile__image"),S=document.querySelector("form[name='edit-profile']"),b=document.querySelector("form[name='edit-profile-avatar']"),q=b.querySelector(".popup__input_type_url"),k=S.querySelector(".popup__input_type_name"),L=S.querySelector(".popup__input_type_description"),g=document.querySelector("form[name='new-place']"),C=g.querySelector(".popup__input_type_card-name"),E=g.querySelector(".popup__input_type_url"),j=document.querySelector(".popup_type_edit"),x=document.querySelector(".popup_type_edit-avatar"),A=document.querySelector(".popup_type_new-card"),P=document.querySelector(".popup_type_image"),w=P.querySelector(".popup__image"),U=P.querySelector(".popup__caption");function T(e){if(e.target.classList.contains("card__image")){var t=e.target.src,n=e.target.alt;w.src=t,w.alt=n,U.textContent=n,r(P)}}function B(e,t){e.querySelector(".popup__button").textContent=t?"Сохранение...":"Сохранить"}Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))]).then((function(e){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];y.textContent=c.name,v.textContent=c.about,h.style.backgroundImage="url(".concat(c.avatar,")");var i=c._id;a.forEach((function(e){var t=e.name,r=e.link,o=e.likes.length,c="Изображение места: ".concat(t),a=e.owner._id,u=e._id,s=e.likes.some((function(e){return e._id===i}));d.append(n(t,r,c,o,T,a,i,u,s))}))})).catch((function(e){console.log(e)})),f.addEventListener("click",(function(){r(x),i(b,l)})),p.addEventListener("click",(function(){k.value=y.textContent,L.value=v.textContent,r(j),i(S,l)})),_.addEventListener("click",(function(){return r(A)})),m.forEach((function(e){e.classList.add("popup_is-animated"),e.querySelector(".popup__close").addEventListener("click",(function(){return o(e)})),e.addEventListener("click",(function(e){return function(e){e.target.classList.contains("popup")&&o(e.target)}(e)}))})),S.addEventListener("submit",(function(t){t.preventDefault();var n,r,c=k.value,a=L.value;B(S,!0),(n=c,r=a,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){y.textContent=e.name,v.textContent=e.about,o(j)})).catch((function(e){console.log(e)})).finally((function(){B(S,!1)}))})),b.addEventListener("submit",(function(t){t.preventDefault();var n,r=q.value;B(b,!0),(n=r,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){h.style.backgroundImage="url('".concat(e.avatar,"')"),o(x)})).catch((function(e){console.log(e)})).finally((function(){B(b,!1)}))})),g.addEventListener("submit",(function(t){t.preventDefault();var r=C.value,c=E.value,a="Изображение места: ".concat(r);B(g,!0),function(t,n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(r,c).then((function(e){d.prepend(n(e.name,e.link,a,0,T,e.owner._id,e.owner._id,e._id,!1))})).catch((function(e){console.log(e)})).finally((function(){B(g,!1)})),o(A),C.value="",E.value="",i(g,l)})),s=l,Array.from(document.querySelectorAll(s.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);a(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.classList.add(r.errorClass),o.textContent=n}(e,t,t.validationMessage,n)}(e,o,t),a(n,r,t)}))}))}(e,s)}))})();