"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=n(43881),o=n(71307);const l={title:"Mocking API calls in React Tests with Nock",description:"How to test API calls in React?",slug:"mocking-api-calls-in-react",authors:"necati",tags:["react","testing","nock","jest","mocking"],image:"/img/blog/2022-08-04-mocking-api-calls/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/mocking-api-calls-in-react",source:"@site/blog/2022-08-04-mocking-api-calls.md",title:"Mocking API calls in React Tests with Nock",description:"How to test API calls in React?",date:"2022-08-04T00:00:00.000Z",formattedDate:"August 4, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"testing",permalink:"/blog/tags/testing"},{label:"nock",permalink:"/blog/tags/nock"},{label:"jest",permalink:"/blog/tags/jest"},{label:"mocking",permalink:"/blog/tags/mocking"}],readingTime:6.875,hasTruncateMarker:!1,authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"Mocking API calls in React Tests with Nock",description:"How to test API calls in React?",slug:"mocking-api-calls-in-react",authors:"necati",tags:["react","testing","nock","jest","mocking"],image:"/img/blog/2022-08-04-mocking-api-calls/social.png",hide_table_of_contents:!1},prevItem:{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image"},nextItem:{title:"Building a CRUD app with Material UI and Strapi in React",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi"},relatedPosts:[{title:"We are going back to 1995! The perfect harmony of Modern stack and Win95",permalink:"/blog/awesome-react-windows95-ui-with-refine",formattedDate:"March 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.755,date:"2022-03-22T00:00:00.000Z"},{title:"Building a CRUD app with Material UI and Strapi in React",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.72,date:"2022-07-21T00:00:00.000Z"},{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro",formattedDate:"November 29, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.13,date:"2021-11-29T00:00:00.000Z"}],authorPosts:[{title:"Building a CRUD app with Material UI and Strapi in React",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.72,date:"2022-07-21T00:00:00.000Z"},{title:"An article guideline for refine blog posts",permalink:"/blog/article-guideline",formattedDate:"September 23, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:4.145,date:"2022-09-23T00:00:00.000Z"},{title:"Become a Refine guest technical writer",permalink:"/blog/refine-writer-program",formattedDate:"July 20, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.68,date:"2022-07-20T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Why mocking HTTP requests during testing is important?",id:"why-mocking-http-requests-during-testing-is-important",level:2},{value:"What is Nock?",id:"what-is-nock",level:2},{value:"Bootstrapping the example app",id:"bootstrapping-the-example-app",level:2},{value:"Adding a unit test",id:"adding-a-unit-test",level:2},{value:"Nock installation and configuration",id:"nock-installation-and-configuration",level:2},{value:"Custom requests in Nock",id:"custom-requests-in-nock",level:2},{value:"All HTTP methods like <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code> can be mock.",id:"all-http-methods-like-get-post-put-delete-can-be-mock",level:4},{value:"To handle query parameters, the <code>query</code> option can be used.",id:"to-handle-query-parameters-the-query-option-can-be-used",level:4},{value:"Mocking server Errors",id:"mocking-server-errors",level:4},{value:"Recording in Nock",id:"recording-in-nock",level:2},{value:"Alternative API mocking libraries",id:"alternative-api-mocking-libraries",level:2},{value:"Conclusion",id:"conclusion",level:2}],m=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var d;const h={toc:u};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Writing unit tests is very important for the development process. Testing components that use HTTP requests sometimes may be a real pain."),(0,i.kt)("p",null,"In testing, we often want to make mock requests to test our code without actually making an HTTP request. This can be especially important when we are testing code that makes external API calls since we don't want to rely on the availability of the external API."),(0,i.kt)("p",null,"We'll use a third-party package called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nock/nock"},"nock")," that helps us to mock HTTP requests. With nock, we can specify the desired behavior of our mock HTTP requests, including the URL, headers, and body. This allows us to test our code against a known data set, making debugging and testing much more straightforward."),(0,i.kt)("p",null,"I'll show how to write unit tests for API calls by mocking method in the simple React app."),(0,i.kt)("p",null,"Steps we'll cover: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#why-mocking-http-requests-during-testing-is-important"},"Why mocking HTTP requests during testing is important?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-nock"},"What is Nock?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#bootstrapping-the-example-app"},"Bootstrapping the example app")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#adding-a-unit-test"},"Adding a unit test")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#nock-installation-and-configuration"},"Nock installation and configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#custom-requests-in-nock"},"Custom requests in Nock"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#all-http-methods-like-get-post-put-delete-can-be-mock"},"All HTTP methods like ",(0,i.kt)("inlineCode",{parentName:"a"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"POST"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"PUT"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"DELETE")," can be mock.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#to-handle-query-parameters-the-query-option-can-be-used"},"To handle query parameters, the ",(0,i.kt)("inlineCode",{parentName:"a"},"query")," option can be used.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#mocking-server-errors"},"Mocking server Errors")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#recording-in-nock"},"Recording in Nock")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#alternative-api-mocking-libraries"},"Alternative API mocking libraries"))),(0,i.kt)("h2",{id:"why-mocking-http-requests-during-testing-is-important"},"Why mocking HTTP requests during testing is important?"),(0,i.kt)("p",null,"Mock testing is a great way to speed up running tests because you can eliminate external systems and servers."),(0,i.kt)("p",null,"These are all possible errors that you might encounter when running tests with the API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The data returned from API can be different on each request."),(0,i.kt)("li",{parentName:"ul"},"It takes a longer time to finish running the test."),(0,i.kt)("li",{parentName:"ul"},"You may get a big size of data that you don't need to use in tests."),(0,i.kt)("li",{parentName:"ul"},"You may have issues like rate limiting and connectivity.")),(0,i.kt)("p",null,"We'll use the Nock to find a solution for these problems. We'll create a simple react app and request an external API. We will implement how to mock API calls and write a unit test for API calls using Nock in a React application."),(0,i.kt)("h2",{id:"what-is-nock"},"What is Nock?"),(0,i.kt)("p",null,"Nock is an HTTP server mocking and expectations library. Nock works by overriding Node's ",(0,i.kt)("inlineCode",{parentName:"p"},"http.request")," function."),(0,i.kt)("p",null,"It helps us mock calls to API and specifies what URLs we want to listen for, and responds with predefined responses, just like real APIs would."),(0,i.kt)("p",null,"We can use nock to test React components that make HTTP requests."),(0,i.kt)("h2",{id:"bootstrapping-the-example-app"},"Bootstrapping the example app"),(0,i.kt)("p",null,"We'll use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate")," CLI wizard to create and customize the React application fastly."),(0,i.kt)("p",null,"Run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx superplate-cli example-app\n")),(0,i.kt)("p",null,"Select the following options when taking the CLI steps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"? Select your project type\n\u276f react\n\n? Testing Framework\n\u276f React Testing Library\n")),(0,i.kt)("p",null,"CLI should create a project and install the selected dependencies."),(0,i.kt)("p",null,"Create a component with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"export const Main = () => {\n     const [state, setState] = React.useState<{ firstName: string }>({\n        firstName: '',\n    });\n\n    const fetchData = async () => {\n        const response = await fetch(\n            'https://api.fake-rest.refine.dev/users/1'\n        );\n        const result = await response.json();\n        return result;\n    };\n\n    React.useEffect(() => {\n        (async () => {\n            const data = await fetchData();\n            setState(data);\n        })();\n    }, []);\n\n     return <div>{state.firstName}</div>;\n};\n")),(0,i.kt)("p",null,"Above we can see that we do fetch call to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine"),"'s fake REST API URL and thereafter returned data shows on the screen."),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://github.com/refinedev/refine"},(0,i.kt)("img",{src:"https://refine.dev/img/github-support-banner.png",alt:"github support banner"}))),(0,i.kt)("h2",{id:"adding-a-unit-test"},"Adding a unit test"),(0,i.kt)("p",null,"Now, we are going to create a test file."),(0,i.kt)("p",null,"We want to add a test case for the function that makes an HTTP request to a URL and returns the data provided. Waiting for the data returned by API to be rendered on screen is a typical way of testing it."),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro/"},"React Testing Library")," the expected unit test vase will be the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.spec.tsx"',title:'"index.spec.tsx"'},"import { Main } from './index';\nimport { render, screen, waitFor } from '@testing-library/react';\n\ndescribe('expectedData', () => {\n    it('checks if returned data from API rendered into component', async () => {\n        render(<Main />);\n\n        await waitFor(() => {\n            expect(screen.getByText(\"/value from the api\")).toBeInTheDocument();\n        });\n    });\n});\n")),(0,i.kt)("p",null,"At this point, if run the test it will fail. It'll attempt to perform a network request. Since we are calling a real database it will return all the data rather than only the specific data that we need.\nAlso, the API will respond with different values for each request."),(0,i.kt)("p",null,"Testing this HTTP request-related architecture in that way can be a headache."),(0,i.kt)("p",null,"With the nock mock service, we can intercept requests to the API and return custom responses."),(0,i.kt)("hr",null),(0,i.kt)(m,{title:"React state management: Even the pros get it wrong!",image:"/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"nock-installation-and-configuration"},"Nock installation and configuration"),(0,i.kt)("p",null,"Install the nock with the following command if you don't have it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --save-dev nock\n")),(0,i.kt)("p",null,"We'll add the highlighted codes to initialize the nock."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.spec.tsx"',title:'"index.spec.tsx"'},"import { Main } from './index';\nimport { render, screen, waitFor } from '@testing-library/react';\n//highlight-next-line\nimport nock from 'nock';\n\ndescribe('expectedData', () => {\n    it('checks if returned data from API rendered into component', async () => {\n        //highlight-start\n        nock('https://api.fake-rest.refine.dev')\n            .defaultReplyHeaders({\n                'access-control-allow-origin': '*',\n            })\n            .get('/users/1')\n            .reply(200, {\n                id: 1,\n                firstName: \"/value from the api\",\n            });\n        //highlight-end\n\n        render(<Main />);\n\n        await waitFor(() => {\n            expect(\n                screen.getByText(\"/value from the api\")\n            ).toBeInTheDocument();\n        });\n    });\n});\n")),(0,i.kt)("p",null,"At this point, our test works."),(0,i.kt)("div",null,(0,i.kt)("img",{src:r.Z,alt:"Test run"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"The test runner creates a mock server with nock and the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchData()")," method will trigger.\nRather than calling the API to test our app, we provide a set of known responses that mock it. "),(0,i.kt)("p",null,"Nock intercepts ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," requests to ",(0,i.kt)("inlineCode",{parentName:"p"},"'https://api.fake-rest.refine.dev'")," followed by the path ",(0,i.kt)("inlineCode",{parentName:"p"},"'/users/1'")," with the HTTP method ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),". "),(0,i.kt)("p",null,"The response should be like defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"reply()")," method.\nWe also set the ",(0,i.kt)("inlineCode",{parentName:"p"},"CORS")," policy to the header with ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultReplyHeaders"),"."),(0,i.kt)("h2",{id:"custom-requests-in-nock"},"Custom requests in Nock"),(0,i.kt)("p",null,"We can specify the mock requests."),(0,i.kt)("h4",{id:"all-http-methods-like-get-post-put-delete-can-be-mock"},"All HTTP methods like ",(0,i.kt)("inlineCode",{parentName:"h4"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"h4"},"POST"),", ",(0,i.kt)("inlineCode",{parentName:"h4"},"PUT"),", ",(0,i.kt)("inlineCode",{parentName:"h4"},"DELETE")," can be mock."),(0,i.kt)("p",null,"Simple ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"nock('https://api.fake-rest.refine.dev')\n    .post('/users', {\n         username: 'test',\n         status: true,\n    })\n    .reply(201);\n")),(0,i.kt)("h4",{id:"to-handle-query-parameters-the-query-option-can-be-used"},"To handle query parameters, the ",(0,i.kt)("inlineCode",{parentName:"h4"},"query")," option can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"nock('https://api.fake-rest.refine.dev')\n    .get('/users')\n    .query({\n         username: 'test',\n         status: true,\n    })\n    .reply(200);\n")),(0,i.kt)("p",null,"When an HTTP request is made with specified query, nock will intercept and return with a ",(0,i.kt)("inlineCode",{parentName:"p"},"200")," status code."),(0,i.kt)("h4",{id:"mocking-server-errors"},"Mocking server Errors"),(0,i.kt)("p",null,"Error replies can be returned from the mocking server with  ",(0,i.kt)("inlineCode",{parentName:"p"},"replyWithError")," prop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"nock('https://api.fake-rest.refine.dev')\n    .get('/users')\n    .replyWithError({\n            message: 'Server ERROR',\n    });\n")),(0,i.kt)("p",null,"You may want to handle errors by only replying with a status code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"nock('https://api.fake-rest.refine.dev')\n    .post('/users', {\n         username: 'test',\n         status: true,\n    })\n    .reply(500);\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It\u2019s important to note we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"afterAll(nock.restore)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"afterEach(nock.cleanAll)")," to make sure interceptors do not interfere with each other."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"afterAll(() => {\n    nock.cleanAll();\n    nock.restore();\n});\n"))),(0,i.kt)("h2",{id:"recording-in-nock"},"Recording in Nock"),(0,i.kt)("p",null,"Recording relies on intercepting real requests and responses and then persisting them for later use."),(0,i.kt)("p",null,"Nock prints the code to the console which we can use as a response in tests with ",(0,i.kt)("inlineCode",{parentName:"p"},"nock.recorder.rec()")," method."),(0,i.kt)("p",null,"Comment out the nock function and let's add ",(0,i.kt)("inlineCode",{parentName:"p"},"nock.recorder.rec()")," in to the test file."),(0,i.kt)("p",null,"When the test runs, the console logs all the service calls that nock has recorded."),(0,i.kt)("div",null,(0,i.kt)("img",{src:o.Z,alt:"nock record log"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Instead of defining ",(0,i.kt)("inlineCode",{parentName:"p"},"nock")," method and reply values manually, we can use recorded values."),(0,i.kt)("h2",{id:"alternative-api-mocking-libraries"},"Alternative API mocking libraries"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mswjs.io/"},"MSW Mock Service Worker"),": Mock Service Worker is an API mocking library that uses Service Worker API to intercept actual requests."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://miragejs.com/"},"Mirage JS"),": Mirage JS is an API mocking library that lets you build, test, and share a complete working JavaScript application without having to rely on any backend services."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wheresrhys/fetch-mock"},"fetch-mock"),": fetch-mock allows mocking HTTP requests made using fetch or a library imitating its API."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article, we've implemented API mocking and explained how useful it can be. We used nock to mock HTTP requests in our test and some useful properties are shown."),(0,i.kt)("p",null,"We have seen how to test only the behavior of an application in isolation. Avoid any external dependencies that may affect our tests and ensure they are running on stable versions at all times."),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.dev/img/discord-banner.png",alt:"discord banner"}))))}k.isMDXComponent=!0},71307:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nock-recorder-log-8c9ee1ddc79f539f85b2165673466137.png"},43881:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlwAAADPCAMAAAAXr/9GAAAA+VBMVEUeHh51dXXMzMw7vHlycnLHx8c+Pj5mZmZoaGhra2tubm5DQ0ND0Ys1NTVFRUVXV1dcXFxMTEwvLy8tLS1RUVGxsbFKSko0NDQ5OTm0tLReXl6/v787Ozu3t7dgYGBAQEBOTk5jY2NwcHC7u7s2NjZSUlKMjIxZWVkxMTFxcXGFhYXCwsJUVFSjo6NHR0eZmZmIiIiWlpahoaGtra3ExMSenp6BgYF5eXmmpqY/yIUjelWpqamTk5M0qm9+fn57e3scQTIwnmsrjmGQkJA9wYAmglocSTg5tXp3d3c2rnUeakscUz0dYEUtlmUcMyodLygcOC0cKCMgck+GWa2mAAAbmklEQVR42uydWU/bQBSFz73yxImj7HucxNnICjRpgCI1Kg996f//RbXJ9YjBSXBLl1Sd76GWr+dup0ctIMCwWCwWi8VisVw6Qb1+PGixvJfhiPLHgxbLuznqI2suy1uUHBq3UPDIKQJe2XGGQDVLNIAEYx/VcuTUTXPpIxmHRssFLJaX1Gneuuph6QUuAaFTugSMvNZ0CAnGPhp7mSsyzaWPjHOBRwVYLC/xsghZRE6hCmgOUAFZrwodFB+1qVypOCXTXDqvgLw1l+UVVEJIhgCEzqEiQBlMPXKacVB8dEtuSN00lxwpElCz5rK8YuwipEAZgOqxuYCaSzoI0G3koymeuR70AAnqvBYCay7LK8pURK8AclGiVmyuW+DKQRwEslkAjltDfgqM6QqQYHxk6U5z1lyW17hE1EY+/LMEUB6gHnJETgUSDGl7NELPCW8zYi4JxkfyDrlkP1u0JDiYogpB3yWCqMHAOJJ3YLH8BrqjrtOFxfIbaJfLU1gsFsvFMXp46OEI3afer+yQbPTE/OJ+OI/DVaRABpS8d/PlFkCuiFH9bZXeIRa9fUo2kllkMmHCDfxbPDxy7nmLr0bYV51rnIX4BgAzr7eA4pDe2Q5y0aw/4wUf+zjAQ5hkHpOayoCSZyKrMC8AtUcqeAOAt1C7Q0ueH9/BJL1You6ZGqYSMotMpslyBv8Yh5VvOnhB7+01dqwA8D5YMSFT5y/BuQ5JbdUKL2j1TplL+XcyWmJAyTORVZg/ALz9KXPd+Kd20KQXS0Y6W8NU4qS5qjzE5bFe+dxAps9qBQQd5hvA7wJ3dVl5pJiVakPwVXg3iPMqPisPT2ue+GqOGN5w87C83wFq7AKar4rXTdyHVZanzfUAzfDu7gZAV/HnSL+9+gZNE42EuWRAyZM5ZTFZhX0GeCtDyPAigXQ4Za4qe3B8AJ8/mDuIZlIltVhaXX5U0dZmunRYfw6DosQpc4FLuDyY77szrP3uhnt4nDTrDwe1uBzL1txNmk3EFJd83dR5yh/tuD1TWf7Q2EEoc+1u/7x8lfevzLXibXMzx3Z0e8/tE+aq8BWgqe/6AO76Iz8y140padJcMqDkyZyymKzCX9UMvJUhZHiRINFhU4mmvsanAUK2CihwORrY3EE0kyqpxdLqssp9ZJjpcQdW3j3LRjKLnkyjPuDy4GjNa/7w9KT26Ph5aKFO/Lc4ZOi8IrsAf5lNwOVZH8K9j48+wMpn1XtlrrWcai1X3D1uLsWzxEcaU64gF5lrtL86by4ZUPJkTllMVuHZgwJvZQgZXiSQDqfgBwCTR3xiYwetmVRJLZZWl7cocMVI1x34XnqEG52krJSHS4O/ASBuhKxQ91lRGnNJ3oCngNqHUnFpNYGg/NmOW+DO5hp4ZS4xzo4nDXaPm+vqkQuvzeUxkOEhhNTmkjllMW0uqAfeyhAyfCzBWVYKIV8U+p8h6aa5pEp6sbS5vES67hBlr+/fMNfEd6u4NDgLoKz/3jI7BtQ35A/mcmDsJHrpvEp0ilemXkWe9Pv8BbwBEua62yEk4EpYJysd5GIa3jRXwAEG0ZCVZZA0VzFXPG2urF4sjvEMXxVvZQgZXiSQDidQXw8LeTwwd4g1kyqpxZKRxJtmuu7Ae4A/vWEudnF5HMRXjQyyQ9ACGwX0O9WbZ3N1OgUAn1T+hF7gRmvPTVOvGQOYdGJz5Uv8UETMB/YwrwTcLTQ4Kx30xfhs0VRffSw0Eh9zLYr9SbEKbHl73lyymKzCM4B5K0PI8CKBdDgOSeWOUoC5g2gmVVKLJSOJucx03YHXwSeeHjHXxX+2eHD8XDFzFxNm9QXwmDvP5ir5/Bmodpgzhl46L8fMe0R6XWu9Jg0AGwavACS+ztVg5hIeow6udIgvmvUNNB0OWeOJ2U+Ya8sh21B0Xpnm0nkypywmq0TmuuetDCHDiwRnzbW+f/F1PHMH0UyqpBdLRhJzGem6A6+ZH/VGxylf9Ne5ehmEtAI800Za8vhRigipLXCaDXNygDPirRlnkcVMZAhTgrOMuHcuva2rvEMsSTc6sFtY4Dx9nsCSkgA/Am/wR2jjr8Du25a031pn+Sn29udFLRaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWiyZTwXGaSE/7Yn+fV6GXIljB72F8yd+f/DuolIxbz8m2jz+jIkICIsc9nS7kyjhNjXrvH9cslr5RN5s4kgiCCqm6m5VG5OqLGQwoogKULu/HDX8vA1NYqhnPEubK0zTwlqfShSmd7ei9c1yzWOpG6Y9QIU13E8cbZ+WSCFar1TohhP6Tf7q6Di1vEThEjoMYzwnvMvI+DXkWv4eDBo4zRJ6ABeXNdLnTlJaAflUHxnWPslJFXGq+26PiUc5zehiPorbmCz9kFrmTflLaLCZB45kuLQMWxuMBpJhON4OZJY2oIG1byzbgNXHA7K6flZzoQAtuVl/MYEQ2hxBvjv+CebAoE9Byc60WYha31G7J+zTkWfweDnkBR2QuUMlMlzvNKAfoV3WAqJy5lipR4+Xrd3tcO3kqu6OoQ1hFgtJPZpE76SelzWISNJ9JaT3g1M1Ciul0MzjOfmfvjFbbBoIoOtMKy1KR69pGFaZNahFqG4z7BaV56Vto//9vKonTgdFiaNpikmgOwcrO7M4s4kZRBNEd/EJou8ykKAV8d8vd8JLirgqHNCh6ZjQRzhudja/0lYr5aZDDhwMDjkFc2dYvtxEUOxHBqkNEc6vSo5/G3h6nQnTWfyxFdEGQfuyFEf0o7YsR9DlKs0FuryjGFB/EL8ROQXlUMVx3y93um5G40iDeN9uJ3HTlWuT6RlJxmZ8GOXw4eI39IC49+eWM/JULqw4RrakysMkSb49eAc2mGCaWS4L0Yy+M6EdpX4ygz1GaDaIjijHFB/ELsVOw6BUPvrvLeXGlwXYnE7pyrbWSqj/d20Rc5qdBrs29uPp1frmN4HSkSa5YvVBlkE3i7WHi6lJaE6Qfe2FEP0r7YgR9jtJs0OuIKT641pXMtLJTcCz1YM4irrvl7s6rVFw+2GgjPe007rlWOpPhZ7nOVl5c5qdBDh8OE1ezaNvRchtBM1TBqgNxUaXW1NvDxNWuuzRB+rEXRvSjtC9G0OcozQa9jpgyCmZbybUS2uZt/4X5g+9Ozm6vDkVx4JAEd0eRKf21uFOdD6d7rrr24sJPgxw+HBhw8JzLL2c0es6FVQfiokq5Tb09TFyl6o0QpB97YUQ/SvtiBF3OSrPBuXa0FGPKKPhOtdSKtnUncsl2iMt3JyfoaK8dew4+yC/uCT7nugB6g4M8jpliwDGucquXvD1Q4WO8PdJiSe4yl6es07Zp978ii/+nvg7hfRxck7dP7315QRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEwUvn9R8jQfB/xPWVwzMRV/VBEu5eebP8+ttCgmvyW0si8vOh++ZBfnSf3+9F7jk4cT2nFzo0I3F9/hf/si8f30vwi71z700aCsP4s4e8KBC5aSu1HC+poIKkrVyz4S4QzbK5KXz/D2MLp0112WRqIjXnl8ALJ89J+OMX3qaFt78pV6TWV1wUCivgY/S8Wl+sdMnKla+BDpX235PL3ev7Ye4pqVyfC4vocYZTfCpc4TJa0yUrV54GOlgiFgBRHsfAkmIxQM2lLFESBV/CVEWPtGDL0OUQOgIMhH1bJ6ZCipR1Mtlu2F2udeTSIRaxUcDpoqBLVq48DXTwFV2gSbpkKyojMnhLWsIpPHYpTWhG9Ad9dDaRUhIZkI6UdOKBRSqrrpPb7ebn+7vLFbMoXKLwLWqEi2vgUpesXLka6NDScuGI78qcQTGYUNUDKrRJPkAC2S0ilgvnHCcRsgo0s20xTcbb9/J+9/tGKtfqy8XV5rtqhbPCxqtFWlK5cjXQQcvVh8+pz0lUAp8xfWAQPaV0SR6hQw8NejrymHLzmEsnt9sN92mLEVdYnV7j8GN0TH+ItS4ZuXI10CEr1znHsBgEdOr1egdVklMA1a3Aj3rCRoeCMmdJhIw/YRpxWUmTervhfnKt8Sl+ebX6sr7GmS4ZuXI00KEdjilhoOVqk0dkUCXHgTNGn1OyDXRpAfB6JZd2h3SEB0nE4ShUpSQCiyps6GSy3XAvuU7j8xBfcfYNuL4o6JKVKz8DHeqMka1c5xiSLgNMGdELqTCnl5gjui2O4naoI2h5JGupXLUReaKTyXbD3z1Dn9+BDi1diy9wg6dVAB06KGYjzSpuJs1J/v26tpiTgQ6xXIa8yZWTgQ4t/wAGg+H/4XkNBsOfQr4FZI4fUTNkOV5C8+OiwXAXpA8wvFuugYObDMzRsOFu6HIjV8OllAEshX07luvl6FxHXgkp0kJRUXrAC4ccpIsGw61wKV0whLivhmyhx9AO3kDNnjBEgj30bBvou88CtjHz7CeTZNFguB12JwKGVT4AeIy+QoxyOf65A76nf3IiczhuxbRFw25yQSYMn/M1IPP4bYyiqJ/lOqAV0cMTl3Jg5DLsJNdSGDZYB9jDaIgYNawyQMoHBaDOl9hSHHK7aDD8Qi6QIWg9ndOGzzLeNKBm6LGBhKlUAIhVxMOXOHiLQDaL+bjIY/g3aLnGDFEiOQdgkazFckGNkNB0yCLeCMln8Eg53i6avzAYdqOiaxW30t7I9PQFDAaDwWAwfGfvjFbbBoIoOkMXWVKwHVlBEaGotbGJBaEfEAj0JX3O/39NK3Q0YaXFLCgUmeQSspndHc01OxjbOEdf+tJHq5KAkvoiwiEpZJaKYBQW9T5eRcQaD/r/qHYSp8PVvNXSjUyVNYJCCIfcpXUkJCIsXQejcDr1LqrSzrCq5o8iTv8pxkTcGg/aDM5W+GLco9KpHjY2THRld22Mby6TlhcgEbOai/T4emilrtu33d1pJeVRi93c5op+fB9G1DgOd9fdOxsmWvT9Zt9efguC3aDNO+zBJrNG1ocKoAMyhINT5xLmYEyQPkAi8kSkPbI2wkkkre7t7IiARJBOhKjHxUbcikF60vvut0ie8jX/oEG8UJZJtgQN+twKDGICzSRqmLYtf2yUgdiuaceRL/NO2S/PgmA3jGAPTGbNUR8N6IBAOJx/aX0vCMYE6UAi+I9D1kYVDumP3M6OCEgE6USIelxsxK1AiUq77ZtLtzRX0CBeKMskW4IGfW4FBjGBZhI1TPus76lbtxoGxDX741juPf5fXwQZu8GHPTCZ5XoL0GH6mmutgowxQTrP9DQXa6MKupYbOzsiIBGkW4TWSqEJt8J85d2PaJurE5oraBAvlGWSLUGDPrcCg5gQNI+oYcr20qlxWgwD4prvx/GwwBddz3++vVkAu2EEe2AyU5cZ1+FSc8GYIH3SXNWkwkZFSjs7IiARpBNNmquacitQmz+tVETTUy00V9ggXijLJFuCBnnQPgQDE4JmETW8Z65ehZYMTHDN/jiW+szVgQaRsRtGsAcms9VZTwAdLjYXB0n6sMNVstOENb9CqTtJODuLgESQTjRprpspt6LXWbM01UL0ZJ6CBs0LZZn0t7AWbC4CTAiaS9RAT605LhhGzWXHcVjga67XVzEZu8GHPTCZNXKncB1imov0ARKRptJYc40quAdZ2dkRAYkgnSjYXCNuRa9ttyFLh+ba1frzHDaIF8oy6W9hLdhcGMSEoHlEDVOtInJfiDR6ZPCbqz+OBb9bNBm7wYc9MJk1IlkL0AGBcAg3F+lAIjaqqX5nbVShUM3t7IiARJBOFG4un1vRK1+JyEl5MuFzrqBBvFCWSbYEDfrcCgxiAs0kavifc9VdtdMw+M3VH8fVfM519qIyMLmTaJWxW8roNFOspXiDpY1hg/Em5hM1UKKRZd3Xd+0+t66EqPGXnTsgAQAAABD0/3U7Ah0iR5NRAwAAAAAAAIi9e9ttGgjCAPwzsIHQaUgBU9LEFBQObaKSuE3a2ijgmISQQw/i/R8GezVq2QZL5iQsmO/Cq01n7355XWmkUUoppZT621oPce0lNfHHxF9i/KwXx8c6BLFMDim1npaev40rHwZEAwiZwOqU5BiHPMEPmnIEV+WUPHdUR97u+JSqUOXx2WuS8QIId6SzIOod0CaubLScklzhbwmXaQ4auaM63B00XCVziw4BPEgz9hF41ibycGIHYtyXgmfkI9UyRwjMDjxjPEBK3HPAG3eu3DfhisPRhEf2dRaOgeWMeX69TDicZskKR2vhegKvAbjzO2TEh+wwNGT2NVwlZMO1R+QZOsEgfUl1cdcj8r06BFH3DrBBbWT3Ts+nJiAl7jk7tDcnXJ+YQ+YVwlES8gIhJ2cTyHLBPMp+tCURbpBwOfM7ZMSH7IIXb4f0VMNVPjZcx+TX++SD6HVl7c67b4h8SLjsN5eUrJ97bw7zw4UFnyGens04AfP0EpDlC8+WEc9XPMYsJ1zuRSgjPmQHbO93aEfDVT42XD3KdPE6fb5zw2VrDO1/N1zuOZETrtuIeQbOjDG1T1kSzkwSjpAUCpeM+JAdjqjt0V0NV/nYcPWpUa/XXwGbHUNbWXI2ANF6ijQ8vQo14Tvh2lg/V7v1IDdcIVY8jniOaRariyjkWJb0x+Vy+WnBCew3V61aywmXjOqQER+y26UtPKd7AOgOVJnYcNWIhv3GEO1OtUlPAI/8YEsK7tFRz9BjEB0QVVvBkEzQlxL33I1vrnn2tZ5cX4vzkBcrnizC7PqLVrc5liVmPovmyTnz2H5zBRTgyl7Nb9ceuvM7ZMSH7HZpZ9Oz4Wo0NqFK5E4WLpxQqgMj19uDAdEHKdgyRObAXoFdqtYpY6TEPXcjXJyZXb+5mCfALH3yGOkmfUKWBacijJhvpwsOqYMrAaWCG/M7ZMSH7E6JGnQX9n/ed1DlU9lFaruGddsVZPYKn3NJuOa4ROoCsEsMWaxL+7dzWF0qOuJDPNqD+o9l4SqK+lCquPNkAaWU+idpV8Q/pEBXRD7tilC/2BWRT7si1M92RTi9DoVpV4Qq0BXh9DoUpl0RqkBXhNPrUJh2RagCXRGyK0y7IlThrgin16Ew7Yr4yt4dtaYNRmEcf/LQUzrLJkvbLDYJSUnVapCUGa3gqBe98ft/ouE8SCPOvTbbWsj53clBr86N8M+Jcagiaq2DM6sijEMVUWsdnFkVYRzqBv3kyKoIcyKrIszHZ1WEMeZvin0ct7rAGz1Yz9BqegjiCJ/F24qJQMiO9Qwtpocg3JfLvZiIks89Ws/QXnoIApLknAELoSwQyDTiFFpF+Kx+zboFZX1CMRHyDhXPrGdor+0hCJ+MyBDVtKx41icr8pNWET5ZkOEVGZFd92Kiy/glkoH1DO21PQThk1hyhC+DWcKyT2LNmVYROnviDR65cC8mLpgxkNJ6hjbzhCOfBUo+gRuTPnN8Za5VhM5+cIAhE/diosuihAysZ2gtPQShCzRmgpfNcgk6XGgVobM5l1hx6V5MhBRccWQ9Q2vpIQhdoA4jTzbLxZ7Q0ypCZ+fkQtg5oZiIcpSE9QytpYcgtgu0RkIWm+WqyOJKqwidYU1ydkoxkQnpwXqGFtNDEOrBB9BnD+cHqojLU4uJ1HoG85oulzH/RFh6MMaYj8/1vRjNq4gYjWRD/NnKh3l3u1sRYYPlcqki7rjxDK8izwAhmcNNPaP4nhyc1TGrnZowjTS/FXEZo6HjVUSapnPeQ0rMCMggTe/hpp5RfIsPzX67XBJV9u/kneijZfpejLKQIt+9F6PBkYi9KkLdJBgyRsgO5BmvpD1ygj3nCWWss11GkVXVBFgVzCMZalShM+gXboVLZgdPTeiPmf9Dl0vfi7FkzoK5Xo5ocCSiXkWoB3oIGCDgGEJWQ0At8uB6jj1FdPvIGDrTjALX0wQYyAXLmyk0qtCZfqFK7iJmB5+p1R8zP9k79x6lgSiKnzsZpqVNoTyEWlnK0wUfuFFjTDT6h9//OzlkT+rOSNfuomji/LJJk3u5c88kJ7QLk8uFoLlQ3JproW7W7zk54owhEe6pCHKjAHSezq/UZ3zY6pcvAfL0WQqfV+rN16+dz8zx1sdnrudrqPz5FQ9VMMeCjRqg65nLaRS4FL65eurDusPJETgP/1QE3n8EcP3Uvit+gCVXE5CxvQ0LfF1PLC+Y88x1BdV/seahCuZYkCjAnDQXG4XP8C5As7k4OeKMIRHOqYjnr/PbtyIutlElLAsVoca8U3CHRORq4eSsqXxz8VAFcyyoVIW5by63UeAy0Fz8XQyai5Mjznjmck5FvFQ3sHx6D0s+LK46qGQ0uVJTENnhpgNvSETniUG8YI7HKDxz8VAFcyzovLXBhTtqwm0UuAycFcHfxaC5ODniTHPxVERtLvUNlne2zQRbZUkAsrbBL/CGRFzbclWCOR6jeKosL4/mevViDR6qYI4FX5XiA703aqJuFPi7mAq/gVOLmOI25eSm1akhETPDXCOj3YkCGDh4jQL/J2FIRCAQCAT+earxGLycRTZ7RNtmBmjDBCDtFzODW7kUEXgkRkTiCveyWEpaX2oGfRA32EwZ8yUtaNFPsjZtpYdG/MVIouOCco8iwmf6jzdXUcQav0DS+lIzj0HuCT78JaRFP8kacueaS0a4QzDXGeYCCjEotewPQJJrvQBh8KS5Ki2iNTDqih4Dw1hkDgYJg0gMsN8gW63mDXU1q3EiMXPsRxFendnLUjJPS5aI7qGmr2U1hcyPO/L2Z7Qs9ztvMZJo0dpQLkW4cgMPMFcuwHW1O15E90oBYdAzF5lG3ekUWCVmK8AymW4WdZAwKD1ADLCJ4oa6GpHcvGKO/SjCq1vFVSKZp2WfVJEAZCzX0+2MO/L2t+oey08vtjtIMQXlUoQrN9DaXJYUlsNYDOT6zh2Cwftui4Xkg4HuI06GYLCGwdpcKOPGOiLRjxz7UYRXJxlS/7a4kxSQAUgSw8IduftjecNiGQ1a1ua6Izccn36QuQ4DKYFIupGkoBEIg/eY6yCRZYxNInrimYtBx1xNdUQmP3LsRxFuXU+AkW8uIwB0H4TfubO7sz+Wu4s1m8uXG3jAbXEiu5FkyHxzMQhADgAv7v9+RjbgiyNhkNRBPcGQ5mqoI3QTc+xHEW7dSIYwkrlaMjGAjEFW0R1zefuTKSrJnMWazXX4We6reZiy2dJcWEVDMYh8czEIII4BXmomeghARyOkGxyArWawhkFbNae5GupcczHHfhTh1enSBjNPi0ToyxQklx5mGXfk7W8fbbqSOYudNhdF+HJXskWgnbkGMlyKxJLC/kFmIAwCRSJL8FITi4ww0yJi0BXRgzpIGOwdV5nZjGXVUOeYizn2owi3biCSSOZpSW2qj5pIRApwR+7+Ui2R7JzFPHNRLkU4coO5LsitmYY4wfBRdczdXzdq0W+HZlLtLNZ2m+GBPvALymWpSwQCf4AizzcIBAKBQCAQ+N4eHAgAAAAACPK3XmCECgAAYAVAXm2G8t0oxwAAAABJRU5ErkJggg=="}}]);