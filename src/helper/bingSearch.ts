// https://portal.azure.com/#view/Microsoft_Bing_Api/KeySetting.ReactView/id/%2Fsubscriptions%2Fe47ac87c-4851-4455-9bab-8d1a7bc8ff5c%2Fresourcegroups%2Fmirrorgo%2Fproviders%2FMicrosoft.Bing%2Faccounts%2FmirrorWebSearch
  // .get({
    //   hostname: 'api.bing.microsoft.com',
    //   path:     '/v7.0/search?q=' + encodeURIComponent(query),
    //   headers:  { 'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY },
    // }, res => {
//  const SUBSCRIPTION_KEY = '5e4ec03892b14ae9b1ad1141db5385c7'
 const SUBSCRIPTION_KEY = ''

const mockBingSearchResult = 
{
    "_type": "SearchResponse",
    "queryContext": {
        "originalQuery": "axios"
    },
    "webPages": {
        "webSearchUrl": "https:\/\/www.bing.com\/search?q=axios",
        "totalEstimatedMatches": 4370000,
        "value": [
            {
                "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.0",
                "name": "Axios 中文文档 | Axios 中文网 | Axios 是一个基于 promise ...",
                "url": "https:\/\/www.axios-http.cn\/",
                "isFamilyFriendly": true,
                "displayUrl": "https:\/\/www.axios-http.cn",
                "snippet": "Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js Axios 使用简单, 包尺寸小且提供了易于扩展的接口。 起步 Github 查看 语言 开源 贡献 English Source on GitHub Fork on GitHub Português Brasileiro Issues Fork the Website ...",
                "deepLinks": [
                    {
                        "name": "起步",
                        "url": "https:\/\/www.axios-http.cn\/docs\/intro",
                        "snippet": "起步. 基于promise可以用于浏览器和node.js的网络请求库. Axios 是什么? Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是 isomorphic 的(即同一套代码可以运行在浏览器和node.js中)。 在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。 ..."
                    },
                    {
                        "name": "Axios 中文文档",
                        "url": "https:\/\/www.axios-http.cn\/docs\/handling_errors",
                        "snippet": "错误处理 | Axios 中文文档 | Axios 中文网"
                    },
                    {
                        "name": "POST 请求",
                        "url": "https:\/\/www.axios-http.cn\/docs\/post_example",
                        "snippet": "POST 请求 | Axios 中文文档 | Axios 中文网"
                    },
                    {
                        "name": "Axios 实例",
                        "url": "https:\/\/www.axios-http.cn\/docs\/instance",
                        "snippet": "Axios 实例 - Axios 中文文档 | Axios 中文网 | Axios 是一个基于 promise ..."
                    },
                    {
                        "name": "Promise based HTTP client for the browser and node.js",
                        "url": "https:\/\/www.axios-http.cn\/en\/",
                        "snippet": "Promise based HTTP client for the browser and node.js。Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface."
                    },
                    {
                        "name": "基本用例",
                        "url": "https:\/\/www.axios-http.cn\/docs\/example",
                        "snippet": "基本用例. 使用axios的基本用例. 注意: CommonJS 用法. 为了在CommonJS中使用 require（） 导入时获得TypeScript类型推断（智能感知 ..."
                    },
                    {
                        "name": "请求体编码",
                        "url": "https:\/\/www.axios-http.cn\/docs\/urlencoded",
                        "snippet": "请求体编码 | Axios 中文文档 | Axios 中文网"
                    },
                    {
                        "name": "注意事项",
                        "url": "https:\/\/www.axios-http.cn\/docs\/notes",
                        "snippet": "注意事项. 一些注意事项. 语义化. 在axios达到 1.0 版本之前，破坏性更改将以新的次要版本发布。 例如 0.5.1 和 0.5.4 将具有相同的 API，但 0.6.0 将具有重大变化。. Promises. axios 依赖原生的ES6 Promise实现而被支持。 如果你的环境不支持 ES6 Promise，你可以使用polyfill。. TypeScript"
                    }
                ],
                "dateLastCrawled": "2022-09-09T09:30:00.0000000Z",
                "language": "zh_chs",
                "isNavigational": true
            },
            {
                "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.1",
                "name": "axios中文网|axios API 中文文档 | axios",
                "url": "http:\/\/axios-js.com\/",
                "isFamilyFriendly": true,
                "displayUrl": "axios-js.com",
                "snippet": "Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。 axios 文档 博客 简体中文 易用、简洁且高效的http库 npm install axios Star Fork 京东双11,程序员要爱自己 支持node端和浏览器端 同样的API，node和浏览器全支持，平台切换无压力 ...",
                "dateLastCrawled": "2022-09-10T09:11:00.0000000Z",
                "language": "zh_chs",
                "isNavigational": false
            },
            {
                "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.2",
                "name": "Axios是什么？用在什么场景？如何使用？ - 知乎",
                "url": "https:\/\/zhuanlan.zhihu.com\/p\/69157371",
                "isFamilyFriendly": true,
                "displayUrl": "https:\/\/zhuanlan.zhihu.com\/p\/69157371",
                "snippet": "Axios用在什么场景？在特性里面已经有提到，浏览器发送请求，或者Node.js发送请求都可以用到Axios。像Vue、React、Node等项目就可以使用Axios，如果你的项目里面用了Jquery，此时就不需要多此一举了，jquery里面本身就可以发送请求。Axios如何使用？",
                "dateLastCrawled": "2022-09-09T14:44:00.0000000Z",
                "language": "zh_chs",
                "isNavigational": false
            },
            {
                "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.3",
                "name": "axios中文文档|axios中文网 | axios",
                "url": "http:\/\/www.axios-js.com\/zh-cn\/docs\/index.html",
                "isFamilyFriendly": true,
                "displayUrl": "www.axios-js.com\/zh-cn\/docs\/index.html",
                "snippet": "欢迎使用 axios，本文档将帮助您快速上手。(troubleshooting.html) 中的解答， 什么是 axios？Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。 axios Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。 特性 从浏览器中创建 XMLHttpRequests 从 node",
                "dateLastCrawled": "2022-09-10T17:23:00.0000000Z",
                "language": "zh_chs",
                "isNavigational": false
            },
            {
                "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.4",
                "name": "Axios",
                "url": "https:\/\/axios-http.com\/",
                "isFamilyFriendly": true,
                "displayUrl": "https:\/\/axios-http.com",
                "snippet": "Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface. Get Started View on GitHub Sponsors: Languages Open Source Contribute; English: Source on GitHub: Fork on GitHub: Português Brasileiro: Issues ...",
                "dateLastCrawled": "2022-09-09T08:19:00.0000000Z",
                "language": "en",
                "isNavigational": false
            },
            {
                "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.5",
                "name": "axios详解_Hello Simon的博客-CSDN博客_axios",
                "url": "https:\/\/blog.csdn.net\/qq_31947477\/article\/details\/106328200",
                "isFamilyFriendly": true,
                "displayUrl": "https:\/\/blog.csdn.net\/qq_31947477\/article\/details\/106328200",
                "snippet": "axios是干啥的 上古浏览器页面在向服务器请求数据时，因为返回的是整个页面的数据，页面都会强制刷新一下，这对于用户来讲并不是很友好。并且我们只是需要修改页面的部分数据，但是从服务器端发送的却是整个页面的数据，十分消耗网络资源。",
                "dateLastCrawled": "2022-09-08T19:02:00.0000000Z",
                "language": "zh_chs",
                "isNavigational": false
            },
            {
                "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.6",
                "name": "Axios 中文文档_w3cschool",
                "url": "https:\/\/www.w3cschool.cn\/jquti\/",
                "thumbnailUrl": "https:\/\/www.bing.com\/th?id=OIP.ktcv1Rijv3TG7T3X-bkcxAHaDg&pid=Api",
                "isFamilyFriendly": true,
                "displayUrl": "https:\/\/www.w3cschool.cn\/jquti",
                "snippet": "axios面向现代浏览器设计，所以古老的浏览器并不支持。因为axios设计简洁，API简单，支持浏览器和node，所以大受欢迎。它能很好的与各种前端框架整合。axios优点： 1.支持node端和浏览器端 同样的API，node和浏览器全支持，平台切换无压力 2.支持",
                "dateLastCrawled": "2022-09-10T22:04:00.0000000Z",
                "language": "zh_chs",
                "isNavigational": false
            },
            {
                "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.7",
                "name": "Vue.js Ajax(axios) | 菜鸟教程",
                "url": "https:\/\/www.runoob.com\/vue2\/vuejs-ajax-axios.html",
                "thumbnailUrl": "https:\/\/www.bing.com\/th?id=OIP.NunRfsCEZ7xOdn6d0mu8cAHaDg&pid=Api",
                "isFamilyFriendly": true,
                "displayUrl": "https:\/\/www.runoob.com\/vue2\/vuejs-ajax-axios.html",
                "snippet": "这个顺序是：在 lib\/defaults.js 找到的库的默认值，然后是实例的 defaults 属性，最后是请求的 config 参数。. 后者将优先于前者。. 这里是一个例子：. \/\/ 使用由库提供的配置的默认值来创建实例 \/\/ 此时超时配置的默认值是 `0` var instance = axios.create(); \/\/ 覆写库的超时 ...",
                "dateLastCrawled": "2022-09-10T17:03:00.0000000Z",
                "language": "zh_chs",
                "isNavigational": false
            },
            {
                "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.8",
                "name": "Axios API | Axios 中文文档 | Axios 中文网",
                "url": "https:\/\/www.axios-http.cn\/docs\/api_intro",
                "isFamilyFriendly": true,
                "displayUrl": "https:\/\/www.axios-http.cn\/docs\/api_intro",
                "snippet": "\/\/ 发起一个 GET 请求 (默认请求方式) axios ('\/user\/12345'); 请求方式别名 为了方便起见，已经为所有支持的请求方法提供了别名。",
                "dateLastCrawled": "2022-09-10T14:16:00.0000000Z",
                "language": "zh_chs",
                "isNavigational": false
            },
            {
                "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.9",
                "name": "axios\/axios: Promise based HTTP client for the browser and node.js - GitHub",
                "url": "https:\/\/github.com\/axios\/axios",
                "isFamilyFriendly": true,
                "displayUrl": "https:\/\/github.com\/axios\/axios",
                "snippet": "{data` is the response that was provided by the server data: {}, \/\/ `status` is the HTTP status code from the server response status: 200, \/\/ `statusText` is the HTTP status message from the server response statusText: 'OK', \/\/ `headers` the HTTP headers that the server responded with \/\/ All header names are lowercase and can be accessed using the bracket ...",
                "dateLastCrawled": "2022-09-10T12:16:00.0000000Z",
                "language": "en",
                "isNavigational": false
            }
        ],
        "someResultsRemoved": true
    },
    "relatedSearches": {
        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#RelatedSearches",
        "value": [
            {
                "text": "axios读音",
                "displayText": "axios读音",
                "webSearchUrl": "https:\/\/www.bing.com\/search?q=axios%E8%AF%BB%E9%9F%B3"
            },
            {
                "text": "axios 全称",
                "displayText": "axios 全称",
                "webSearchUrl": "https:\/\/www.bing.com\/search?q=axios+%E5%85%A8%E7%A7%B0"
            },
            {
                "text": "axios简书",
                "displayText": "axios简书",
                "webSearchUrl": "https:\/\/www.bing.com\/search?q=axios%E7%AE%80%E4%B9%A6"
            },
            {
                "text": "axios 中文",
                "displayText": "axios 中文",
                "webSearchUrl": "https:\/\/www.bing.com\/search?q=axios+%E4%B8%AD%E6%96%87"
            },
            {
                "text": "axios 拼接",
                "displayText": "axios 拼接",
                "webSearchUrl": "https:\/\/www.bing.com\/search?q=axios+%E6%8B%BC%E6%8E%A5"
            },
            {
                "text": "c++ axios",
                "displayText": "c++ axios",
                "webSearchUrl": "https:\/\/www.bing.com\/search?q=c%2b%2b+axios"
            },
            {
                "text": "axios应用",
                "displayText": "axios应用",
                "webSearchUrl": "https:\/\/www.bing.com\/search?q=axios%E5%BA%94%E7%94%A8"
            },
            {
                "text": "axios翻译",
                "displayText": "axios翻译",
                "webSearchUrl": "https:\/\/www.bing.com\/search?q=axios%E7%BF%BB%E8%AF%91"
            }
        ]
    },
    "videos": {
        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#Videos",
        "readLink": "https:\/\/api.bing.microsoft.com\/api\/v7\/videos\/search?q=axios",
        "webSearchUrl": "https:\/\/www.bing.com\/videos\/search?q=axios",
        "isFamilyFriendly": true,
        "value": [
            {
                "webSearchUrl": "https:\/\/www.bing.com\/videos\/search?q=axios&view=detail&mid=AB0888EBD8497B05BB36AB0888EBD8497B05BB36",
                "name": "10.vue的axios讲解",
                "description": "教育视频：10.vue的axios讲解",
                "thumbnailUrl": "https:\/\/tse1-mm.cn.bing.net\/th?id=OVP._ma97wrLRLTZsSIYUp3MuQIIFF&pid=Api",
                "datePublished": "2019-10-16T00:26:00.0000000",
                "publisher": [
                    {
                        "name": "sohu"
                    }
                ],
                "contentUrl": "https:\/\/tv.sohu.com\/v\/dXMvMzM4MTQ0NzYyLzE1NzAzOTUzNC5zaHRtbA==.html",
                "hostPageUrl": "https:\/\/tv.sohu.com\/v\/dXMvMzM4MTQ0NzYyLzE1NzAzOTUzNC5zaHRtbA==.html",
                "encodingFormat": "mp4",
                "hostPageDisplayUrl": "https:\/\/tv.sohu.com\/v\/dXMvMzM4MTQ0NzYyLzE1NzAzOTUzNC5zaHRtbA==.html",
                "width": 864,
                "height": 540,
                "duration": "PT12M22S",
                "motionThumbnailUrl": "https:\/\/tse1-mm.cn.bing.net\/th?id=OM.NrsFe0nY64gIqw_1654227503&pid=Api",
                "embedHtml": "<iframe frameborder=\"0\" src=\"https:\/\/tv.sohu.com\/s\/sohuplayer\/iplay.html?bid=157039534&autoplay=true&disablePlaylist=true\" width=\"810\" height=\"440\" allowfullscreen=\"true\" scrolling=\"no\"><\/iframe>",
                "allowHttpsEmbed": true,
                "thumbnail": {
                    "width": 160,
                    "height": 100
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https:\/\/www.bing.com\/videos\/search?q=axios&view=detail&mid=72981DE416DA51FA20A372981DE416DA51FA20A3",
                "name": "20.vue使用axios操作数据库增删改查讲解",
                "description": "教育视频：20.vue使用axios操作数据库增删改查讲解",
                "thumbnailUrl": "https:\/\/tse3-mm.cn.bing.net\/th?id=OVP.ghNdRG4euRtHbvSuP1x3GwIIFF&pid=Api",
                "datePublished": "2019-01-18T07:37:00.0000000",
                "publisher": [
                    {
                        "name": "sohu"
                    }
                ],
                "contentUrl": "https:\/\/tv.sohu.com\/v\/dXMvMzM4MTQ0NzYyLzExNzI3MDk3My5zaHRtbA==.html",
                "hostPageUrl": "https:\/\/tv.sohu.com\/v\/dXMvMzM4MTQ0NzYyLzExNzI3MDk3My5zaHRtbA==.html",
                "encodingFormat": "mp4",
                "hostPageDisplayUrl": "https:\/\/tv.sohu.com\/v\/dXMvMzM4MTQ0NzYyLzExNzI3MDk3My5zaHRtbA==.html",
                "width": 768,
                "height": 480,
                "duration": "PT21M45S",
                "motionThumbnailUrl": "https:\/\/tse3-mm.cn.bing.net\/th?id=OM.oyD6UdoW5B2Ycg_1650197428&pid=Api",
                "embedHtml": "<iframe frameborder=\"0\" src=\"https:\/\/tv.sohu.com\/s\/sohuplayer\/iplay.html?bid=117270973&autoplay=true&disablePlaylist=true\" width=\"810\" height=\"440\" allowfullscreen=\"true\" scrolling=\"no\"><\/iframe>",
                "allowHttpsEmbed": true,
                "thumbnail": {
                    "width": 160,
                    "height": 100
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https:\/\/www.bing.com\/videos\/search?q=axios&view=detail&mid=6E8060F22C336C3C0C7F6E8060F22C336C3C0C7F",
                "name": "1.axios的基础使用",
                "description": "本课程主要是为了解决问题而存在，对于一些初学者来说，学习Vue的网络请求的时候经常会出现各种问题。例如无法解决跨域问题，无法处理post请求问题等。那么，本课程主要解决的问题就是这些。课程包含：axios的基本使用，axios解决post请求参数问题 ...",
                "thumbnailUrl": "https:\/\/tse3-mm.cn.bing.net\/th?id=OVP.Rf4iWMIQZZmE0Zk7mgmZBQIIEk&pid=Api",
                "datePublished": "2018-01-18T09:58:50.0000000",
                "publisher": [
                    {
                        "name": "qq.com"
                    }
                ],
                "contentUrl": "https:\/\/v.qq.com\/x\/cover\/728jl6usm9pj8tg\/p1423ewl1cn.html",
                "hostPageUrl": "https:\/\/v.qq.com\/x\/cover\/728jl6usm9pj8tg\/p1423ewl1cn.html",
                "encodingFormat": "",
                "hostPageDisplayUrl": "https:\/\/v.qq.com\/x\/cover\/728jl6usm9pj8tg\/p1423ewl1cn.html",
                "width": 640,
                "height": 360,
                "duration": "PT12M3S",
                "embedHtml": "<iframe frameborder=\"0\" width=\"640\" height=\"498\" src=\"https:\/\/v.qq.com\/txp\/iframe\/player.html?vid=p1423ewl1cn&tiny=0&auto=1\" allowfullscreen><\/iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 1689,
                "thumbnail": {
                    "width": 160,
                    "height": 89
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https:\/\/www.bing.com\/videos\/search?q=axios&view=detail&mid=405F572C7EED7D698186405F572C7EED7D698186",
                "name": "web前端培训基础课程-axios核心技术（17）",
                "description": "教育视频：web前端培训基础课程-axios核心技术（17）",
                "thumbnailUrl": "https:\/\/tse3-mm.cn.bing.net\/th?id=OVP.AC9fYc4Oy1gODErABsQAqgEsCo&pid=Api",
                "datePublished": "2022-04-02T09:08:00.0000000",
                "publisher": [
                    {
                        "name": "sohu"
                    }
                ],
                "contentUrl": "https:\/\/tv.sohu.com\/v\/dXMvMzM1OTQxNzk3LzMzNzgzMjU0NS5zaHRtbA==.html",
                "hostPageUrl": "https:\/\/tv.sohu.com\/v\/dXMvMzM1OTQxNzk3LzMzNzgzMjU0NS5zaHRtbA==.html",
                "encodingFormat": "mp4",
                "hostPageDisplayUrl": "https:\/\/tv.sohu.com\/v\/dXMvMzM1OTQxNzk3LzMzNzgzMjU0NS5zaHRtbA==.html",
                "width": 960,
                "height": 540,
                "duration": "PT18M4S",
                "motionThumbnailUrl": "https:\/\/tse3-mm.cn.bing.net\/th?id=OM.hoFpfe1-LFdfQA_1658630421&pid=Api",
                "embedHtml": "<iframe frameborder=\"0\" src=\"https:\/\/tv.sohu.com\/s\/sohuplayer\/iplay.html?bid=337832545&autoplay=true&disablePlaylist=true\" width=\"810\" height=\"440\" allowfullscreen=\"true\" scrolling=\"no\"><\/iframe>",
                "allowHttpsEmbed": true,
                "thumbnail": {
                    "width": 160,
                    "height": 89
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https:\/\/www.bing.com\/videos\/search?q=axios&view=detail&mid=7EDA2C653FF1F9A4FE497EDA2C653FF1F9A4FE49",
                "name": "JavaScript网络模块-- axios详解",
                "description": "JavaScript网络模块-- axios详解共计29条视频，包括：01__axios____介绍、02__axios_____HTTP相关复习、03__axios____json-server搭建REST接口_浏览器测试、04__axios___使用axios请求REST接口、05__axios____区别ajax请求与一般的http请求、06__axios____XHR的API、07__axios_____分析axios ...",
                "thumbnailUrl": "https:\/\/tse4-mm.cn.bing.net\/th?id=OVP.JZQqhvS6ZCgU8e6EefzLzgEsC7&pid=Api",
                "datePublished": "2019-12-11T08:13:59.0000000",
                "publisher": [
                    {
                        "name": "bilibili"
                    }
                ],
                "contentUrl": "https:\/\/www.bilibili.com\/video\/BV1AJ41117iL\/?uid=425631414A3431313137694C",
                "hostPageUrl": "https:\/\/www.bilibili.com\/video\/BV1AJ41117iL\/?uid=425631414A3431313137694C",
                "encodingFormat": "",
                "hostPageDisplayUrl": "https:\/\/www.bilibili.com\/video\/BV1AJ41117iL\/?uid=425631414A3431313137694C",
                "width": 2054,
                "height": 1284,
                "embedHtml": "<iframe src=\"https:\/\/player.bilibili.com\/player.html?aid=78861218&bvid=BV1AJ41117iL&cid=134926324&page=1&autoplay=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"> <\/iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 465,
                "thumbnail": {
                    "width": 160,
                    "height": 99
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https:\/\/www.bing.com\/videos\/search?q=axios&view=detail&mid=5B3D2540298B0D974D105B3D2540298B0D974D10",
                "name": "vuex和axios二次封装",
                "description": "vuex和axios二次封装, 视频播放量 1413、弹幕量 6、点赞数 17、投硬币枚数 10、收藏人数 62、转发人数 1, 视频作者 前端程序员来了, 作者简介 每天更新【web前端】视频 ，学习QQ群：704134874，相关视频：简单快速撸懂Axios及其封装，axios从小白到入土，8、vue3 ...",
                "thumbnailUrl": "https:\/\/tse3-mm.cn.bing.net\/th?id=OVP.6hhhVSve-89HBnpcchsjUwIIFF&pid=Api",
                "datePublished": "2022-02-28T15:32:04.0000000",
                "publisher": [
                    {
                        "name": "bilibili"
                    }
                ],
                "contentUrl": "https:\/\/www.bilibili.com\/video\/BV1Qi4y1y7rv\/?uid=425631516934793179377276",
                "hostPageUrl": "https:\/\/www.bilibili.com\/video\/BV1Qi4y1y7rv\/?uid=425631516934793179377276",
                "encodingFormat": "",
                "hostPageDisplayUrl": "https:\/\/www.bilibili.com\/video\/BV1Qi4y1y7rv\/?uid=425631516934793179377276",
                "width": 1728,
                "height": 1080,
                "duration": "PT2H21M21S",
                "embedHtml": "<iframe src=\"https:\/\/player.bilibili.com\/player.html?aid=551970649&bvid=BV1Qi4y1y7rv&cid=519106845&page=1&autoplay=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"> <\/iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 1442,
                "thumbnail": {
                    "width": 160,
                    "height": 100
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https:\/\/www.bing.com\/videos\/search?q=axios&view=detail&mid=1D92955721FC9CEF8F691D92955721FC9CEF8F69",
                "name": "SpringBoot Vue Axios Html 简单商品进销存管理系统",
                "description": "SpringBoot Vue Axios Html 简单商品进销存管理系统 Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面 ...",
                "thumbnailUrl": "https:\/\/tse3-mm.cn.bing.net\/th?id=OVP.hkla2_ezJixitkFiETzdsgEsC7&pid=Api",
                "datePublished": "2021-09-06T13:06:11.0000000",
                "publisher": [
                    {
                        "name": "bilibili"
                    }
                ],
                "contentUrl": "https:\/\/www.bilibili.com\/video\/BV12w411f7A3\/?uid=425631327734313166374133",
                "hostPageUrl": "https:\/\/www.bilibili.com\/video\/BV12w411f7A3\/?uid=425631327734313166374133",
                "encodingFormat": "",
                "hostPageDisplayUrl": "https:\/\/www.bilibili.com\/video\/BV12w411f7A3\/?uid=425631327734313166374133",
                "width": 1740,
                "height": 1088,
                "duration": "PT5M59S",
                "embedHtml": "<iframe src=\"https:\/\/player.bilibili.com\/player.html?aid=335297230&bvid=BV12w411f7A3&cid=403935938&page=1&autoplay=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"> <\/iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 247,
                "thumbnail": {
                    "width": 160,
                    "height": 99
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https:\/\/www.bing.com\/videos\/search?q=axios&view=detail&mid=01AC4DBE93AC9BC6DB1E01AC4DBE93AC9BC6DB1E",
                "name": "axios从小白到入土",
                "description": "axios从小白到入土共计7条视频，包括：1.axios入门、2.axios的post,get请求、3.axios并发请求、4.axios全局配置、5.axios的实例、6.axios的拦截器、7axios在vue中的模块封装等，UP主更多精彩视频，请关注UP账号。",
                "thumbnailUrl": "https:\/\/tse1-mm.cn.bing.net\/th?id=OVP.pT-rJ7cW_G0Wef4QMgd7GQIIFE&pid=Api",
                "datePublished": "2020-04-28T10:31:10.0000000",
                "publisher": [
                    {
                        "name": "bilibili"
                    }
                ],
                "contentUrl": "https:\/\/www.bilibili.com\/video\/BV1QA411b7TR\/?uid=425631514134313162375452",
                "hostPageUrl": "https:\/\/www.bilibili.com\/video\/BV1QA411b7TR\/?uid=425631514134313162375452",
                "encodingFormat": "",
                "hostPageDisplayUrl": "https:\/\/www.bilibili.com\/video\/BV1QA411b7TR\/?uid=425631514134313162375452",
                "width": 1140,
                "height": 712,
                "duration": "PT2H23M53S",
                "embedHtml": "<iframe src=\"https:\/\/player.bilibili.com\/player.html?aid=327893944&bvid=BV1QA411b7TR&cid=184351650&page=1&autoplay=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"> <\/iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 81700,
                "thumbnail": {
                    "width": 160,
                    "height": 99
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https:\/\/www.bing.com\/videos\/search?q=axios&view=detail&mid=649CA7CFA0692CEA3483649CA7CFA0692CEA3483",
                "name": "SSM Vue Axios MySQL 游戏周边购物商城的设计与实现",
                "description": "SSM + Vue + Axios + MySQL 游戏周边购物商城的设计与实现, 视频播放量 171、弹幕量 0、点赞数 0、投硬币枚数 0、收藏人数 0、转发人数 0, 视频作者 Java毕设接单, 作者简介 联系 vx-> wumianwuye001，相关视频：SSM水果购物商城( JSP Spring SpringMVC MyBatis)，电脑产品商城 ...",
                "thumbnailUrl": "https:\/\/tse3-mm.cn.bing.net\/th?id=OVP.x7IxF_KPmfIHD8h3VwsvcgEsC7&pid=Api",
                "datePublished": "2021-11-01T02:21:12.0000000",
                "publisher": [
                    {
                        "name": "bilibili"
                    }
                ],
                "contentUrl": "https:\/\/www.bilibili.com\/video\/BV16q4y1g7a7\/?uid=425631367134793167376137",
                "hostPageUrl": "https:\/\/www.bilibili.com\/video\/BV16q4y1g7a7\/?uid=425631367134793167376137",
                "encodingFormat": "",
                "hostPageDisplayUrl": "https:\/\/www.bilibili.com\/video\/BV16q4y1g7a7\/?uid=425631367134793167376137",
                "width": 1740,
                "height": 1088,
                "duration": "PT5M32S",
                "embedHtml": "<iframe src=\"https:\/\/player.bilibili.com\/player.html?aid=548948504&bvid=BV16q4y1g7a7&cid=434365262&page=1&autoplay=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"> <\/iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 172,
                "thumbnail": {
                    "width": 160,
                    "height": 99
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            },
            {
                "webSearchUrl": "https:\/\/www.bing.com\/videos\/search?q=axios&view=detail&mid=8D95FF74A223EAE953BA8D95FF74A223EAE953BA",
                "name": "电子产品商城的设计与实现（SpringBoot，Vue，Axios，MySQL）",
                "description": "源码：256014661这是一个简单的Html+Vue+Axios的电子产品商城的设计与实现合适作为学生的大作业或者毕业设计使用本项目使用的开发工具Intelljldea2018.3 Tomcat8.0 Mysql5.5 开发技术springboot MyBatis Vue Axios界面外观使用的是H-Ui.admin, 视频播放量 37、弹幕量 0、点赞数 0 ...",
                "thumbnailUrl": "https:\/\/tse2-mm.cn.bing.net\/th?id=OVP.eXmQFPSoqsmT27J4-i7dDgEsC7&pid=Api",
                "datePublished": "2022-03-19T08:40:25.0000000",
                "publisher": [
                    {
                        "name": "bilibili"
                    }
                ],
                "contentUrl": "https:\/\/www.bilibili.com\/video\/BV1hS4y1g7qE\/?uid=425631685334793167377145",
                "hostPageUrl": "https:\/\/www.bilibili.com\/video\/BV1hS4y1g7qE\/?uid=425631685334793167377145",
                "encodingFormat": "",
                "hostPageDisplayUrl": "https:\/\/www.bilibili.com\/video\/BV1hS4y1g7qE\/?uid=425631685334793167377145",
                "width": 1740,
                "height": 1088,
                "duration": "PT4M53S",
                "embedHtml": "<iframe src=\"https:\/\/player.bilibili.com\/player.html?aid=679994041&bvid=BV1hS4y1g7qE&cid=553326036&page=1&autoplay=1\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"> <\/iframe>",
                "allowHttpsEmbed": true,
                "viewCount": 37,
                "thumbnail": {
                    "width": 160,
                    "height": 99
                },
                "allowMobileEmbed": true,
                "isSuperfresh": false
            }
        ],
        "scenario": "List"
    },
    "rankingResponse": {
        "mainline": {
            "items": [
                {
                    "answerType": "WebPages",
                    "resultIndex": 0,
                    "value": {
                        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.0"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 1,
                    "value": {
                        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.1"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 2,
                    "value": {
                        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.2"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 3,
                    "value": {
                        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.3"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 4,
                    "value": {
                        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.4"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 5,
                    "value": {
                        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.5"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 6,
                    "value": {
                        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.6"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 7,
                    "value": {
                        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.7"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 8,
                    "value": {
                        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.8"
                    }
                },
                {
                    "answerType": "WebPages",
                    "resultIndex": 9,
                    "value": {
                        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#WebPages.9"
                    }
                },
                {
                    "answerType": "Videos",
                    "value": {
                        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#Videos"
                    }
                }
            ]
        },
        "sidebar": {
            "items": [
                {
                    "answerType": "Entities"
                },
                {
                    "answerType": "RelatedSearches",
                    "value": {
                        "id": "https:\/\/api.bing.microsoft.com\/api\/v7\/#RelatedSearches"
                    }
                }
            ]
        }
    }
}

 export {SUBSCRIPTION_KEY,mockBingSearchResult}
