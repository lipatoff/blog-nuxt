(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{249:function(t,e,n){var content=n(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("7b6314d6",content,!0,{sourceMap:!1})},250:function(t,e,n){var content=n(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5e01d088",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";var o=n(249);n.n(o).a},268:function(t,e,n){(t.exports=n(10)(!1)).push([t.i,".promo{text-align:center}.promo p{color:#999}",""])},269:function(t,e,n){"use strict";var o=n(250);n.n(o).a},270:function(t,e,n){(t.exports=n(10)(!1)).push([t.i,".contact{text-align:center;background-color:#064886}.contact,.contact .title{color:#fff}.contact .contact-form{max-width:600px;margin:30px auto}.contact .controls{margin:30px 0}",""])},272:function(t,e,n){"use strict";n.r(e);n(267);var o=n(3),c=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"promo"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v("My SSR Blog! With Nuxt.js")]),this._v(" "),e("p",[this._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste asperiores nesciunt at nobis accusantium voluptate eos sint, consequatur quam? Doloremque vitae ipsam assumenda placeat itaque beatae, maxime accusamus voluptate explicabo?")])])])}],!1,null,null,null).exports,r=(n(39),{data:function(){return{message:null,user:{name:"",email:"",text:""}}},methods:{onSubmit:function(){this.message="Submited!",this.user.name="",this.user.email="",this.user.text=""}}}),l=(n(269),{components:{promo:c,contacts:Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"title"},[t._v("Contact me!")]),t._v(" "),t.message?n("Message",{attrs:{message:t.message}}):t._e(),t._v(" "),n("form",{staticClass:"contact-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("AppInput",{model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}},[t._v("Name:")]),t._v(" "),n("AppInput",{attrs:{type:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}},[t._v("E-mail:")]),t._v(" "),n("AppTextArea",{model:{value:t.user.text,callback:function(e){t.$set(t.user,"text",e)},expression:"user.text"}},[t._v("Text:")]),t._v(" "),n("div",{staticClass:"controls"},[n("AppButton",{staticClass:"btnWhite"},[t._v("Submit!")])],1)],1)],1)])},[],!1,null,null,null).exports},head:function(){var t="My SSR Blog! With Nuxt.js";return{title:"My SSR Blog!",meta:[{hid:"og:title",name:"og:title",content:"My SSR Blog!"},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:type",name:"og:type",content:"site"}]}},created:function(){this.$store.dispatch("posts/nuxtServerInit")},computed:{postsLoaded:function(){return this.$store.getters["posts/getPostsLoaded"]}}}),m=Object(o.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper-content wrapper-content--fixed"},[e("promo"),this._v(" "),e("Intro",{attrs:{title:"My lasts posts: "}}),this._v(" "),e("PostsList",{attrs:{posts:this.postsLoaded}}),this._v(" "),e("contacts")],1)},[],!1,null,null,null);e.default=m.exports}}]);