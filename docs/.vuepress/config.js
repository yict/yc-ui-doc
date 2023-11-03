module.exports = {
    title: 'yc-ui', // 设置网站标题
    description: 'ui 组件库', // 描述
    dest: './build', // 设置输出目录
    port: 1234, // 端口
    themeConfig: { // 主题配置
        nav: [ // 头部导航条
            {
                text: '主页',
                link: '/'
            },
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/components/': [
                {
                    title: 'Basic',
                    collapsable: false,
                    children: [
                        'button',
                    ]
                },
                // 其他设置
            ]
        }
    }
}