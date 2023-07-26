module.exports = {
  base: '/jkcs-blog/',
  title: 'jkcs 随记',
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    sidebar: {
      '/': [
        {
          title: '随记',
          collapsable: false,
          children: [
            '/essay/code-review',
            '/essay/reflections-on-reverse',
          ]
        },
        {
          title: '逆向与破解',
          collapsable: false,
          children: [
            '/hack/frida',
            '/hack/unity-Il2cpp',
            '/hack/android-inject',
          ]
        },
        {
          title: 'js相关内容',
          collapsable: false,
          children: [
            '/js/utils',
          ]
        },
        ['/about', '关于此博客']
      ],
    }
  }
};
