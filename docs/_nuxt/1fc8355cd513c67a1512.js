(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{243:function(t,e,n){var content=n(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("1afefcf7",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";var o=n(243);n.n(o).a},258:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,"table[data-v-c82cc0ac]{width:100%;line-height:1.5em;border-collapse:separate;border-spacing:0 14px}table thead th[data-v-c82cc0ac]{padding:20px 22px;white-space:nowrap;font-size:20px}table td[data-v-c82cc0ac]{padding:20px}table tbody tr[data-v-c82cc0ac]{background-color:#fff;transition:all .25s cubic-bezier(.02,.01,.47,1);box-shadow:0 16px 16px rgba(0,0,0,.01)}table tbody tr[data-v-c82cc0ac]:hover{box-shadow:0 16px 16px rgba(0,0,0,.02);transform:translateY(-3px);transition-delay:0s!important}",""])},273:function(t,e,n){"use strict";n.r(e);var o=n(10),c=(n(61),n(25),n(83),n(23)),r=n.n(c),l={props:{thead:{type:Array,required:!0}}},d=(n(257),n(3)),m={components:{commentTable:Object(d.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container"},[n("table",[n("thead",[n("tr",t._l(t.thead,function(th,e){return n("th",{key:e},[t._v(t._s(th))])}),0)]),t._v(" "),t._t("tbody")],2)])])},[],!1,null,"c82cc0ac",null).exports},layout:"admin",data:function(){return{comments:[]}},mounted:function(){this.loadComments()},methods:{loadComments:function(){var t=this;r.a.get("https://blog-nuxt-4913a.firebaseio.com/comments.json").then(function(e){var n=[];e.data&&Object.keys(e.data).forEach(function(t){var c=e.data[t];n.push(Object(o.a)({},c,{id:t}))}),t.comments=n})},changeComment:function(t){t.publish=!t.publish,r.a.put("https://blog-nuxt-4913a.firebaseio.com/comments/".concat(t.id,".json"),t)},deleteComment:function(t){var e=this;r.a.delete("https://blog-nuxt-4913a.firebaseio.com/comments/".concat(t,".json")).then(function(t){e.loadComments()})}}},h=Object(d.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("no-ssr",[n("commentTable",{attrs:{thead:["Name","Text","Status","Change Status","Delete"]}},[n("tbody",{attrs:{slot:"tbody"},slot:"tbody"},t._l(t.comments,function(e){return n("tr",{key:e.id},[n("td",[n("span",[t._v(t._s(e.name))])]),t._v(" "),n("td",[n("span",[t._v(t._s(e.text))])]),t._v(" "),n("td",[e.publish?n("span",{staticClass:"status true"},[t._v("Publish")]):n("span",{staticClass:"status false"},[t._v("Hiden")])]),t._v(" "),n("td",[n("span",{staticClass:"link",on:{click:function(n){return t.changeComment(e)}}},[t._v("Change Status")])]),t._v(" "),n("td",[n("span",{staticClass:"link",on:{click:function(n){return t.deleteComment(e.id)}}},[t._v("Delete")])])])}),0)])],1)},[],!1,null,null,null);e.default=h.exports}}]);