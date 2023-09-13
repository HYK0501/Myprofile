(function(){"use strict";var t={7484:function(t,e,n){var i=n(7195),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Nav"),e("router-view")],1)},r=[],s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"nav"},[e("div",{staticClass:"name"},[t._v(" KaoBarry ")]),t._l(t.Ids,(function(n,i){return e("div",{staticClass:"text",on:{click:function(e){return t.jumpToId(n)}}},[t._v(" "+t._s(n)+" ")])}))],2)},a=[],l=(0,i.aZ)({name:"Nav",props:{},data(){return{Ids:["Home","Educations","WorkExperience","SideProject"]}},methods:{jumpToId(t){const e=document.getElementById(t);null!=e&&e.scrollIntoView({behavior:"smooth"})}}}),c=l,J=n(1001),u=(0,J.Z)(c,s,a,!1,null,"4a91ecc0",null),p=u.exports,d={name:"App",components:{Nav:p},methods:{}},v=d,f=(0,J.Z)(v,o,r,!1,null,null,null),T=f.exports,m=n(2241),M=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"root"},[e("div",{staticClass:"space",attrs:{id:"Home"}}),e("div",{staticClass:"aboutMeContainer"},[e("img",{staticClass:"avatar",attrs:{src:n(1299)}}),e("div",{staticClass:"aboutMeText"},[e("h1",[t._v("About Me")]),e("p",[t._v("My name is Heng-Yu Kao ,you can call me Barry. I recently graduate with a Master's degree in Computer Science from Nationl Tsinghua University. More interested in software development, mainly good at back-end development, and also has some knowledge of front-end skills. ")]),e("p",[t._v(" email : codpropm@gmail.com ")]),e("div",{staticClass:"icons"},[e("img",{staticClass:"icon",attrs:{src:n(8900)},on:{click:function(e){return t.jump("https://www.facebook.com/profile.php?id=100000541754710")}}}),e("img",{staticClass:"icon",attrs:{src:n(9776)},on:{click:function(e){return t.jump("https://github.com/HYK0501")}}}),e("img",{staticClass:"icon",attrs:{src:n(2519)},on:{click:function(e){return t.jump("https://www.linkedin.com/in/%E8%98%85-%E4%BD%91-%E9%AB%98-28b493235/")}}})])]),t._m(0)]),e("Title",{attrs:{title:"Educations",id:"Educations"}}),e("Educations"),e("Title",{attrs:{title:"Work Experience",id:"WorkExperience"}}),e("WorkExperiences"),e("Title",{attrs:{title:"Side Projects",id:"SideProject"}})],1)},j=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"SkillsContainer"},[e("h1",[t._v(" Skills ")]),e("ul",[e("li",[t._v("Programming Language : "),e("ul",[e("li",[t._v(" Java ")]),e("li",[t._v(" JavaScript ")]),e("li",[t._v(" Python ")]),e("li",[t._v(" C++ ")])])]),e("li",[t._v("Other Develope Tool : "),e("ul",[e("li",[t._v(" GCP : Cloud Engine , Cloud Runs , Cloud Tasks , Cloud Functions ")]),e("li",[t._v(" AWS : EC2 , S3 , Lambda , ECR , ECS , Cognito ")]),e("li",[t._v(" Backend framwork : JavaEE , Flask ")]),e("li",[t._v(" Frontend framwork : React Native , Vue")])])]),e("li",[t._v("Language : "),e("ul",[e("li",[t._v("Chinese (native) ")]),e("li",[t._v("English ")])])])])])}],U=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"TitleContainer"},[e("h1",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")])])},Y=[],g=(0,i.aZ)({name:"Title",props:{title:{type:String,defualt:!0}},methods:{}}),A=g,N=(0,J.Z)(A,U,Y,!1,null,"33765d02",null),h=N.exports,_=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"root"},t._l(t.educations,(function(n,i){return e("div",{staticClass:"educationContainer"},[e("img",{staticClass:"icon",attrs:{src:n.image}}),e("div",{staticClass:"texts"},[e("h1",[t._v(" "+t._s(n.name)+" ")]),e("ul",[e("li",[t._v(" "+t._s(n.deperment)+" ")]),e("li",[t._v(" "+t._s(n.time)+" ")])])])])})),0)},k=[],y=(0,i.aZ)({name:"Educations",props:{},data(){return{educations:[{name:"National Tsing Hua University",deperment:"Master of Computer Science",time:"Sep 2021~ Aug 2023",image:n(1750)},{name:"University of Taipei",deperment:"Bachelor of Department of Mathematics",time:"Sep 2016 ~ Jun 2021",image:n(9939)}]}},methods:{}}),C=y,w=(0,J.Z)(C,_,k,!1,null,"e7e6963e",null),b=w.exports,E=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"root"},t._l(t.Experiences,(function(n,i){return e("div",{staticClass:"WorkExperiemcesContainer"},[e("h1",[t._v(t._s(n.company))]),e("ul",[e("li",[t._v(" "+t._s(n.position)+" ")]),e("li",[t._v(" "+t._s(n.time)+" ")]),e("li",[t._v(" "+t._s(n.description)+" ")])])])})),0)},x=[],O=(0,i.aZ)({name:"WorkExperiences",props:{},data(){return{Experiences:[{company:"Trend Micro",position:"Software Engineer Intern",time:"Jul 2022~ Aug 2022",description:"Use stress testing tools like Locust to write scripts for attacking potential API vulnerabilities in the system."},{company:"HSNL",position:"Assist in laboratory-based projects.",time:"Sep 2021~ Aug 2023",description:"Assist in developing an online education platform called QSticker, primarily responsible for backend API development, design, and performance optimization."}]}},methods:{}}),S=O,P=(0,J.Z)(S,E,x,!1,null,"08e374b4",null),I=P.exports,K=(0,i.aZ)({name:"HomeView",components:{Title:h,Educations:b,WorkExperiences:I},methods:{jump(t){window.open(t,"_blank")}}}),B=K,D=(0,J.Z)(B,M,j,!1,null,null,null),Z=D.exports;i.ZP.use(m.ZP);const L=[{path:"/",name:"home",component:Z}],z=new m.ZP({mode:"history",base:"/Myprofile/",routes:L});var W=z;i.ZP.config.productionTip=!1,new i.ZP({router:W,render:t=>t(T)}).$mount("#app")},2519:function(t,e,n){t.exports=n.p+"img/1384014.fae62e77.png"},9939:function(t,e,n){t.exports=n.p+"img/UTLOGO.907bc89d.png"},1299:function(t,e,n){t.exports=n.p+"img/ava.9b63277c.jpg"},8900:function(t,e,n){t.exports=n.p+"img/facebook.df9f70dc.png"},9776:function(t){t.exports="data:image/png;base64,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"},1750:function(t,e,n){t.exports=n.p+"img/nthulogo.44a514ed.png"}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var s=1/0;for(J=0;J<t.length;J++){i=t[J][0],o=t[J][1],r=t[J][2];for(var a=!0,l=0;l<i.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,r<s&&(s=r));if(a){t.splice(J--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var J=t.length;J>0&&t[J-1][2]>r;J--)t[J]=t[J-1];t[J]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/Myprofile/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,s=i[0],a=i[1],l=i[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var J=l(n)}for(e&&e(i);c<s.length;c++)r=s[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(J)},i=self["webpackChunkhykprofile"]=self["webpackChunkhykprofile"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7484)}));i=n.O(i)})();
//# sourceMappingURL=app.3e70cb70.js.map