(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=n("q1tI"),o=r(i),a=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function p(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var c=i.prototype;return c.shouldComponentUpdate=function(e){return!a(e,this.props)},c.componentWillMount=function(){u.push(this),p()},c.componentDidUpdate=function(){p()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),p()},c.render=function(){return o.createElement(r,this.props)},i}(i.Component);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(f,"canUseDOM",s),f}}},BcNi:function(e,t,n){e.exports=n.p+"static/gippslandia-5231b1133c8c79ec71b1356f1c8802eb.jpg"},Eh76:function(e,t,n){e.exports=n.p+"static/pivot-2c1adf4133506526a80462a7870969e5.jpg"},Gytx:function(e,t){e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var l=o[s];if(!c(l))return!1;var u=e[l],p=t[l];if(!1===(i=n?n.call(r,u,p,l):void 0)||void 0===i&&u!==p)return!1}return!0}},JgFE:function(e,t,n){e.exports=n.p+"static/fvio-5033a52548478cbf510d228fe5af70a6.jpg"},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("txSG"),i=n("q1tI"),o=n.n(i),a=n("yHPs"),c=n("TJpk"),s=n.n(c);function l(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,c=e.image,l=e.pathname,u=a.data.site,p=t||u.siteMetadata.description,f=c||u.siteMetadata.image;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:i},{property:"og:description",content:p},{property:"og:type",content:"website"},{property:"og:image",content:f},{property:"og:url",content:""+u.siteMetadata.url+(l||"/")},{name:"theme-color",content:"#FFC4A3"}].concat(r),link:[]})}l.defaultProps={lang:"en",meta:[],description:""};var u=l,p=function(e){var t=e.children;return Object(r.e)("div",{sx:{bg:"#FFC4A3",minHeight:"-webkit-fill-available",maxHeight:"100%",border:"4px solid #090909"}},t)},f=n("zDcZ"),d=(n("Tap3"),n("BcNi")),h=n.n(d),T=n("zL+G"),b=n.n(T),m=n("p6Z9"),E=n.n(m),g=n("Eh76"),A=n.n(g),y=n("r80V"),O=n.n(y),v=n("ptaG"),S=n.n(v),w=n("JgFE"),_=n.n(w),j=[{title:"Gippslandia",date:"June 2020",img:h.a,url:"https://gippslandia.com.au",text:["It was about time for Gippslandia to traverse beyond their print-first approach and show some love to their digital presence with a new website.","With an amazing re-design, carefully thought out IA, and a new technical stack—Gippslandia have an elevated digital presence that does justice to their beautiful curated content.","The refresh has brought forward greater membership functionality as a way to give back to the generous contributors of the paper.","The Gippsland region, and East Gippsland in particular, has taken quite a blow over the past year—with the fires, flood and now COVID lingering.","We hope that this improved snazzy website highlights the creativity of the region and lures more folk to visit and bring some life back into the area."]},{title:"MedLitGo MVP",date:"April 2020",img:E.a,url:"https://medlitgo.com.au",text:["With the digital age we live in, information sharing is at it's peak. The accessibility of information has made it easier for people to conduct secondary research rather than solely relying on the services of professionals. Though when it comes to medical information, this abundance can be more hindering than helpful.","Working with the Omncell team, they discussed their vision of hosting a platform that served as a sort of interactive wiki that would allow patients and doctors to create dialogue. We built an MVP of this vision where users could 'react' and comment on pieces of medical information and resources."]},{title:"Minus18",date:"April 2020",img:b.a,url:"https://minus18.org.au",text:["We redesigned Minus18's website with their latest brand assets and implemented a new tech stack. Previously running on Joomla, the site was overdue for a modern take.","Leveraging services such as Netlify, Mailchimp, GiveNow and Shopify, we were able to build a content managable website which has removed previous manual tasks the Minus18 team were having to perform surrounding CRM and their store. With reduced complexity managing their site, Minus18 can dedicate more resources to their core services."]},{title:"Family Violence Intervention Order",date:"February 2020",img:_.a,url:"https://fvio.mcv.vic.gov.au/",text:["More than 85,000 family violence intervention orders (FVIO) are filed each year across 52 courts in Victoria. The previous FVIO form was paper driven and processed manually which raised complexities. There was an opportunity to digitalise this whole process.","Winning Gold at the Melbourne Design Awards in the 'Digital - Government Services' category, this is the first online form for a family violence intervention order in Australia."]},{title:"Melbourne Uni Grad tool MVP",date:"December 2019",img:O.a,url:"http://uom-grad-site.s3-website-ap-southeast-2.amazonaws.com/dashboard",text:["We leveraged data from UOM's business intelligence team surrounding students and the common pathways they took during their time as students to develop a tool that would take students on a personalised joursey whilst exploring their graduate options.","UOM students have been exposed to courses they never heard or thought of and the opportunity to plan their educational path."]},{title:"Sustainability Victoria",date:"October 2019",img:S.a,url:"http://sv-local-gov-update.s3-website-ap-southeast-2.amazonaws.com/start",text:["We set out to devise a tool which simplifies SV's grants and funding application processes to drive a higher amount of businesses to apply.","The tool has been able to simplify the processes and information for prospective grantees, creating less friction and ultimately a higher chance of businesses to create/engage with projects that are sustainable and better for the planet."]},{title:"Pivot career",date:"May 2019",img:A.a,url:"https://pivotcareer.com.au/",text:["With data collected from thousands of job ads spanning over several years, FYA were looking to utilise this data to create a tool that would shift the mindset of TAFE students, educators, aged care employees and their employers away from job-specific training towards building a portfolio of transferable skills.","We created Pivot, an application which allows users by answering quick questions and entering their experience, find out what jobs they are currently applicable for and which jobs they can pursue based on their current skill gaps.","Pivot won Gold at the Melbourne Design Awards in the 'Digital - Government Services' category."]}],M=function(e){var t=e.children;return Object(r.e)("div",{sx:{maxWidth:["100%","728px"],width:"80%",mx:"auto"}},t)},P=function(e){var t=e.img,n=e.title,i=e.date,a=e.text,c=e.url,s=e.noMt;return Object(r.e)(o.a.Fragment,null,Object(r.e)("div",{sx:{px:Object(f.b)(12),py:Object(f.b)(10),bg:"black",color:"white",display:"inline-block",fontSize:[Object(f.b)(14),Object(f.b)(18)],maxWidth:"80%",fontFamily:"Monument",fontWeight:500,mt:s?0:Object(f.b)(60)}},n,"—",Object(r.e)("span",{sx:{fontSize:[Object(f.b)(12),Object(f.b)(14)],transform:"translateY(-1px)",ml:Object(f.b)(2),display:"inline-block"}},i)),Object(r.e)(M,null,Object(r.e)("figure",null,Object(r.e)("div",{sx:{position:"relative"}},Object(r.e)("img",{src:t,sx:{border:"2px solid #272727",width:"100%",imageRendering:"-moz-crisp-edges"}}),Object(r.e)("a",{href:c,target:"_blank",sx:{position:"absolute",right:"-16px",bottom:0,textDecoration:"underline",px:Object(f.b)(16),bg:"white",border:"2px solid #272727",color:"black",fontSize:[Object(f.b)(16),Object(f.b)(18)]}},"link")),Object(r.e)("figcaption",null,a.map((function(e){return Object(r.e)("p",null,e)}))))))};t.default=function(){return Object(r.e)(p,null,Object(r.e)(u,{title:"Home"}),Object(r.e)("p",{sx:{textAlign:"center",my:0,fontFamily:"Monument",letterSpacing:"-0.04em",fontWeight:500,lineHeight:[Object(f.b)(12),Object(f.b)(16)],fontSize:[Object(f.b)(10),Object(f.b)(14)],position:"absolute",right:[Object(f.b)(20),Object(f.b)(40)],top:Object(f.b)(20)}},"currently at"," ",Object(r.e)("a",{href:"https://today.design",target:"_blank",sx:{color:"inherit"}},"@todaydes")),Object(r.e)("div",{sx:{maxWidth:["100%","1072px"],width:"100%",mx:"auto",pb:Object(f.b)(20),figure:{m:0,mt:Object(f.b)(24),p:{fontSize:[Object(f.b)(16),Object(f.b)(18)]}}}},Object(r.e)("h1",{sx:{textAlign:"center",my:0,fontFamily:"Monument",textTransform:"uppercase",letterSpacing:"-0.04em",lineHeight:[Object(f.b)(42),Object(f.b)(78)],fontSize:[Object(f.b)(40),Object(f.b)(76)],pt:Object(f.b)(120)}},"Jonathan ",Object(r.e)("br",null),"Puc"),Object(r.e)(M,null,Object(r.e)("hr",{sx:{bg:"#000",height:Object(f.b)(4),border:"none",mt:Object(f.b)(16),mb:Object(f.b)(32)}})),j.map((function(e,t){return Object(r.e)(P,Object.assign({},e,{noMt:t?0:1}))}))),Object(r.e)("div",{sx:{bg:"black",py:Object(f.b)(20),color:"white"}},Object(r.e)(M,null,Object(r.e)("div",{sx:{ul:{mb:0,mt:Object(f.b)(0),p:0,li:{m:0,listStyle:"none"},a:{color:"inherit"}}}},Object(r.e)("p",{sx:{fontFamily:"Monument",fontWeight:500,mb:Object(f.b)(0)}},"Socials"),Object(r.e)("ul",null,Object(r.e)("li",null,Object(r.e)("a",{href:"https://www.instagram.com/soyboicarti/",target:"_blank"},"instagram")),Object(r.e)("li",null,Object(r.e)("a",{href:"https://www.linkedin.com/in/jonathan-puc-549531b3/",target:"_blank"},"linkedin"))),Object(r.e)("p",{sx:{fontFamily:"Monument",fontWeight:500,mt:Object(f.b)(40),mb:Object(f.b)(0)}},"Links worth looking into"),Object(r.e)("ul",null,Object(r.e)("li",null,Object(r.e)("a",{href:"https://www.cowspiracy.com/facts",target:"_blank"},"environmental catastrophe caused by meat and dairy")),Object(r.e)("li",null,Object(r.e)("a",{href:"https://www.nytimes.com/interactive/2019/04/30/dining/climate-change-food-eating-habits.html",target:"_blank"},"how your plate relates to climate change")),Object(r.e)("li",null,Object(r.e)("a",{href:"https://animalclock.org/au/#section-stats",target:"_blank"},"72 billion land animals killed for food each year")),Object(r.e)("li",null,Object(r.e)("a",{href:"https://www.youtube.com/watch?v=es6U00LMmC4",target:"_blank"},"the animal holocaust")),Object(r.e)("li",null,Object(r.e)("a",{href:"https://www.youtube.com/watch?v=8gqwpfEcBjI",target:"_blank"},"earthlings documentary")),Object(r.e)("li",null,Object(r.e)("a",{href:"https://www.youtube.com/watch?v=LQRAfJyEsko",target:"_blank"},"dominion documentary")),Object(r.e)("li",null,Object(r.e)("a",{href:"https://www.dailymotion.com/video/x2zuhks",target:"_blank"},"cowspiracy documentary")),Object(r.e)("li",null,Object(r.e)("a",{href:"https://www.youtube.com/watch?v=ove9b16OeR4",target:"_blank"},"the gamechangers documentary")))))))}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=p(n("q1tI")),a=p(n("17x9")),c=p(n("8+s/")),s=p(n("bmMU")),l=n("v1p5"),u=n("hFT/");function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,b,m,E=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),g=(T=E,m=b=function(e){function t(){return d(this,t),h(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,i=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return r({},i,((t={})[n.type]=[].concat(i[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,i=e.child,o=e.newProps,a=e.newChildProps,c=e.nestedChildren;switch(i.type){case u.TAG_NAMES.TITLE:return r({},o,((t={})[i.type]=c,t.titleAttributes=r({},a),t));case u.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},a)});case u.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},a)})}return r({},o,((n={})[i.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var i;n=r({},n,((i={})[t]=e[t],i))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=f(i,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),i=r({},n);return t&&(i=this.mapChildrenToProps(t,i)),o.default.createElement(T,i)},i(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(o.default.Component),b.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},b.defaultProps={defer:!0,encodeSpecialCharacters:!0},b.peek=T.peek,b.rewind=function(){var e=T.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},Tap3:function(e,t,n){e.exports=n.p+"static/earth-8dd8021cfe2f298c58272228f50e5beb.png"},bmMU:function(e,t,n){"use strict";var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,l,u=r(t),p=r(n);if(u&&p){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=p)return!1;var f=t instanceof Date,d=n instanceof Date;if(f!=d)return!1;if(f&&d)return t.getTime()==n.getTime();var h=t instanceof RegExp,T=n instanceof RegExp;if(h!=T)return!1;if(h&&T)return t.toString()==n.toString();var b=i(t);if((s=b.length)!==i(n).length)return!1;for(c=s;0!=c--;)if(!o.call(n,b[c]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(l=b[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},p6Z9:function(e,t,n){e.exports=n.p+"static/medlitgo-ebdf2ffc1768ad27e2e490fc1851fae6.jpg"},ptaG:function(e,t,n){e.exports=n.p+"static/susvic-29273ce71bd9d1b33fe8a65bd3548a3e.jpg"},r80V:function(e,t,n){e.exports=n.p+"static/uom-651f2274b26401600f7fe105e262b254.jpg"},v1p5:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("q1tI")),a=s(n("6qGY")),c=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var l,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=b(e,c.TAG_NAMES.TITLE),n=b(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=b(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return b(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return i({},e,t)}),{})},h=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},T=function(e,t,n){var i={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],l=s.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),s=0;s<o.length;s++){var l=o[s],u=(0,a.default)({},i[l],r[l]);i[l]=u}return e}),[]).reverse()},b=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){m(e)}),0)}),E=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||E:e.cancelAnimationFrame||E,y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},O=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,p=e.styleTags,f=e.title,d=e.titleAttributes;_(c.TAG_NAMES.BODY,r),_(c.TAG_NAMES.HTML,i),w(f,d);var h={baseTag:j(c.TAG_NAMES.BASE,n),linkTags:j(c.TAG_NAMES.LINK,o),metaTags:j(c.TAG_NAMES.META,a),noscriptTags:j(c.TAG_NAMES.NOSCRIPT,s),scriptTags:j(c.TAG_NAMES.SCRIPT,u),styleTags:j(c.TAG_NAMES.STYLE,p)},T={},b={};Object.keys(h).forEach((function(e){var t=h[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(b[e]=h[e].oldTags)})),t&&t(),l(e,T,b)},S=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){void 0!==e&&document.title!==e&&(document.title=S(e)),_(c.TAG_NAMES.TITLE,t)},_=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s++){var l=a[s],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===i.indexOf(l)&&i.push(l);var p=o.indexOf(l);-1!==p&&o.splice(p,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},j=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},M=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},R=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,i=P(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=M(n),o=S(t);return i?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+i+">"+u(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),o.default.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){O&&A(O),e.defer?O=g((function(){v(e,(function(){O=null}))})):(v(e),O=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,p=e.title,f=void 0===p?"":p,d=e.titleAttributes;return{base:R(c.TAG_NAMES.BASE,t,r),bodyAttributes:R(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:R(c.ATTRIBUTE_NAMES.HTML,i,r),link:R(c.TAG_NAMES.LINK,o,r),meta:R(c.TAG_NAMES.META,a,r),noscript:R(c.TAG_NAMES.NOSCRIPT,s,r),script:R(c.TAG_NAMES.SCRIPT,l,r),style:R(c.TAG_NAMES.STYLE,u,r),title:R(c.TAG_NAMES.TITLE,{title:f,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:h([c.TAG_PROPERTIES.HREF],e),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,e),defer:b(e,c.HELMET_PROPS.DEFER),encode:b(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,e),linkTags:T(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:T(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:T(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=y}).call(this,n("yLpj"))},yHPs:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Jonathan Puc","description":"Melbourne based developer trying to live planet-friendly.","author":"@jonathanpuc","image":"","url":"https://jonathanpuc.me/"}}}}')},"zL+G":function(e,t,n){e.exports=n.p+"static/minus18-fc53316be0ae96cb61ba3f5369ea8571.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-70a62170dc8ed72f1754.js.map