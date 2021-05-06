module.exports = {
    "title": "刘创凹的博客",
    "description": "码字中...",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        "mode": 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        "modePicker": true, // 默认 true，false 不显示模式调节按钮，true 则显示
        "subSidebar": "auto",
        "valineConfig": {
            "appId": 'lRCXlrXYCYwVBpdEBrp0gX82-gzGzoHsz',// your appId
            "appKey": 'qliXqisss4akHttcQtFPI5tc', // your appKey
        },
        "nav": [
            {
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间线",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "文档",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "vuepress-reco",
                        "link": "/docs/theme-reco/"
                    }
                ]
            },
            {
                "text": "交流",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "GitHub",
                        "link": "https://github.com/recoluan",
                        "icon": "reco-github"
                    }
                ]
            }
        ],
        "sidebar": {
            "/blogs/data-structure/": [
                'stack',
                'queue',
                'list'
            ]
        },
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        "friendLink": [
            {
                "title": "vuepress-theme-reco",
                "desc": "A simple and beautiful vuepress Blog & Doc theme.",
                "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "https://vuepress-theme-reco.recoluan.com"
            }
        ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "Mr ao",
        "authorAvatar": "/avatar.png",
        "record": "xxxx",
        "startYear": "2021"
    },
    "markdown": {
        "lineNumbers": true
    }
}