"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37237],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8610:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return g}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=t(64730),s=t(96809),l=t(48437),d=["components"],p={id:"real-time",title:"Live / Realtime"},c=void 0,m={unversionedId:"guides-and-concepts/real-time",id:"guides-and-concepts/real-time",isDocsHomePage:!1,title:"Live / Realtime",description:"refine lets you add Realtime support to your app via liveProvider prop for ``. It can be used to update and show data in Realtime throughout your app. refine remains agnostic in its API to allow different solutions(Ably, Socket.IO, Mercure, supabase, etc.) to be integrated.",source:"@site/docs/guides-and-concepts/real-time.md",sourceDirName:"guides-and-concepts",slug:"/guides-and-concepts/real-time",permalink:"/docs/guides-and-concepts/real-time",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/guides-and-concepts/real-time.md",tags:[],version:"current",lastUpdatedBy:"Melih \xd6zkalay",lastUpdatedAt:1648712131,formattedLastUpdatedAt:"3/31/2022",frontMatter:{id:"real-time",title:"Live / Realtime"},sidebar:"someSidebar",previous:{title:"Access Control",permalink:"/docs/guides-and-concepts/access-control"},next:{title:"Multipart Upload",permalink:"/docs/guides-and-concepts/upload/multipart-upload"}},u=[{value:"Installation",id:"installation",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Adding <code>liveProvider</code>",id:"adding-liveprovider",children:[],level:2},{value:"Configuring <code>liveMode</code>",id:"configuring-livemode",children:[],level:2},{value:"Custom Subscriptions",id:"custom-subscriptions",children:[],level:2},{value:"Live Condesandbox Example",id:"live-condesandbox-example",children:[],level:2}],h={toc:u};function g(e){var n=e.components,t=(0,i.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," lets you add Realtime support to your app via ",(0,o.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop for ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>")),". It can be used to update and show data in Realtime throughout your app. ",(0,o.kt)("strong",{parentName:"p"},"refine")," remains agnostic in its API to allow different solutions(",(0,o.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably"),", ",(0,o.kt)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO"),", ",(0,o.kt)("a",{parentName:"p",href:"https://mercure.rocks/"},"Mercure"),", ",(0,o.kt)("a",{parentName:"p",href:"https://supabase.com"},"supabase"),", etc.) to be integrated."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/core/providers/live-provider"},"Refer to the Live Provider documentation for detailed information. ","\u2192")),(0,o.kt)("p",null,"We will be using ",(0,o.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably")," in this guide to provide Realtime features."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"We need to install Ably live provider package from ",(0,o.kt)("strong",{parentName:"p"},"refine"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pankod/refine-ably\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To make this example more visual, we used the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/refine-antd"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks or helpers imported from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/refine-antd"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package."))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Since we will need ",(0,o.kt)("inlineCode",{parentName:"p"},"apiKey")," from Ably, you must first register and get the key from ",(0,o.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably"),"."),(0,o.kt)("p",null,"The app will have one resource: ",(0,o.kt)("strong",{parentName:"p"},"posts")," with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/examples/base/src/pages/posts"},"CRUD pages(list, create, edit and show) similar to base example"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#live-condesandbox-example"},"You can also refer to codesandbox to see final state of the app ","\u2192")),(0,o.kt)("h2",{id:"adding-liveprovider"},"Adding ",(0,o.kt)("inlineCode",{parentName:"h2"},"liveProvider")),(0,o.kt)("p",null,"Firstly we create a ably client for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/ably"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-ably"))," live provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/utility/ablyClient.ts"',title:'"src/utility/ablyClient.ts"'},'import { Ably } from "@pankod/refine-ably";\n\nexport const ablyClient = new Ably.Realtime("your-api-key");\n')),(0,o.kt)("p",null,"Then pass ",(0,o.kt)("inlineCode",{parentName:"p"},"liveProvider")," from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/ably"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-ably"))," to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport { Layout, ReadyPage, notificationProvider, ErrorComponent } from "@pankod/refine-antd";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\n//highlight-next-line\nimport { liveProvider } from "@pankod/refine-ably";\n\n//highlight-next-line\nimport { ablyClient } from "utility/ablyClient";\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            Layout={Layout}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n            //highlight-start\n            liveProvider={liveProvider(ablyClient)}\n            liveMode="auto"\n            //highlight-end\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                    canDelete: true,\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For live features to work automatically we also added ",(0,o.kt)("inlineCode",{parentName:"p"},'liveMode="auto"'),"."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/docs/core/providers/live-provider#livemode"},"Refer to the Live Provider documentation for detailed information. ","\u2192")))),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:r.Z,alt:"Realtime Demo"})),(0,o.kt)("h2",{id:"configuring-livemode"},"Configuring ",(0,o.kt)("inlineCode",{parentName:"h2"},"liveMode")),(0,o.kt)("p",null,"We may not want to make Realtime changes instantly in some cases. In these cases we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"manual")," mode to prevent the data changing instantly. Then we can handle the event manually."),(0,o.kt)("p",null,"For example in an edit page for a record, It would be better to handle Realtime data manually to prevent synchronization problems caused by multiple editing sources. We would not want the data changing while we are trying to edit a record."),(0,o.kt)("p",null,"We will be alerting about changes in an alert box on top of the form instead of changing the data instantly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'// ...\n\nexport const PostEdit: React.FC = () => {\n    //highlight-start\n    const [deprecated, setDeprecated] =\n        useState<"deleted" | "updated" | undefined>();\n    //highlight-end\n\n    const { formProps, saveButtonProps, queryResult } = useForm<IPost>({\n        //highlight-start\n        liveMode: "manual",\n        onLiveEvent: (event) => {\n            if (event.type === "deleted" || event.type === "updated") {\n                setDeprecated(event.type);\n            }\n        },\n        //highlight-end\n    });\n\n    //highlight-start\n    const handleRefresh = () => {\n        queryResult?.refetch();\n        setDeprecated(undefined);\n    };\n    //highlight-end\n\n    // ...\n\n    return (\n        <Edit /* ... */>\n            //highlight-start\n            {deprecated === "deleted" && (\n                <Alert\n                    message="This post is deleted."\n                    type="warning"\n                    style={{ marginBottom: 20 }}\n                    action={<ListButton size="small" />}\n                />\n            )}\n            {deprecated === "updated" && (\n                <Alert\n                    message="This post is updated. Refresh to see changes."\n                    type="warning"\n                    style={{ marginBottom: 20 }}\n                    action={\n                        <RefreshButton size="small" onClick={handleRefresh} />\n                    }\n                />\n            )}\n            //highlight-end\n            <Form {...formProps} layout="vertical">\n                // ....\n            </Form>\n        </Edit>\n    );\n};\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We can also implement similar thing in show page."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"#live-codesandbox-example"},"Refer to the codesandbox example for detailed information. ","\u2192")))),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:s.Z,alt:"Manual Mode Demo"})),(0,o.kt)("h2",{id:"custom-subscriptions"},"Custom Subscriptions"),(0,o.kt)("p",null,"You can subscribe to events emitted within ",(0,o.kt)("strong",{parentName:"p"},"refine")," in any place in your app with ",(0,o.kt)("inlineCode",{parentName:"p"},"useSubscription"),"."),(0,o.kt)("p",null,"For example, we can subscribe to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"create"))," event for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"posts"))," resource and we can show a badge for number of events in the sider menu."),(0,o.kt)("p",null,"Firstly, let's implement a custom sider like in ",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/customization/customSider"},"this example"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Custom Sider Menu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/sider.tsx"',title:'"src/components/sider.tsx"'},'import React, { useState } from "react";\nimport { useTitle, useNavigation, ITreeMenu, CanAccess } from "@pankod/refine-core";\nimport { AntdLayout, Menu, useMenu, Grid, Icons } from "@pankod/refine-antd";\nimport { antLayoutSider, antLayoutSiderMobile } from "./styles";\n\nexport const CustomSider: React.FC = () => {\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n    const Title = useTitle();\n    const { menuItems, selectedKey } = useMenu();\n    const breakpoint = Grid.useBreakpoint();\n    const { push } = useNavigation();\n\n    const isMobile = !breakpoint.lg;\n    \n    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n        return tree.map((item: ITreeMenu) => {\n            const { icon, label, route, name, children, parentName } = item;\n\n            if (children.length > 0) {\n                return (\n                    <SubMenu\n                        key={name}\n                        icon={icon ?? <Icons.UnorderedListOutlined />}\n                        title={label}\n                    >\n                        {renderTreeView(children, selectedKey)}\n                    </SubMenu>\n                );\n            }\n            const isSelected = route === selectedKey;\n            const isRoute = !(\n                parentName !== undefined && children.length === 0\n            );\n            return (\n                <CanAccess\n                    key={route}\n                    resource={name.toLowerCase()}\n                    action="list"\n                >\n                    <Menu.Item\n                        key={selectedKey}\n                        onClick={() => {\n                            push(route ?? "");\n                        }}\n                        style={{\n                            fontWeight: isSelected ? "bold" : "normal",\n                        }}\n                        icon={icon ?? (isRoute && <Icons.UnorderedListOutlined />)}\n                    >\n                            {label}\n                            {!collapsed && isSelected && (\n                                <Icons.UnorderedListOutlined />\n                            )}\n                    </Menu.Item>\n                </CanAccess>\n            );\n        });\n    };\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            collapsedWidth={isMobile ? 0 : 80}\n            collapsed={collapsed}\n            breakpoint="lg"\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n        >\n            <Title collapsed={collapsed} />\n            <Menu\n                selectedKeys={[selectedKey]}\n                mode="inline"\n                onClick={({ key }) => {\n                    if (!breakpoint.lg) {\n                        setCollapsed(true);\n                    }\n\n                    push(key as string);\n                }}\n            >\n                {renderTreeView(menuItems, selectedKey)}\n            </Menu>\n        </AntdLayout.Sider>\n    );\n};\n'))),(0,o.kt)("p",null,"Now, let's add a badge for number of create and update events for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"posts"))," menu item."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport {\n    useTitle,\n    useNavigation,\n    ITreeMenu,\n    CanAccess,\n    //highlight-start\n    useSubscription,\n    //highlight-end\n} from "@pankod/refine-core";\nimport {\n    AntdLayout,\n    Menu,\n    useMenu,\n    Grid,\n    Icons,\n    //highlight-start\n    Badge,\n    //highlight-end\n} from "@pankod/refine-antd";\nimport { antLayoutSider, antLayoutSiderMobile } from "./styles";\n\nexport const CustomSider: React.FC = () => {\n    const [subscriptionCount, setSubscriptionCount] = useState(0);\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n    const Title = useTitle();\n    const { menuItems, selectedKey } = useMenu();\n    const breakpoint = Grid.useBreakpoint();\n    const { push } = useNavigation();\n\n    const isMobile = !breakpoint.lg;\n\n    //highlight-start\n    useSubscription({\n        channel: "resources/posts",\n        type: ["created", "updated"],\n        onLiveEvent: () => setSubscriptionCount((prev) => prev + 1),\n    });\n    //highlight-end\n\n    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n        return tree.map((item: ITreeMenu) => {\n            const { icon, label, route, name, children, parentName } = item;\n\n            if (children.length > 0) {\n                return (\n                    <SubMenu\n                        key={name}\n                        icon={icon ?? <Icons.UnorderedListOutlined />}\n                        title={label}\n                    >\n                        {renderTreeView(children, selectedKey)}\n                    </SubMenu>\n                );\n            }\n            const isSelected = route === selectedKey;\n            const isRoute = !(\n                parentName !== undefined && children.length === 0\n            );\n            return (\n                <CanAccess\n                    key={route}\n                    resource={name.toLowerCase()}\n                    action="list"\n                >\n                    <Menu.Item\n                        key={selectedKey}\n                        onClick={() => {\n                            push(route ?? "");\n                        }}\n                        style={{\n                            fontWeight: isSelected ? "bold" : "normal",\n                        }}\n                        icon={icon ?? (isRoute && <Icons.UnorderedListOutlined />)}\n                    >\n                            //highlight-start\n                                <div>\n                                    {label}\n                                    {label === "Posts" && (\n                                        <Badge\n                                            size="small"\n                                            count={subscriptionCount}\n                                            offset={[2, -15]}\n                                        />\n                                    )}\n                                </div>\n                            //highlight-end\n                    </Menu.Item>\n                </CanAccess>\n            );\n        });\n    };\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            collapsedWidth={isMobile ? 0 : 80}\n            collapsed={collapsed}\n            breakpoint="lg"\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n        >\n            <Title collapsed={collapsed} />\n            <Menu\n                selectedKeys={[selectedKey]}\n                mode="inline"\n                onClick={({ key }) => {\n                    if (!breakpoint.lg) {\n                        setCollapsed(true);\n                    }\n\n                    //highlight-start\n                    if (key === "/posts") {\n                        setSubscriptionCount(0);\n                    }\n                    //highlight-end\n\n                    push(key as string);\n                }}\n            >\n                {renderTreeView(menuItems, selectedKey)}\n            </Menu>\n        </AntdLayout.Sider>\n    );\n};\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can subscribe to specific ",(0,o.kt)("inlineCode",{parentName:"p"},"ids")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"params"),". For example, you can subscribe to ",(0,o.kt)("strong",{parentName:"p"},"deleted")," and ",(0,o.kt)("strong",{parentName:"p"},"updated")," events from ",(0,o.kt)("strong",{parentName:"p"},"posts")," resource with ",(0,o.kt)("strong",{parentName:"p"},"id")," ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'useSubscription({\n    channel: "resources/posts",\n    type: ["deleted", "updated"],\n    //highlight-start\n    params: {\n        ids: ["1", "2"],\n    },\n    //highlight-end\n    onLiveEvent: () => setSubscriptionCount((prev) => prev + 1),\n});\n')))),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:l.Z,alt:"Custom Sider Demo"})),(0,o.kt)("h2",{id:"live-condesandbox-example"},"Live Condesandbox Example"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/refine-ably-example-9swpp?autoresize=1&fontsize=14&module=%2Fsrc%2FApp.tsx&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-ably-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}g.isMDXComponent=!0},48437:function(e,n,t){n.Z=t.p+"assets/images/custom-sider-e8ca431dea827e6e34efe522b61b3dc8.gif"},96809:function(e,n,t){n.Z=t.p+"assets/images/manual-mode-1210c61ee2988b168850dcd546e4ae94.gif"},64730:function(e,n,t){n.Z=t.p+"assets/images/real-time-aa510ebbaeaf950889acb7f4cbb9b194.gif"}}]);