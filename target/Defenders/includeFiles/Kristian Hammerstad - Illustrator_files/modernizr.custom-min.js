!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,i,a,r;for(var l in u)if(u.hasOwnProperty(l)){if(e=[],n=u[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],r=a.split("."),1===r.length?p[r[0]]=s:(!p[r[0]]||p[r[0]]instanceof Boolean||(p[r[0]]=new Boolean(p[r[0]])),p[r[0]][r[1]]=s),c.push((s?"":"no-")+r.join("-"))}}function i(e){var n=m.className,t=p._config.classPrefix||"";if(g&&(n=n.baseVal),p._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}p._config.enableClasses&&(n+=" "+t+e.join(" "+t),g?m.className.baseVal=n:m.className=n)}function a(e,n){if("object"==typeof e)for(var t in e)v(e,t)&&a(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),s=p[o[0]];if(2==o.length&&(s=s[o[1]]),"undefined"!=typeof s)return p;n="function"==typeof n?n():n,1==o.length?p[o[0]]=n:(!p[o[0]]||p[o[0]]instanceof Boolean||(p[o[0]]=new Boolean(p[o[0]])),p[o[0]][o[1]]=n),i([(n&&0!=n?"":"no-")+o.join("-")]),p._trigger(e,n)}return p}function r(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):g?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(){var e=n.body;return e||(e=r(g?"svg":"body"),e.fake=!0),e}function f(e,t,o,s){var i,a,f,c,u="modernizr",d=r("div"),p=l();if(parseInt(o,10))for(;o--;)f=r("div"),f.id=s?s[o]:u+(o+1),d.appendChild(f);return i=r("style"),i.type="text/css",i.id="s"+u,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",c=m.style.overflow,m.style.overflow="hidden",m.appendChild(p)),a=t(d,e),p.fake?(p.parentNode.removeChild(p),m.style.overflow=c,m.offsetHeight):d.parentNode.removeChild(d),!!a}var c=[],u=[],d={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){u.push({name:e,fn:n,options:t})},addAsyncTest:function(e){u.push({name:null,fn:e})}},p=function(){};p.prototype=d,p=new p;var h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var v,m=n.documentElement,g="svg"===m.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;v=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),d._l={},d.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),p.hasOwnProperty(e)&&setTimeout(function(){p._trigger(e,p[e])},0)},d._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},p._q.push(function(){d.addTest=a});var y=d.testStyles=f;p.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");y(o,function(e){t=9===e.offsetTop})}return t}),s(),i(c),delete d.addTest,delete d.addAsyncTest;for(var w=0;w<p._q.length;w++)p._q[w]();e.Modernizr=p}(window,document);