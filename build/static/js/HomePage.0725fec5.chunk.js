(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[2],{32:function(t,e,n){"use strict";n.d(e,"e",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return b}));var c=n(36),r=n.n(c),a=n(37),o="357b0f432d66a0bd560e276035046b29",i="https://api.themoviedb.org/3/";function u(){return s.apply(this,arguments)}function s(){return(s=Object(a.a)(r.a.mark((function t(){var e,n,c,a=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},t.next=4,fetch(e,n);case 4:if(!(c=t.sent).ok){t.next=11;break}return t.next=8,c.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,e){return u("".concat(i,"trending/").concat(t,"/").concat(e,"?api_key=").concat(o))}function d(t){return u("".concat(i,"movie/").concat(t,"?api_key=").concat(o))}function l(t){return u("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"))}function p(t){return u("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"))}function b(t){return u("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}},39:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var c=n(1),r=n(8),a=n(40),o=n.n(a),i=n(2);function u(t){var e=t.arr,n=Object(c.g)();return Object(i.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.title;return Object(i.jsx)("li",{className:"ImageGalleryItem",children:Object(i.jsx)(r.b,{to:{pathname:"/movies/".concat(o()("".concat(c," ").concat(e),{lower:!0})),state:{prevPath:n}},children:c})},e)}))})}},44:function(t,e,n){t.exports={Title:"HomePage_Title__38rxg"}},50:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var c=n(41),r=n(33),a=n(0),o=n(32),i=n(44),u=n.n(i),s=n(39),f=n(2);function d(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),n=e[0],i=e[1];Object(a.useEffect)((function(){Object(o.e)("movie","day").then(d)}),[]);var d=function(t){var e=t.results;i(Object(c.a)(e))};return Object(f.jsxs)(a.Fragment,{children:[Object(f.jsx)("h1",{className:u.a.Title,children:"Trending today"}),Object(f.jsx)(s.a,{arr:n})]})}}}]);
//# sourceMappingURL=HomePage.0725fec5.chunk.js.map