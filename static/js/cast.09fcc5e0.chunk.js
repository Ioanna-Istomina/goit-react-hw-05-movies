"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[277],{8689:function(t,e,n){n.d(e,{JN:function(){return p},M1:function(){return m},TP:function(){return v},cx:function(){return f},tx:function(){return g}});var r=n(5861),a=n(7757),c=n.n(a),s=n(4569),u=n.n(s),o="5a76e3dab3643dd50fee1a5fab49be2c",i="https://api.themoviedb.org/3/";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u().get("".concat(i,"trending/movie/day?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u().get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(e,"&language=en-US&include_adult=false"));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u().get("".concat(i,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u().get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function g(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u().get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}},8924:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(885),a=n(8689),c=n(2791),s=n(6871),u="CastInfo_list__Pb+aF",o="CastInfo_item__E00bZ",i="CastInfo_character__ZmsBc",p="CastInfo_name__LXyfT",l="CastInfo_image__L6pSr",f=n(184),h=function(t){var e=t.cast;return(0,f.jsx)("ul",{className:u,children:null===e||void 0===e?void 0:e.map((function(t){var e=t.profile_path,r=t.name,a=t.character,c=t.cast_id;return(0,f.jsxs)("li",{className:o,children:[(0,f.jsx)("img",{className:l,src:e?"https://image.tmdb.org/t/p/w200/".concat(e):n(4071),alt:r}),(0,f.jsx)("p",{className:p,children:r}),(0,f.jsxs)("p",{className:i,children:["Character: ",a]})]},c)}))})},v=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],u=e[1],o=(0,s.UO)().movieId;return(0,c.useEffect)((function(){(0,a.M1)(Number(o)).then((function(t){return u(t)}))}),[o]),(0,f.jsx)("div",{children:n?(0,f.jsx)(h,{cast:n}):(0,f.jsx)("h4",{children:"We don't have any cast for this movie."})})}},4071:function(t,e,n){t.exports=n.p+"static/media/no-photo-available-icon-20.63063464ad12ac2eb45f.jpg"}}]);
//# sourceMappingURL=cast.09fcc5e0.chunk.js.map