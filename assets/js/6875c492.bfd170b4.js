"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48610],{78665:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(63366),n=a(67294),l=a(86010),i=a(72262),s=a(39960),m="sidebar_q+wC",c="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",u="sidebarItem_cjdF",d="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs",h=a(95999);function p(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var E=["sidebar","toc","children"];var v=function(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,r.Z)(e,E),c=t&&t.items.length>0;return n.createElement(i.Z,m,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},c&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},38561:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(67294),n=a(86010),l=a(3905),i=a(95999),s=a(39960),m=a(44996),c=a(89521),o=a(27440),u=a(86753),d="blogPostTitle_d4p0",g="blogPostData_-Im+",h="blogPostDetailsFull_xD8n",p=a(20062),E="image_9q7L";var v=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:E,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},f="authorCol_8c0z";function b(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",f),key:t},r.createElement(v,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var Z=function(e){var t,a,E,v,f=(E=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return E(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),Z=(0,m.C)().withBaseUrl,N=e.children,_=e.frontMatter,k=e.assets,T=e.metadata,P=e.truncated,y=e.isBlogPostPage,w=void 0!==y&&y,L=T.date,I=T.formattedDate,x=T.permalink,C=T.tags,M=T.readingTime,U=T.title,O=T.editUrl,R=T.authors,B=null!=(t=k.image)?t:_.image,F=!w&&P,S=C.length>0;return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(v=w?"h1":"h2",r.createElement("header",null,r.createElement(v,{className:d,itemProp:"headline"},w?U:r.createElement(s.Z,{itemProp:"url",to:x},U)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:L,itemProp:"datePublished"},I),void 0!==M&&r.createElement(r.Fragment,null," \xb7 ",f(M))),r.createElement(b,{authors:R,assets:k}))),B&&r.createElement("meta",{itemProp:"image",content:Z(B,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:o.Z},N)),(S||P)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[h]=w,a))},S&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":F})},r.createElement(p.Z,{tags:C})),w&&O&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:O})),F&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":S})},r.createElement(s.Z,{to:T.permalink,"aria-label":"Read more about "+U},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(67294),n=a(39960),l=a(78665),i=a(38561),s=a(95999),m=a(89521);function c(e){var t,a=e.metadata,c=e.items,o=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,h=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),p=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(g),tagName:d});return r.createElement(l.Z,{title:p,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:o},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,p),r.createElement(n.Z,{href:u},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},86753:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(67294),n=a(95999),l=a(87462),i=a(63366),s=a(86010),m="iconEdit_mS5F",c=["className"],o=function(e){var t=e.className,a=(0,i.Z)(e,c);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(89521);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(o,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},39649:function(e,t,a){a.d(t,{N:function(){return d},Z:function(){return g}});var r=a(63366),n=a(87462),l=a(67294),i=a(86010),s=a(95999),m=a(89521),c="anchorWithStickyNavbar_y2LR",o="anchorWithHideOnScrollNavbar_3ly5",u=["id"],d=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))},g=function(e){return"h1"===e?d:(t=e,function(e){var a,d=e.id,g=(0,r.Z)(e,u),h=(0,m.LU)().navbar.hideOnScroll;return d?l.createElement(t,(0,n.Z)({},g,{className:(0,i.Z)("anchor",(a={},a[o]=h,a[c]=!h,a)),id:d}),g.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+d,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,g)});var t}},27440:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(87462),n=a(63366),l=a(67294),i=a(12859),s=a(39960),m=a(42628),c=a(39649),o=a(86010),u=a(89521),d="details_h+cY";function g(e){var t=Object.assign({},e);return l.createElement(u.PO,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",d,t.className)}))}var h=["mdxType","originalType"];var p={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var r=e.props,i=(r.mdxType,r.originalType,(0,n.Z)(r,h));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(m.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(s.Z,e)},pre:function(e){var t,a=e.children;return(0,l.isValidElement)(a)&&(0,l.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?a.props.children:l.createElement(m.Z,(0,l.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),n=l.createElement(l.Fragment,null,t.filter((function(e){return e!==a})));return l.createElement(g,(0,r.Z)({},e,{summary:a}),n)},h1:(0,c.Z)("h1"),h2:(0,c.Z)("h2"),h3:(0,c.Z)("h3"),h4:(0,c.Z)("h4"),h5:(0,c.Z)("h5"),h6:(0,c.Z)("h6")}},7774:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(67294),n=a(86010),l=a(39960),i="tag_WK-t",s="tagRegular_LXbV",m="tagWithCount_S5Zl";var c=function(e){var t,a=e.permalink,c=e.name,o=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[s]=!o,t[m]=o,t))},c,o&&r.createElement("span",null,o))}},20062:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(67294),n=a(86010),l=a(95999),i=a(7774),s="tags_NBRY",m="tag_F03v";function c(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:m},r.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);