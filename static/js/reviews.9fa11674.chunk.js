"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[912],{8689:function(e,t,n){n.d(t,{JN:function(){return p},M1:function(){return x},TP:function(){return h},cx:function(){return f},tx:function(){return m}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),o=n.n(u),s="5a76e3dab3643dd50fee1a5fab49be2c",i="https://api.themoviedb.org/3/";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"trending/movie/day?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},719:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(885),a=n(6871),c=n(2791),u=n(8689),o=n(184),s=function(e){var t=e.reviews;return(0,o.jsx)("ul",{style:{margin:"20px 20px 20px 0px"},children:null===t||void 0===t?void 0:t.map((function(e){var t=e.content,n=e.author,r=e.id;return(0,o.jsxs)("li",{children:[(0,o.jsx)("p",{style:{fontWeight:"bold"},children:n}),(0,o.jsx)("p",{children:t})]},r)}))})},i=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],p=(0,a.UO)().movieId;return(0,c.useEffect)((function(){(0,u.tx)(Number(p)).then((function(e){return i(e)}))}),[p]),console.log(n),(0,o.jsx)("div",{children:(null===n||void 0===n?void 0:n.length)>0?(0,o.jsx)(s,{reviews:n}):(0,o.jsx)("h4",{style:{marginLeft:"40px"},children:"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=reviews.9fa11674.chunk.js.map