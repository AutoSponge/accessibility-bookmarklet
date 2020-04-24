/*!
CalcNames: The AccName Computation Prototype, compute the Name and Description property values for a DOM node
Returns an object with 'name' and 'desc' properties.
Functionality mirrors the steps within the W3C Accessible Name and Description computation algorithm.
http://www.w3.org/TR/accname-aam-1.1/
Authored by Bryan Garaventa, plus refactoring contrabutions by Tobias Bengfort
https://github.com/whatsock/w3c-alternative-text-computation
Distributed under the terms of the Open Source Initiative OSI - MIT License
*/
!function(){var o=window.AccNamePrototypeNameSpace||window;o&&"string"==typeof o&&o.length&&(window[o]={},o=window[o]),o.getAccNameVersion="2.48",o.getAccName=o.calcNames=function(e,t,ee,r){var te=(r=r||{}).document||document,n={name:"",desc:"",error:""},u=!1,re=!1;try{if(!e||1!==e.nodeType)return n;function o(e,t){var r=t;if(-1!==r.indexOf("attr("))for(var n=r.match(/attr\((.|\n|\r\n)*?\)/g),o=0;o<n.length;o++){var i=n[o].slice(5,-1);i=e.getAttribute(i)||"",r=r.replace(n[o],i)}return r=r.replace(/url\((.*?)\)\s+\/|url\((.*?)\)/g,"").replace(/^\s+|\s+$/g,"").replace(/\"/g,"")}var ne=e,oe=[],ie=[],ae=function(z,F,J,K,U,X,Y){(Y=Y||{}).tag=Y.tag||!1,Y.role=Y.role||!1,Y.go=Y.go||!1;var e={name:"",title:""},Z=!1,l=function(e,t){for(var r=[];e;){if((e=e.id&&X[e.id]&&X[e.id].node&&-1===r.indexOf(e)?(r.push(e),X[e.id].node):e.parentNode)&&e===t)return!0;if(!e||e===X.top||e===te.body)return!1}return!1},t={before:"",after:""};if(X.ref){if(ve(z,te.body,!0,!0))return e;if(xe(z,te.body))var _=!0}Y.tag||Y.role||-1!==oe.indexOf(z)||(t=Oe(z,null),ee&&(-1===t.before.indexOf(" [ARIA] ")&&-1===t.before.indexOf(" aria-")&&-1===t.before.indexOf(" accName: ")||(t.before=""),-1===t.after.indexOf(" [ARIA] ")&&-1===t.after.indexOf(" aria-")&&-1===t.after.indexOf(" accDescription: ")||(t.after="")));var d=function(e,t,r){var n={name:"",title:""};if(!e)return n;var o=!(!e||1!==e.nodeType||!g(e)),i=e,a=t(e)||{};if(a.name&&a.name.length&&(n.name+=a.name),!a.skip&&!function(e,t){if(!t||!e||1!==t.nodeType||1!==e.nodeType)return!1;function r(e,t){var r=ue(e),n=e.nodeName.toLowerCase();return r&&0<=t.roles.indexOf(r)||!r&&0<=t.tags.indexOf(n)}return r(e,s)?e!==t||e.id&&X[e.id]&&X[e.id].node?!(l(e,X.top)&&"select"!==e.nodeName.toLowerCase()||r(t,f)):!fe(e):!(!r(e,c)&&(e!==ne||r(e,f))||Y.go)}(e,X.top))for(Y.go&&(Y.go=!1),e=e.firstChild;e;)n.name+=d(e,t,r).name,e=e.nextSibling;return n.name+=a.owns||"",ne===i&&r===i&&!Ce(n.name)&&Ce(a.title)?n.name=Ae(a.title):ne===i&&r===i&&Ce(a.title)&&(n.title=Ae(a.title)),ne===i&&r===i&&Ce(a.desc)&&(n.title=Ae(a.desc)),ne===i&&r===i&&Ce(a.placeholder)&&!Ce(n.name)?(n.name=Ae(a.placeholder),u=!0):ne===i&&r===i&&Ce(a.placeholder)&&!Ce(n.title)&&(n.title=Ae(a.placeholder)),(o||a.isWidget)&&(n.name=Ae(n.name)),n};return e=d(z,function(e){var t=0,r=null,n=[],o=[],i={name:"",title:"",owns:"",skip:!1},a=!!(e&&1===e.nodeType&&K&&K.length&&-1!==K.indexOf(e)&&e===ne&&e!==z),l=!1;if((J||!e||!_&&xe(e,X.top))&&!U&&!a)return i;if(Y.tag||Y.role||-1!==oe.indexOf(e))return i;oe.push(e);var d="",u="",f={before:"",after:""},c=z===e?e:e.parentNode;if(Y.tag||Y.role||-1!==oe.indexOf(c)||(oe.push(c),f=Oe(c,z),ee&&(-1===f.before.indexOf(" [ARIA] ")&&-1===f.before.indexOf(" aria-")&&-1===f.before.indexOf(" accName: ")||(f.before=""),-1===f.after.indexOf(" [ARIA] ")&&-1===f.after.indexOf(" aria-")&&-1===f.after.indexOf(" accDescription: ")||(f.after=""))),1===e.nodeType){var s=e.nodeName.toLowerCase(),g=ue(e),p=!Y.tag&&!Y.role&&e.getAttribute("aria-labelledby")||"",m=!Y.tag&&!Y.role&&e.getAttribute("aria-describedby")||"",b=!Y.tag&&!Y.role&&e.getAttribute("aria-label")||"",h=!Y.tag&&!Y.role&&e.getAttribute("title")||"",x=-1!==ce.indexOf(s),v=-1!==["input"].indexOf(s),y=-1!==se.indexOf(g),A=-1!==ge.indexOf(g),O=-1!==pe.indexOf(g),w=y||A||O||"combobox"===g,N=(w||-1!==me.indexOf(g))&&"link"!==g;i.isWidget=x||N;var C=!1,S=!1,k=e.getAttribute("aria-owns")||"",T=!(Y.tag||Y.role||a||!(e!==z&&(x||w)||e.id&&X[e.id]&&X[e.id].target&&X[e.id].target===e));if(!F&&e===z&&!Y.tag&&!Y.role&&m){var L;for(n=m.split(/\s+/),o=[],t=0;t<n.length;t++)r=te.getElementById(n[t]),o.push(ae(r,!0,!1,[e],!1,{ref:X,top:r}).name);L=Ce(o.join(" ")),Ce(L)&&(i.desc=L,S=!0)}if(!F&&!Y.tag&&!Y.role&&p){for(n=p.split(/\s+/),o=[],t=0;t<n.length;t++)r=te.getElementById(n[t]),o.push(ae(r,!0,J,[e],r===z,{ref:X,top:r}).name);d=Ce(o.join(" ")),Ce(d)&&(Z=l=C=!0,i.skip=!0)}Y.tag||Y.role||C||!Ce(b)||T||Ce(d=b)&&(l=C=!0,e===z&&(Z=J=!0));var V=!Y.tag&&!Y.role&&!C&&g&&-1!==be.indexOf(g)&&!fe(e)&&!he(e);if(!T){if(!Y.tag&&!Y.role&&!C&&e===z&&x){var j=te.querySelectorAll("label"),q="",I=we(e,"label")||!1;for(t=0;t<j.length;t++)(j[t]!==I||"string"==typeof I.getAttribute("for"))&&j[t].getAttribute("for")!==e.id||ve(j[t],te.body,!0)||(q+=Ae(ae(j[t],!0,J,[e],!1,{ref:X,top:j[t]}).name));Ce(d=q)&&(C=!0)}var P=!Y.tag&&!Y.role&&v&&e.getAttribute("type")||!1,R=!Y.tag&&!Y.role&&P&&Ce(e.getAttribute("value"))||!1,E=V&&"img"===s?"":Ce(e.alt||e.getAttribute("alt"));if(Y.tag||Y.role||C||V||"img"!==s&&"image"!==P||!E&&!Ce(h)||(d=Ce(E)||Ce(h),Ce(d)&&(C=!0)),Y.tag||Y.role||C||V||"area"!==s||!E||(d=Ce(E),Ce(d)&&(C=!0)),"optgroup"===s&&(Y.tag||Y.role||C||V||!e.getAttribute("label")||(d=Ce(e.getAttribute("label")),Ce(d)&&(C=!0)),i.skip=!0),!Y.tag&&!Y.role&&!C&&e===z&&P&&-1!==["button","submit","reset"].indexOf(P)){if(R)d=R;else switch(P){case"submit":d="submit";break;case"reset":d="reset";break;default:d=""}Ce(d)&&(C=!0)}if(!Y.tag&&!Y.role&&C&&e===z&&P&&-1!==["button","submit","reset"].indexOf(P)&&R&&R!==d&&!i.desc&&(i.desc=R,S=!0),Y.tag||Y.role||C||e!==z||!P||"image"!==P||(d="Submit Query",re=C=!0),!(Y.tag||Y.role||C||e!==ne||"group"!==g&&"radiogroup"!==g&&(g||"fieldset"!==s))){var B=le(e,["legend"],["legend"])||!1;B&&(d=Ce(ae(B,F,!1,[],!1,{ref:X,top:B}).name)),Ce(d)&&(C=!0),J=!0}if(Y.tag||Y.role||C||e!==ne||"table"!==g&&(g||"table"!==s)||((B=le(e,["caption"],["caption"])||!1)&&(d=Ce(ae(B,F,!1,[],!1,{ref:X,top:B}).name)),Ce(d)&&(C=!0),J=!0),Y.tag||Y.role||C||e!==ne||"figure"!==g&&(g||"figure"!==s)||((B=le(e,["figcaption"],["caption"])||de(e,["figcaption"],["caption"])||!1)&&(d=Ce(ae(B,F,!1,[],!1,{ref:X,top:B}).name)),Ce(d)&&(C=!0),J=!0),!Y.tag&&!Y.role&&"svg"===s){var D=e.querySelector("title")||!1,H=e===ne&&e.querySelector("desc")||!1;if(!C&&D&&(d=Ce(ae(D,!0,!1,[],!1,{ref:X,top:D}).name)),!S&&H){var $=Ce(ae(H,!0,!1,[],!1,{ref:X,top:H}).name);Ce($)&&(i.desc=$)}i.skip=!0}}Y.tag||Y.role||!T||K&&K.length&&-1!==K.indexOf(e)||(y?d=ye(g,e,!0):A||"combobox"===g&&x?d=ye(g,e,!1,!0):O?d=ye(g,e,!1,!1,!0):!x||-1===["input","textarea"].indexOf(s)||N&&!A?!x||"select"!==s||N&&"combobox"!==g||(d=ye(g,e,!1,!1,!0,!0)):d=ye(g,e,!1,!1,!1,!0),d=Ce(d)),Y.tag||Y.role||V||!Ce(h)||(i.title=Ce(h));var M=x&&Ce(e.getAttribute("type"));M=M||"text";var W=!Y.tag&&!Y.role&&e===ne&&e===z&&(A||x&&("textarea"===s||"input"===s&&-1!==["password","search","tel","text","url","email"].indexOf(M)))&&Ce(e.getAttribute("placeholder")||e.getAttribute("aria-placeholder"));W&&(i.placeholder=W);var G=Y.role&&Y.role===g||!g&&Y.tag&&Y.tag===s;if(G&&(d=Ce(ae(e,F,!1,[],!1,{ref:X,top:e}).name),Ce(d)&&(J=!0)),!G&&k&&-1===["input","img","progress"].indexOf(s)){for(n=k.split(/\s+/),o=[],t=0;t<n.length;t++)if((r=te.getElementById(n[t]))&&-1===ie.indexOf(n[t])){ie.push(n[t]);var Q={ref:X,top:X.top};Q[n[t]]={refNode:z,node:e,target:r},ve(r,te.body,!0)||o.push(ae(r,!0,J,[],!1,Q).name)}u=o.join("")}}else Y.tag||Y.role||3!==e.nodeType||(d=e.data);return l||(d=f.before+d.replace(/\s+/g," ")+f.after),d.length&&!Ne(e,X.top,X,_)&&(i.name=d),i.owns=u,i},z),Z||(e.name=t.before+e.name.replace(/\s+/g," ")+t.after),e},le=function(e,t,r,n){for(e=e?e.firstChild:null;e;){var o=ue(e)||!1;if(1===e.nodeType&&(!t&&!r||o&&r&&-1!==r.indexOf(o)||!o&&t&&-1!==t.indexOf(e.nodeName.toLowerCase())))return e;if(!n&&1===e.nodeType&&(t||r))return null;e=e.nextSibling}return e},de=function(e,t,r,n){for(e=e?e.lastChild:null;e;){var o=ue(e)||!1;if(1===e.nodeType&&(!t&&!r||o&&r&&-1!==r.indexOf(o)||!o&&t&&-1!==t.indexOf(e.nodeName.toLowerCase())))return e;if(!n&&1===e.nodeType&&(t||r))return null;e=e.previousSibling}return e},ue=function(e){var t=e&&e.getAttribute?e.getAttribute("role"):"";if(!Ce(t))return"";function r(e){return 0<Ce(t).length&&0<=e.roles.indexOf(t)}for(var n=t.split(/\s+/),o=0;o<n.length;o++)if(t=n[o],r(f)||r(c)||r(s)||r(i)||-1!==be.indexOf(t))return t;return""},fe=function(e){var t=e.nodeName.toLowerCase();return!!e.getAttribute("tabindex")||(!("a"!==t||!e.getAttribute("href"))||-1!==["button","input","select","textarea"].indexOf(t)&&"hidden"!==e.getAttribute("type"))},f={roles:["button","checkbox","link","option","radio","switch","tab","treeitem","menuitem","menuitemcheckbox","menuitemradio","row","cell","gridcell","columnheader","rowheader","tooltip","heading"],tags:["a","button","summary","input","h1","h2","h3","h4","h5","h6","menuitem","option","tr","td","th"]},c={roles:["application","alert","log","marquee","timer","alertdialog","dialog","banner","complementary","form","main","navigation","region","search","article","document","feed","figure","img","math","toolbar","menu","menubar","grid","listbox","radiogroup","textbox","searchbox","spinbutton","scrollbar","slider","tablist","tabpanel","tree","treegrid","separator","rowgroup","group"],tags:["article","aside","body","select","datalist","optgroup","dialog","figure","footer","form","header","hr","img","textarea","input","main","math","menu","nav","section","thead","tbody","tfoot","fieldset"]},s={roles:["term","definition","directory","list","note","status","table","contentinfo"],tags:["dl","ul","ol","dd","details","output","table"]},i={roles:["legend","caption"],tags:["legend","caption","figcaption"]},ce=["button","input","select","textarea"],se=["scrollbar","slider","spinbutton"],ge=["searchbox","textbox"],pe=["grid","listbox","tablist","tree","treegrid"],me=["button","checkbox","link","switch","option","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","radio","tab","treeitem","gridcell"],be=["presentation","none"],he=function(e){for(var t=["labelledby","label","describedby","busy","controls","current","details","disabled","dropeffect","errormessage","flowto","grabbed","haspopup","invalid","keyshortcuts","live","owns","roledescription"],r=0;r<t.length;r++){if(Ce(e.getAttribute("aria-"+t[r])))return!0}return!1},xe=r.isHidden||function(e,r){return function(e){if(!e||1!==e.nodeType||e===r)return!1;if("true"===e.getAttribute("aria-hidden"))return!0;if(e.getAttribute("hidden"))return!0;var t=a(e);return"none"===t.display||"hidden"===t.visibility}(e)},ve=function(e,t,r,n){for(;e&&e!==t;){if(!n&&1===e.nodeType&&xe(e,t))return!0;n=!1,e=e.parentNode}return!1},a=r.getStyleObject||function(e){var t={};return te.defaultView&&te.defaultView.getComputedStyle?t=te.defaultView.getComputedStyle(e,""):e.currentStyle&&(t=e.currentStyle),t},g=function(e,t){var r=t||a(e);for(var n in l)for(var o=l[n],i=0;i<o.length;i++)if(r[n]&&(0===o[i].indexOf("!")&&-1===[o[i].slice(1),"inherit","initial","unset"].indexOf(r[n])||0===r[n].indexOf(o[i])))return!0;return!t&&e.nodeName&&-1!==d.indexOf(e.nodeName.toLowerCase())&&!(r.display&&0===r.display.indexOf("inline")&&"br"!==e.nodeName.toLowerCase())},l={display:["block","grid","table","flow-root","flex"],position:["absolute","fixed"],float:["left","right","inline"],clear:["left","right","both","inline"],overflow:["hidden","scroll","auto"],"column-count":["!auto"],"column-width":["!auto"],"column-span":["all"],contain:["layout","content","strict"]},d=["address","article","aside","blockquote","br","canvas","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","legend","li","main","nav","noscript","ol","output","p","pre","section","table","td","tfoot","th","tr","ul","video"],ye=function(e,t,r,n,o,i){var a="",l=!1;if(r&&!i)a=t.getAttribute("aria-valuetext")||t.getAttribute("aria-valuenow")||"";else if(n&&!i)a=b(t)||"";else if(o&&!i){var d=[];"grid"===e||"treegrid"===e?d=["gridcell","rowheader","columnheader"]:"listbox"===e?d=["option"]:"tablist"===e?d=["tab"]:"tree"===e&&(d=["treeitem"]),a=p(t,t.querySelectorAll('*[aria-selected="true"]'),!1,d),l=!0}return!(a=Ce(a))&&(r||n)&&t.value&&(a=t.value),l||a||!i||(a=o?p(t,t.querySelectorAll("option[selected]"),!0):t.value),a},Ae=function(e){return Ce(e).length?" "+e+" ":" "},p=function(e,t,r,n){if(!t||!t.length)return"";for(var o=[],i=0;i<t.length;i++){var a=ue(t[i]);(!n||-1!==n.indexOf(a))&&o.push(r?b(t[i]):ae(t[i],!0,!1,[],!1,{top:t[i]}).name)}return o.join(" ")},m=r.getPseudoElStyleObj||function(e,t){var r={};for(var n in l)r[n]=te.defaultView.getComputedStyle(e,t).getPropertyValue(n);return r.content=te.defaultView.getComputedStyle(e,t).getPropertyValue("content").replace(/^"|\\|"$/g,""),r},b=function(e,t){if(!t&&1===e.nodeType)return e.innerText||e.textContent||"";var r=m(e,t),n=r.content;return n&&"none"!==n?(g({},r)&&(":before"===t?n+=" ":":after"===t&&(n=" "+n)),n):""},Oe=r.getCSSText||function(e,t){return e&&1!==e.nodeType||e===t||-1!==["input","select","textarea","img","iframe","optgroup"].indexOf(e.nodeName.toLowerCase())?{before:"",after:""}:{before:o(e,b(e,":before")),after:o(e,b(e,":after"))}},we=function(e,t,r,n){for(n=!!n;e;)if((e=e.parentNode)&&(r&&ue(e)===r||t&&e.nodeName&&e.nodeName.toLowerCase()===t&&(!n||ue(e).length<1)))return e;return{}},Ne=function(e,t,r,n){for(var o=[];e&&e!==t;)if((e=e.id&&r&&r[e.id]&&r[e.id].node&&-1===o.indexOf(e)?(o.push(e),r[e.id].node):e.parentNode)&&e.getAttribute&&(Ce(e.getAttribute("aria-label"))||!n&&xe(e,t)))return!0;return!1},Ce=function(e){return"string"!=typeof e?"":e.replace(/^\s+|\s+$/g,"")};if(ve(e,te.body,!0,!(!e||!e.nodeName||"area"!==e.nodeName.toLowerCase())))return n;var h=ae(e,!1,!1,[],!1,{top:e}),x=Ce(h.name.replace(/\s+/g," ")),v=Ce(h.title.replace(/\s+/g," "));x===v&&(v=""),n.name=x,n.desc=v,oe=[],ie=[]}catch(e){n.error=e}return n.placeholder=u,n.userAgent=re,t&&"function"==typeof t?t.apply(e,[n,e]):n},o.getAccNameMsg=o.getNames=function(e,t){var r=o.getAccName(e,null,!1,t);if(r.error)return r.error+"\n\nAn error has been thrown in AccName Prototype version "+o.getAccNameVersion+". Please copy this error message and the HTML markup that caused it, and submit both as a new GitHub issue at\nhttps://github.com/whatsock/w3c-alternative-text-computation";var n='accName: "'+r.name+'"\n\naccDesc: "'+r.desc+'"\n\n';return r.placeholder&&(n+="Name from placeholder: true\n\n"),r.userAgent&&(n+="Name from user agent: true\n\n"),n+="(Running AccName Computation Prototype version: "+o.getAccNameVersion+")"},"object"==typeof module&&module.exports&&(module.exports={getNames:o.getNames,calcNames:o.calcNames})}();